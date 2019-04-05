import React, { useState, useEffect } from 'react';
import Toggle from './toggle/toggle.component';
import styled from 'styled-components';
import * as colors from '../styles/colors';
import PropTypes from 'prop-types';

const Task = (props) => {

    const [mounted, setMount] = useState(false);
    useEffect(() => setMount(true));

    return (
        <StyledTask visible={mounted}>
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
    grid-template-columns: 2.2em auto;
    margin-bottom: 4px;
    opacity: ${props => props.visible ? '1' : '0'};
    padding: 0.7em 0.5em;
    text-align: left;
    transition: all 0.5s;
`;

const StyledText = styled.div`
    color: ${ colors.BLACK };
    font-size: 0.85em;
`;
export default Task;