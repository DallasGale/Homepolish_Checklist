import React from 'react';
import TaskList from '../components/taskList.component';
import styled from 'styled-components'; 
import ToastContainer from './toast.container';
import * as colors from '../styles/colors';

export default class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedTask: '',
            complete: [],
            not_started: [],
            tasks: this.props.tasks,
            toasts: [],
            toggledTodo: false,
            showToast: false,
            mounted: false
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


        // clearInterval(this.toastTimer());
        this.setState(state => {
           
            const tasks = state.not_started.map((task, index) => {
                if (index === e) {
                    task.status = 'complete'
                    state.complete.unshift(task);
                    state.not_started.splice((index, e), 1)
                    state.clickedTask = `Completed  "${task.description}."`
                    state.showToast = true;

                    // Hide toast after time...
                    // if (this.state.showToast) {
                    //     this.toastTimer();

                    // } else return;

                    return task;
                }
                else return task;
            });
            return tasks;
        });

        this.setState({
            toggledTodo: !this.state.toggledTodo,
            mounted: true
        });
        
        this.handleTime();




    }

    // Handler to re-assign task back to 'not_started' status
    handleRevertTask = (e) => {
        this.setState(state => {
            const tasks = state.complete.map((task, index) => {
                if (index === e) {

                    task.status = 'not_started'
                    state.not_started.unshift(task);
                    state.complete.splice((index, e), 1)
                    state.clickedTask = `Not Started  "${task.description}."`
                    state.showToast = true;
                    
                    return task;
                }
                else return task;

            });
            return tasks;
        });

    }

    handleTime = () => {
        console.log('start');
        setTimeout(() => {
            this.setState({
                mounted: false
            })
        }, 3000);
        console.log('finish');
    }


    render() {
        return (
            <StyledWrapper>
                {/* <div style={{opacity: `${this.state.showToast ? 1 : 0}`}}> */}
                    {/* <ToastContainer task={this.state.clickedTask} showToast={this.state.showToast} mounted={this.state.mounted} /> */}
                {/* </div> */}
                { this.state.showToast 
                    ? 
                    <ToastContainer task={this.state.clickedTask} showToast={this.state.showToast}  mounted={this.state.mounted}/>
                    : '' 
                }
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