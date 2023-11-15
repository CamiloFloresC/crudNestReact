import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Applications } from "../pages/Applications";
import { Group } from "../pages/Groups";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <section>Error</section>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/applications",
        element: <Applications />,
      },
      {
        path: "/group",
        element: <Group />,
      },
    ],
  },
]);
