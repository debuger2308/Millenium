import { NavLink, useNavigate, useLocation } from "react-router-dom"
import './header.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInputValue } from "../../utils/reduxStore/filterInputReducer";

const Header = () => {
    const dispatch = useDispatch()

    const bagCounter = useSelector(state => state.bagCount.bagCount)
    
    window.addEventListener('resize', () => setBurgerActive(false))
    const navigate = useNavigate()
    const currentPath = useLocation()

    const [inputState, setInputState] = useState("header-guestnav__input")



    const [burgerActive, setBurgerActive] = useState(false)
    const [headerStyles, setHeaderStyles] = useState(false)


    useEffect(() => {

        if (currentPath.pathname === '/mainpage') setHeaderStyles(true)
        else setHeaderStyles(false)
        if (currentPath.pathname !== '/catalog') setInputState("header-guestnav__input")
        else setHeaderStyles(false)
    })

    return (
        <header className={headerStyles ? "header--active header" : "header"}>

            <strong className="logo header__logo">MILENIUM</strong>
            <button
                onClick={() => burgerActive ? setBurgerActive(false) : setBurgerActive(true)}
                className="header__burger-btn">
                <span></span>
            </button>
            <div className={burgerActive ? "header-nav header-nav--active" : "header-nav"}>
                <NavLink to='./mainpage'
                    className={({ isActive }) => { return isActive ? "header-nav__link header-nav__link--active" : "header-nav__link" }}
                >Главная</NavLink>
                <NavLink to='./catalog'
                    className={({ isActive }) => {
                        return isActive ? "header-nav__link header-nav__link--active" : "header-nav__link"
                    }}
                >Каталог</NavLink>
                <NavLink to='./location'
                    className={({ isActive }) => { return isActive ? "header-nav__link header-nav__link--active" : "header-nav__link" }}
                >Местоположение</NavLink>
                <NavLink to='./about'
                    className={({ isActive }) => { return isActive ? "header-nav__link header-nav__link--active" : "header-nav__link" }}
                >О бренде</NavLink>
            </div>
            <div className={burgerActive ? "header-guestnav header-guestnav--active" : "header-guestnav"}>
                <button
                    onClick={() => {
                        if (currentPath !== '/catalog') {
                            navigate('/catalog')
                            setInputState("header-guestnav__input")
                        }
                        inputState === "header-guestnav__input"
                            ? setInputState("header-guestnav__input header-guestnav__input--active")
                            : setInputState("header-guestnav__input")
                    }}
                    className="header-guestnav__btn">
                    <svg
                        version={1.0}
                        xmlns="http://www.w3.org/2000/svg"
                        height="40px"
                        viewBox="0 0 106.000000 106.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g
                            transform="translate(0.000000,106.000000) scale(0.100000,-0.100000)"
                            fill="#000000"
                            stroke="none"
                        >
                            <path
                                d="M317 1020 c-178 -45 -297 -200 -297 -385 0 -162 81 -290 230 -363 49
-23 67 -26 160 -27 94 0 111 3 165 28 33 16 70 38 83 50 l23 21 153 -153 c125
-124 154 -150 160 -135 5 14 -26 51 -140 165 l-147 147 26 33 c54 71 71 126
71 234 1 94 -1 104 -33 169 -41 85 -101 145 -186 187 -53 26 -78 32 -147 35
-46 2 -100 -1 -121 -6z m256 -65 c67 -33 133 -101 168 -172 20 -41 24 -63 24
-148 0 -90 -3 -105 -28 -155 -55 -106 -138 -171 -252 -195 -334 -70 -567 330
-339 584 83 93 155 122 284 118 70 -3 96 -9 143 -32z"
                            />
                        </g>
                    </svg>

                </button>
                <input
                    placeholder="поиск"
                    type="text"
                    className={inputState}
                    onChange={(e) => dispatch(changeInputValue(e.target.value))}
                />
                <NavLink to='./bag' className="header-guestnav__btn">
                    <svg
                        version={1.0}
                        xmlns="http://www.w3.org/2000/svg"
                        height="40px"
                        viewBox="0 0 106.000000 92.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g
                            transform="translate(0.000000,92.000000) scale(0.100000,-0.100000)"
                            fill="#000000"
                            stroke="none"
                        >
                            <path
                                d="M660 815 c-71 -71 -76 -74 -111 -69 -44 7 -89 -14 -109 -50 l-13 -26
-182 0 c-195 0 -218 -5 -217 -51 0 -34 111 -471 124 -486 8 -10 93 -13 373
-13 332 0 363 1 378 18 15 16 127 440 127 480 0 10 -8 26 -18 35 -16 15 -46
17 -204 17 -232 0 -233 1 -117 116 44 43 79 84 79 91 0 31 -41 8 -110 -62z
m-130 -129 c-13 -15 -20 -32 -17 -40 8 -21 20 -20 42 4 10 11 22 20 27 20 4 0
8 -9 8 -20 0 -26 -34 -60 -60 -60 -26 0 -60 34 -60 62 0 30 28 58 58 58 l25 0
-23 -24z m-76 -91 c40 -45 80 -53 125 -25 18 12 35 30 38 41 5 18 15 19 189
19 208 0 198 5 172 -81 l-11 -39 -440 2 -440 3 -12 50 c-7 27 -11 53 -8 57 2
5 83 8 180 8 l176 0 31 -35z m-230 -133 c2 -4 8 -36 12 -70 l7 -63 -54 3 c-52
3 -54 4 -65 38 -6 19 -14 50 -17 68 l-6 32 59 0 c32 0 61 -4 64 -8z m191 -47
c10 -79 6 -85 -64 -85 -33 0 -62 4 -65 9 -4 5 -10 37 -14 70 l-9 61 73 0 73 0
6 -55z m185 16 c0 -21 -3 -53 -6 -70 -6 -31 -7 -31 -69 -31 l-62 0 -7 38 c-3
20 -6 52 -6 70 l0 32 75 0 75 0 0 -39z m178 -22 c-4 -33 -10 -65 -14 -70 -7
-12 -121 -12 -129 1 -3 5 -3 37 1 70 l7 60 72 0 72 0 -9 -61z m165 -1 c-8 -34
-17 -66 -19 -70 -3 -4 -30 -8 -61 -8 l-56 0 7 62 c4 34 10 66 12 70 3 4 34 8
68 8 l63 0 -14 -62z m-689 -135 c3 -16 8 -47 11 -71 l7 -43 -48 3 -49 3 -16
62 c-9 35 -14 65 -11 68 3 3 27 5 53 5 44 0 48 -2 53 -27z m166 3 c0 -13 3
-44 6 -70 l7 -46 -61 0 c-67 0 -62 -7 -77 98 l-7 42 66 0 c63 0 66 -1 66 -24z
m170 -46 l0 -71 -62 3 -63 3 -3 68 -3 67 66 0 65 0 0 -70z m165 18 c-11 -90
-9 -88 -77 -88 l-61 0 7 38 c3 20 6 52 6 70 l0 32 66 0 66 0 -7 -52z m151 20
c-3 -18 -11 -49 -17 -70 -10 -38 -10 -38 -60 -38 -50 0 -51 0 -45 28 3 15 8
46 11 70 l7 42 55 0 56 0 -7 -32z"
                            />
                        </g>
                    </svg>

                    <div
                        style={bagCounter !== 0 ? { display: 'block' } : { display: 'none' }}
                        className="header-guestnav__displaybag">{bagCounter}
                    </div>

                </NavLink>
            </div>
            <div className={burgerActive ? "header__display-menu header__display-menu--active" : "header__display-menu"}></div>



        </header>
    );
}

export default Header;