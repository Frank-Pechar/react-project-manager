import NewTask from './NewTask.jsx';

export default function Tasks({ tasks, onAdd, onDelete }) {
  // To be rendered at the bottom area of project detail display
  return (
    <section>
      <h2 className="font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="py-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4 px-2">
              <span>{task.text}</span>
              <button
                className="text-xs text-stone-700 hover:text-red-500 pl-2"
                /* onDelete = App.handleDeleteTask */
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
