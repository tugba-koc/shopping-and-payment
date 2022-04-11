import React from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/amount/amountSlice';
import "./styled.scss";

function PackageInfo() {

  const cart = useSelector(selectCart);

  const data = cart;

  return (
    <div className='main-wrapper--package-info main-wrapper--card-info'>
      <h3>Sepetteki Paketler</h3>
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <h3>{item.name}</h3>
            <h3>{item.amount}₺</h3>
          </List.Item>
        )}
      />
 
    </div>
  )
}

export default PackageInfo