import React, { useState, useRef, useMemo } from 'react';
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

    const onSubmit = async (data) => {
        setLoading(true);
        setError(null);

        try {
            const newData = { ...data, content: watch('content'), imageId: imageId };
            const response = await fetch(apiUrl + 'teams', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                },
                body: JSON.stringify(newData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            toast.success('Teams created successfully!');
            
            setActiveSection('testimonials'); 
        } catch (err) {
            console.error('Error creating team:', err);
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
            console.log(result);

            if (result.status === false) {
                toast.error(result.errors?.image?.[0] || 'Image upload failed');
            } else {
                setImageId(result.data.id);
                toast.success('Image uploaded successfully!');
            }
        } catch (error) {
          console.log(error);
            console.error('Error uploading image:', error);
            toast.error('Error uploading image');
        }
    };

    return (

            <div className="bg-white rounded-xl shadow-md p-6 mx-auto max-w-4xl mb-8">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                </div>
              )}
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Your Team Members</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      {...register("name", { required: "Enter Team Member Name" })} 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder="Enter Team Member Name" 
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                    <input 
                      {...register("slug", { required: "Enter slug" })} 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder="Enter project title" 
                    />
                    {errors.slug && <p className="mt-1 text-sm text-red-500">{errors.slug.message}</p>}
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input 
                      {...register("phone", { required: "Enter Phone number" })} 
                      type="number" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder="Enter Phone number" 
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      {...register("email", { required: "Enter Email" })} 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder="Enter Email" 
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <input 
                      {...register("bio", { required: "Enter Bio" })} 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder="Enter Bio" 
                    />
                    {errors.bio && <p className="mt-1 text-sm text-red-500">{errors.bio.message}</p>}
                  </div>


                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input 
                      {...register("company", { required: "Enter company" })} 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder="Enter company" 
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                    <input 
                      {...register("designation", { required: "Enter project designation" })} 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder="Enter designation" 
                    />
                    {errors.designation && <p className="mt-1 text-sm text-red-500">{errors.designation.message}</p>}
                  </div>
                </div>
          
                <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
        <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
          <input 
            type="file"
            {...register("image",
                 { required: "Please upload an image" })}
                 className="w-full text-m text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    accept="image/*"
                    onChange={handleFile}

                />
                </div>
                {errors.image && <p className="mt-1 text-sm text-red-500">{errors.image.message}</p>}
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
                        Adding...
                      </>
                    ) : (
                      "Add Team Member"
                    )}
                  </button>
                </div>
              </form>
            </div>
          );
};

export default Create;
