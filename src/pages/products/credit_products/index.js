'use client';

import { motion } from 'framer-motion';

const savingsOptions = [
  {
    title: 'AGRECULTURAL LOAN',
    points: [
      '👉 This loan is designed for clients to purchase farming inputs.',
      '👉 👉 Provided for group of farmers.',
    ],
  },
  {
    title: 'AGRI-BUSINESS LOAN',
    points: [
      '👉 This is a loan for clients to expand and modernize their agribusinesses',
      '👉 Provided for group of applicants',
    ],
  },
  {
    title: 'INDIVIDUAL AGRECULTURE LOAN',
    points: [
      '👉 For individual farmers, who want to purchase agrecultural inputs and expand their farming',
      '👉 Provided for individual farmers',
    ],
  },
  {
    title: 'BUSINESS LOAN',
    points: [
      '👉 This is a loan designed for small business enterprise owners to expand or advance their business activities',
      '👉 Provided for group of small business owners.',
    ],
  },
  {
    title: 'FAMILY LOAN',
    points: [
      '👉 It is a salary-based consumption loan.',
      '👉 Provided for individuals',
    ],
  },
  {
    title: "INDIVIDUAL LOAN",
    points: [
      '👉 This is a loan designed for clients to expand or grow their business',
      '👉 Provided for individuals',
    ],
  },
  {
    title: 'WEDP LOAN',
    points: [
      '👉 It is for women enterpreneurs to expand or grow their business',
      '👉 Provided for individuals',
    ],
  },
  {
    title: 'SME LOAN',
    points: [
      '👉 It is a loan for small/medium business enterprises to address their need of working capital.',
      '👉 Provided for individuals',
    ],
  },
  {
    title: 'WASH LOAN',
    points: [
      '👉 This loan type is designed to help customers meet their clean water sanitation and hygiene needs',
      '👉 Provided for individuals',
    ],
  },
  {
    title: 'SOLAR LOAN',
    points: [
      '👉 This loan service is provided to communities living in areas with limited access to electricity and is used to purchase solar energy equipments & other related products',
      '👉 Provided for individuals or in groups.',
    ],
  },
  {
    title: 'SCHOOL LOAN',
    points: [
      '👉 It is a loan provided to schools to conduct additional class rooms, purchase educational materials, and fulfil other school related necessities.',
      '👉 Provided for individuals',
    ],
  },
  {
    title: 'HOUSE AND VEHICLE LOAN',
    points: [
      '👉 A type of loan  designed for customers who want to buy a new house as well as renovate the existing.',
      '👉 Provided for individuals',
    ],
  },
  {
    title: 'VEHICLE LOAN',
    points: [
      '👉 A type of loan designed for customers who want to buy a vehicle for commercial or private use purposes.',
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
