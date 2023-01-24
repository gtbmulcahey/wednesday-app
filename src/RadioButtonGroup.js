import { useEffect } from 'react';
import './css/RadioButtonGroup.css';


export const RadioButtonGroup = ({ person, possibleQuizAnswers, title, userAnswer, callback }) => {

    let selectedRadioBtn = userAnswer;

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
                    possibleQuizAnswers.map(answer =>
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