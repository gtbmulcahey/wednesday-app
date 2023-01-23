export const SmallPersonListItem = ({ person, callback }) => {

    console.log("callback is " + callback);

    const onTrigger = person => () => {
        console.log("person name is " + person.name);
        console.log("person age is " + person.age);
        callback(person);
    }

    return (
        // <Link to={{pathname:'/', myCustomProps: {person}}}>{person.name}</Link>
        <button onClick={onTrigger(person)}>{person.name}</button>
    );
}