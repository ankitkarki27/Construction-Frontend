import React, { useEffect, useState } from 'react';
import { apiUrl, token } from '../../common/http';
import { Edit, Trash } from 'lucide-react';
import { toast } from 'react-toastify';
import ConfirmModal from './ConfirmModal';

const Show = ({ setActiveSection }) => {
    const [testimonials, settestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [testimonialToDelete, setTestimonialToDelete] = useState(null);

    const fetchtestimonials = async () => {
        try {
            const res = await fetch(apiUrl + 'testimonials', {
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
            settestimonials(data.data || []);
        } catch (err) {
            console.error('Error fetching Testimonials:', err);
            setError(err.message);
            toast.error('Error loading Testimonials: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchtestimonials();
    }, []);

    const handleDelete = (id) => {
        const testimonialToDelete = testimonials.find(testimonial => testimonial.id === id); 
      
        if (testimonialToDelete) {
          setTestimonialToDelete(testimonialToDelete); // Set the testimonial details
          setIsModalOpen(true); // Open the modal
        }
      };
      
      const confirmDelete = () => {
        setLoading(true);
        setError(null);
    
        // Delete the testimonial using the testimonial's ID
        fetch(`${apiUrl}testimonials/${testimonialToDelete.id}`, {
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
    
            settestimonials(testimonials.filter((testimonial) => testimonial.id !== testimonialToDelete.id)); // Corrected to use id
            toast.success('Testimonial deleted successfully!');
        })
        .catch((err) => {
            setError(err.message);
            toast.error('Failed to Testimonial testimonial: ' + err.message);
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
                    <div className="text-gray-500">Loading testimonials...</div>
                </div>
            ) : error ? (
                <div className="p-8 text-center">
                    <div className="text-gray-700 font-medium">Error loading testimonials</div>
                    <div className="text-red-500 text-sm mt-1">{error}</div>
                </div>
            ) : testimonials.length === 0 ? (
                <div className="p-8 text-center">
                    <div className="text-gray-400 mb-2">📋</div>
                    <div className="text-gray-700 font-medium">No testimonials available</div>
                    <div className="text-gray-500 text-sm mt-1">Create a new testimonial to get started</div>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr className="text-gray-700">
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border border-gray-300">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border border-gray-300">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border border-gray-300">Phone</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border border-gray-300">Testimonial</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border border-gray-300">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider border border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonials.map((testimonial) => (
                                <tr key={testimonial.id} className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-6 py-4 text-sm text-gray-700 font-mono border border-gray-300">{testimonial.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border border-gray-300">{testimonial.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 border border-gray-300">{testimonial.phone}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 border border-gray-300">{testimonial.testimonial}</td>
                                    <td className="px-6 py-4 border border-gray-300">
                                        <span
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                                testimonial.status === 1
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-red-100 text-red-700'
                                            }`}>
                                            <span
                                                className={`w-1.5 h-1.5 mr-1.5 rounded-full ${
                                                    testimonial.status === 1 ? 'bg-green-400' : 'bg-red-400'
                                                }`}></span>
                                            {testimonial.status === 1 ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right border border-gray-300">
                                        <div className="flex justify-end space-x-3">
                                            <a
                                                href={`/admin/testimonials/edit/${testimonial.id}`}
                                                className="text-blue-800 hover:text-blue-600 transition-colors duration-200 p-1.5 rounded-lg hover:bg-blue-50">
                                                <Edit className="h-5 w-5" />
                                            </a>
                                            <button
                                                onClick={() => handleDelete(testimonial.id)}
                                                className="text-red-500 hover:text-red-600 transition-colors duration-200 p-1.5 rounded-lg hover:bg-red-50">
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
            testimonial={testimonialToDelete} // Passing the whole testimonial object here
        />
    </div>
);
};

export default Show;
