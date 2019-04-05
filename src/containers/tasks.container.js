import React from 'react';
import TaskList from '../components/taskList.component';
import styled from 'styled-components'; 
import * as colors from '../styles/colors';

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

    // Filter exisiting tasks into their default status on load...
    componentWillMount() {
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
    

    // Handler to assign task to 'complete' status
    handleCompletedTask = (e) => {
        this.setState(state => {
            const tasks = state.not_started.map((task, index) => {
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

    // Handler to re-assign task back to 'not_started' status
    handleRevertTask = (e) => {
        this.setState(state => {
            const tasks = state.complete.map((task, index) => {
                console.log(index, e);
                if (index === e) {

                    task.status = 'not_started'
                    state.not_started.unshift(task);
                    state.complete.splice((index, e), 1)
                    console.log(e);
                    return task;
                }
                else return task;
            });
            return tasks;
        });

    }


    render() {
        return (
            <StyledWrapper>
                <TaskList 
                    clicked={this.handleCompletedTask} 
                    data={this.state.not_started}  
                    status='not_started' 
                    title="To do" />

                <TaskList 
                    count={this.state.complete.length} 
                    clicked={this.handleRevertTask}
                    data={this.state.complete} 
                    status='complete' 
                    title="Tasks Completed"  />
            </StyledWrapper>
        );
    }
}

const StyledWrapper = styled.div`
    background: ${colors.THEME_LIGHT_GREY};
    max-width: 510px;
    margin: 0 auto;
    width: 100%;
    position: relative;
`;