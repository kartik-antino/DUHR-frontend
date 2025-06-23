import { UploadCloud } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export function DropZone() {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log(acceptedFiles);
      setFiles([...files, ...acceptedFiles]);
    },
    [files],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
          : "Drag & drop files or click to upload"}
      </p>
      <div>
        {files.map((file) => (
          <p key={file.name}>{file.name}</p>
        ))}
      </div>
    </div>
  );
}
