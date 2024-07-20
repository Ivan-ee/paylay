import image1 from '../../assets/Mockup/mockup.png'
import image2 from '../../assets/Mockup/mockup2.png'

export const Up = () => (
    <div className={'up'} id={'opportunities'}>
        <div className={'title medium_h1'}>
            Повышайте доходы<br/>
            вашего бизнеса c <span className={'title-span medium_h3'}>PayLay</span>
        </div>

        <div className={'blocks'}>
            <div className={'block'}>
                <div className={'title medium_h3'}>
                    Важен каждый платеж
                </div>
                <div className={'text regular_h4'}>
                    Платежная форма позволяет задействовать удобные<br/>
                    способы оплаты и помогает провести платеж<br/>
                    на любом устройстве
                </div>
                <img src={image1} className={'image1'} alt={'image'}/>
            </div>
            <div className={'block'}>
                <div className={'title medium_h3'}>
                    Важен каждый пользователь
                </div>
                <div className={'text regular_h4'}>
                    Наши технологии ускоряют процесс оплаты<br/>
                    и увеличивают продажи на вашем сайте
                </div>
                <img src={image2} className={'image2'} alt={'image'}/>
            </div>
        </div>

    </div>
)