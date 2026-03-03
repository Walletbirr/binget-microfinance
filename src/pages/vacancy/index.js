import React, { useState, useEffect } from "react";
import { MapPin, Clock, CheckCircle, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
    {
        id: 1,
        title: "Branch Cashier I",
        company: "Binget Microfinance Institution S.C",
        type: "Full Time",
        location: "Addis Ababa",
        dateRange: "March 1, 2026 - March 12, 2026",
        experienceLevel: "Junior",
        totalExperience: "0 (Zero Experience)",
        salary: "As per Company Scale",
        deadline: "March 11, 2026",
        posted: "March 1, 2026",
        category: "Banking & Insurance - Finance & Accounting - Graduates - Management",
        qualification:
            "BA in accounting, finance, management & related field of study.",
        experienceRequirement:
            "Fresh graduates in 2024/2025 with a minimum CGPA of 3.2 or above are welcome to apply.",
        placeOfWork: "Addis Ababa",
        howToApply: `
Application closing date: 7 working days from the first date of this announcement.

Instruction: Please write the position you are applying for in the subject line.

Interested and qualified applicants who meet the minimum requirements are invited to submit their non-returnable application letter, CV, and copies of education and work experience documents via email to bingetmfi@gmail.com or in person at:

Bole Around Japan Embassy near Showa Shopping Center,
RANG Building 11th floor, Addis Ababa, Ethiopia.
    `,
    },
    {
        id: 2,
        title: "Branch Manager I",
        company: "Binget Microfinance Institution S.C",
        type: "Full Time",
        location: "Addis Ababa",
        dateRange: "March 1, 2026 - March 12, 2026",
        experienceLevel: "Manager",
        totalExperience: "4",
        salary: "As per Company Scale",
        deadline: "March 11, 2026",
        posted: "March 1, 2026",
        category:
            "Banking & Insurance - Business Administration - Economics - Finance & Accounting - Management - Sales & Marketing",

        qualification:
            "BA/MA in Accounting, Marketing, Economics, Banking & Finance, Business Administration, Management or related fields.",

        experienceRequirement:
            "A minimum of 4 years of experience as a customer service officer or one-year direct BM experience in Microfinance or finance sector.",

        reqNumber: "2",
        placeOfWork: "Addis Ababa",

        howToApply: `
Application closing date: 7 working days from the first date of this announcement.

Instruction: Please write the position you are applying for in the subject line.

Interested and qualified applicants who meet the minimum requirements are invited to submit their non-returnable application letter, CV, and copies of education and work experience documents via email to bingetmfi@gmail.com or in person at:

Bole Around Japan Embassy near Showa Shopping Center,
RANG Building 11th floor, Addis Ababa, Ethiopia.
  `,
    }
];

export default function VacancyListingPage() {
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") setSelectedJob(null);
        };
        if (selectedJob) window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedJob]);

    return (
        <div className="min-h-screen bg-gray-100 p-30">
            <div className="max-w-4xl mx-auto space-y-6">

                {/* JOB LIST */}
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white rounded-xl shadow-md p-6 flex justify-between items-start hover:shadow-lg transition"
                    >
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-dark-900">
                                {job.title}
                            </h2>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                <span className="italic text-gray-700">
                                    {job.company}
                                </span>

                                <span className="flex items-center gap-1 text-red-600 font-medium">
                                    <CheckCircle size={14} /> {job.type}
                                </span>

                                <span className="flex items-center gap-1">
                                    <MapPin size={14} /> {job.location}
                                </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                    <Calendar size={14} /> {job.dateRange}
                                </span>

                                <span className="flex items-center gap-1">
                                    <CheckCircle size={14} /> Experience: {job.experienceLevel}
                                </span>

                                <span className="flex items-center gap-1">
                                    <Clock size={14} /> Posted: {job.posted}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-3">
                            <button
                                onClick={() => setSelectedJob(job)}
                                className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition"
                            >
                                View more
                            </button>
                            <span className="text-sm text-gray-500">1 day ago</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            <AnimatePresence>
                {selectedJob && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50 overflow-y-auto"
                        onClick={() => setSelectedJob(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 space-y-6"
                            style={{
                                height: '100%',
                                opacity: 1,
                                transform: 'none',
                                overflowY: 'auto',
                            }}
                        >
                            {/* HEADER */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {selectedJob.title}
                                </h2>
                            </div>

                            {/* JOB OVERVIEW */}
                            <div>
                                <h3 className="text-lg font-semibold border-b pb-2 mb-3 text-gray-900">
                                    JOB OVERVIEW
                                </h3>

                                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                                    <p><strong>Salary Offer:</strong> {selectedJob.salary}</p>
                                    <p><strong>Experience Level:</strong> {selectedJob.experienceLevel}</p>
                                    <p><strong>Total Years Experience:</strong> {selectedJob.totalExperience}</p>
                                    <p><strong>Date Posted:</strong> {selectedJob.posted}</p>
                                    <p><strong>Deadline Date:</strong> {selectedJob.deadline}</p>
                                    <p><strong>Category:</strong> {selectedJob.category}</p>
                                </div>
                            </div>

                            {/* JOB REQUIREMENT */}
                            <div>
                                <h3 className="text-lg font-semibold border-b pb-2 mb-3 text-gray-900">
                                    JOB REQUIREMENT
                                </h3>

                                <ul className="list-disc pl-6 text-sm space-y-2 text-gray-700">
                                    <li>
                                        <strong>Qualification:</strong> {selectedJob.qualification}
                                    </li>
                                    <li>
                                        <strong>Work Experience:</strong>{" "}
                                        {selectedJob.experienceRequirement}
                                    </li>
                                    <li>
                                        <strong>Place of Work:</strong> {selectedJob.placeOfWork}
                                    </li>
                                </ul>
                            </div>

                            {/* HOW TO APPLY */}
                            <div>
                                <h3 className="text-lg font-semibold border-b pb-2 mb-3 text-gray-900">
                                    HOW TO APPLY
                                </h3>

                                <p className="text-sm text-gray-700 whitespace-pre-line">
                                    {selectedJob.howToApply}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}