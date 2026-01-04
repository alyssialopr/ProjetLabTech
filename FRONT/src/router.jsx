import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Upload from "./pages/Upload";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/analysis", element: <Analysis /> },
  { path: "/upload", element: <Upload /> },
]);
