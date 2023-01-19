import React from 'react';

// const Image = props => (
//   <div>
//     <p>This is the image</p>
//     <img src={props.icon} alt="" />
//   </div>
// );

// export default Image;


export const Image = ({ icon }) => {
	//const { name, age, hairColor, hobbies } = person;
  console.log("In image");
  console.log("icon is " + icon);
  console.log(`../${icon}`);

	return (
		<>
    <img src={`../${icon}`}  alt="" />
		</>
	);
}