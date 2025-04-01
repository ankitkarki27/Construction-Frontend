import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { apiUrl, token, fileUrl } from "../../common/http";
import { useNavigate, useParams } from "react-router-dom";
// import JoditEditor from "jodit-react";

  const Edit = ({ setActiveSection }) => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [imageId, setImageId] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [content, setContent] = useState("");
    const [team, setTeam] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    const config = useMemo(() => ({
      readonly: false,
      placeholder: "Enter content here..."
    }), []);

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

    useEffect(() => {
      fetch(`${apiUrl}teams/${params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization: `Bearer ${token()}`,
        }
      })
      .then(response => response.json())

      .then(result => {
        setContent(result.data.content);
        setTeam(result.data);
        setValue("name", result.data.name);
        setValue("slug", result.data.slug);
        setValue("phone", result.data.phone);
        setValue("email", result.data.email);
        setValue("company", result.data.company);
        setValue("designation", result.data.designation);
        setValue("team", result.data.team);
        setValue("status", result.data.status);
       
      })
      .catch(() => setError("Failed to fetch team details"));
    }, [params.id, setValue]);

    const onSubmit = (data) => {
      setLoading(true);
      setError(null);

      const newData = { ...data, content, imageId: imageId };

      console.log("Sending data to backend:", newData); // Debugging

      fetch(`${apiUrl}teams/${params.id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              Authorization: `Bearer ${token()}`,
          },
          body: JSON.stringify(newData),
      })
      .then(response => {
          console.log("Response status:", response.status); // Debugging
          if (!response.ok) {
              throw new Error("Failed to update team");
          }
          return response.json();
      })
      .then(data => {
          console.log("Response from backend:", data); // Debugging
          toast.success("team updated successfully!");
          navigate('/admin/teams');
          setActiveSection("list");
      })
      .catch(err => {
          setError(err.message);
          toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

    const handleFileChange = (e) => {

      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      
      fetch(apiUrl + 'service-images', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token()}`,
        },
        body: formData,
      })
      .then(response => response.json())
      .then(result => {
        if (result.status === false) {
          toast.error(result.errors?.image?.[0] || 'Image upload failed');
        } else {
          setImageId(result.data.id);
          setSelectedFile(URL.createObjectURL(file));
          toast.success('Image uploaded successfully!');
        }
      })
      .catch(() => toast.error('Error uploading image'));
    };
  
  return(
<div className="bg-white rounded-xl shadow-md p-6 mx-auto max-w-4xl mb-8">
  
    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Update teams</h3>
    
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            {...register("name", { required: "Name is required" })} 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            placeholder="Enter Name" 
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input 
            {...register("slug", { required: "slug is required" })} 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            placeholder="Enter Name" 
          />
          {errors.slug && <p className="mt-1 text-sm text-red-500">{errors.slug.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input 
            {...register("phone", { required: "phone is required" })} 
            type="number" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            placeholder="Enter phone" 
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            {...register("email", { required: "Email is required" })} 
            type="email" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            placeholder="Enter email" 
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input 
            {...register("company", { required: "company is required" })} 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            placeholder="Enter company" 
          />
          {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>}
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
          <input 
            {...register("designation", { required: "designation is required" })} 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            placeholder="Enter designation" 
          />
          {errors.designation && <p className="mt-1 text-sm text-red-500">{errors.designation.message}</p>}
        </div>
      </div>
      <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
  <div className="space-y-3">
    <div className="relative border border-gray-300 rounded-lg p-3 bg-gray-50">
      <input 
        type="file" 
        accept="image/*" 
        className="w-full cursor-pointer opacity-0 absolute inset-0 z-10" 
        onChange={handleFileChange} 
      />
      <div className="text-center">
        <span className="text-blue-600 font-medium">Choose file</span> or drag and drop
      </div>
    </div>
    
    {/* File name display */}
    {selectedFile && (
      <div className="text-sm text-gray-600 mt-1">
        Selected: {selectedFile.name || "New image"}
      </div>
    )}
    
    {/* Image preview */}
    <div>
      {selectedFile ? (
        <img 
          src={selectedFile} 
          alt="team Preview" 
          className="w-32 max-w-md h-32 object-cover rounded-lg border border-gray-300" 
        />
      ) : (
        team.image && (
          <div>
            <p className="text-sm text-gray-600 mb-1">Current: {team.image}</p>
            <img 
              src={fileUrl + 'uploads/teams/small/' + team.image} 
              alt="team Preview" 
              className="w-42 max-w-md h-32 object-cover rounded-lg border border-gray-300" 
              />
          </div>
        )
      )}
    </div>
  </div>
</div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
        <select 
          {...register("status")} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all" 
        >
          <option value={1}>Active</option>
          <option value={0}>Inactive</option>
        </select>
      </div>
      <div className="pt-4">
        <button 
          type="submit" 
          disabled={loading} 
          className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg shadow-sm transition-all flex justify-center items-center"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Updating...
            </>
          ) : (
            "Update team"
          )}
        </button>
      </div>
    </form>
  </div>
);


};

export default Edit;
