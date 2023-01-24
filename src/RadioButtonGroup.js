import { useState, useEffect } from 'react';
import './css/RadioButtonGroup.css';


export const RadioButtonGroup = ({ person, questionAnswers, title, userAnswer, callback }) => {

    const [selectedRadioBtn, setSelectedRadioBtn] = useState(userAnswer);

    useEffect(() => {
        console.log(`selectedRadioBtn is ${selectedRadioBtn} right now`);
        console.log(`user answer is ${userAnswer} right now`);
    }, [person, selectedRadioBtn, userAnswer]);


    function handleRadioClick(e) {
        //setSelectedRadioBtn(e.currentTarget.value);
        //console.log("about to callback " + e.currentTarget.value);
        callback(e.currentTarget.value);
    }

    return (
        <>
            <ul className='radiolist'>{title}
                {
                    questionAnswers.map(answer =>
                        <li key={answer}>
                            <input
                                key={answer}
                                id={answer}
                                type="radio"
                                name={answer}
                                value={answer}
                                checked={userAnswer === answer}
                                onChange={handleRadioClick}
                            />
                            <label htmlFor={answer}>
                                {answer}
                            </label>
                        </li>
                    )


                }
            </ul>
        </>
    )
}