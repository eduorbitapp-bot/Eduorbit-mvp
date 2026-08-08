import { useRef } from "react";

export default function StudentPhoto({
  photo,
  name,
  onChange,
}) {
  const inputRef = useRef(null);

  function handleFile(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Photo must be smaller than 2 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      onChange(reader.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="student-photo">
      {photo ? (
        <img
          src={photo}
          alt={name || "Student"}
          className="student-photo-image"
        />
      ) : (
        <div className="student-photo-placeholder">
          {name?.charAt(0)?.toUpperCase() || "S"}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        hidden
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
      >
        {photo ? "Change Photo" : "Upload Photo"}
      </button>

      {photo && (
        <button
          type="button"
          onClick={() => onChange("")}
        >
          Remove
        </button>
      )}
    </div>
  );
}
