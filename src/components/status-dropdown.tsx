import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type StatusType =
  | "Pending"
  | "Interview Scheduled"
  | "Rejected"
  | "Selected";

export default function StatusDropdown({ status }: { status: StatusType }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<StatusType | null>(null);
  const [currentStatus, setCurrentStatus] = useState<StatusType | null>(status);

  const handleStatusChange = (newStatus: StatusType) => {
    setSelectedStatus(newStatus);
    setDialogOpen(true);
  };

  const statusColor =
    currentStatus === "Interview Scheduled"
      ? "text-green-600"
      : currentStatus === "Rejected"
        ? "text-red-600"
        : "text-yellow-600";

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={`${statusColor} font-medium text-xs flex items-center gap-1`}
          >
            {currentStatus}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {["Pending", "Interview Scheduled", "Rejected", "Selected"].map(
            (statusOption) => (
              <DropdownMenuItem
                key={statusOption}
                onClick={() => handleStatusChange(statusOption as StatusType)}
              >
                {statusOption}
              </DropdownMenuItem>
            ),
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Status Change</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to change the status to{" "}
              <strong>{selectedStatus}</strong>?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (selectedStatus) {
                  setCurrentStatus(selectedStatus);
                }
                setDialogOpen(false);
              }}
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
