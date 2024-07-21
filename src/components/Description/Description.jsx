import {SpecialBtn} from "../SpecialBtn.jsx";
import image from "../../assets/shield.svg";
import phone from "../../assets/img.png";
import {DescriptionBtn} from "./DescriptionBtn.jsx";


export const Description = () => (
    <section className="description">
        <div className={'description-main'}>
            <div className={'description-container'}>
                <div className={'description-title medium_h1'}>
                    Сервис<br/>по приему платежей
                </div>
                <div className={'description-text regular_h3'}>
                    Быстрое и простое подключение<br/>
                    платежного сервиса для вашего бизнеса
                </div>

                <SpecialBtn style={'description-btn'}/>

                <div className={'description-bottom'}>
                    <img className={'image'} src={image} alt={'image'}/>
                    <div className={'item'}>
                        <div className={'bold_h2'}>12М</div>
                        <div className={'regular_h4'}>Транзакций</div>
                    </div>
                    <div className={'item'}>
                        <div className={'bold_h2'}>1200</div>
                        <div className={'regular_h4'}>Партнеров</div>
                    </div>


                </div>
                <img className={'phone'} src={phone} alt={'phone'}/>
            </div>
        </div>
        <DescriptionBtn/>
    </section>
)