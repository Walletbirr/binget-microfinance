import Carousel from "@/components/Carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import AboutUs from "./about";

export default function HomePage() {
  const router = useRouter()
  const homeItems = [
    {
      image: 'bg.png',
      title: 'BINGET Microfinance Institute',
      description: 'Let`s Build tomorrow, today',
    },
    {
      image: '/saving1.jpg',
      title: 'Saving Options',
      description: "At BINGET Microfinance, we believe in empowering individuals and communities through accessible and flexible savings solutions. Our range of savings products is designed to help you achieve your financial goals—whether you're planning for the future, building an emergency fund, or saving for your business.",
    },
    {
      image: '/loan_bg.jpg',
      title: 'Loan Options',
      description: "At BINGET Microfinance, we offer a variety of loan products designed to support your financial journey—whether you're growing a small business, covering household expenses, investing in agriculture, or planning for education",
    },
    {
      title: "Mobile Money",
      image: "/bingetBirr.png",
      description: "Stay connected to your finances anytime, anywhere with BINGET Microfinance’s secure and easy-to-use mobile money platform. Whether you're sending or receiving money, paying bills, topping up airtime, or repaying your loan, our platform brings the power of banking right to your phone."
    }
  ]

  const images = [
    "/cbe.png",
    "/awash_bank.png",
    "/zemen_bank.png",
    "/coop.png",
    "/gb.png",
    "/amhara_bank.png",
    "/tsehay_bank.png",
    "/buna_bank.png",
    "/hijira_bank.png",
    "/oromia_bank.png",
    "/abay_bank.png",
    "/abyssinia_bank.png",
  ];


  const duplicatedImages = [...images, ...images];

  return (
    <main className="min-h-screen bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="">
        <Carousel items={homeItems} />
      </section>
      <section className="py-10 px-6 md:px-20 bg-green-50 text-center overflow-hidden m-4 rounded">
        <h3 className="pb-4 text-4xl font-bold text-green-700">Our Partners</h3>
        <div className="animate-scroll flex w-max">
          {duplicatedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`scroll-img-${index}`}
              className="h-20 w-auto mx-4"
            />
          ))}
        </div>
        {/* </div> */}
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
              title: "Saving",
              image: "/images/service1.jpg",
              desc: "Secure and rewarding saving options.",
              link: '/products/saving_products/'
            },
            {
              title: "Loan",
              image: "/images/service2.jpg",
              desc: "Tailored loan options to your specific needs.",
              link: '/products/credit_products/'
            },
            {
              title: "Mobile Money",
              image: "/images/service3.jpg",
              desc: "A next-generation digital financial services platform, providing a seamless and secure ecosystem for businesses, agents, and individual users.",
              link: '/products/mobile_money/'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition p-6 bg-gray-100 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              onClick={() => router.push(item.link)}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      {/* <section className="py-20 px-6 md:px-20 bg-green-50 text-center">
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
      </section> */}
      <AboutUs/>
    </main>
  );
}
