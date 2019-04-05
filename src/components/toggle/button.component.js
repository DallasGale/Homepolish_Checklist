import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Button = (props) => {
    const { clicked, value } = props;
    return (
        <StyledButtonWrapper onClick={clicked} value={value}>
            <StyledButton>
                <StyledButtonInner />
            </StyledButton>
        </StyledButtonWrapper>
    );
}

Button.propTypes = {
  clicked: PropTypes.any,
  value: PropTypes.string,
}

const StyledButtonWrapper = styled.button`
    border: 0;
    background: none;
    text-align: center;
    width: 20px;
    height: 20px;
    padding: 0;
    position: relative;
`;
const StyledButton = styled.div`
    background: white;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 2px solid grey;
    position: relative;
    margin: 0 auto;
`;
const StyledButtonInner = styled.div`
    background-color: ${props => props.buttonState === 'complete' ? `${colors.THEME_COMPLETED}` : `${colors.WHITE}`}; 
    width: 18px;
    height: 18px;
    border-radius: 15px;
    margin: 0 auto;
    position: relative;
    top: 1px;
`;


export default Button;