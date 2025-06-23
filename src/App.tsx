import { Outlet } from "react-router";
import { AppSidebar } from "./components/app-sidebar";
import Container from "./components/container";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <Container>{<Outlet />}</Container>
    </SidebarProvider>
  );
}

export default App;
