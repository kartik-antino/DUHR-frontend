import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { AppSidebar } from "./components/app-sidebar";
import Container from "./components/container";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { useUserStore } from "./stores/user-store";

function App() {
  const { isLoggedIn } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <Container>{<Outlet />}</Container>
    </SidebarProvider>
  );
}

export default App;
