import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LargePersonListItem } from './LargePersonListItem';
import { Modal } from '../Modal';

export const SmallPersonListItem = ({ person }) => {
    //const { name, age } = person;
    const [shouldShowModal, setShouldShowModal] = useState(false);
    console.log("in small item list" + person.name);

    useEffect(() => {
        console.log(`shouldShowModal is ${shouldShowModal} right now`);
    }, [shouldShowModal]);

    return (
        <>
            <p>
                <button onClick={() => setShouldShowModal(true)}>{person.name}</button>
                Age: {person.age} years
            </p>
            {
                shouldShowModal &&
                (
                    <div>
                        <Modal>
                            <LargePersonListItem person={person} />
                        </Modal>
                    </div>
                )
            }
        </>
    )
}