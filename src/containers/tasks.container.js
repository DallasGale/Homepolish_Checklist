import React from 'react';
import Task from '../components/task.component';
import styled from 'styled-components'; 
import * as colors from '../styles/colors';
import PropTypes from 'prop-types';


export default class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.tasks,
            not_started: [],
            complete: [],
            toggledTodo: false
        }
    }


    componentWillMount() {
        // console.log('init not_started status: ', this.state.not_started);
        this.state.tasks.filter(task => {
            if (task.status === 'complete') {
                this.state.complete.push(task);
                return this.state.complete;
            } else {
                this.state.not_started.push(task);
                return this.state.not_started;
            }
        })
    }
    


    handleCompletedTask = (e) => {
        this.setState(state => {
            const tasks = state.not_started.map((task, index) => {
                // console.log('e', e, 'index', index);
                if (index === e) {
                    task.status = 'complete'
                    state.complete.unshift(task);
                    state.not_started.splice((index, e), 1)
                    return task;
                }
                else return task;
            });
            return tasks;
        });

        this.setState({
            toggledTodo: !this.state.toggledTodo
        });

    }

    render() {
        return (
            <StyledWrapper>
                <StyledContent>
                    <StylesH2>TO DO</StylesH2>
                    <StylesUl>
                        {
                            this.state.not_started.map((task, index) => {
                            return (
                                <Task key={task.id} 
                                    clicked={ () => this.handleCompletedTask(index) }
                                    status='not_started'
                                    task={ task.description }
                                    value={ task.id } />
                            
                                )
                            })
                        }
                    </StylesUl>
                </StyledContent>

                <StyledContent>
                    <StylesH2 color="#b8b8b8">
                        {this.state.complete.length} TASKS COMPLETED
                    </StylesH2>
                    
                    <StylesUl>
                        {
                            this.state.complete.map(task => {
                            return (
                                <Task key={ task.id } 
                                    completed="pink"
                                    status='complete'
                                    task={ task.description }
                                    value={ task.id } />
                                )
                            })
                        }
                    </StylesUl>
                </StyledContent>
            </StyledWrapper>
        );
    }
}


const StyledWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

const StyledContent = styled.div`
    background: ${colors.THEME_LIGHT_GREY};
    padding: 1em 2em;
`;

const StylesUl = styled.ul`
    padding-left: 0;
`;

const StylesH2 = styled.h2`
    color: ${props => props.color || colors.BLACK };
    font-size: 0.8em;
    letter-spacing: 0.2em;
`;
