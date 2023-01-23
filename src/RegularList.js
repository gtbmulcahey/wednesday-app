import "./css/RegularList.css";

export const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent,
    callback,
}) => {

    return (
        <div>
            {items.map((item, i) => (
                    <ItemComponent key={i} {...{ [resourceName]: item } } callback={callback} />
            ))}
        </ div>
    )
}