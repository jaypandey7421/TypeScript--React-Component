import React from 'react'
import './styles/footer.css'

const Footer :React.FC = ()=>{
    const currentYear = new Date().getFullYear();
    return(
        <section className='footer'>
            <div className="footer-content">
                <div className="f-contacts">
                    <div className="f-c-item">
                        <div className="c-rel-logo">
                        <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="c-about">
                            <h3>Контакт у канцеларији</h3>
                            <p>Знаменитост, град</p>
                        </div>
                    </div>
                    <div className="f-c-item">
                        <div className="c-rel-logo">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="c-about">
                            <h3>Контакт бр.</h3>
                            <p>7292928130 | 8201837422</p>
                        </div>
                    </div>
                    <div className="f-c-item">
                        <div className="c-rel-logo">
                            <i className="fa-solid fa-envelope-open"></i>
                        </div>
                        <div className="c-about">
                            <h3>Е-маил</h3>
                            <p>myrandommail@office.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-rest-info">
                    <div className="footer-about   tri-child">
                            <h3>Ваш бренд</h3>
                        <div className="f-about-info">
                            <h4>Ваше пуно име</h4>
                            <p>Лорем ипсум долор сит амет
                                цонсецтетур адиписицинг елит.
                                Уллам куаесецантиум цоммоди ат куидем?</p>
                        </div>
                        <div className="social-links">
                            <h3>Пратите овде</h3>
                            <div className="link-icons">
                            <i className="fa-brands fa-square-x-twitter"></i>
                            <i className="fa-brands fa-square-x-twitter"></i>
                            <i className="fa-brands fa-square-google-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links   tri-child">
                    <h3>Линкови</h3>
                    <hr />
                    <ul className="links-list">
                        <li><a href="#">Хоме</a></li>
                        <li><a href="#">Чланци</a></li>
                        <li><a href="#">Канцеларија</a></li>
                        <li><a href="#">Галерија</a></li>
                        <li><a href="#">Извршни</a></li>
                    </ul>
                    </div>
                    <div className="message-section tri-child">
                    <h3>Пошаљите повратне информације</h3>
                    <hr />
                    <div className="inputs">
                        <div>
                            <textarea 
                                id="message" 
                                name="message" 
                                placeholder='Ваш | Порука | Ево'
                                required></textarea>
                        </div>
                        <div>
                            <input type="text" id="email" name="email" required />
                            <button>
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Цопиригхт &copy; {currentYear}, Власник сајта </p>
            </div>
        </section>
    )
}

export default Footer;
