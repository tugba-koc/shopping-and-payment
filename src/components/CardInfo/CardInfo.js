import React from 'react';
import { Row, Col } from 'antd';
import { Form, Input, Button } from 'antd';
import Aggrement from '../Aggrement/Aggrement';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart } from '../../redux/amount/amountSlice';
import { sendCard } from '../../redux/cardInfo/cardInfoSlice';
import "./styled.scss";
import { useNavigate } from "react-router-dom";

function CardInfo() {
    const [form] = Form.useForm()
    const [cardNum, setCardNum] = React.useState("0");

    const navigate = useNavigate();

    const dispatch = useDispatch();


    // error handling for inputs
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        }
    };

    const cart = useSelector(selectCart);

    // card number with 4 digits
    const handleChange = async (e) => {
        setCardNum(e.target.value)
    }

    React.useEffect(() => {
        if (cardNum.length === 4) {
            form.setFieldsValue({
                "cardNumber": cardNum + " "
            });
        } else if (cardNum.length === 9) {
            form.setFieldsValue({
                "cardNumber": cardNum + " "
            });
        } else if (cardNum.length === 14) {
            form.setFieldsValue({
                "cardNumber": cardNum + " "
            });
        }
    }, [cardNum, form]);


    // to get the value of the input
    const onFinish = (values) => {
        values.expireDate = values.day + "/" + values.year;
        values.cardNumber = values.cardNumber.replaceAll(" ", "");
        delete values['day']
        delete values['year'];
        values.packageIds = cart.map(item => (item.id).toString());
        values.totalAmount = cart.reduce((acc, item) => acc + item.amount, 0);

        dispatch(sendCard(JSON.stringify(values))).then(r=> {
            // if(r.status === 200) {
                navigate('/success')
            // }
        })
    };

    return (
        <div className="main-wrapper--card-info">
            <h3>Kart Bilgileri</h3>
            <Form
                form={form}
                onFinish={onFinish}
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                validateMessages={validateMessages}
            >
                <label className='card-username' htmlFor="username">Kart Üzerindeki İsim Soyisim</label>
                <Row gutter={[24, 24]}>
                    <Col span={12} >
                        <Form.Item
                            name={['cardHolderName']}
                            rules={[
                                {
                                    required: true,
                                    message: "Lütfen alanı boş bırakmayınız.",
                                },
                            ]}
                        >
                            <Input name="fullName" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[24, 24]}>
                    <Col span={12} >
                        <label >Kart Numarası</label>
                        <Form.Item
                            name={['cardNumber']}
                            rules={[
                                {
                                    required: true,
                                    message: "Lütfen alanı boş bırakmayınız.",
                                }
                            ]}
                        >
                            <Input
                                maxLength="19"
                                value={cardNum || ''}
                                onChange={handleChange}
                                name="card-number"
                               
                            />
                        </Form.Item>
                    </Col>

                    {/* Son Kullanma Tarihi */}
                    <Col span={6} >
                        <label htmlFor="number">Son Kull. Tarihi</label>
                        <Row gutter={[8, 24]}>
                            <Col span={12} >

                                <Form.Item
                                    name={['day']}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Gerekli",
                                            pattern: /^(?:\d*)$/,
                                        },
                                        {
                                            pattern: /^[\d]{2}$/,
                                            message: "Karakter sayısı 2 olmalıdır.",
                                        },
                                    ]}
                                >
                                    <Input
                                        maxLength="2"
                                        name="card-expire-day"
                                        
                                        placeholder='gün'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12} >
                                <Form.Item
                                    name={['year']}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Gerekli",
                                            pattern: /^(?:\d*)$/,
                                        },
                                        {
                                            pattern: /^[\d]{2}$/,
                                            message: "Karakter sayısı 2 olmalıdır.",
                                        },
                                    ]}
                                >
                                    <Input
                                        maxLength="2"
                                        name="card-expire-year"
                                        placeholder='yıl'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>

                    {/* CVV */}
                    <Col span={6} >
                        <label htmlFor="number">CVV/CVC</label>
                        <Form.Item
                            name={['cvv']}
                            rules={[
                                {
                                    required: true,
                                    message: "Gerekli",
                                    pattern: /^(?:\d*)$/,
                                },
                                {
                                    pattern: /^[\d]{3}$/,
                                    message: "Karakter sayısı 3 olmalıdır.",
                                },
                            ]}
                        >
                            <Input
                                maxLength="3"
                                name="cvv"
                                type="password"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                <Button htmlType="submit" disabled={cart.length ? false : true} type="primary" >
                        Ödeme Yap
                    </Button>
                </Form.Item>
            </Form>
            <Row>
                <Aggrement />
            </Row>
        </div>
    )
}

export default CardInfo