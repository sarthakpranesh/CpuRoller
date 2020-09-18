import React, { Component } from 'react'

class ProgressBar extends Component {

    state = {
        animationInited: false
    }

    componentDidMount() {
        this.initAnimation()
    }

    initAnimation = () => {
        this.setState({ animationInited: true })
    }

    getProgress = () => {
        const { progress } = this.props
        const { animationInited } = this.state

        return !animationInited ? 0 : progress
    }

    getStrokeDashoffset = strokeLength => {
        const progress = this.getProgress()
        const progressLength = (strokeLength / 100) * (100 - progress)
        return progressLength
    }

    getStrokeDashArray = (strokeLength, circumference) => {
        return `${strokeLength}, ${circumference}`
    }

    getTrackStrokeDashArray = (strokeLength, circumference) => {
        const { initialAnimation } = this.props
        const { animationInited } = this.state

        if (initialAnimation && !animationInited) return `0, ${circumference}`
        return `${strokeLength}, ${circumference}`
    }

    getExtendedWidth = () => {
        const {
            strokeWidth,
            pointerRadius,
            pointerStrokeWidth,
            trackStrokeWidth
        } = this.props
        const pointerWidth = pointerRadius + pointerStrokeWidth

        if (pointerWidth > strokeWidth && pointerWidth > trackStrokeWidth) return pointerWidth * 2
        else if (strokeWidth > trackStrokeWidth) return strokeWidth * 2
        else return trackStrokeWidth * 2
    }

    render() {
        const {
            trackStrokeWidth,
            trackStrokeColor,
            trackStrokeLinecap,
            strokeColor,
            strokeWidth,
            strokeLinecap,
            children,
            trackTransition,
            transition,
        } = this.props

        const d = 2 * 100
        const width = d + this.getExtendedWidth()

        const circumference = 2 * Math.PI * 100
        const strokeLength = (circumference / 360) * (360)

        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}>
                <div style={{position: 'absolute'}}>
                    {children || null}
                </div>
                <svg
                    width={width}
                    height={width}
                    viewBox={`0 0 ${width} ${width}`}
                    style={{ transform: `rotate(90deg)` }}
                >
                    {trackStrokeWidth > 0 && (
                        <circle
                            cx={width / 2}
                            cy={width / 2}
                            r={100}
                            fill="none"
                            stroke={trackStrokeColor}
                            strokeWidth={trackStrokeWidth}
                            strokeDasharray={this.getTrackStrokeDashArray(
                                strokeLength,
                                circumference
                            )}
                            strokeLinecap={trackStrokeLinecap}
                            className="RCP__track"
                            style={{ transition: trackTransition }}
                        />
                    )}
                    {strokeWidth > 0 && (
                        <circle
                            cx={width / 2}
                            cy={width / 2}
                            r={100}
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            strokeDasharray={this.getStrokeDashArray(
                                strokeLength,
                                circumference
                            )}
                            strokeDashoffset={this.getStrokeDashoffset(
                                strokeLength
                            )}
                            strokeLinecap={strokeLinecap}
                            className="RCP__progress"
                            style={{ transition }}
                        />
                    )}
                </svg>
            </div>
        )
    }

}

ProgressBar.defaultProps = {
    progress: 0,
    strokeWidth: 10,
    strokeColor: 'indianred',
    strokeLinecap: 'round',
    transition: '.3s ease',
    trackStrokeColor: '#e6e6e6',
    trackStrokeWidth: 10,
    trackStrokeLinecap: 'round',
    trackTransition: '.3s ease',
}

export default ProgressBar