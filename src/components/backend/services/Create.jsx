import React, { useState } from 'react';
import { apiUrl, token } from '../../common/http';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Create = ({ setActiveSection }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(apiUrl + 'services', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            toast.success('Service created successfully!');
            setActiveSection('services'); // Redirect back to services list
        } catch (err) {
            console.error('Error creating service:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 mx-4 mb-6 space-y-6">
            {/* <h2 className="text-2xl font-semibold text-gray-800">Add Your Service</h2> */}

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Title */}
                <div>
                    <label className="block text-gray-700 font-medium">Title</label>
                    <input
                        {...register('title', { required: "Enter service title" })}
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
                        {...register('slug', { required: "Enter service slug" })}
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
                        {...register('shortDescription', { required: "Enter a short description" })}
                        className="w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="Enter a short description"
                        rows="4"
                    />
                    {errors.shortDescription && <p className="text-red-400 mt-1">{errors.shortDescription.message}</p>}
                </div>

                {/* Content */}
                <div>
                    <label className="block text-gray-700 font-medium">Content</label>
                    <textarea
                        {...register('content', { required: "Enter detailed content" })}
                        className="w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="Enter detailed content"
                        rows="6"
                    />
                    {errors.content && <p className="text-red-400 mt-1">{errors.content.message}</p>}
                </div>

                {/* Status Dropdown */}
                <div>
                    <label className="block text-gray-700 font-medium">Status</label>
                    <select
                        {...register('status')}
                        className="w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                    >
                        <option value={1}>Active</option>
                        <option value={0}>Blocked</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    {loading ? 'Creating...' : 'Create Service'}
                </button>
            </form>
        </div>
    );
};

export default Create;
