import React from 'react';

// importing styles
import './style.css'

const SectionTable = ({title, data, style}) => {
    
    return (
        <div className="SectionTableWrapper" style={style}>
            <h2 className="SectionTableHeader PrimaryText">{title}</h2>
            <table className="SectionTable">
                {Object.keys(data).map((key) => {
                    return (
                        <tr>
                            <td className="PrimaryText">{key}</td>
                            <td className="SecondaryText">{data[key]}</td>
                        </tr>
                    )
                })}
            </table> 
        </div>
    );
}

export default SectionTable;
