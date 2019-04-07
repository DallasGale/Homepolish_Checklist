import React from 'react';
import styled from 'styled-components'; 
import * as colors from '../../styles/colors';

const ListTitle = (props) => {

    const { children, color } = props;
    
    return(
        <StylesH2 color={ color }>
            { children }
        </StylesH2>
    )
} 

const StylesH2 = styled.h2`
    border-bottom: 2px solid ${colors.THEME_MEDIUM_GREY};
    color: ${props => props.color || colors.BLACK };
    font-size: 0.85em;
    margin-bottom: 0;
    padding-left: 0.8em;
    padding-bottom: 1em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
`;

export default ListTitle;