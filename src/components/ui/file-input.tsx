import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

export default function FileInput({
  onUpload,
  name,
}: {
  onUpload: (file: File) => void;
  required: boolean;
  name: string;
}) {
  const [selectedImage, setSelectedImage] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropAccepted: (files) => {
      onUpload(files[0]);
    },
    accept: { "image/*": [".png", ".gif", ".jpeg", ".jpg"] },
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full h-64 border-2 border-dashed rounded-lg p-4 ${
        isDragActive ? "border-blue-500" : "border-gray-300"
      }`}
    >
      <input name={name} {...getInputProps()} />
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Preview"
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <p className="text-gray-500 text-center">
          Click or drag & drop an image here
        </p>
      )}
    </div>
  );
}
