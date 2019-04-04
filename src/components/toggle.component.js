import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'



const StyledButton = styled.button`
  background-color: ${props => props.status === 'complete' ? 'grey' : 'transparent'};
  border-radius: 100%;
  border-color: ${props => props.status === 'complete' ? 'pink' : 'transparent'};
  width: 30px;
  height: 30px;
`;


const Toggle = (props) => {

    const { clicked, status, value } = props;

    return (
        <div>
        { status === 'not_started' ?
          <StyledButton onClick={clicked} value={value} />
          : 
          <StyledButton value={value} />
        }
        </div>
    )
}

Toggle.propTypes = {
  clicked: PropTypes.any,
  isCompleted: PropTypes.string,
  value: PropTypes.string,
}

export default Toggle;