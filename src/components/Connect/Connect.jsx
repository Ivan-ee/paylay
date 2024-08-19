import image1 from '../../assets/Connect/doc.png'
import image2 from '../../assets/Connect/online.png'
import image3 from '../../assets/Connect/office.png'

export const Connect = () => (
    <div className="connect page-container">
        <div className="title medium_h1">
            Подключим ваш бизнес <span className={'title-span'}>быстро</span>
        </div>
        <div className="blocks">
            <div className="block">
                <img src={image2} className={'image'} alt={'image'}/>
                <div className={'text regular_h4'}>
                    Полностью онлайн
                </div>
            </div>
            <div className="block">
                <img src={image3} className={'image'} alt={'image'}/>
                <div className={'text regular_h4'}>
                    Без похода в офис
                </div>
            </div>
            <div className="block">
                <img src={image1} className={'image'} alt={'image'}/>
                <div className={'text regular_h4'}>
                    Минимальный пакет документов
                </div>
            </div>
        </div>
    </div>
)