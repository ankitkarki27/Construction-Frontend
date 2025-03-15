import React, { useEffect, useState } from 'react';
import { apiUrl, token } from '../../common/http';

import { 
    Edit, Trash ,
    Home, 
    Users, 
    Settings, 
    Bell, 
    LogOut
  } from 'lucide-react';
  
const Show = ({ setActiveSection }) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchServices = async () => {
        try {
            const res = await fetch(apiUrl + 'services', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();
            setServices(data.data || []);  // Ensure `data.data` exists
        } catch (err) {
            console.error('Error fetching services:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);
    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-100">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Services</h2>
                        <p className="text-sm text-gray-500">Manage your organization's services</p>
                    </div>
                </div>
            </div>
    
            {/* Content Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                {/* Loading and Error Handling */}
                {loading ? (
                    <div className="p-8 text-center">
                        <div className="text-gray-500 animate-pulse">Loading services...</div>
                    </div>
                ) : error ? (
                    <div className="p-8 text-center">
                        <div className="text-red-500">⚠️ Error loading services: {error}</div>
                    </div>
                ) : services.length === 0 ? (
                    <div className="p-8 text-center">
                        <div className="text-gray-500">No services available</div>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className="text-gray-700">
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Slug</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {services.map((service) => (
                                    <tr key={service.id} className="hover:bg-gray-50 transition-colors duration-150">
                                        <td className="px-6 py-4 text-sm text-gray-700 font-mono">{service.id}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{service.title}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{service.slug}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                                service.status === 1 
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                            }`}>
                                                {service.status === 1 ? 'Active' : 'Blocked'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end space-x-3">
                                                <button className="text-gray-500 hover:text-blue-600 transition-colors duration-200 p-1.5 rounded-lg hover:bg-blue-50">
                                                    <Edit className="h-5 w-5" />
                                                </button>
                                                <button className="text-gray-500 hover:text-red-600 transition-colors duration-200 p-1.5 rounded-lg hover:bg-red-50">
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
        </div>
    );
};

export default Show;
