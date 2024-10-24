import React from 'react';

export default function TaskCard({ title, description, status, priority, dueDate }) {
    const getPriorityClass = (priority) => {
        switch (priority) {
          case 'URGENT':
            return 'priority-urgent';
          case 'HIGH':
            return 'priority-high';
          case 'MEDIUM':
            return 'priority-medium';
          case 'LOW':
            return 'priority-low';
          default:
            return '';
        }
      };

    return (
        <li className='task-item'>
        <div className='task-details'>
            <span>{title}</span>
            <span>{description}</span>
            <span>{status}</span>
            <span className={`priority ${getPriorityClass(priority)}`}>{priority}</span>
            <span>{new Date(dueDate).toLocaleString()}</span>
        </div>
        </li>
    );
}
