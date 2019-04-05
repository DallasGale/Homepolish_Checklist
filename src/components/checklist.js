import React from 'react';
import Tasks from '../containers/tasks.container';
import styled from 'styled-components'

const StyledChecklist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Checklist = ({ tasks }) => (
  <StyledChecklist> 
    <Tasks tasks={tasks} />
  </StyledChecklist>
);

export default Checklist;
