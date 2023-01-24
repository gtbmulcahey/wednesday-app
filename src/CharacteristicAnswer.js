export const CharacteristicAnswer = ({person, people, userAnswer}) => {
     
    console.log("Useranswer is " + userAnswer);

    if(userAnswer)  {
        console.log("name is " + person.name);
        if(userAnswer === person.characteristic) {
            return (
                <div>
                    <p>Yep. That's it. Good job.</p> 
                </div>);
        } else {
            return (<div>Nope, not that one. Please try again.</div>);
        }
    }

    return(<div></div>);
};