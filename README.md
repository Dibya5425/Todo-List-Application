# Todo List Application
![image](https://github.com/user-attachments/assets/d9c783db-f230-4bd4-8aee-fc8e35451522)


## Overview

This is a simple Todo List application built using React. It allows users to add, edit, delete, and mark tasks as completed. The application uses a dummy JSON file to simulate a data repository and stores the todo list in the browser's local storage for persistence.

## System Design

The application is structured as follows:

- **App Component**: The root component that sets up the router and renders the `TodoList` component.
- **TodoList Component**: The main component that manages the state of the todo list and handles user interactions such as adding, editing, deleting, and toggling tasks.
- **Data Storage**: The application uses a dummy JSON file for initial data and stores updates in the browser's local storage.
- **Styling**: The application uses TailwindCSS for styling.

## Implementation

The application is implemented in React with the following key features:

1. **Create Task**: Users can add new tasks by filling out a form with a title and description.
2. **Update Task**: Users can edit existing tasks by clicking the "Edit" button, which allows them to modify the title and description.
3. **Mark as Done**: Users can mark tasks as completed by clicking a checkbox.
4. **Delete Task**: Users can delete tasks by clicking the "Delete" button.
5. **Search Tasks**: Users can filter tasks by entering keywords in a search input.
6. **Expandable List**: Tasks are displayed in an expandable list format, showing the description and the last update timestamp when expanded.

## Setup and Running the Application

To set up and run the application locally, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Dibya5425/Todo-List-Application.git
   ```

2. **Navigate to the Project Directory**: Move into the project directory:

   ```bash
   cd Todo-List-Application
   ```

3. **Install Dependencies**: Install the necessary dependencies using npm:

   ```bash
   npm install
   ```

4. **Run the Application**: Start the development server:

   ```bash
   npm start
   ```

5. **Access the Application**: Open your browser and go to `http://localhost:3000` to view the application.

## Deployment

The application is deployed on Vercel. To update the deployment, push changes to the GitHub repository, and Vercel will automatically trigger a new deployment.
