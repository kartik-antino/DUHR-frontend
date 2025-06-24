import type { ColumnDef } from "@tanstack/react-table";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import { UploadJD } from "./jd-upload-dialog";
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
    cell: () => {
      return <UploadJD />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const jobId = row.original.id;
      return (
        <Link
          to={`/job-dashboard/${jobId}`}
          className="flex items-center gap-2 group"
        >
          View Job{" "}
          <ArrowRight className="w-4 transform transition-all duration-200 group-hover:translate-x-0.5" />
        </Link>
      );
    },
  },
];
