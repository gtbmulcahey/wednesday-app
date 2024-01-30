import "../css/LargePersonListItem.css";

export const LargePersonListItem = ({ person }) => {
	const { name, age, hairColor, hobbies, personality, roleInTheShow } = person;

	console.log("person name is " + name);

	return (
		<>
			<h2>{name}</h2>
			<p>{roleInTheShow}</p>
			<p><span className="title">Age:</span> {age} years</p>
			<p><span className="title">Hair Color:</span> {hairColor}</p>
			<p><span className="title">Personality:</span> {personality}</p>
			<p className="hobbies">
				<span className="title">Hobbies:</span>&nbsp;
				{hobbies && hobbies.map((hobby, i) => [
					i > 0 && ", ",
					<span key={i}>{hobby}</span>
				])}
			</p>
		</>
	);
}
