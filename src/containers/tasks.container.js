import React from 'react';
import Task from '../components/task.component';
import styled from 'styled-components'; 
import PropTypes from 'prop-types';


export default class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.tasks,
            not_started: [],
            complete: []
        }
    }


    componentWillMount() {
        console.log('init not_started status: ', this.state.not_started);
        this.state.tasks.filter(task => {
            if (task.status === 'complete') {
                this.state.complete.push(task);
            } else {
                this.state.not_started.push(task);
            }
        })
    }
    


    handleCompletedTask = (e) => {
        this.setState(state => {
            const tasks = state.not_started.map((task, index) => {
                console.log('e', e, 'index', index);
                if (index === e) {
                    task.status = 'complete'
                    state.complete.unshift(task);
                    state.not_started.splice((index, e), 1)
                    return;
                }
                else return;
            });
            return tasks;
        });
    }

    render() {
        return (
            <StyledWrapper>
                <h2>NOT STARTED</h2>
                <ul>
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
                </ul>


                <h2>COMPLETED</h2>
                
                <ul>
                    {
                        this.state.complete.map(task => {
                        return (
                            <Task key={ task.id } 
                                status='complete'
                                task={ task.description }
                                value={ task.id } />
                            )
                        })
                    }
                </ul>
            </StyledWrapper>
        );
    }
}


const StyledWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;
