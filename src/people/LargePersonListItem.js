import "../css/LargePersonListItem.css";

export const LargePersonListItem = ({ person }) => {
	const { name, age, hairColor, hobbies, personality, roleInTheShow } = person;

	console.log("person name is " + name);

	return (
		<>
			<h2>{name}</h2>
			<p>Age: {age} years</p>
			<p>Hair Color: {hairColor}</p>
			<p>Personality: {personality}</p>
			<p>{roleInTheShow}</p>
			<div className="hobbies">
				Hobbies:&nbsp;
				{hobbies && hobbies.map((hobby, i) => [
					i > 0 && ", ",
					<div className="hobbies" key={i}>{hobby}</div>
				])}
			</div>
		</>
	);
}