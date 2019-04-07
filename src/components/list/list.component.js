import React from 'react';
import Task from '../task/task.component';
import styled from 'styled-components'; 
import ErrorBoundary from '../../containers/errorBoundary.container';
import PropTypes from 'prop-types';

const List = (props) => {
    
    const { 
        children, 
        clicked, 
        data, 
        status } = props;

    return (
        <ErrorBoundary>
            <StyledContent>
                { children }
                <StylesUl>
                    {
                        data.map((task, arrIndex) => {
                        return (
                            <Task key={task.id} 
                                clicked={ () => clicked(arrIndex) }
                                status={ status }
                                task={ task.description }
                                value={ task.id } />
                        
                            )
                        })
                    }
                </StylesUl>    
            </StyledContent>
        </ErrorBoundary>
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


List.propTypes = {
    count: PropTypes.string,
    clicked: PropTypes.func, 
    data: PropTypes.array,
    title: PropTypes.string,
    status: PropTypes.string,
};

export default List;