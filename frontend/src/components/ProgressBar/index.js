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

        const width = window.innerWidth * 0.20 > 200 ? 220 : window.innerWidth * 0.20;
        const radius = ( width / 2 ) - strokeWidth;

        const circumference = 2 * Math.PI * radius;
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
                            r={radius}
                            fill="none"
                            stroke={trackStrokeColor}
                            strokeWidth={trackStrokeWidth}
                            strokeDasharray={this.getTrackStrokeDashArray(
                                strokeLength,
                                circumference
                            )}
                            strokeLinecap={trackStrokeLinecap}
                            style={{ transition: trackTransition }}
                        />
                    )}
                    {strokeWidth > 0 && (
                        <circle
                            cx={width / 2}
                            cy={width / 2}
                            r={radius}
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
    transition: '0.3s ease',
    trackStrokeColor: '#e6e6e6',
    trackStrokeWidth: 10,
    trackStrokeLinecap: 'round',
    trackTransition: '.3s ease',
}

export default ProgressBar