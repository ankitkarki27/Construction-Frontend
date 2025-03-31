import React, { useEffect, useState } from 'react';
import { apiUrl, token } from '../../common/http';
import { Edit, Trash } from 'lucide-react';
import { toast } from 'react-toastify';
import ConfirmModal from './ConfirmModal';  // Import the modal

const Show = ({ setActiveSection }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [blogToDelete, setBlogToDelete] = useState(null);

    const fetchBlogs = async () => {
        try {
            const res = await fetch(apiUrl + 'blogs', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                },
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }   

            const data = await res.json();
            setBlogs(data.data || []);
        } catch (err) {
            console.error('Error fetching Blogs:', err);
            setError(err.message);
            toast.error('Error loading Blogs: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = (id) => {
        const blogToDelete = blogs.find(blog => blog.id === id); 
      
        if (blogToDelete) {
          setBlogToDelete(blogToDelete); // Set the blog details
          setIsModalOpen(true); // Open the modal
        }
      };
      
      const confirmDelete = () => {
        setLoading(true);
        setError(null);
    
        // Delete the blog using the blog's ID
        fetch(`${apiUrl}blogs/${blogToDelete.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            },
        })
        .then((response) => response.json())
        .then((result) => {
            if (result.status === false) {
                throw new Error(result.message);
            }
    
            setBlogs(blogs.filter((blog) => blog.id !== blogToDelete.id)); // Corrected to use id
            toast.success('Blog deleted successfully!');
        })
        .catch((err) => {
            setError(err.message);
            toast.error('Failed to delete blog: ' + err.message);
        })
        .finally(() => {
            setLoading(false);
            setIsModalOpen(false); // Close the modal after action
        });
    };
    

    const cancelDelete = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center">
                        <div className="inline-block h-6 w-6 border-2 border-t-blue-500 border-blue-200 rounded-full animate-spin mb-2"></div>
                        <div className="text-gray-500">Loading blogs...</div>
                    </div>
                ) : error ? (
                    <div className="p-8 text-center">
                        <div className="text-gray-700 font-medium">Error loading blogs</div>
                        <div className="text-red-500 text-sm mt-1">{error}</div>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="p-8 text-center">
                        <div className="text-gray-400 mb-2">📋</div>
                        <div className="text-gray-700 font-medium">No services available</div>
                        <div className="text-gray-500 text-sm mt-1">Create a new service to get started</div>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className="text-gray-700">
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Slug</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {blogs.map((blog) => (
                                    <tr key={blog.id} className="hover:bg-gray-50 transition-colors duration-150">
                                        <td className="px-6 py-4 text-sm text-gray-700 font-mono">{blog.id}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{blog.title}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{blog.slug}</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                                    blog.status === 1
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-red-100 text-red-700'
                                                }`}>
                                                <span
                                                    className={`w-1.5 h-1.5 mr-1.5 rounded-full ${
                                                        blog.status === 1 ? 'bg-green-400' : 'bg-red-400'
                                                    }`}></span>
                                                {blog.status === 1 ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end space-x-3">
                                                <a
                                                    href={`/admin/blogs/edit/${blog.id}`}
                                                      className="text-blue-600 hover:text-blue-600 transition-colors duration-200 p-1.5 rounded-lg hover:bg-blue-50">
                                                    <Edit className="h-5 w-5" />
                                                </a>
                                                <button
                                                    onClick={() => handleDelete(blog.id)}
                                                     className="text-red-600 hover:text-red-800 transition-colors duration-200 p-1.5 rounded-lg hover:bg-red-50">
                                                    <Trash className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Confirmation Modal */}
            <ConfirmModal
                isOpen={isModalOpen}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
                blog={blogToDelete} // Passing the whole blog object here
            />

        </div>
    );
};

export default Show;
