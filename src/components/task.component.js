import React from 'react';
import Toggle from './toggle.component';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTask = styled.div`
  background: #fff;
  text-align: left;
  padding: 1em;
`;


const Task = (props) => {
    const { task } = props;
    return (
        <StyledTask>
            <Toggle {...props }/>
            { task }
        </StyledTask>
    )
}

Task.propTypes = {
    task: PropTypes.string,
}

export default Task;