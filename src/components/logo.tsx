import logo from "@/assets/antino-logo.webp";
import darkLogo from "@/assets/antino-logo-dark.png";
import { THEME } from "@/constants";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  const { theme } = useTheme();
  return (
    <img
      src={theme === THEME.LIGHT ? logo : darkLogo}
      alt="antino logo"
      className={cn("w-8/12", className)}
    />
  );
}
