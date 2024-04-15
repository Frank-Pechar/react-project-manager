# Project Manager App
## React Project

## Description of App Functionality, Features, and Methods

React project I completed from Udemy: React - The Complete Guide 2023 (incl. React Router & Redux) by Maximilian Schwarzmuller. After coding this project I made modifications for mobile responsive design. Also added comments for educational purposes.

App can be run from: https://frank-pechar-react-project-manager.netlify.app/

## App Description

This App provides for creating and maintaining a projects list along with tasks within each project

## App Functionality

Add a Project

  - Click Create new project&gt; Button in Main Section, or, Click &lt;+Add Project&gt; Button in sidebar section
  - Enter Project Title, Description, and Due Date
  - Click &lt;Save&gt; Button to add project
  - Click &lt;Cancel&gt; Button to cancel adding new project

Display a Project and Tasks
  - Click Project Title in sidebar to display

Remove Project from Project List
  - Click Project Title in sidebar to select
  - Click &lt;Delete&gt; Button</li>

Add Tasks to Project
  - Click Project Title in Sidebar to Select
  - Enter Task Item
  - Click &lt;Add Task&gt; Button

Remove Task from Project
  - Click Project Title in Sidebar to Select
  - Click &lt;Clear&gt; Button Next to the Task to be Removed

## React Features and Methods Used

  - Processing user input with Refs and Forwarded Refs
  - Implemented useImperativeHandle to allow access to child (Modal) function within parent (NewProject) to open modal
  - Use of Portal to render modal into DOM
  - Rendering and updating state data using useState hook
  - Use of Set State callback function parameter to ensure most current state
  - Usage of props and props.children
  - Maintaining minimum state management
  - Two way binding of input fields
  - Use of list Keys for unique id
  - Deriving and lifting computed values
  - Retaining immutability
  - Tailwind & Dynamic styling
