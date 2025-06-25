import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddJobForm } from "./forms/add-job-form";

export function JobDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus />
            Add Job
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a job</DialogTitle>
            <DialogDescription>
              Enter job details and upload the JD. The job will appear in your
              dashboard after submission.
            </DialogDescription>
          </DialogHeader>
          <AddJobForm />
        </DialogContent>
      </form>
    </Dialog>
  );
}
