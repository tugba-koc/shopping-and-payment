import React from 'react';
import { useDispatch } from 'react-redux';
import { getPackages } from '../../redux/package/packageSlice';
import { useSelector } from 'react-redux';
import { selectItems, selectStatus } from '../../redux/package/packageSlice';
import Spinner from '../Spinner/Spinner';
import Amount from '../Amount/Amount';
import Card from '../Card/Card';
import Error from '../Error/Error';
import { Row, Col } from 'antd';
import "./styled.scss";

function Packages() {

  const dispatch = useDispatch();

  let status = useSelector(selectStatus);
  let items = useSelector(selectItems);

  React.useEffect(() => {
    if (status === "idle") {
      dispatch(getPackages())
    }
  }, [dispatch, status])


  const style ={
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  }

  if (status === "loading") {
    return <Spinner />
  } else if (status === "failed") {
    return <Error />
  }
  return (
    <div className="main" style={style}>
      <Row  gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },24]}>
        {items.map((item, index) => (
          <Col offset={2}>
            <Card item={item} index={index} />
          </Col>
        ))}
      </Row>

      <Amount />
    </div>
  )
}

export default Packages