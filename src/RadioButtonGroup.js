import React from 'react'; 
import './RadioButtonGroup.css';
import { CharacteristicAnswer } from './CharacteristicAnswer';


export function RadioButtonGroup(props) {
        const [selectedRadioBtn, setSelectedRadioBtn] = React.useState('');
     
    function isRadioSelected(value) {
        return selectedRadioBtn === value;
    }
    
    function handleRadioClick(e) {
        setSelectedRadioBtn(e.currentTarget.value);
    } 

    React.useEffect(() => {
      //console.log(`Selected radio button is ${selectedRadioBtn} right now`);
    }, [selectedRadioBtn]);

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
        <div>
            <ul className='radiolist'>
                {listItems}
            </ul>
            <CharacteristicAnswer name={props.name} charactersObject={props.charactersObject} userAnswer={selectedRadioBtn}/> 
        </div>
    )
}