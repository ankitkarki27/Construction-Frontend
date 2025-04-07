import React from 'react';
import { Award, CheckCircle, Users, Calendar } from "lucide-react";

const Workstats = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Our Achievements</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-blue-600 shadow-sm hover:shadow transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="text-blue-600" size={28} />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
            </div>
            
            {/* Box 2 */}
            <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-blue-600 shadow-sm hover:shadow transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="text-blue-600" size={28} />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700">Projects Completed</div>
              </div>
            </div>
            
            {/* Box 3 */}
            <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-blue-600 shadow-sm hover:shadow transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Award className="text-blue-600" size={28} />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-700">Safety Record</div>
              </div>
            </div>
            
            {/* Box 4 */}
            <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-blue-600 shadow-sm hover:shadow transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={28} />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-700">Expert Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workstats;