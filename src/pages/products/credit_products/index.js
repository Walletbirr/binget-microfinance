'use client';

import { motion } from 'framer-motion';

const savingsOptions = [
  
  {
    title: 'SME LOAN',
    points: [
      '👉 It is a loan for small/medium business enterprises to address their need of working capital.',
      '👉 Provided for individuals',
    ],
  },
  {
    title: 'SHORT TERM LOANS',
    points: [
      '👉 This loan is designed for clients to purchase farming inputs.',
      '👉 Provided for group of farmers.',
    ],
  },
  {
    title: 'GROUP MICRO-BUSINESS LOAN',
    points: [
      '👉 For individual farmers, who want to purchase agrecultural inputs and expand their farming',
      '👉 Provided for group of applicants',
    ],
  },
  {
    title: 'INDIVIDUAL MICRO-BUSINESS LOAN',
    points: [
      '👉 For individual farmers, who want to purchase agrecultural inputs and expand their farming',
      '👉 Provided for individual farmers',
    ],
  },
  {
    title: 'CONSUMER LOAN',
    points: [
      '👉 For individual farmers, who want to purchase agrecultural inputs and expand their farming',
      '👉 Provided for individual farmers',
    ],
  },
  {
    title: 'ENERGY LOAN',
    points: [
      '👉 For individual farmers, who want to purchase agrecultural inputs and expand their farming',
      '👉 Provided for individual farmers',
    ],
  },
  {
    title: 'AGRICULTURE LOAN',
    points: [
      '👉 This is a loan for clients to expand and modernize their agribusinesses',
      '👉 Provided for group of applicants',
    ],
  },
  {
    title: 'WOMAN ENTERPRENEURS LOAN',
    points: [
      '👉 It is for women enterpreneurs to expand or grow their business',
      '👉 Provided for individuals',
    ],
  },
  {
    title: 'ASSET ACQUISITION LOAN',
    points: [
      '👉 This is a loan designed for small business enterprise owners to expand or advance their business activities',
      '👉 Provided for group of small business owners.',
    ],
  },
  {
    title: 'EDUCATION LOAN',
    points: [
      '👉 It is a salary-based consumption loan.',
      '👉 Provided for individuals',
    ],
  },
  {
    title: "MICRO CREDIT LOAN",
    points: [
      '👉 This is a loan designed for clients to expand or grow their business',
      '👉 Provided for individuals',
    ],
  },
  {
    title: 'ENTERPRISE EMPLOYEES MICRO-CREDIT LOAN',
    points: [
      '👉 This loan type is designed to help customers meet their clean water sanitation and hygiene needs',
      '👉 Provided for individuals',
    ],
  },
  {
    title: 'MERCHANT/AGENT MICRO-CREDIT LOAN',
    points: [
      '👉 This loan service is provided to communities living in areas with limited access to electricity and is used to purchase solar energy equipments & other related products',
      '👉 Provided for individuals or in groups.',
    ],
  },
  {
    title: 'ENTERPRISE MICRO CREDIT LOAN',
    points: [
      '👉 It is a loan provided to schools to conduct additional class rooms, purchase educational materials, and fulfil other school related necessities.',
      '👉 Provided for individuals',
    ],
  },
  
];

export default function SavingsOptions() {
  return (
    <div className="py-16 px-4 md:px-20 bg-white pt-30">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Our Credit Options
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {savingsOptions.map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              {option.title}
            </h3>
            <ul className="text-gray-700 space-y-2">
              {option.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
