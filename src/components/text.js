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
  const [edit, setEdit] = useState(null);
  useEffect(() => {
    if (edit) {
      setTasks(edit.title);
    } else {
      setTasks('');
    }
  }, [setTasks, edit]);
  const updateTask = (title, id, completed) => {
    const newTask = tasks.map((task) => (task.id === id ? { title, id, completed } : task));
    setTasks(newTask);
    setEdit('');
  };
  function editTask(id) {
    const findTask = tasks.find((task) => task.id === id);
    setEdit(findTask);
  }


