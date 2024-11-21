// local imort
import SinglePage from "./routes/singlePage/SinglePage";
import HomePage from "./routes/homepage/HomePage";
import ListPage from "./routes/listpage/ListPage";
import { Layout, RequireAuth } from "./routes/layout/Layout";
import Login from "./routes/loginPage/LoginPage";
// pkg import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./routes/profile/Profile";
import ProfileUpdate from "./routes/profileUpdate/ProfileUpdate";
import Register from "./routes/register/Register";
import NewPostPage from "./routes/newPostPage/NewPostPage";
import { listPageLoader, singlePageLoader } from "./lib/loaders";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

// errorboundary or errorElement
