
import { useDispatch } from "react-redux";
import { changeCount } from "../../utils/reduxStore/countReducer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductPage.css"
const ProductPage = ({ product }) => {

    const productAddTitle = product?.descTitle?.split('$')
    const productDescImg = product?.descImg?.split(' ')
    const productDescImgSubtitle = product?.descImgSubtitle?.split('$')

    const dispatch = useDispatch()
    let imgArray = [product.img]
    if (product.additionalImg) {
        imgArray = [product.img].concat(product.additionalImg?.split(' '))
    }


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



    function NextArrow(props) {
        const { onClick } = props
        return (
            <button
                onClick={onClick}
                className="slider__next-arrow">
                <svg width="28" height="16" viewBox="0 0 28 16" fill="#000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM1 9H27V7H1V9Z" fill="#000"></path>
                </svg>
            </button>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props
        return (
            <button
                onClick={onClick}
                className="slider__prev-arrow">
                <svg width="28" height="16" viewBox="0 0 28 16" fill="#000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM1 9H27V7H1V9Z" fill="#000"></path>
                </svg>
            </button>
        );
    }

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img className="product__img-main" src={`${imgArray[i]}`} />
                </a>
            );
        },
        dots: true,
        dotsClass: "product__slider-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <main className="product">
            <h1 className="product__title">{product.name}</h1>
            <div className="product__item">
                <div className="product__img-box">

                    <div className="product__slider">
                        {<Slider {...settings}>
                            {imgArray.map((item, index) => {
                                return (<div key={index}>
                                    <img className="product__img" src={product.img} />
                                </div>)
                            })}
                        </Slider>}
                    </div>
                </div>
                <aside className="product__info">
                    <h3 className="product__subtitle">{product.title}</h3>
                    <strong className="product__price">{product.price}</strong>

                    <button
                        onClick={() => {
                            addToBag(product)
                            dispatch(changeCount(JSON.parse(localStorage.getItem('bagItems'))))
                        }}
                        className="addtobag-btn product__addtobag"
                    >
                        Добавить в корзину
                    </button>

                </aside>
            </div>
            <div className="product__addtitle">
                {productAddTitle?.map((item, index) => {
                    return (
                        <div key={index} className="product__addtitle-item">
                            <h3 className="product__addtitle-title">{item}</h3>
                        </div>
                    )
                })}
            </div>

            <div className="product__addimg">
                <div className="product__addimg-title">
                    {product?.descImgSubtitle?.length !== 0 || product?.descImg?.length !== 0 ? "Эффективные ингредиенты" : null}
                </div>
                <ul className="product__addimg-list">
                    {productDescImg?.map((item, index) => {
                        return (
                            <li key={index} className="product__addimg-item">
                                <img src={item} alt="" className="product__addimg-img" />
                                <p className="product__addsubtitle">{productDescImgSubtitle[index]}</p>
                            </li>
                        )
                    })}
                </ul>

            </div>

        </main>
    );
}

export default ProductPage;