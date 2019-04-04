# Plan for challenge

**Initial state**
```javascript

this.state = {
    completedAlert: false,
    todos: [],
    notStarted: [],
    completed: [], 
}

```


**Stateless Components**
```html
<TodoItem />
<TodoRadioButton />
<CompletedAlert />
```

**Statefull Containers**
```html
<Todos />
<NotStartedList />
<CompletedList />
```

**Handler functions**
```javascript
// to be assigned to the not_started todos button.
handleCompletedTodo = (e, todo) => {
    
    if (todo === e.target.value) {
        this.setState({
            status: 'completed'
        })
        this.state.completed.push(todo);

    } else {
        return;
    }

}

```

**< TodoItem />** Component
```javascript

const TodoItem = (props) => {
    const { handleClick, statusClass, todo } = this.props;
    return (
        <div>
            <input type="button" value={todo} className={statusClass} onClick={ handleClick } />
            { todo }
        </div>
    )
}

TodoItem.propTypes = {
    handleClick: PropTypes.function,
    statusClass: PropTypes.string,
    todo: PropTypes.string,
}
```

**< Completed Alert />** Component

```javascript

const CompletedAlert = (props) => {
    const { todo } = props;
    return (
        <div>
            Completed { todo }
        </div>
    )
}

CompletedAlert.propTypes = {
    todo: PropTypes.string,
}
```



**< Todos />** Container

```javascript
class Todos extends React.Compomnent {
    constructor() {
        super();
        this.state = {
            // insert above state
        }
    }
    render() {
        const todos = this.state.todos;

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
            <>
                { this.state.completedAlert ? <CompletedAlert name={ this.state.todoCompleted } /> : '' }
                <NotStartedList>
                    { this.state.notStarted }
                </NotStartedList>

                <CompletedList>
                    { this.state.completed }
                </CompletedList>
            </>
        )
    }
}
```