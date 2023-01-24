import { useState, useEffect } from 'react'; 
import './css/RadioButtonGroup.css';


export const RadioButtonGroup = ({person, questionAnswers, title, callback, userAnswer}) => {
        
    const [selectedRadioBtn, setSelectedRadioBtn] = useState(userAnswer);

    useEffect(() => {
        console.log(`UserAnswer is ${userAnswer} right now`);
      }, [userAnswer, person]);
     
    function isRadioSelected(value) {
        return selectedRadioBtn === value;
    }
    
    function handleRadioClick(e) {
        setSelectedRadioBtn(e.currentTarget.value);
        console.log("about to callback " + e.currentTarget.value);
        callback(e.currentTarget.value);
    } 

    const listItems = questionAnswers.map(answer =>
        <li key={answer}>
            <input 
                key={answer}
                id={answer}       
                type="radio" 
                name={answer}
                value={answer} 
                checked={isRadioSelected(answer)}
                onChange={handleRadioClick} 
            />
            <label htmlFor={answer}>
                {answer}
            </label>
        </li>
      );

    return (
        <>
            <ul className='radiolist'>{title}
                {listItems}
            </ul>
        </>
    )
}