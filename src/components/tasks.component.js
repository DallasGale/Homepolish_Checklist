import React from 'react';
import PropTypes from 'prop-types';

export default (props) => {
    const { taskCategory, tasks} = props;

    return (
        <div>
            <h2>{ taskCategory }</h2>
            {
                tasks.map(task => {
                    <Task props={...props} />
                })
            }
        </div>
    );
};

{/* <div >
<h2>{this.state.complete.length} TASKS COMPLETED</h2>

<ul>
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
</ul>
</div> */}