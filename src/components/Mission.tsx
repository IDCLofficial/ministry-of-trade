import Image from 'next/image';
import { FaBullseye, FaEye } from 'react-icons/fa';

export default function MissionVisionGrid() {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaBullseye className="text-red-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Our Mission</h3>
            <p className="text-gray-600 text-center mb-6">
              To promote sustainable livestock production, ensure food security, and enhance the economic well-being of farmers through innovative agricultural practices, capacity building, and value chain development in Imo State.
            </p>
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Vision Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaEye className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Our Vision</h3>
            <p className="text-gray-600 text-center mb-6">
              To transform Imo State into a leading hub for sustainable livestock production, ensuring food security, economic growth, and improved livelihoods for all stakeholders in the agricultural sector.
            </p>
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/vision.jpg"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
