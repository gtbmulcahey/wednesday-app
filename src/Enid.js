import EnidImage from './EnidImage.jpg';
import { LargePersonListItem } from './people/LargePersonListItem';

export const Enid = ({props}) => {
    console.log(`person is ${props}`);
    return (
        <div>
            <p>ENID!!!</p>
            <img height="200" src={EnidImage} alt="Enid" />
        </div>);
};
