import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { apiUrl, token, fileUrl } from "../../common/http";
import { useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";

const Edit = ({ setActiveSection }) => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState("");
  const [project, setProject] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const config = useMemo(() => ({
    readonly: false,
    placeholder: "Enter content here..."
  }), []);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

  useEffect(() => {
    fetch(`${apiUrl}projects/${params.id}`, {
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
      setProject(result.data);
      setValue("title", result.data.title);
      setValue("slug", result.data.slug);
      setValue("short_desc", result.data.short_desc);
      setValue("status", result.data.status);
      setValue("construction_type", result.data.construction_type);
      setValue("sector", result.data.sector); 
      setValue("location", result.data.location);
    })
    .catch(() => setError("Failed to fetch project details"));
  }, [params.id, setValue]);

  const onSubmit = (data) => {
    setLoading(true);
    setError(null);

    const newData = { ...data, content, imageId: imageId };

    console.log("Sending data to backend:", newData); // Debugging

    fetch(`${apiUrl}projects/${params.id}`, {
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
            throw new Error("Failed to update project");
        }
        return response.json();
    })
    .then(data => {
        console.log("Response from backend:", data); // Debugging
        toast.success("Project updated successfully!");
        navigate('/admin/projects');
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
    {/* {error && (
      <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
        <p className="text-red-600 text-sm font-medium">{error}</p>
      </div>
    )} */}
    
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Update Project</h2>
    
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input 
            {...register("title", { required: "Title is required" })} 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            placeholder="Enter project title" 
          />
          {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input 
            {...register("slug", { required: "Slug is required" })} 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            placeholder="Enter slug" 
          />
          {errors.slug && <p className="mt-1 text-sm text-red-500">{errors.slug.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
        <textarea 
          {...register("short_desc", { required: "Short description is required" })} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
          placeholder="Enter a short description" 
          rows="3" 
        />
        {errors.short_desc && <p className="mt-1 text-sm text-red-500">{errors.short_desc.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <JoditEditor 
            value={content} 
            onBlur={(newContent) => setContent(newContent)} 
            config={config} 
          />
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
          alt="Project Preview" 
          className="w-32 max-w-md h-32 object-cover rounded-lg border border-gray-300" 
        />
      ) : (
        project.image && (
          <div>
            <p className="text-sm text-gray-600 mb-1">Current: {project.image}</p>
            <img 
              src={fileUrl + 'uploads/projects/small/' + project.image} 
              alt="Project Preview" 
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

{/* sector */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">sector</label>
        <select 
          {...register("sector")} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all" 
        >
           <option value="private">private</option>
           <option value="public">public</option>
           <option value="governmental">governmental</option>
        </select>
      </div>

              <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Construction Type
          </label>
          <select
            {...register("construction_type")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all"
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="renovation">Renovation</option>
            <option value="educational">Educational</option>
            <option value="transportation">Transportation</option>
            <option value="others">Others</option>
          </select>
        </div>
</div>

      {/* $table->enum('construction_type', ['residential', 'commercial', 'industrial', 'infrastructure', 'renovation','educational', 'transportation', 'others'])->nullable();    */}
      {/* $table->enum('sector', ['private', 'public', 'governmental'])->nullable();  */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input 
            {...register("location", { required: "location is required" })} 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            placeholder="Enter project title" 
          />
          {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>}
        </div>
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
            "Update Projects"
          )}
        </button>
      </div>
    </form>
  </div>
);


};

export default Edit;
