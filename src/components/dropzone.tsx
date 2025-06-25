import { UploadCloud } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

type DropZoneProps = {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  multiple?: boolean;
};

export function DropZone({ files, setFiles, multiple = true }: DropZoneProps) {
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: any[]) => {
      const validFiles = acceptedFiles.filter((file) =>
        /\.(pdf|doc|docx)$/i.test(file.name),
      );

      if (
        validFiles.length !== acceptedFiles.length ||
        fileRejections.length > 0
      ) {
        setError("Only .pdf, .doc, and .docx files are allowed.");
      } else {
        setError(null);
      }

      if (validFiles.length > 0) {
        if (multiple) {
          setFiles((prev) => [...prev, ...validFiles]);
        } else {
          setFiles(validFiles.slice(0, 1));
        }
      }
    },
    [setFiles, multiple],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-6 text-sm transition-colors cursor-pointer
        ${
          isDragActive
            ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
            : "border-muted text-muted-foreground hover:bg-muted/40"
        }`}
    >
      <input {...getInputProps()} />
      <UploadCloud className="h-5 w-5 text-muted-foreground" />
      <p className="text-center">
        {isDragActive
          ? "Drop the files here..."
          : "Drag & drop .pdf or .doc files or click to upload"}
      </p>

      {error && <p className="text-red-500 text-xs">{error}</p>}

      <div className="mt-2 space-y-1 text-xs text-muted-foreground">
        {files.map((file) => (
          <p key={file.name}>{file.name}</p>
        ))}
      </div>
    </div>
  );
}
