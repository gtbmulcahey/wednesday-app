import { SmallPersonListItem } from './people/SmallPersonListItem';
import Main from './Main';
import { RegularList } from './RegularList';
import { Header } from './Header';
import { Footer } from './Footer';

export const MainLayout = ({people, person, callback}) => {
    
    console.log("in MainLayout");
    console.log("person name is " + person.name);

    return (<>
        <Header name={person.name} />
        <Main people={people} person={person}/>
        <RegularList
            items={people}
            resourceName="person"
            itemComponent={SmallPersonListItem } 
            callback={callback}/>
        <Footer />
    </>)
}