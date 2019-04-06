import React from 'react';
import styled from 'styled-components'; 
import * as colors from '../../styles/colors';
import PropTypes from 'prop-types';

const Toast = (props) => {

    const { task, toastMounted } = props;

    return (
        <StyledToast visible={ toastMounted }>
            { task }
        </StyledToast> 
    )
}

export const StyledToast = styled.div`
    background: ${colors.BLACK};    
    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.18);
    border-radius: 30px;
    color: white;
    font-size: 0.9em;
    line-height: 2.5em;
    height: auto;
    opacity: ${props => props.visible ? 1 : 0};
    padding: 2px 30px 5px;
    position: fixed;
    transition: all 0.5s ease;
    right: 20px;
    top: ${props => props.visible ? '20px' : '5px'};
    text-align: center;
    width: auto;
`;

Toast.propTypes = {
    task: PropTypes.string,
    toastMounted: PropTypes.bool,
}

export default Toast;