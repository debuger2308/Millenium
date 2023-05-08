
import prodItems from "./../../utils/products.json"
import ProductItem from '../../components/productItem/ProductItem';
import './catalog.css'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const filterItems = (searchText, searchType, listOfItems) => {

    if (!searchText && searchType.length === 0) return listOfItems

    if (searchType.length === 0) return listOfItems.filter(({ name }) => name.toLowerCase().includes(searchText.toLowerCase()))

    return listOfItems.filter(({ name, type }) => name.toLowerCase().includes(searchText.toLowerCase())
        && searchType.includes(type)
    )
}


const Catalog = () => {

    const searchTerm = useSelector(state => state.inputValue.inputValue)
    
    const [searchBytype, setSearchByType] = useState([])
    const [itemList, setItemList] = useState(prodItems)
    const filterTypes = [['scrub', 'СКРАБЫ ОБЕРТЫВАНИЯ'], ['cosmetic', 'КОСМЕТИКА'], ['udodcosmetic', 'УДОДОВАЯ КОСМЕТИКА']]

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredItems = filterItems(searchTerm, searchBytype, prodItems)
            setItemList(filteredItems)
        }, 100)
        return () => clearTimeout(Debounce)
    }, [searchTerm, searchBytype])

    return (
        <main className="catalog">
            <div className="catalog__filter">
                {filterTypes.map((item, index) => {
                    return (
                        <button
                            key={index}
                            onClick={(e) => {
                                if (!searchBytype.includes(item[0])) {
                                    setSearchByType(searchBytype.concat(item[0]))
                                    e.target.className = 'catalog__filter-item catalog__filter-item--active'
                                }
                                else {
                                    setSearchByType(searchBytype.filter(elem => elem !== item[0]))
                                    e.target.className = 'catalog__filter-item'
                                }
                            }}
                            className={"catalog__filter-item"}>{item[1]}</button>
                    )
                })}

            </div>
            <ul className="catalog__list">
                {itemList.map((item) => { return <li key={item.id} className="catalog__list-item"><ProductItem item={item} /></li> })}
            </ul>

        </main>
    );
}

export default Catalog; 