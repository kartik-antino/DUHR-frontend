import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-md",
        "transition-all duration-300",
        "hover:bg-muted hover:text-primary dark:hover:bg-zinc-800",
        "ring-1 ring-transparent hover:ring-ring",
      )}
    >
      <div className="relative h-4 w-4">
        <Sun className="absolute inset-0 h-4 w-4 transition-all duration-300 opacity-100 dark:opacity-0" />
        <Moon className="absolute inset-0 h-4 w-4 transition-all duration-300 opacity-0 dark:opacity-100" />
      </div>

      <span className="hidden sm:inline text-sm font-medium">{theme}</span>
    </Button>
  );
}
