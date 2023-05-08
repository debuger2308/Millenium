import { NavLink } from "react-router-dom";
import visaImg from "./../../images/visa.png"
import mastercardImg from "./../../images/mastercard.png"
import "./footer.css"
const Footer = () => {

    return ( 
        <footer className="footer">
            <strong className="footer__logo logo">MILENIUM</strong>
            <div className="footer__links">
                <NavLink to='/info' className={({ isActive }) => { return isActive ? "footer__links-link footer__links-link--active" : "footer__links-link" }}>
                    Доставка и оплата
                </NavLink>
                <NavLink to='/about' className={({ isActive }) => { return isActive ? "footer__links-link footer__links-link--active" : "footer__links-link" }}>
                    О бренде
                </NavLink>
            </div>
            <div className="footer__cards">
                <img src={visaImg} alt="" className="footer__cards-item" />
                <img src={mastercardImg} alt="" className="footer__cards-item" />
            </div>
        </footer>
     );
}
 
export default Footer;