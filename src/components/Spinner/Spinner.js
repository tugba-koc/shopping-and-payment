import React from 'react';
import { Spin } from 'antd';

function Spinner() {

    const spinnerStyle = {
        marginBottom: "20px",
        padding: "50px 50px",
        textAlign: "center",
        background: "transparent",
        borderRadius: "4px",
        width: "100%",
    };

    return (
        <div style={spinnerStyle} className="example">
            <Spin />
        </div>
    )
}

export default Spinner