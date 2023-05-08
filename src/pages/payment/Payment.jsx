import visams from "./../../images/visa-mastercard.png"
import { useSelector } from "react-redux";
import "./payment.css"
import { useState } from "react";

const Payment = () => {
    const sumOfBag = useSelector(state => state.bagSum.bagSum)
    const [deliveryTarget, setDeliveryTarget] = useState(0)
    
    return (
        <main className="payment">
            <h1 className="payment__title">Оформление заказа</h1>

            <div className="payment__way">
                <button
                    onClick={() => {
                        setDeliveryTarget(1)
                    }}
                    className={deliveryTarget === 1 ? "payment__way-btn payment__way-btn--active" : "payment__way-btn"}>
                    <img src={visams} alt="" className="payment__way-img" />
                    <p className="payment__way-text">Оплата картой</p>
                </button>
                <button
                    onClick={() => {
                        setDeliveryTarget(2)
                    }}
                    className={deliveryTarget === 2 ? "payment__way-btn payment__way-btn--active" : "payment__way-btn"}>
                    <img src={visams} alt="" className="payment__way-img" />
                    <p className="payment__way-text">Юmoney</p>
                </button>
                <button
                    onClick={() => {
                        setDeliveryTarget(3)
                    }}
                    className={deliveryTarget === 3 ? "payment__way-btn payment__way-btn--active" : "payment__way-btn"}>
                    <img src={visams} alt="" className="payment__way-img" />
                    <p className="payment__way-text">SberPay(оплата через приложение)</p>
                </button>
                <button
                    onClick={() => {
                        setDeliveryTarget(4)
                    }}
                    className={deliveryTarget === 4 ? "payment__way-btn payment__way-btn--active" : "payment__way-btn"}>
                    <img src={visams} alt="" className="payment__way-img" />
                    <p className="payment__way-text">СПБ</p>
                </button>
            </div>

            <p className="payment__total">итого:
                <strong className="payment__price">{sumOfBag}₽</strong>
            </p>
            <button to={'/payment'}
                className="payment__btn addtobag-btn">
                Сделать заказ
            </button>
            <p className="payment__warning">Завершая оформление заказа, я соглашаюсь с условиями
                <a href="" className="payment__warning-link"> договора-аферты</a>
            </p>
        </main>
    );
}

export default Payment;