
import { useState, useEffect } from "react"
import "./bag.css"
import { useDispatch } from "react-redux"
import { changeCount } from "../../utils/reduxStore/countReducer"
import { NavLink } from "react-router-dom"
import { changeBagSum } from "../../utils/reduxStore/bagSumReducer"

const Bag = () => {

    const quantityItems = JSON.parse(localStorage.getItem('bagItems'))

    const bagItemsCollection = new Map()

    if (quantityItems) {
        quantityItems.map((item, index, items) => {


            let count = 0
            items.map((checkItem) => {
                if (JSON.stringify(item) === JSON.stringify(checkItem)) count++
            })

            if (bagItemsCollection.size === 0) bagItemsCollection.set(item, count)
            let hasBagItem = false
            for (const bagitem of bagItemsCollection.keys()) {
                if (JSON.stringify(bagitem) === JSON.stringify(item)) {
                    hasBagItem = true
                }
            }
            if (!hasBagItem) bagItemsCollection.set(item, count)
        })
    }
    const bagItemsArray = Array.from(bagItemsCollection)


    const [bagItems, setBagItems] = useState(bagItemsArray)
    const dispatch = useDispatch()
    let sumOfBag = 0
    for (const iterator of bagItems) {
        sumOfBag += Number(iterator[0].price.replace(/\D/g, '')) * iterator[1]
    }
    dispatch(changeBagSum(sumOfBag))

    useEffect(() => {
        const arr = []
        bagItems.map((item) => {
            for (let i = 0; i < item[1]; i++) {
                arr.push(item[0])
            }
        })
        localStorage.setItem('bagItems', JSON.stringify(arr))
        dispatch(changeCount(JSON.parse(localStorage.getItem('bagItems'))))
    })


    return (
        <main className="bag">
            <h1 className="bag__title">Оформление заказа</h1>
            <h1 className="bag__subtitle">Корзина</h1>
            <div className="bag__items">
                {bagItems.map((item, index) => {
                    return (
                        <div key={item[0].id} className="bag__item">
                            <img src={item[0].img} alt="" className="bag__item-img" />
                            <aside className="bag__item-info">

                                <strong className="bag__item-name">{item[0].name}</strong>
                                <p className="bag__item-price">{item[0].price}</p>

                                <button
                                    onClick={() => {
                                        const array = []
                                        for (const iterator of bagItems) {
                                            if (iterator[1] !== 0) {
                                                if (iterator === item) {
                                                    iterator[1]--
                                                    array.push(iterator)
                                                }
                                                else array.push(iterator)
                                            }
                                        }
                                        setBagItems(array)

                                    }}
                                    className="bag__item-decr"><span className="bag__item-decr-span"></span></button>
                                <p className="bag__item-quantity">{item[1]}</p>
                                <button
                                    onClick={() => {
                                        const array = []
                                        for (const iterator of bagItems) {
                                            if (iterator === item) {
                                                iterator[1]++
                                                array.push(iterator)
                                            }
                                            else array.push(iterator)
                                        }
                                        setBagItems(array)
                                    }}
                                    className="bag__item-inkr"><span className="bag__item-inkr-span"></span></button>

                                <button
                                    onClick={() => {
                                        setBagItems(bagItems.filter((bItem, bIndex) => {
                                            if (index !== bIndex) return bItem
                                        }))
                                    }}
                                    className="bag__item-delete"><span className="bag__item-delete-span"></span>
                                </button>
                            </aside>
                        </div>
                    )
                })}
            </div>
            <span className="bag__strip"></span>
            <p className="bag__total">итого:
                <strong className="bag__price">{sumOfBag}₽</strong>
            </p>
            <NavLink
                onClick={(e) => {
                    if(bagItems.length === 0) e.preventDefault()
                }}
                to={'/ordering'}
                className="bag__btn">
                Продолжить
            </NavLink>
        </main>
    );
}

export default Bag;