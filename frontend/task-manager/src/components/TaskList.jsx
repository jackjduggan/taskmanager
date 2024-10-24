import React from 'react';
import TaskCard from './TaskCard';

export default function TaskList({ tasks }) {
    return (
        <>
            <div className='task-header'>
                <span>Title</span>
                <span>Description</span>
                <span>Status</span>
                <span>Priority</span>
                <span>Due Date</span>
            </div>
            <ul className='task-main'>
                {tasks.map((task, index) => (
                    <TaskCard
                        key={index}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                        priority={task.priority}
                        dueDate={task.dueDate}
                    />
                ))}
            </ul>
        </>
    );
}
