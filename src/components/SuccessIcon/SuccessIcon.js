import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';

function SuccessIcon() {

    const styleIcon = {
        fontSize: "120px",
        color: "rgb(11, 176, 11)"
    }

    return (
        <><CheckCircleOutlined style={styleIcon} /></>
    )
}

export default SuccessIcon