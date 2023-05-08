
import { useSelector } from "react-redux";
import "./ordering.css"
import { NavLink } from "react-router-dom";
import postRusia from "./../../images/post-rusia.png"
import { useState } from "react";

const Ordering = () => {

    const [deliveryTarget, setDeliveryTarget] = useState(0)

    const sumOfBag = useSelector(state => state.bagSum.bagSum)
    return (
        <main className="ordering">
            <div className="ordering__wrapper">
                <h1 className="ordering__title">Оформление заказа</h1>
                <h1 className="ordering__subtitle">Доставка</h1>
                <form
                    className="ordering__form"
                    onSubmit={(e) => {
                        e.preventDefault()
                    }}
                    action="">
                    <div className="ordering__form-select">
                        <label className="ordering__select-label">
                            Выберите страну
                            <select name="" id="" className="ordering__select">
                                <option className="ordering__option" value="">Россия</option>
                                <option className="ordering__option" value="">Украина</option>
                                <option className="ordering__option" value="">Белорусь</option>
                            </select>
                        </label>
                        <label className="ordering__select-label">
                            Выберите город
                            <select name="" id="" className="ordering__select">
                                <option className="ordering__option" value="">г Москва</option>
                                <option className="ordering__option" value="">г Киев</option>
                                <option className="ordering__option" value="">г Минск</option>
                            </select>
                        </label>
                    </div>
                    <div className="ordering__form-input-text">
                        <label className="ordering__label">Номер телефона<input type="tel" className="ordering__input" /></label>
                        <label className="ordering__label">Ваш email<input type="email" className="ordering__input" /></label>
                        <label className="ordering__label">ФИО получателся<input type="text" className="ordering__input" /></label>
                    </div>
                </form>

                <div className="ordering__delivery">
                    <button
                        onClick={(e) => {
                            setDeliveryTarget(1)
                        }}
                        className={deliveryTarget === 1 ? "ordering__delivery-item--active ordering__delivery-item" : "ordering__delivery-item"}>
                        <img className="ordering__delivery-img" src={postRusia} alt="" />
                        <div className="ordering__delivery-info">
                            <h3 className="ordering__delivery-title">Курьерская служба</h3>
                            <p className="ordering__delivery-subtitle">8-9 робочих дней бесплатно</p>
                        </div>
                    </button>
                    <button
                        onClick={(e) => {
                            setDeliveryTarget(2)
                        }}
                        className={deliveryTarget === 2 ? "ordering__delivery-item--active ordering__delivery-item" : "ordering__delivery-item"}>
                        <img className="ordering__delivery-img" src={postRusia} alt="" />
                        <div className="ordering__delivery-info">
                            <h3 className="ordering__delivery-title">Почта России</h3>
                            <p className="ordering__delivery-subtitle">4-7 робочих дней бесплатно</p>
                        </div>
                    </button>
                    <button
                        onClick={(e) => {
                            setDeliveryTarget(3)
                        }}
                        className={deliveryTarget === 3 ? "ordering__delivery-item--active ordering__delivery-item" : "ordering__delivery-item"}>
                        <img className="ordering__delivery-img" src={postRusia} alt="" />
                        <div className="ordering__delivery-info">
                            <h3 className="ordering__delivery-title">Пункт выдачи заказов</h3>
                            <p className="ordering__delivery-subtitle">5-6 робочих дней бесплатно</p>
                        </div>
                    </button>
                </div>
                <span className="ordering__strip"></span>
                <p className="ordering__total">итого:
                    <strong className="ordering__price">{sumOfBag}₽</strong>
                </p>
                <NavLink
                    onClick={(e) => {
                        if (sumOfBag === 0) e.preventDefault()
                    }}
                    to={'/payment'}
                    className="ordering__btn">
                    Продолжить
                </NavLink>
            </div>
        </main>
    );
}

export default Ordering;