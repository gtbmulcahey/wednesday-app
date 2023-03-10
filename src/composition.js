import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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

export const ExpandMoreOrLessButton = ({onClick, children, props}) => {
    return (
        <ApplicationIconButton onClick={onClick} >
            {children}
        </ApplicationIconButton>
    )
}