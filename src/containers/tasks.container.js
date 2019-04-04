import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

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
            console.log(state.not_started);
            const not_started_tasks = state.not_started.map((task, index) => {
                console.log(index, e)
                if (index === e) {
                    console.log(index, e)
                    state.complete.push(task);
                    state.not_started.splice(index, e);
                    task.status = 'complete'
                    return task;
                } else return task;
                
            });

            return not_started_tasks;

        });

        console.log('after click not_started status: ', this.state.not_started);
    }

    render() {
        return (
            <React.Fragment>
                <h2>NOT STARTED</h2>
                <ul>
                    {
                        this.state.not_started.map((t, index) => {
                        return (
                            <li key={t.description}>
                                <button onClick={() => this.handleCompletedTask(index)} value={t.id}>ICON</button>
                                {` ${t.description} - status ${t.status} `}
                            </li>
                            )
                        })
                    }
                </ul>


                <h2>COMPLETED</h2>
                
                <ul>
                    {
                        this.state.complete.map(t => {
                        return (
                            <li key={t.description}>
                                <input type="button" value={t.id} ref={t.id} />
                                {` ${t.description} - status ${t.status} `}
                            </li>
                            )
                        })
                    }
                </ul>
            </React.Fragment>
        );
    }
}

Tasks.propTypes = propTypes;
Tasks.defaultProps = defaultProps;