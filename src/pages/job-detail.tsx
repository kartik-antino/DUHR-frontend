import { useParams } from "react-router";
import { DataTable } from "@/components/data-table";
import type { Job } from "@/components/jobs-column";
import { getResumeColumns, type Resume } from "@/components/resume-column";

function getData(id: string | undefined): Job | undefined {
  if (!id) return;
  const jobs = [
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
  const filteredJobs = jobs.filter((job) => job.id === id);
  return filteredJobs.length === 0 ? undefined : filteredJobs[0];
}

export default function JobDetail() {
  const { id } = useParams();
  const job = getData(id);
  const resumeData: Resume[] = [
    {
      id: "1",
      name: "Aarav Mehta",
      email: "aarav.mehta@example.com",
      phone: "+91-9876543210",
      resumeLink: "https://example.com/resumes/aarav-mehta.pdf",
      status: "Interview Scheduled",
    },
    {
      id: "2",
      name: "Ishita Verma",
      email: "ishita.verma@example.com",
      phone: "+91-9123456780",
      resumeLink: "https://example.com/resumes/ishita-verma.pdf",
      status: "Pending",
    },
    {
      id: "3",
      name: "Rohan Das",
      email: "rohan.das@example.com",
      phone: "+91-9812345678",
      resumeLink: "https://example.com/resumes/rohan-das.pdf",
      status: "Rejected",
    },
    {
      id: "4",
      name: "Neha Kapoor",
      email: "neha.kapoor@example.com",
      phone: "+91-9098765432",
      resumeLink: "https://example.com/resumes/neha-kapoor.pdf",
      status: "Interview Scheduled",
    },
  ];
  return (
    <>
      <div className="flex justify-between mb-10">
        <div>
          <h1 className="text-2xl font-semibold">{job?.title}</h1>
          <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-400">
            Job Id: {job?.id}
          </p>
          <p className="text-sm text-zinc-600 mt-2 dark:text-zinc-400">
            Review shortlisted candidates for this job — matched based on their
            qualifications and resume alignment with the job description.
          </p>
        </div>
      </div>
      <DataTable columns={getResumeColumns()} data={resumeData} />
    </>
  );
}
