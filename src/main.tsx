import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/theme-context.tsx";
import JobDashboard from "./pages/job-dashboard.tsx";
import JobDetail from "./pages/job-detail.tsx";
import Overview from "./pages/overview.tsx";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, Component: Overview },
      {
        path: "job-dashboard",
        Component: JobDashboard,
      },
      { path: "job-dashboard/:id", Component: JobDetail },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
