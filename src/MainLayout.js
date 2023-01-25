import { SmallPersonListItem } from './people/SmallPersonListItem';
import Main from './Main';
import { RegularList } from './RegularList';
import { Header } from './Header';
import { Footer } from './Footer';
import { printProps } from './printProps';
import { SplitScreen } from './SplitScreen';
import './css/LeftHandComponent.css';
import './css/RightHandComponent.css'


export const MainLayout = ({ people, person, possibleQuizAnswers, callback }) => {

    const MainWrapped = printProps(Main);

    const LeftHandComponent = () => {
        return (
            <div>
                <nav className="leftHandComponent">
                    <RegularList
                        items={people}
                        resourceName="person"
                        itemComponent={SmallPersonListItem}
                        callback={callback} />
                </nav>
            </div>
        )
    }



    const RightHandComponent = () => {
        return (
            <div className="rightHandComponent">
                <MainWrapped people={people} person={person} possibleQuizAnswers={possibleQuizAnswers} />
            </div>
        )
    }

    return (
        <>
            <Header name={person.name} />
            <SplitScreen
                left={LeftHandComponent}
                right={RightHandComponent}
                leftWeight={1}
                rightWeight={2}
            />
            <Footer />
        </>
        // <>
        //     <Header name={person.name} />
        //     <MainWrapped people={people} person={person} possibleQuizAnswers={possibleQuizAnswers}/>
        //     <RegularList
        //         items={people}
        //         resourceName="person"
        //         itemComponent={SmallPersonListItem } 
        //         callback={callback}/>
        //     <Footer />
        // </>
    )
}