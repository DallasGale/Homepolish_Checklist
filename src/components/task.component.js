import React, { useState, useEffect } from 'react';
import Toggle from './toggle.component';
import styled from 'styled-components';
import * as colors from '../styles/colors';
import PropTypes from 'prop-types';

const Task = (props) => {

    // Hooks
    const [mounted, setMount] = useState(false);
    
    useEffect(() => {

        console.log('mounted');
        setMount(true);
        
        return function unMount() {
            console.log('un-mounted');
        }
    });

    return (
        <StyledTask 
            visible={mounted} 
            className={`${mounted ? 'mount' : 'un-mount'}`}>
            <Toggle {...props }/>
            <StyledText>
                { props.task }
            </StyledText>
        </StyledTask>
    )
}

Task.propTypes = {
    task: PropTypes.string,
}


const StyledTask = styled.div`
    align-items: center;
    background: ${colors.WHITE};
    display: grid;
    grid-template-columns: 2em auto;
    margin-bottom: 4px;
    opacity: ${props => props.visible ? '1' : '0'};
    padding: 0.7em 0.5em;
    text-align: left;
    transition: all 0.5s;
    &:first-child {
        border-top: 2px solid ${colors.THEME_MEDIUM_GREY};
    }
`;

const StyledText = styled.div`
    color: ${ colors.BLACK };
    font-size: 0.8em;
`;

export default Task;