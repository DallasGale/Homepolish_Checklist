import React from 'react';
import styled from 'styled-components'

const StyledChecklist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Checklist = ({ tasks }) => (
  <StyledChecklist>
    <ul>
        {
            tasks.map(t => {
              return (
                <li>{` ${t.description} - status ${t.status} `}</li>
                )
              })
        }
    </ul>
    <div>The checklist</div>
  </StyledChecklist>
);

export default Checklist;
