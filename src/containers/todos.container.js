import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodosContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completedAlert: false,
            todos: this.props.data,
            todoCompleted: '',
        }
    }
    render() {
        const todos = this.state.todos;
        console.log(todos);

        // const completedTodos = todos.filter(todo => {
        //     if (todo.not_started) {
        //         return <TodoItem statusClass="not_started" todo={ todo.name } handleClick={() => this.handleCompletedTodo()} />
        //     }
        // })

        // const notStartedTodos = todos.filter(todo => {
        //     if (todo.completed) {
        //         return  <TodoItem statusClass="completed" todo={ todo.name } />
        //     }
        // });

        
        return (
            <React.Fragment>
                {/* { this.state.completedAlert ? <CompletedAlert name={ this.state.todoCompleted } /> : '' }
                <NotStartedList>
                    { notStartedTodos }
                </NotStartedList>

                <CompletedList>
                    { completedTodos }
                </CompletedList> */}
            </React.Fragment>
        )
    }
}

TodosContainer.propTypes = {

};

export default TodosContainer;