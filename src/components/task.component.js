import React from 'react';
import Toggle from './toggle.component';
import styled from 'styled-components';
import * as colors from '../styles/colors';
import PropTypes from 'prop-types';

const StyledTask = styled.div`
    align-items: center;
    background: ${colors.WHITE};
    display: grid;
    grid-template-columns: 2em auto;
    margin-bottom: 4px;
    padding: 0.7em 0.5em;
    text-align: left;
    &:first-child {
        border-top: 2px solid ${colors.THEME_MEDIUM_GREY};
    }
`;

const StyledText = styled.div`
    color: ${ colors.BLACK };
    font-size: 0.8em;
`;

const Task = (props) => {
    const { task } = props;
    return (
        <StyledTask>
            <Toggle {...props }/>
                <StyledText>
                    { task }
                </StyledText>
        </StyledTask>
    )
}

Task.propTypes = {
    task: PropTypes.string,
}

export default Task;