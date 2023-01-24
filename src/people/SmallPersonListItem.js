export const SmallPersonListItem = ({ person, callback }) => {

    console.log("callback is " + callback);

    const onTrigger = person => () => {
        callback(person);
    }

    return (
        <button onClick={onTrigger(person)}>{person.name}</button>
    );
}