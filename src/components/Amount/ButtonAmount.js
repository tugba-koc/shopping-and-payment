import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";

function ButtonAmount() {
    return (
        <>
            <Button type="primary" >
                <Link to="/payment"> Devam Et </Link>
            </Button>
        </>
    )
}

export default ButtonAmount