import {Logo} from '../Header/Logo.jsx'
import {SpecialBtn} from "../SpecialBtn.jsx";
import icon1 from '../../assets/Footer/icon-tg.png';
import icon2 from '../../assets/Footer/icon-vk.png';
import icon3 from '../../assets/Footer/icon-vc.png';

export const Footer = () => (
    <div className="footer" id={'cotnact'}>
        <div className="title medium_h1">
            Будем на связи
        </div>

        <div className="container">
            <div className="main-row">
                <div className="third-row">
                    <div className="row"><Logo/></div>
                    <div className="row">
                        <SpecialBtn style={'special-button-green'}/>
                        <img className={'image'} src={icon1} alt={'image'}/>
                        <img className={'image'} src={icon2} alt={'image'}/>
                        <img className={'image'} src={icon3} alt={'image'}/>
                    </div>
                </div>
                <div className="second-row">
                    <div>
                        <div className="text regular_h4">
                            Документы
                        </div>
                        <div className="text regular_h4">
                            Политика конфиденциальности
                        </div>
                        <div className="text regular_h4">
                            Пользовательское соглашение
                        </div>
                        <div className="text regular_h4">
                            Сертификат PCI DSS PayLay
                        </div>
                    </div>
                    <div className="row">
                        © PayLay 2024. All rights reserved.
                    </div>
                </div>
            </div>
            <div className="two">
                <div>


                    <div className={'block'}>
                        <div className={'title light_h5'}>Технический отдел</div>
                        <div className={'text regular_h4'}>help@paylay.com</div>
                    </div>
                    <div className={'block'}>
                        <div className={'title light_h5'}>Коммерческий отдел</div>
                        <div className={'text regular_h4'}>sales@paylay.com</div>
                    </div>
                    <div className={'block'}>
                        <div className={'title light_h5'}>Отдел маркетинга</div>
                        <div className={'text-1 regular_h4'}>pr@paylay.com</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)