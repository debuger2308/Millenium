
import { NavLink } from "react-router-dom";
import "./productitem.css"
import { useDispatch } from "react-redux";
import { changeCount } from "../../utils/reduxStore/countReducer";



const ProductItem = ({ item }) => {

    const dispatch = useDispatch()

    function addToBag(item) {
        const bagItems = 'bagItems'
        const currentValueLCStorage = localStorage.getItem(bagItems)
        if (JSON.parse(localStorage.getItem(bagItems)) === null) {
            localStorage.setItem(bagItems, JSON.stringify([item]))
        }
        else {
            localStorage.setItem(bagItems, JSON.stringify(JSON.parse(currentValueLCStorage).concat(item)))
        }
    }


    return (
        <div className="product-item">
            <NavLink to={`/${item.id}`}>
                <img src={item.img} alt="" className="product-item__img" />
            </NavLink>
            <h2 className="product-item__name">{item.name}</h2>
            <strong className="producct-item__price">{item.price}</strong>
            
            <button
                onClick={() => {
                    addToBag(item)
                    dispatch(changeCount(JSON.parse(localStorage.getItem('bagItems'))))
                }}
                className="addtobag-btn product-item__addtobag"
            >
                Добавить в корзину
            </button>
        </div>
    );
}

export default ProductItem;