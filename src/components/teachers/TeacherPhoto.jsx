import { useRef } from "react";

export default function TeacherPhoto({
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
    <div className="teacher-photo">
      {photo ? (
        <img
          src={photo}
          alt={name || "Teacher"}
          className="teacher-photo-image"
        />
      ) : (
        <div className="teacher-photo-placeholder">
          {name?.charAt(0)?.toUpperCase() || "T"}
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
