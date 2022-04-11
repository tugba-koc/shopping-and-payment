import React from 'react';
import { WarningOutlined } from '@ant-design/icons';
import "./styled.scss"

function Error() {
  return (
    <div className="error-message"> <WarningOutlined className="error-icon" />  Bir Hata Oluştu. Lütfen Daha Sonra Tekrar Deneyiniz.</div>
  )
}

export default Error