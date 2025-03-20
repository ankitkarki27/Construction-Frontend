import React, { useEffect, useState } from 'react';
import { apiUrl, token } from '../../common/http';

import { 
    Edit, Trash,
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
        <div className="p-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center">
                        <div className="inline-block h-6 w-6 border-2 border-t-blue-500 border-blue-200 rounded-full animate-spin mb-2"></div>
                        <div className="text-gray-500">Loading services...</div>
                    </div>
                ) : error ? (
                    <div className="p-8 text-center">
                        <div className="text-gray-700 font-medium">Error loading services</div>
                        <div className="text-red-500 text-sm mt-1">{error}</div>
                    </div>
                ) : services.length === 0 ? (
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
                                                <span className={`w-1.5 h-1.5 mr-1.5 rounded-full ${
                                                    service.status === 1 ? 'bg-green-400' : 'bg-red-400'
                                                }`}></span>
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