import EnidImage from './EnidImage.jpg';
import { MainLayout } from './MainLayout';

export const Enid = ({person}) => {
    console.log(`person is ${person}`);
    

    return (
        <div>
            <p>ENID!!!</p>
            <img height="200" src={EnidImage} alt="Enid" />
            
        </div>)
        ;
};
