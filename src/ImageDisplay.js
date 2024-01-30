export const ImageDisplay = ({height, alt, person, imageName}) => {

    const images = require.context('./images', true);

    return (
        <img height={height}
        alt={alt}
        src={images(`./${imageName}`)}/>
    );
}