import React, { useState } from 'react';

const Create = ({ setActiveSection }) => {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('YOUR_API_ENDPOINT_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer YOUR_TOKEN_HERE`
                },
                body: JSON.stringify({
                    title,
                    slug,
                    short_description: shortDescription,
                    content,
                    status
                })
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            alert('Service created successfully!');
            setActiveSection('services'); // Redirect back to services list
        } catch (err) {
            console.error('Error creating service:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-2">
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-semibold text-gray-800">services/create</h4>
                {/* <a
             
                  onClick={() => setActiveSection('show')} 
                    className="bg-gray-600 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-700 transition duration-300"
                >
                    ← show Services
                </a> */}
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className=" p-6 space-y-4">
                {/* Title */}
                <div>
                    <label className="block text-gray-700 font-medium">Title</label>
                    <input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter service title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                {/* Slug */}
                <div>
                    <label className="block text-gray-700 font-medium">Slug</label>
                    <input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter slug"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        required
                    />
                </div>

                {/* Short Description */}
                <div>
                    <label className="block text-gray-700 font-medium">Short Description</label>
                    <textarea
                        className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter a short description"
                        rows="3"
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                        required
                    ></textarea>
                </div>

                {/* Content */}
                <div>
                    <label className="block text-gray-700 font-medium">Content</label>
                    <textarea
                        className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter detailed content"
                        rows="4"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>

                {/* Status Dropdown */}
                <div>
                    <label className="block text-gray-700 font-medium">Status</label>
                    <select
                        className="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        value={status}
                        onChange={(e) => setStatus(parseInt(e.target.value))}
                    >
                        <option value={1}>Active</option>
                        <option value={0}>Blocked</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    {loading ? 'Creating...' : 'Create Service'}
                </button>
            </form>
        </div>
    );
};

export default Create;
