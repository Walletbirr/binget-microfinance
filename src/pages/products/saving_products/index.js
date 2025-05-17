'use client';

import { motion } from 'framer-motion';

const savingsOptions = [
  {
    title: 'ORDINARY SAVING',
    points: [
      '👉 This is a regular saving account available to all clients.',
      '👉 Convenient and secure withdrawal and deposit services',
    ],
  },
  {
    title: 'SPECIAL ORDINARY SAVING',
    points: [
      '👉 It is designed for clients to save money for the purpose of celebrating a special occasion.',
      '👉 Attractive Saving Interest Rates',
    ],
  },
  {
    title: 'TIME DEPOSIT',
    points: [
      '👉 Save for a fixed time with higher interest rate',
      '👉 Interest rates vary by deposit amount and time',
      '👉 Interest will be paid on a monthly basis.',
    ],
  },
  {
    title: 'COIN BOX SAVING',
    points: [
      '👉 Save small amounts of money regularly using a coin box.',
      '👉 Encourages customers to develop saving habits & promotes wise financial decisions',
    ],
  },
  {
    title: 'YOUTH AND CHILDREN SAVING',
    points: [
      '👉 Individuals between the ages of 0 and 30 are eligible to open this account.',
      '👉 Competitive interest rates are offered',
    ],
  },
  {
    title: "WOMEN'S SAVING",
    points: [
      '👉 Designed for women aged 18+',
      '👉 Competitive interest rates are offered',
    ],
  },
  {
    title: 'LETENAYE SAVING',
    points: [
      '👉 Designed for clients to save for their health-related expenses like medical care or supplies.',
      '👉 Offers better interest rate',
    ],
  },
  {
    title: 'ASRAT BEKURAT SAVING',
    points: [
      '👉 Designed for clients to save for their religious obligations or donations with better interest rates that support their purpose.',
      '👉 Competitive interest rate is offered',
    ],
  },
];

export default function SavingsOptions() {
  return (
    <div className="py-16 px-4 md:px-20 bg-white pt-30">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Our Saving Options
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
