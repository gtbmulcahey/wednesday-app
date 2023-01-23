import React from 'react'; 
import './css/RadioButtonGroup.css';
import { CharacteristicAnswer } from './CharacteristicAnswer';


export function RadioButtonGroup(props) {
        const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('');
     
    function isRadioSelected(value) {
        return selectedRadioBtn === value;
    }
    
    function handleRadioClick(e) {
        setSelectedRadioBtn(e.currentTarget.value);
    } 

    const listItems = props.questionAnswers.map(answer =>
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
            <ul className='radiolist'>{props.title}
                {listItems}
            </ul>
            <CharacteristicAnswer name={props.name} people={props.people} userAnswer={selectedRadioBtn}/> 
        </>
    )
}