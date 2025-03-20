import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import JoditEditor from "jodit-react";
import { apiUrl, token } from '../../common/http';
import { useParams } from 'react-router-dom';

const Edit = ({ serviceId, setActiveSection }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [content, setContent] = useState('');
  const params = useParams();

  // Fetch service details
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(apiUrl+'services/'+params.id, {
            method: 'GET',
                         headers: {
                             'Content-Type': 'application/json',
                             'Accept': 'application/json',
                             'Authorization': `Bearer ${token()}`
                         }
                     });

        const result = await res.json();
        setContent(result.data.content);
        return{
           title: result.data.title,
           slug: result.data.slug,
           short_desc:result.data.short_desc,

        }
         
        // if (!response.ok) {
        //   throw new Error(`Error: ${response.status}`);
        // }

        const data = await response.json();
        setValue('title', data.title);
        setValue('slug', data.slug);
        setValue('shortDescription', data.shortDescription);
        setValue('status', data.status);
        setContent(data.content);
        setImageId(data.imageId);
      } catch (err) {
        console.error('Error fetching service:', err);
      }
    };

    fetchService();
  }, [serviceId, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const updatedData = { ...data, content, imageId };
      const response = await fetch(`apiUrl + 'services'/${serviceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token()}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      toast.success('Service updated successfully!');
      setActiveSection('services');
    } catch (err) {
      console.error('Error updating service:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFile = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);

    try {
      const response = await fetch(apiUrl + 'service-images', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token()}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.status) {
        toast.error(result.errors?.image?.[0] || 'Image upload failed');
      } else {
        setImageId(result.data.id);
        toast.success('Image uploaded successfully');
      }
    } catch (err) {
      console.error('Error uploading image:', err);
      toast.error('Failed to upload image');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-4 mb-6 space-y-6">
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            {...register('title', { required: 'Enter service title' })}
            type="text"
            className="w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter service title"
          />
          {errors.title && <p className="text-red-400 mt-1">{errors.title.message}</p>}
        </div>

        {/* Slug */}
        <div>
          <label className="block text-gray-700 font-medium">Slug</label>
          <input
            {...register('slug', { required: 'Enter service slug' })}
            type="text"
            className="w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter slug"
          />
          {errors.slug && <p className="text-red-400 mt-1">{errors.slug.message}</p>}
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-gray-700 font-medium">Short Description</label>
          <textarea
            {...register('shortDescription', { required: 'Enter a short description' })}
            className="w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter a short description"
            rows="4"
          />
          {errors.shortDescription && <p className="text-red-400 mt-1">{errors.shortDescription.message}</p>}
        </div>

        {/* Content with Jodit Editor */}
        <div>
          <label className="block text-gray-700 font-medium">Content</label>
          <JoditEditor
            value={content}
            onBlur={(newContent) => setContent(newContent)}
            config={{
              minHeight: 300,
              placeholder: 'Enter detailed content here...',
            }}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium">Image</label>
          <input
            type="file"
            className="w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            accept="image/*"
            onChange={handleFile}
          />
        </div>

        {/* Status Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium">Status</label>
          <select {...register('status')} className="w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition">
            <option value={1}>Active</option>
            <option value={0}>Blocked</option>
          </select>
        </div>

        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition">
          {loading ? 'Updating...' : 'Update Service'}
        </button>
      </form>
    </div>
  );
};

export default Edit;