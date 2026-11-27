import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoginLayout from "./layouts/LoginLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
<<<<<<< HEAD
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
=======
>>>>>>> 4dfae2623bfaf1afdb540d9640140a9228da91b3
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
<<<<<<< HEAD
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element: <PostDetail />,
      },
=======
      {},
>>>>>>> 4dfae2623bfaf1afdb540d9640140a9228da91b3
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "create",
            element: <CreatePost />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
