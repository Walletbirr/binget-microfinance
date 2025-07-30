'use client';

import { motion } from 'framer-motion';

const savingsOptions = [
  {
    title: 'TIME DEPOSIT',
    points: [
      '👉 Save for a predetermined period with a higher interest rate ',
      '👉 Interest payments available with flexible options '
    ],
  },
  {
    title: 'ASSET ACQUISATION FUND SAVING',
    points: [
      '👉 Tailored for clients aiming to save for the purpose of acquiring a physical asset. ',
      '👉 Competitive interest rates and priority access to loans ',
    ],
  },
  {
    title: 'REGULAR VOLUNTARY SAVING',
    points: [
      '👉 A regular (passbook) savings account that allows deposits and withdrawals at any time'
    ],
  },
  {
    title: 'YOUTH AND CHILDREN SAVING',
    points: [
      '👉 Special interest rates distinct from other savings products',
    ],
  },
  {
    title: 'EDUCATION SAVING',
    points: [
      '👉 Savings for individuals planning to pursue education '
    ],
  },
  {
    title: "INSTITUTIONAL SAVING",
    points: [
      '👉 Designed for governmental and non-governmental organizations, as well as social unions like idir, ekub, etc.',
    ],
  },
  {
    title: "WOMAN SAVING",
    points:[
      ' We offer specially tailored savings options for women'
    ]
  }
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
