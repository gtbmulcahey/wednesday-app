export const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent,
    callback,
}) => {

    return (
        <>
            {items.map((item, i) => (
                    <ItemComponent key={i} {...{ [resourceName]: item } } callback={callback} />
            ))}
        </>
    )
}