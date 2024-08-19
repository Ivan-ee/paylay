import React, {useRef, useState} from "react";
import icon from '../../assets/arrow-down.png';

const data = [
    {
        question: "Как работает сервис поддержки?",
        answer:
            "За каждым мерчантом закрепляется персональный менеджер, который обеспечивает поддержку 24/7 по всем возникающим организационным вопросам и работает круглосуточная техническая поддержка — support@paylay.com"
    },
    {
        question: "Зачем нужна облачная касса?",
        answer:
            "За каждым мерчантом закрепляется персональный менеджер, который обеспечивает поддержку 24/7 по всем возникающим организационным вопросам и работает круглосуточная техническая поддержка — support@paylay.com"
    },
    {
        question: "Почему с нами безопасно?",
        answer:
            "За каждым мерчантом закрепляется персональный менеджер, который обеспечивает поддержку 24/7 по всем возникающим организационным вопросам и работает круглосуточная техническая поддержка — support@paylay.com"
    },
    {
        question: "Зачем нужен личный кабинет?",
        answer:
            "За каждым мерчантом закрепляется персональный менеджер, который обеспечивает поддержку 24/7 по всем возникающим организационным вопросам и работает круглосуточная техническая поддержка — support@paylay.com"
    }
];


const AccordionItem = ({question, answer, isOpen, onClick}) => {
    const contentHeight = useRef();
    return (
        <div className={`wrapper ${isOpen ? "active" : ""}`}>
            <div
                className={`question-container ${isOpen ? "active" : ""}`}
                onClick={onClick}
            >
                <div className="question-content medium_h3">{question}</div>
                <img src={icon} className={`arrow ${isOpen ? "active" : ""}`}/>
            </div>

            <div
                ref={contentHeight}
                className="answer-container"
                style={
                    isOpen
                        ? {height: contentHeight.current.scrollHeight}
                        : {height: "0px"}
                }
            >
                <div className="answer-content regular_h4">{answer}</div>
            </div>
        </div>
    );
};

export const QA = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="qa page-container" id={'faq'}>
            <div className="title medium_h1">
                Ответим
                на вопросы
            </div>
            <div className="main">
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};
