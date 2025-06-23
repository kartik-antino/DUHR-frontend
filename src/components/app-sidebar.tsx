import { Files, LayoutDashboard } from "lucide-react";
import { Link } from "react-router";
import logo from "@/assets/antino-logo.webp";
import darkLogo from "@/assets/antino-logo-dark.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { THEME } from "@/constants";
import { useTheme } from "@/contexts/theme-context";
import { ThemeToggle } from "./theme-toggle";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Jobs",
    url: "/job-dashboard",
    icon: Files,
  },
];

export function AppSidebar() {
  const { theme } = useTheme();
  return (
    <Sidebar>
      <SidebarHeader className="py-5 px-5">
        <img
          src={theme === THEME.LIGHT ? logo : darkLogo}
          alt="antino logo"
          className="w-8/12"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
