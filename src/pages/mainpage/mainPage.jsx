
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import products from "../../utils/products.json"

//import images
import bannerSlide from "./../../images/banner.png"
import poster_1 from "./../../images/poster1.png"
import poster_2 from "./../../images/poster2.png"
import poster_3 from "./../../images/poster3.png"
import secondSlider from "../../images/secon-slide.jpg"
import bannerImg from "./../../images/banner-img.png"

// import styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainpage.css"

const MainPage = () => {
    const bannerSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    const newCollectionSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <main className="main">
            <section className="main-slider">

                <Slider {...bannerSliderSettings}>
                    <div>
                        <div className="">
                            <div className="main-slide main-slide--first-slide">
                                <aside className="main-slide__aside">
                                    <h1 className="main-slide__title">Сияние твоей кожи наша заслуга</h1>
                                    <p className="main-slide__subtitle">Раскрой свою чувственность с нашей косметикой</p>
                                </aside>
                                <div className="main-slide__img-box">
                                    <img src={bannerSlide} className="main-slide__img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main-slide main-slide--second-slide">
                            <img src={secondSlider} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="main-slide">

                        </div>
                    </div>



                </Slider>
            </section>

            <section className="main-posters">
                <div className="posters__list">
                    <NavLink
                        onClick={() => {

                        }}
                        to={'/catalog'}
                        className="posters__list-item">
                        <div className="posters__info">
                            <h2 className="posters__title">КРЕМА</h2>
                            <strong className="posters__subtitle">Shop now</strong>

                        </div>
                        <img src={poster_1} alt="" className="posters__img" />
                    </NavLink>
                    <NavLink
                        onClick={() => {

                        }}
                        to={'/catalog'}
                        className="posters__list-item">
                        <div className="posters__info">
                            <h2 className="posters__title">Скрабы Обертывания</h2>
                            <strong className="posters__subtitle">Shop now</strong>

                        </div>
                        <img src={poster_2} alt="" className="posters__img" />
                    </NavLink>
                    <NavLink
                        onClick={() => {

                        }}
                        to={'/catalog'}
                        className="posters__list-item">
                        <div className="posters__info">

                            <h2 className="posters__title">Косметика</h2>
                            <strong className="posters__subtitle">Shop now</strong>
                        </div>
                        <img src={poster_3} alt="" className="posters__img" />
                    </NavLink>
                </div>
            </section>

            <section className="main-products">
                <h1 className="main-products__title">Новинки сезона</h1>
                <div className="main-products__slider">
                    <Slider {...newCollectionSliderSettings}>
                        {products.filter(item => item.collection === "new").map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="main-products-slide">
                                        <NavLink to={`/${item.id}`}>
                                            <img className="main-products-slide__img" src={item.img} alt="" />
                                        </NavLink>
                                        <h3 className="main-products-slide__title">{item.name}</h3>
                                        <p className="main-products-slide__price">{item.price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </section>

            <section className="main-banner">
                <aside className="main-banner__info">
                    <p className="main__banner__text">
                        Наши продукты – это продуманные формулы, многообразие уходов и собственное производство.
                        Мы создаем доступные и эффективные косметические средства для лица, тела и волос для решения различных проблем.
                    </p>
                    <div className="main-banner__strip"></div>
                </aside>
                <aside className="main-banner__img-box">
                    <img src={bannerImg} alt="" className="main-banner__img" />
                    <div className="main-banner__strip"></div>
                </aside>

            </section>
        </main>
    );
}

export default MainPage;