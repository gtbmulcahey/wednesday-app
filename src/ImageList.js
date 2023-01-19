import { PersonImageListItem } from "./people/PersonImageListItem";

export const ImageList = ({items}) => {
    console.log("in the ImageList");
    console.log("items is " + items);

 return (   
    <div>
            {items.map((item, i) => (
                    <PersonImageListItem key={i} person={item} />
            ))}
        </ div>
)};