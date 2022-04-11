import React from 'react';
import InfoAmountText from './InfoAmountText';
import ButtonAmount from './ButtonAmount';
import "./styled.scss"

function Amount() {
    return (
        <div className="main-wrapper-amount">
            <InfoAmountText />
            <ButtonAmount />
        </div>
    )
}

export default Amount