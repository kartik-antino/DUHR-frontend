import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UploadFilesDialog } from "./resume-upload-dialog";
export type Job = {
  id: string;
  title: string;
  resumeUpload: string;
  jdUpload: string;
};

export const columns: ColumnDef<Job>[] = [
  {
    accessorKey: "id",
    header: "Job ID",
  },
  {
    accessorKey: "title",
    header: "Job Title",
  },
  {
    accessorKey: "resumeUpload",
    header: "Upload Resume",
    cell: () => {
      return <UploadFilesDialog />;
    },
  },
  {
    accessorKey: "jdUpload",
    header: "Job Description",
    cell: ({ row }) => {
      const value = row.getValue<string>("jdUpload");
      return <span className="text-sm">{value}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const job = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="font-semibold">
              Actions
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(job.id)}
            >
              Copy Job ID
            </DropdownMenuItem>
            <DropdownMenuItem>View Job</DropdownMenuItem>
            {/* <DropdownMenuItem>Delete Job</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
