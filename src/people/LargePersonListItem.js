export const LargePersonListItem = ({ person }) => {
	const { name, age, hairColor, hobbies } = person;

console.log("person name is " + name);

	return (
		<>
		<p>More about {name}</p>
		<p>Age: {age} years</p>
		<p>Hair Color: {hairColor}</p>
		<p>Hobbies:</p>
		<ul>
			{hobbies && hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
		</ul>
		</>
	);
}