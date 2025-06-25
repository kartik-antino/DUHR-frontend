import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/theme-context.tsx";
import AuthLayout from "./layouts/auth-layout.tsx";
import JobDashboard from "./pages/job-dashboard.tsx";
import JobDetail from "./pages/job-detail.tsx";
import Login from "./pages/login.tsx";
import Overview from "./pages/overview.tsx";
import Register from "./pages/register.tsx";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, Component: Overview },
      {
        path: "job-dashboard",
        Component: JobDashboard,
      },
      {
        path: "job-dashboard/:id",
        Component: JobDetail,
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
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
