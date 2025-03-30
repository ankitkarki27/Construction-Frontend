import React, { useState } from "react";
import { toast } from "react-toastify";
import { apiUrl, token } from "../../common/http";
import { useParams } from "react-router-dom";

const Delete = ({ setActiveSection }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  const handleDelete = () => {
    setLoading(true);
    setError(null);
    
    fetch(`${apiUrl}projects/${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${token()}`,
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to delete service");
      }
      return response.json();
    })
    .then(() => {
      toast.success("Service deleted successfully!");
      setActiveSection("list");  // Assuming 'list' section will refresh the list of services
    })
    .catch(err => {
      setError(err.message);
      toast.error(err.message);
    })
    .finally(() => setLoading(false));
  };

  return (
    <div className="delete-container">
      <h3>Are you sure you want to delete this service?</h3>
      <div className="actions">
        <button 
          className="btn btn-danger" 
          onClick={handleDelete} 
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={() => setActiveSection("list")}
        >
          Cancel
        </button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Delete;
