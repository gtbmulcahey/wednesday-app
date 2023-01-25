import styled from 'styled-components';
import './css/SplitScreen.css';

const Pane = styled.div`
    flex: ${props => props.weight};
`;

export const SplitScreen = ({
    left: Left,
    right: Right,
    leftWeight = 1,
    rightWeight=1,
}) => {

    // const left = children[0];
    // const right = children[1];


    return (
        <div className="container">
            <Pane weight={leftWeight}>
                <Left />
            </Pane>
            <Pane weight={rightWeight}>
                <Right />
            </Pane>
        </div>
    );
}