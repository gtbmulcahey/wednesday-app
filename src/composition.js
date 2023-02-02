import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { printProps } from './printProps';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const ApplicationIconButton = ({ onClick, ...props }) => {
    return (
        <IconButton
            disableRipple={true}
            color='primary'
            size="large"
            onClick={onClick}
        >
            {props.children}
        </IconButton>
    );
}

export const PreviousButton = ({onClick, props}) => {
    return (
        <ApplicationIconButton onClick={onClick} >
            <NavigateBeforeIcon className="icons" />
        </ApplicationIconButton>
    )
}

export const NextButton = ({onClick, props}) => {
    return (
        <ApplicationIconButton onClick={onClick} >
            <NavigateNextIcon className="icons" />
        </ApplicationIconButton>
    )
}

export const ExpandMoreButton = ({onClick, props}) => {
    return (
        <ApplicationIconButton onClick={onClick} >
            <ExpandMoreIcon className="icons"/>
        </ApplicationIconButton>
    )
}

export const ExpandLessButton = ({onClick, props}) => {
    return (
        <ApplicationIconButton onClick={onClick} >
            <ExpandMoreIcon className="icons"/>
        </ApplicationIconButton>
    )
}