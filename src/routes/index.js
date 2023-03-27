import { Home, ErrorPage, Login } from "../pages";

const routes = [
  {
    key: "1",
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    key: "2",
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
