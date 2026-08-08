import { useEffect, useState } from "react";

const defaultSettings = {
  instituteName: "EduOrbit School",
  email: "admin@eduorbit.com",
  phone: "",
  address: "",
  academicYear: "2026-27",
};

export default function Settings() {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem("eduorbit_settings");

      if (saved) {
        return {
          ...defaultSettings,
          ...JSON.parse(saved),
        };
      }

      return defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  const [saved, setSaved] = useState(false);

  function updateField(field, value) {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));

    setSaved(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!settings.instituteName.trim()) {
      alert("Institute Name is required");
      return;
    }

    localStorage.setItem(
      "eduorbit_settings",
      JSON.stringify(settings)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  }

  return (
    <div className="main">

      <div className="settings-header">
        <div>
          <h2>Settings</h2>
          <p>Manage your institute information.</p>
        </div>
      </div>

      <form
        className="card settings-form"
        onSubmit={handleSubmit}
      >

        <h3>Institute Information</h3>

        <div className="settings-grid">

          <label>
            Institute Name *
            <input
              type="text"
              placeholder="EduOrbit School"
              value={settings.instituteName}
              onChange={(e) =>
                updateField(
                  "instituteName",
                  e.target.value
                )
              }
            />
          </label>

          <label>
            Email
            <input
              type="email"
              placeholder="admin@eduorbit.com"
              value={settings.email}
              onChange={(e) =>
                updateField(
                  "email",
                  e.target.value
                )
              }
            />
          </label>

          <label>
            Phone
            <input
              type="tel"
              placeholder="Institute phone number"
              value={settings.phone}
              onChange={(e) =>
                updateField(
                  "phone",
                  e.target.value
                )
              }
            />
          </label>

          <label>
            Academic Year
            <input
              type="text"
              placeholder="2026-27"
              value={settings.academicYear}
              onChange={(e) =>
                updateField(
                  "academicYear",
                  e.target.value
                )
              }
            />
          </label>

        </div>

        <label className="settings-address">
          Address
          <textarea
            rows="4"
            placeholder="Institute address"
            value={settings.address}
            onChange={(e) =>
              updateField(
                "address",
                e.target.value
              )
            }
          />
        </label>

        <div className="settings-actions">

          <button type="submit">
            Save Settings
          </button>

          {saved && (
            <span className="settings-saved">
              ✓ Settings saved
            </span>
          )}

        </div>

      </form>

    </div>
  );
}
