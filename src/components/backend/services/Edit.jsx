import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { apiUrl, token } from '../../common/http';
import { useParams } from 'react-router-dom';

const Edit = ({ setActiveSection }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState('');
  const params = useParams();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`${apiUrl}services/${params.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token()}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response:", result);

        setValue('title', result.data.title);
        setValue('slug', result.data.slug);
        setValue('short_desc', result.data.short_desc);
        setValue('status', result.data.status);
        setContent(result.data.content);

        // Set existing image
        if (result.data.image) {
          const constructedUrl = `http://localhost:8000/uploads/services/small/${result.data.image}`;
          console.log("Constructed Image URL:", constructedUrl);
          setImageUrl(constructedUrl);
          setImageId(result.data.image);
        } else {
          console.log("No image found in API response.");
        }

      } catch (err) {
        setError(err.message);
        console.error('Error fetching service:', err);
      }
    };

    fetchService();
  }, [params.id, setValue]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImageUrl(URL.createObjectURL(file)); // Show preview of new image
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);

    try {
      let uploadedImageId = imageId; // Keep existing image if no new upload

      // Upload image if a new file is selected
      if (selectedFile) {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const imageResponse = await fetch(`${apiUrl}services/upload-image`, {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${token()}`,
          },
          body: formData,
        });

        if (!imageResponse.ok) {
          throw new Error("Image upload failed");
        }

        const imageResult = await imageResponse.json();
        uploadedImageId = imageResult.imageId; // Get new image ID
      }

      // Update service details with the new image ID
      const updatedData = { ...data, content, imageId: uploadedImageId };

      const response = await fetch(`${apiUrl}services/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token()}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      toast.success("Service updated successfully!");
      setActiveSection("services");
    } catch (err) {
      setError(err.message);
      console.error("Error updating service:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-4 mb-6 space-y-6">
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            {...register('title', { required: 'Enter service title' })}
            type="text"
            className="w-full p-4 border rounded-lg"
            placeholder="Enter service title"
          />
          {errors.title && <p className="text-red-400">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Slug</label>
          <input
            {...register('slug', { required: 'Enter service slug' })}
            type="text"
            className="w-full p-4 border rounded-lg"
            placeholder="Enter slug"
          />
          {errors.slug && <p className="text-red-400">{errors.slug.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Short Description</label>
          <textarea
            {...register('short_desc', { required: 'Enter a short description' })}
            className="w-full p-4 border rounded-lg"
            placeholder="Enter a short description"
            rows="4"
          />
          {errors.short_desc && <p className="text-red-400">{errors.short_desc.message}</p>}
        </div>

        {/* Image Upload with Preview */}
        <div>
          <label className="block text-gray-700 font-medium">Image</label>
          <br />
          <input 
            type="file" 
            accept="image/*" 
            className="w-full p-4 border rounded-lg" 
            onChange={handleFileChange} 
          />
          
          {/* Display existing image or newly uploaded preview */}
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt="Service Preview" 
              className="mt-4 w-32 h-32 object-cover rounded-lg"
              onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} // Fallback for broken image
            />
          ) : (
            <p className="mt-2 text-gray-500">No image available</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Status</label>
          <select {...register('status')} className="w-full p-4 border rounded-lg">
            <option value={1}>Active</option>
            <option value={0}>Blocked</option>
          </select>
        </div>

        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-4 rounded-lg">
          {loading ? 'Updating...' : 'Update Service'}
        </button>
      </form>
    </div>
  );
};

export default Edit;
