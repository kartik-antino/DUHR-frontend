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
import { Input } from "./ui/input";

export function UploadFilesDialog() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [open, setOpen] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleUpload = () => {
    if (!files || files.length === 0) return;

    for (const file of files) {
      console.log("Uploading:", file.name);
    }
  };
  const handleClose = () => {
    setOpen(!open);
    setFiles(null);
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Upload /> Resume
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Multiple Files</DialogTitle>
        </DialogHeader>

        {/* <Input type="file" multiple onChange={handleFileChange} /> */}
        <DropZone />
        {files && files.length > 0 && (
          <ul className="mt-2 text-sm">
            {Array.from(files).map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        )}

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
