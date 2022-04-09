import React from 'react';
import { Spin } from 'antd';

function Spinner() {

    const spinnerStyle = {
        margin: "20px 0",
        marginBottom: "20px",
        padding: "30px 50px",
        textAlign: "center",
        background: "rgba(0, 0, 0, 0.05)",
        borderRadius: "4px"
    };

    return (
        <div style={spinnerStyle} className="example">
            <Spin />
        </div>
    )
}

export default Spinner