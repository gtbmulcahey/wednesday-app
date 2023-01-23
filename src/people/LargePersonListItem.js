import "../css/LargePersonListItem.css";

export const LargePersonListItem = ({ person }) => {
	const { name, age, hairColor, hobbies, roleInTheShow } = person;

console.log("person name is " + name);

	return (
		<>
		<h1>{name}</h1>
		<p>Age: {age} years</p>
		<p>Hair Color: {hairColor}</p>
		<p>{roleInTheShow}</p>
		<ul className="hobbies"> 
			<label>Hobbies:</label>
			{hobbies && hobbies.map(hobby => <li className="hobbies" key={hobby}>{hobby}</li>)}
		</ul>
		</>
	);
}