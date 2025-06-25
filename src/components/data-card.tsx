import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";

type IconType = ComponentType<{ className?: string }>;

export default function DataCard({
  value,
  label,
  icon: Icon,
  className,
}: {
  value?: string;
  label?: string;
  icon?: IconType;
  className?: string;
}) {
  return (
    <Card className={cn(className)}>
      <CardContent className="flex items-center space-x-8 lg:space-x-10">
        {Icon && (
          <div className="p-2 bg-muted rounded-md text-primary">
            <Icon className="h-10 w-10" />
          </div>
        )}
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-lg font-semibold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
