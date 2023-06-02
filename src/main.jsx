import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './pages/Home/Home/Home';
import TaskUpdateForm from './components.jsx/Tasks/TaskUpdateForm';
import AddTask from './pages/AddTask/AddTask';
import Login from './pages/Login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "taskform/:id",
        element: <TaskUpdateForm></TaskUpdateForm>,
        loader: ({ params }) => fetch(`https://task-management-server-beryl.vercel.app/singletask/${params.id}`)
      },
      {
        path: "addtask",
        element: <AddTask />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
