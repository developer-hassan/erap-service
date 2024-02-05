import { useDropzone } from "react-dropzone";
import { ReactNode, useCallback, useState } from "react";
import { FaImages } from "react-icons/fa6";

export default function FileInput({
  onUpload,
  name,
  children,
}: {
  onUpload: (file: File) => void;
  name: string;
  children: ReactNode;
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
      className={`cursor-pointer w-full items-center justify-center flex flex-col gap-y-3 h-64 border-2 border-dashed rounded-lg p-4 ${
        isDragActive ? "border-blue-500" : "border-gray-300"
      }`}
    >
      <div className={"flex flex-col justify-center items-center "}>
        <FaImages className={"w-6 h-6 text-center"} />
        <label
          htmlFor={name}
          className="text-blue-500 font-semibold text-center cursor-pointer"
        >
          {children}
        </label>
      </div>

      <input name={name} {...getInputProps()} />
      {selectedImage && (
        <div className={"overflow-hidden w-full"}>
          <img
            src={selectedImage}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
