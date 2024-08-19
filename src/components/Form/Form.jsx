import image from '../../assets/image 7.png'
import {useState} from 'react';


export const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
        website: false
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: false
        });
    };

    const handleSubmit = () => {
        const newErrors = {
            name: !formData.name,
            email: !formData.email,
            phone: !formData.phone,
            website: !formData.website
        };
        setErrors(newErrors);

        const isValid = Object.values(newErrors).every((error) => !error);
        if (isValid) {
            console.log('Форма отправлена', formData);
        } else {
            console.log('Форма содержит ошибки');
        }
    };

    return (
        <div className="form page-container" id={'btn'}>
            <div className="blocks">
                <div className="block">
                    <div className="title medium_h1">
                        Подключайтесь<br/>
                        сейчас
                    </div>
                    <img src={image} className={'image1'} alt={'image'}/>
                </div>
                <div className={'main'}>
                    <div className="title medium_h3">
                        Мы на расстоянии одного клика
                    </div>
                    <div className={'body'}>
                        <input
                            className={`input regular_h4 ${errors.name ? 'err' : ''}`}
                            placeholder={'Имя'}
                            type={"text"}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            className={`input regular_h4 ${errors.email ? 'err' : ''}`}
                            placeholder={'Почта'}
                            type={"email"}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {/*{errors.email && <span className="error-message">Обязательное поле</span>}*/}
                        <input
                            className={`input regular_h4 ${errors.phone ? 'err' : ''}`}
                            placeholder={'+7 (882) 770-35-67'}
                            type={"tel"}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {/*{errors.phone && <span className="error-message">Обязательное поле</span>}*/}
                        <input
                            className={`input regular_h4 ${errors.website ? 'err' : ''}`}
                            placeholder={'Сайт'}
                            type={"text"}
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                        />
                        {/*{errors.website && <span className="big-error-message">Обязательное поле</span>}*/}
                        <div className={'btn regular_h4'} onClick={handleSubmit}>Отправить заявку</div>
                        <div className={'text light_h5'}>
                            Нажимая кнопку «Отправить заявку», вы соглашаетесь
                            с <span className={'green'}>политикой конфиденциальности</span> и <span className={'green'}>пользовательским соглашением</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}