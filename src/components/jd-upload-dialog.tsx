import { Upload } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropZone } from "./dropzone";

export function UploadJD() {
  const [files, setFiles] = useState<File[]>([]);
  const [open, setOpen] = useState(false);

  const handleUpload = () => {
    if (!files || files.length === 0) return;

    for (const file of files) {
      console.log("Uploading:", file.name);
    }
  };
  const handleClose = () => {
    setOpen(!open);
    setFiles([]);
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Upload /> Upload
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload JD</DialogTitle>
        </DialogHeader>

        <DropZone files={files} setFiles={setFiles} multiple={false} />

        <DialogFooter className="mt-4">
          <Button
            onClick={handleUpload}
            disabled={!files || files.length === 0}
          >
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
