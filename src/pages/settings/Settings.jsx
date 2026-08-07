export default function Settings() {
  return (
    <div style={{padding:20}}>
      <h1>Settings</h1>

      <div style={{
        background:"#fff",
        padding:20,
        borderRadius:10
      }}>
        <p>Institute Name</p>
        <input
          placeholder="EduOrbit School"
          style={{
            width:"100%",
            padding:12,
            marginBottom:15
          }}
        />

        <p>Email</p>
        <input
          placeholder="admin@eduorbit.com"
          style={{
            width:"100%",
            padding:12,
            marginBottom:15
          }}
        />

        <button>Save Settings</button>
      </div>
    </div>
  );
}
