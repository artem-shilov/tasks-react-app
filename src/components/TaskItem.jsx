import { GrCheckboxSelected, GrCheckbox, GrTrash, GrEdit } from 'react-icons/gr';

const TaskItem = ({ title, completed, completeTask, removeTask, editTask }) => {
  return (
    <li className="task">
      <div className="check-item">
        <div onClick={completeTask}>
          {completed && <GrCheckboxSelected className="check" />}
          {!completed && <GrCheckbox className="check" />}
        </div>
        <span className={completed ? 'complete' : ''}>{title}</span>
      </div>
      <div className="icons">
        <GrEdit className="edit" onClick={editTask} />
        <GrTrash className="remove" onClick={removeTask} />
      </div>
    </li>
  );
};

export default TaskItem;
