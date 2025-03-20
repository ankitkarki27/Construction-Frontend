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
        setValue('title', result.data.title);
        setValue('slug', result.data.slug);
        setValue('short_desc', result.data.short_desc);
        setValue('status', result.data.status);
        setContent(result.data.content);
        setImageId(result.data.imageId);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching service:', err);
      }
    };

    fetchService();
  }, [params.id, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const updatedData = { ...data, content, imageId };
      const response = await fetch(`${apiUrl}services/${params.id}`, {
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
      setError(err.message);
      console.error('Error updating service:', err);
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
        <div>
          <label className="block text-gray-700 font-medium">Image</label>
          <input
            {...register('image')}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-4 border rounded-lg"
          />
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
