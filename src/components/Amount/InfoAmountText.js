import React from 'react';
import { useSelector } from 'react-redux';
import {selectAmount} from '../../redux/amount/amountSlice';

function InfoAmountText() {
    const amount = useSelector(selectAmount)
    return (
        <h3>Seçilen Paket Tutarı: <span> {amount}₺ </span> </h3>
    )
}

export default InfoAmountText