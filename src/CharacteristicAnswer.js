export function CharacteristicAnswer(props) {
        function getCharacter(characterId) {
        return props.charactersObject.filter(character => character.id === characterId)[0] 
    }

    if(props.userAnswer)  {
        const character = getCharacter(props.name);
        if(props.userAnswer === character.characteristic) {
            return (
                <div>
                    <p>Yep. That's it. Good job.</p> 
                </div>);
        } else {
            return (<div>Nope, not that one. The correct answer is {character.characteristic}</div>);
        }
    }

    return(<div></div>);
};