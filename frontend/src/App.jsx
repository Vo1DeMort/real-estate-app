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
  // 1:09 to revisit about the react router dom
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // need to know more about this children thing
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
    // auth required paths
    // i dont' really understand about this concept
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />, // this will depend on requireauth layout which demand login
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
  // need register and other routes

  return <RouterProvider router={router} />;
}

// errorboundary or errorElement
