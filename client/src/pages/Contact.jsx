import { X, MapPin, Calendar, User, Phone, Mail } from "lucide-react";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";

export default function ContactRescuer() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
   
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden ">
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b ">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Contact Rescuer</h2>
        </div>
        <X className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-gray-600 mb-6">Get in touch about Buddy</p>
        
        {/* Dog Profile */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
            <img 
              src="assets/pet1.png" 
              alt="buddy"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Buddy</h3>
          <p className="text-gray-600 text-sm">cat | male</p>
        </div>

        {/* Details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-500" />
            <div>
              <span className="font-medium text-gray-700">Location:</span>
              <span className="ml-2 text-gray-600">Mt.Lavinia</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-green-500" />
            <div>
              <span className="font-medium text-gray-700">Found:</span>
              <span className="ml-2 text-gray-600">6/18/2025</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-purple-500" />
            <div>
              <span className="font-medium text-gray-700">Rescuer:</span>
              <span className="ml-2 text-gray-600">Amanda Nethmini</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-4">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
            <Phone className="w-4 h-4" />
            Call 0701546382
          </button>
          
          <button className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
            <Mail className="w-4 h-4" />
            Send Email
          </button>
        </div>

        {/* Warning Message */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="text-center">
            <div className="text-2xl mb-2">🔒</div>
            <p className="text-sm text-yellow-800">
              Please be respectful when contacting. This person is volunteering their time to help animals in need.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
     </div>
  );
}