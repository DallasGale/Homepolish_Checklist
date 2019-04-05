import React from 'react';
import PropTypes from 'prop-types';
import * as colors from '../styles/colors';
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.buttonState === 'complete' ? `${colors.THEME_COMPLETED}` : `${colors.WHITE}`};
  border: ${props => props.buttonState === 'complete' ? '2px' : '1px'} solid;
  border-radius: 100%;
  border-color: ${props => props.buttonState === 'complete' ? `${colors.THEME_MEDIUM_GREY}` : `${colors.THEME_NOT_STARTED}`};
  cursor: ${props => props.buttonState === 'complete' ? 'auto' : 'pointer'};
  height: 1.3em;
  width: 1.3em;
  &:hover {
    background-color: ${props => props.buttonState === 'complete' ? `${colors.THEME_COMPLETED}` : `${colors.THEME_NOT_STARTED}`};
    transition: all 0.3s;
  }
`;

const Toggle = (props) => {

    const { clicked, status, value } = props;
    return (
        <div>
        { status === 'not_started' ?
          <StyledButton onClick={clicked} value={value} />
          : 
          <React.Fragment>
            <StyledButton buttonState="complete" value={value} />
          </React.Fragment>
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