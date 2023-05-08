
import "./location.css"
import mallImg from "./../../images/mallImg.png"
import metroImg from "./../../images/metro.png"
const Location = () => {
    return (
        <main className="location">
            <aside className="location__about">
                <h1 className="location__title">Москва</h1>
                <div className="location__block">
                    <img src={mallImg} alt="" className="loaction__img" />
                    <div className="location__info">
                        <h2 className="location__info-title">ТРК АФИМОЛ СИТИ</h2>
                        <div className="location__info-status">
                            <p className="location__info-working">Магазин работает</p>
                            <p className="location__info-name">MAKEUP</p>
                        </div>

                        <p className="location__info-way">
                            Пресненская набережная 2, 2 этаж
                        </p>

                        <p className="location__time-work">Время работы:</p>
                        <p className="location__time-work">пн-чт, вск: 10:00 - 22:00</p>
                        <p className="location__time-work">пт, сб: 10:00 - 23:00</p>

                        <div className="location__metro">
                            <img src={metroImg} alt="" className="location__metro-img" />
                            <p className="location__metro-text">деловой центр</p>
                        </div>

                        <a href="https://www.google.com/maps/place/Afimall+City/@55.7489569,37.5309814,15z/data=!4m15!1m8!3m7!1s0x46b54bdce1d3d3b5:0xfd349dcf575adf73!2sAfimall+City!8m2!3d55.7489569!4d37.5397361!10e5!16s%2Fg%2F1tq6hrln!3m5!1s0x46b54bdce1d3d3b5:0xfd349dcf575adf73!8m2!3d55.7489569!4d37.5397361!16s%2Fg%2F1tq6hrln"
                            target="_blank"
                            className="location__info-link">Смотреть на карте
                        </a>
                    </div>
                </div>
            </aside>
            <iframe
                className="location__map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5332485423182!2d37.53461045794083!3d55.74923840389141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdb8361d653%3A0xffb33956c7810f42!2z0J_RgNC10YHQvdC10L3RgdC60LDRjyDQvdCw0LEuLCAyLCDQnNC-0YHQutCy0LAsINCg0L7RgdGW0Y8sIDEyMzMxNw!5e0!3m2!1suk!2sua!4v1682948803141!5m2!1suk!2sua"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </main>
    );
}

export default Location;