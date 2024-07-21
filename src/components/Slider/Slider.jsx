import {useState} from "react";

export const Slider = () => {

    const [selectedItemId, setSelectedItemId] = useState(1);

    const data = [
        {
            "id": 1,
            "title": "Платежная форма на сайте",
            "text": "Настраивайте форму оплаты под ваши\n" +
                "нужды. Форма адаптируется под вашего" +
                "покупателя и помогает получить" +
                "успешный платеж на любом устройстве",
            "label": "widget",
        },
        {
            "id": 2,
            "title": "Ссылка на оплату",
            "text": "Создание платежных ссылок из личного кабинета",
            "label": "link",
        },
        {
            "id": 3,
            "title": "ФЗ-54",
            "text": "Готовое кассовое решение в соответствии с 54-ФЗ для формирования онлайн-чеков",
            "label": "kassa",
        },
        {
            "id": 4,
            "title": "Модули CMS",
            "text": "Интеграция PayWidget под более чем 20 популярных CMS — Битрикс, Tilda, WordPress и других в один клик",
            "label": "code",
        },
        {
            "id": 5,
            "title": "Мобильный SDK",
            "text": "Прием платежей в вашем мобильном приложении на iOS и Android",
            "label": "app",
        },
        {
            "id": 6,
            "title": "Сheckout-скрипт",
            "text": "Позволяет сделать платежную форму частью вашего сайта с индивидуальным дизайном",
            "label": "app",
        },
    ]

    const handleClick = (itemId) => {
        setSelectedItemId(itemId);
    };

    const selectedItem = data.find(item => item.id === selectedItemId);

    return (
        <section className="slider" id={'products'}>
            <div className="title medium_h1">
                PayLay — лучший партнер<br/>
                для обработки платежей
            </div>

            <div className="content">
                <div className="block">
                    <div className={'label'}>
                        <div className={'round bold_h4'}>lay</div>
                        <span className={'label-text bold_h4'}>{selectedItem.label}</span>
                    </div>
                    <div className={'text'}>
                        <div className={'text-title medium_h3'}>{selectedItem.title}</div>
                        <div className={'text-description regular_h4'}>
                            {selectedItem.text}
                        </div>
                    </div>
                </div>
                <div className="buttons-container">
                    <div className="buttons">
                        <div className={`button ${selectedItemId === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>Оплата на сайте</div>
                        <div className={`button ${selectedItemId === 2? 'active' : ''}`} onClick={() => handleClick(2)}>Ссылка на оплату</div>
                    </div>
                    <div className="buttons">
                        <div className={`button ${selectedItemId === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>Онлайн-касса</div>
                        <div className={`button ${selectedItemId === 4 ? 'active' : ''}`} onClick={() => handleClick(4)}>Модули CMS</div>
                    </div>
                    <div className={`button no ${selectedItemId === 5 ? 'active' : ''}`} onClick={() => handleClick(5)}>Оплата в мобильном приложении</div>
                    <div className={`button no ${selectedItemId === 6 ? 'active' : ''}`} onClick={() => handleClick(6)}>Оплата на сайте с индивидуальным дизайном</div>
                </div>
            </div>

            <div className="button">
                Узнать больше
            </div>
        </section>
    )
}