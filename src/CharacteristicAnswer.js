export function CharacteristicAnswer(props) {
    console.log(`In Answer. charactersObject is ${props.charactersObject}`);

    function getCharacter(characterId) {
        return props.charactersObject.filter(character => character.id === characterId)[0] 
    }

    if(props.userAnswer)  {
        const character = getCharacter(props.name);
        if(props.userAnswer === character.characteristic) {
            return (
                <div>
                    <p>Yep. That's it. Good job.</p> 
                    <p>Check out the other characters on the show.</p>
                </div>);
        } else {
            return (<div>Nope, not that one. The correct answer is {character.characteristic}</div>);
        }
    }

    return(<div></div>);
};