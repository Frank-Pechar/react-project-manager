import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';

// To be rendered in main area of window (To the right of projectsSidebar) when no project is selected
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 w-2/3 m-auto pr-6 sm:pl-8">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain"
      />
      <h2 className="text-md sm:text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-xs sm:text-base text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
