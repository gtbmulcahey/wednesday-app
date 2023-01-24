import { SmallPersonListItem } from './people/SmallPersonListItem';
import Main from './Main';
import { RegularList } from './RegularList';
import { Header } from './Header';
import { Footer } from './Footer';
import { printProps } from './printProps';

export const MainLayout = ({people, person, callback}) => {

    const MainWrapped = printProps(Main);

    return (<>
        <Header name={person.name} />
        <MainWrapped people={people} person={person} />
        <RegularList
            items={people}
            resourceName="person"
            itemComponent={SmallPersonListItem } 
            callback={callback}/>
        <Footer />
    </>)
}