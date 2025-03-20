import React, { useState } from 'react';
import { apiUrl, token } from '../../common/http';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import JoditEditor from "jodit-react";

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
    const [imageId, setImageId] = useState(null);

    // ✅ Image Upload Function (Fixed)
    const handleFile = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            toast.error("No file selected");
            return;
        }

        const formData = new FormData();
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
            console.log("Image Upload Response:", result); // Debugging

            if (!response.ok || result.status === false) {
                toast.error(result.errors?.image?.[0] || "Image upload failed");
            } else {
                setImageId(result.data.id);
                console.log("Stored Image ID:", result.data.id); // Debugging
                toast.success("Image uploaded successfully!");
            }
        } catch (error) {
            console.error("Image Upload Error:", error);
            toast.error("Failed to upload image. Please try again.");
        }
    };

    // ✅ Form Submission Function (Fixed)
    const onSubmit = async (data) => {
        setLoading(true);
        setError(null);

        const newData = {
            title: data.title,
            slug: data.slug,
            shortDescription: data.shortDescription,
            content: data.content,
            status: data.status,
            image_id: imageId,  // ✅ Ensuring image ID is included
        };

        console.log("Submitting Service Data:", newData); // Debugging

        try {
            const response = await fetch(apiUrl + 'services', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                },
                body: JSON.stringify(newData),
            });

            const result = await response.json();
            console.log("Service Submission Response:", result); // Debugging

            if (!response.ok || result.status === false) {
                throw new Error(result.errors?.image_id?.[0] || "Failed to create service");
            }

            toast.success('Service created successfully!');
            setActiveSection('services'); // Redirect back to services list
        } catch (err) {
            console.error('Error creating service:', err);
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
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

                {/* Content with Jodit Editor */}
                <div>
                    <label className="block text-gray-700 font-medium">Content</label>
                    <JoditEditor
                        value={watch("content")}
                        onBlur={(newContent) => setValue("content", newContent)}
                        config={{
                            minHeight: 300,
                            placeholder: "Enter detailed content here...",
                        }}
                    />
                    {errors.content && <p className="text-red-400 mt-1">{errors.content.message}</p>}
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-gray-700 font-medium">Image</label>
                    <input
                        type="file"
                        className="w-full p-4 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                        accept="image/*"
                        onChange={handleFile} // ✅ Ensure onChange is correctly set
                    />
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
