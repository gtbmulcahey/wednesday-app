import React from 'react';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ApplicationIconButton = ({ onClick, children, disableRipple = true, color = 'primary', size = 'large' }) => {
    return (
        <IconButton
            disableRipple={disableRipple}
            color={color}
            size={size}
            onClick={onClick}
        >
            {children}
        </IconButton>
    );
}

const PreviousButton = ({ onClick }) => {
    return (
        <ApplicationIconButton onClick={onClick} >
            <NavigateBeforeIcon className="icons" />
        </ApplicationIconButton>
    );
}

const NextButton = ({ onClick }) => {
    return (
        <ApplicationIconButton onClick={onClick} >
            <NavigateNextIcon className="icons" />
        </ApplicationIconButton>
    );
}

const ExpandMoreOrLessButton = ({ onClick, children }) => {
    return (
        <ApplicationIconButton onClick={onClick} >
            {children}
        </ApplicationIconButton>
    );
}

export { ApplicationIconButton, PreviousButton, NextButton, ExpandMoreOrLessButton };
