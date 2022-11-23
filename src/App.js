import { useEffect, useState } from 'react';
import TaskItem from './components/TaskItem';
import AddForm from './components/AddForm';

function App() {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialState);
  const [taskName, setTaskName] = useState('');
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(taskName) {
    if (!edit) {
      if (taskName)
        setTasks([
          ...tasks,
          { id: Math.round(Math.random() * 1000), title: taskName, completed: false },
        ]);
    } else {
      updateTask(taskName, edit.id, edit.completed);
    }
  }

  function editTask({ id }) {
    const findTask = tasks.find((task) => task.id === id);
    setEdit(findTask);
  }

  const updateTask = (title, id, completed) => {
    const newTask = tasks.map((task) => (task.id === id ? { title, id, completed } : task));
    setTasks(newTask);
    setEdit('');
  };

  useEffect(() => {
    if (edit) {
      setTaskName(edit.title);
    } else {
      setTaskName('');
    }
  }, [setTaskName, edit]);

  function completeTask(id) {
    const taskObj = [...tasks].filter((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(taskObj);
  }

  function removeTask(id) {
    const taskObj = [...tasks].filter((task) => task.id !== id);
    setTasks(taskObj);
  }

  return (
    <div className="App">
      <AddForm edit={edit} taskName={taskName} setTaskName={setTaskName} addTask={addTask} />
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          completed={task.completed}
          completeTask={() => completeTask(task.id)}
          removeTask={() => removeTask(task.id)}
          editTask={() => editTask(task)}
        />
      ))}
    </div>
  );
}

export default App;
