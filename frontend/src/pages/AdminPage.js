import { useEffect, useState } from "react";
import API from "../api";
import "./AdminPage.css";

function AdminPage() {
  const [apps, setApps] = useState([]);

 const loadData = async () => {
  try {
    const res = await API.get("/applications");
    console.log("API RESPONSE:", res.data); // 👈 check this
    setApps(res.data);
  } catch (err) {
    console.error("ERROR:", err);
  }
};

  const deleteApp = async (id) => {
    await API.delete(`/applications/${id}`);
    loadData();
  };

  const updateStatus = async (id, status) => {
    await API.patch(`/applications/${id}?status=${status}`);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>

      <div className="app-list">
        {apps.map((a) => (
          <div className="app-card" key={a.id}>
            <h3>{a.fullName}</h3>
            <p>Course: {a.course}</p>
            <p>
              Status: <span className={`status ${a.status}`}>{a.status}</span>
            </p>

            <div className="actions">
              <button
                className="approve"
                onClick={() => updateStatus(a.id, "APPROVED")}
              >
                Approve
              </button>

              <button
                className="reject"
                onClick={() => updateStatus(a.id, "REJECTED")}
              >
                Reject
              </button>

              <button
                className="delete"
                onClick={() => deleteApp(a.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;