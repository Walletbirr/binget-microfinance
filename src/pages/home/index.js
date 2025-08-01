import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 overflow-hidden bg-[/shape.svg]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-100 to-green-50 py-20 px-6 md:px-20 text-center pt-30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Dreams Through Microfinance
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We provide financial services that create opportunities for underserved communities to grow and thrive.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition">
            Get Started
          </button>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src="/images/microfinance-hero.jpg"
            alt="Microfinance Hero"
            width={900}
            height={600}
            className="rounded-3xl shadow-xl mx-auto"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Small Business Loans",
              image: "/images/service1.jpg",
              desc: "Flexible microloans to kickstart or expand your small business."
            },
            {
              title: "Group Lending",
              image: "/images/service2.jpg",
              desc: "Empowering communities through group-based financing models."
            },
            {
              title: "Financial Literacy",
              image: "/images/service3.jpg",
              desc: "Workshops and tools to help you manage and grow your finances."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <img
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 md:px-20 bg-green-50 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Impact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-4xl font-bold text-green-700">25,000+</h3>
            <p className="mt-2 text-gray-700">Loans Disbursed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-700">95%</h3>
            <p className="mt-2 text-gray-700">Repayment Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-700">100+</h3>
            <p className="mt-2 text-gray-700">Communities Reached</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white text-center py-16 px-6 md:px-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Change Lives with Us?
        </motion.h2>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          Join thousands of entrepreneurs and families transforming their future with microfinance support.
        </p>
        <button className="bg-white text-green-700 px-6 py-3 rounded-full text-lg font-medium hover:bg-green-100 transition">
          Apply for a Loan
        </button>
      </section>
    </main>
  );
}
