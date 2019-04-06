import React from 'react';
import Task from '../task/task.component';
import styled from 'styled-components'; 
import * as colors from '../../styles/colors';
import PropTypes from 'prop-types';

const List = (props) => {
    
    const { count, clicked, data, title, status } = props;

    return (
        <StyledContent>
        { status === 'not_started' ?
            <React.Fragment>
                <StylesH2>{title}</StylesH2>
                <StylesUl>
                    {
                        data.map((task, arrIndex) => {
                        return (
                            <Task key={task.id} 
                                clicked={ () => clicked(arrIndex) }
                                status='not_started'
                                task={ task.description }
                                value={ task.id } />
                        
                            )
                        })
                    }
                </StylesUl>
            </React.Fragment>
            : 
            <React.Fragment>
                <StylesUl>
                    <StylesH2 color="grey">{count} {title}</StylesH2>
                    {
                        data.map((task, arrIndex) => {
                        return (
                            <Task key={ task.id } 
                                clicked={ () => clicked(arrIndex) }
                                status='complete'
                                task={ task.description }
                                value={ task.id } />
                            )
                        })
                    }
                </StylesUl>
            </React.Fragment>
    }
    </StyledContent>
    )
};

const StyledContent = styled.div`
    padding: 1em 1.3em 0 1.3em;
    &:last-child {
        padding-bottom: 1em;
    }
`;

const StylesUl = styled.ul`
    padding-left: 0;
    padding-top: 0;
    margin-top: 0;
`;

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

List.propTypes = {
    count: PropTypes.string,
    clicked: PropTypes.func, 
    data: PropTypes.array,
    title: PropTypes.string,
    status: PropTypes.string,
};

export default List;