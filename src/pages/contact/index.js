import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from "react";

export default function ContactInfo() {
    const contactItems = [
        {
            icon: <FaPhoneAlt className="text-2xl text-blue-800" />,
            title: "CALL US",
            content: "+251-11-673-3674",
        },
        {
            icon: <FaPhone className="text-2xl text-blue-800" />,
            title: "FREE CALL NUMBER",
            content: "9310",
        },
        {
            icon: <FaEnvelope className="text-2xl text-blue-800" />,
            title: "EMAIL US:",
            content: "info@visionfundmfi.com",
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl text-blue-800" />,
            title: "LOCATION",
            content: "Gerji Mebrat Hail, Addis Ababa, Ethiopia",
        },
    ];
    const branches = [
        { id: 1, name: 'Head Office', descriptinon: 'Bole Road, around Japan embassy, Rang building, 11th floor', location: { lat: 8.991741, lng: 38.780423 } },
    ];

    const containerStyle = {
        width: '100%',
        height: '400px',
    };
    const [center, setCenter] = useState({ lat: 8.991741, lng: 38.780423 });
    const [zoom, setZoom] = useState(13);


    return (
        <div className="max-full mx-auto py-30 bg-white justify-items-center">
            <h2 className="text-center text-2xl font-semibold text-blue-900 mb-12">
                GET IN TOUCH WITH US.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-[50%]">
                {contactItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="mb-3 flex justify-center">{item.icon}</div>
                        <p className="text-sm font-semibold text-gray-700">{item.title}</p>
                        <p className="text-red-600 mt-1 text-sm">{item.content}</p>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-bold text-center text-gray-900 py-10">Location</h2>

            <div className="flex flex-col lg:flex-row overflow-hidden shadow-lg bg-gray-400 w-full">

                <div className="w-full lg:w-1/2">
                    <LoadScript googleMapsApiKey="AIzaSyDEyj7Xmxl01jsbbb2-MBFj-W5hHRmAKyA">

                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
                            {branches.map(branch => (
                                <Marker key={branch.id} position={branch.location} title={branch.name} />
                            ))}
                        </GoogleMap>
                    </LoadScript>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                    <table className="min-w-full divide-y divide-gray-700">

                        <tbody className="divide-y divide-gray-700">
                            {branches.map((div, index) => (
                                <motion.tr
                                    key={div.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="hover:bg-gray-500 transition-colors duration-300 cursor-pointer"
                                    onClick={() => {
                                        setCenter(div.location)
                                        setZoom(20)
                                    }
                                    }
                                >
                                    <td className="px-6 py-4 text-white font-medium">{div.name}</td>
                                    <td className="px-6 py-4 text-white">{div.descriptinon}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
} 
