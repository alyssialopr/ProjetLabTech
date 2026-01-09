import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import LabIALanding from "./pages/LabIALanding";
import LabResultsPage from "./pages/LabResultsPage";
import Analysis from "./pages/Analysis";
import Upload from "./pages/Upload";
import Manual from "./pages/Manual";
import ManualValues from "./pages/ManualValues";
import Help from "./pages/Help";

export const router = createBrowserRouter([
  { path: "/", element: <Layout><LabIALanding /></Layout> },
  { path: "/analysis", element: <Layout><Analysis /></Layout> },
  { path: "/upload", element: <Layout><Upload /></Layout> },
  { path: "/manual", element: <Layout><Manual /></Layout> },
  { path: "/manual/values", element: <Layout><ManualValues /></Layout> },
  { path: "/results", element: <Layout><LabResultsPage /></Layout> },
  { path: "/help", element: <Layout><Help /></Layout> }
]);
