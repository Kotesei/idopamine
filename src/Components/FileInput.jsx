import { useState } from "react";

export function CustomFileInput() {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (event) => {
    if (event.target.files.length > 1) {
      setFileName(`${event.target.files.length} files Selected`);
    } else if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <div className="file-input">
      <input
        type="file"
        id="imageInput"
        className="hidden-input"
        onChange={handleFileChange}
        multiple
      />
      <label htmlFor="imageInput" className={`button input-button`}>
        Choose File
      </label>
      <span className="file-name">{fileName}</span>
    </div>
  );
}
