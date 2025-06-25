import type { ColumnDef } from "@tanstack/react-table";

import StatusDropdown from "./status-dropdown";
export type Resume = {
  id: string;
  name: string;
  email: string;
  phone: string;
  resumeLink: string;
  status: "Interview Scheduled" | "Pending" | "Rejected";
};

export function getResumeColumns(): ColumnDef<Resume>[] {
  return [
    {
      accessorKey: "name",
      header: "Candidate Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone Number",
    },
    {
      accessorKey: "resumeLink",
      header: "Resume",
      cell: ({ row }) => {
        const { resumeLink } = row.original;
        return (
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Resume
          </a>
        );
      },
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        return <StatusDropdown status={row.original.status} />;
      },
    },
  ];
}
