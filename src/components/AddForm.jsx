import { GrUpdate, GrAdd } from 'react-icons/gr';

const AddForm = ({ addTask, setTaskName, taskName, edit }) => {
  return (
    <form className="add-form" onSubmit={(e) => e.preventDefault() + setTaskName('')}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={() => addTask(taskName)}>
        {!edit && <GrAdd size={20} />}
        {edit && <GrUpdate size={17} />}
      </button>
    </form>
  );
};

export default AddForm;
