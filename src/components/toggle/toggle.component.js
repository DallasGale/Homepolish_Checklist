import React from 'react';
import PropTypes from 'prop-types';
import * as colors from '../../styles/colors';
import styled from 'styled-components'

const Toggle = (props) => {

    const { clicked, status, value } = props;

    return (
            <StyledButton 
              taskStatus={status}
              onClick={clicked} 
              value={value}>
                <StyledButtonBorder
                  taskStatus={status}>
                    <StyledButtonInner taskStatus={status} />
                </StyledButtonBorder>
            </StyledButton>
    )
};

const StyledButton = styled.button`
    border: 0;
    background: none;
    cursor: pointer;
    text-align: center;
    width: 20px;
    height: 20px;
    padding: 0;
    position: relative;
`;
export const StyledButtonBorder = styled.div`
    background: white;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid;
    border-color: ${props => props.taskStatus === 'complete' ? `${colors.THEME_COMPLETED}` : `${colors.THEME_NOT_STARTED}`};
    position: relative;
    margin: 0 auto;
`;
export const StyledButtonInner = styled.div`
    background-color: ${props => props.taskStatus === 'complete' ? `${colors.THEME_COMPLETED}` : `${colors.WHITE}`}; 
    width: 18px;
    height: 18px;
    border-radius: 15px;
    margin: 0 auto;
    position: relative;
    top: 1px;
    transition: all 0.3s;
    &:hover {
      background-color: ${props => props.taskStatus === 'complete' ? `${colors.BLACK}` : `${colors.THEME_NOT_STARTED}`};
      transition: all 0.3s;
    }
`;

Toggle.propTypes = {
  clicked: PropTypes.func,
  isCompleted: PropTypes.string,
  value: PropTypes.string,
}

export default Toggle;