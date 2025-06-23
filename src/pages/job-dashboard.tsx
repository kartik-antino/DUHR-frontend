import Container from "@/components/container";
import { DataTable } from "@/components/data-table";
import { JobDialog } from "@/components/job-dialog";
import { columns } from "@/components/jobs-column";

function getData() {
  return [
    {
      id: "job-001",
      title: "Frontend Developer",
      resumeUpload: "resume-frontend.pdf",
      jdUpload: "jd-frontend.pdf",
    },
    {
      id: "job-002",
      title: "Backend Developer",
      resumeUpload: "resume-backend.pdf",
      jdUpload: "jd-backend.pdf",
    },
    {
      id: "job-003",
      title: "Data Analyst",
      resumeUpload: "resume-analyst.pdf",
      jdUpload: "jd-analyst.pdf",
    },
  ];
}

export default function JobDashboard() {
  const data = getData();

  return (
    <Container>
      <div className="flex justify-between mb-10">
        <div>
          <h1 className="text-2xl font-semibold">All Jobs</h1>
          <p className="text-sm text-zinc-600">
            All your jobs listed here with quick access to details and actions.
          </p>
        </div>
        <JobDialog />
      </div>
      <DataTable columns={columns} data={data} />
    </Container>
  );
}
