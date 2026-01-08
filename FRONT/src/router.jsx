import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LabIALanding from "./pages/LabIALanding";
import LabResultsPage from "./pages/LabResultsPage";
import Analysis from "./pages/Analysis";
import Upload from "./pages/Upload";
import Manual from "./pages/Manual";
import ManualValues from "./pages/ManualValues";


export const router = createBrowserRouter([
  { path: "/", element: <LabIALanding /> },
  { path: "/analysis", element: <Analysis /> },
  { path: "/upload", element: <Upload /> },
  { path: "/manual", element: <Manual /> },
  { path: "/manual/values", element: <ManualValues />},
  { path: "/results", element: <LabResultsPage /> }
]);
