import { CopyCheck, Handshake, Paperclip, SquareUser } from "lucide-react";
import CandidateStats from "@/components/candidate-stats";
import DataCard from "@/components/data-card";
export default function Overview() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Overview of your recruitment activities and performance metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <DataCard label="Total Resumes" value="1247" icon={Paperclip} />
        <DataCard label="Match Found" value="1247" icon={CopyCheck} />
        <DataCard label="Interview Scheduled" value="1247" icon={SquareUser} />
        <DataCard label="Hired" value="1247" icon={Handshake} />
      </div>
      <div className="mt-10">
        <CandidateStats />
      </div>
    </div>
  );
}
