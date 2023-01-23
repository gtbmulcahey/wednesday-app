import { RegularList } from "./RegularList";
import { SmallPersonListItem } from "./people/SmallPersonListItem";

export const LeftHandComponent = ({ name, people }) => {

    return (
      <div style={{ backgroundColor: 'pink' }}>
        <nav>
          {/* <CharacterLink id="Enid" />{name} */}
          <RegularList
            items={people}
            resourceName="person"
            itemComponent={SmallPersonListItem} />
        </nav>
      </div>
    );
  }
  