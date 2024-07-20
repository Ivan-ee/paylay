import image1 from '../../assets/WhyMe/honest-service.png'
import image2 from '../../assets/WhyMe/control-centre.png'
import image3 from '../../assets/WhyMe/whole-world.png'
import image4 from '../../assets/WhyMe/more-than-bank.png'


import image5 from '../../assets/WhyMe/visa.png'
import image6 from '../../assets/WhyMe/master_card.png'
import image7 from '../../assets/WhyMe/mir.png'
import image8 from '../../assets/WhyMe/union_pay.png'
import image9 from '../../assets/WhyMe/sbp.png'
import image10 from '../../assets/WhyMe/rass.png'
import image11 from '../../assets/WhyMe/mir_pay.png'

export const WhyMe = () => (
    <div className="why-me">
        <div className="title medium_h1">
            Почему выбирают нас?
        </div>
        <div className="blocks">
            <div className="block">
                <img src={image1} className={'icon'} alt={'icon'}/>
                <div className={'title medium_h3'}>Честный сервис</div>
                <div className={'text regular_h4'}>Круглосуточно заботимся о вашем
                    бизнесе, как о своем. Работаем без
                    выходных и праздников
                </div>
            </div>
            <div className="block">
                <img src={image2} className={'icon'} alt={'icon'}/>
                <div className={'title medium_h3'}>Центр управления платежами</div>
                <div className={'text regular_h4'}>Удобный инструмент для аналитики,
                    управления и организации работы
                    платежей
                </div>
            </div>
        </div>
        <div className="blocks">
            <div className="block">
                <img src={image3} className={'icon'} alt={'icon'}/>
                <div className={'title medium_h3'}>Весь мир в вашем кармане</div>
                <div className={'text regular_h4'}>Мы предоставляем вашим покупателям
                    возможность осуществлять оплату из любой
                    страны, используя любую карту
                </div>
                <div className={'images'}>
                    <div className={'images-block'}>
                        <img src={image5} className={'image'} alt={'image'}/>
                        <img src={image6} className={'image'} alt={'image'}/>
                        <img src={image7} className={'image'} alt={'image'}/>
                        <img src={image8} className={'image'} alt={'image'}/>
                    </div>
                    <div className={'images-block-2'}>
                        <img src={image9} className={'image1'} alt={'image'}/>
                        <img src={image10} className={'image'} alt={'image'}/>
                        <img src={image11} className={'image'} alt={'image'}/>
                    </div>
                </div>
            </div>
            <div className="block s">
                <img src={image4} className={'icon'} alt={'icon'}/>
                <div className={'title medium_h3'}>Мы больше, чем банк</div>
                <div className={'text regular_h4'}>В нашем сервисе за каждую оплату
                    отвечает несколько банков и это помогает
                    удержать вашу платежную конверсию
                    на самом высоком уровне
                </div>
            </div>
        </div>
    </div>
)