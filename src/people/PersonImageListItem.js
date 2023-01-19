import EnidImage from '../EnidImage.jpg';
import {Image} from './Image';

export const PersonImageListItem = ({ person }) => {
    console.log(person)
    const { name, imageSrc } = person;
    console.log(name);
    console.log(imageSrc);
    return (
        <><p>{name}</p>
            <Image icon={imageSrc} />
        </>
    );
}