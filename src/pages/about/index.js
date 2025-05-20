'use client';

import { motion } from 'framer-motion';
import { Users, Handshake, ShieldCheck } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

// Animation variant for staggered fade-ins
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

const team = [
    {
        name: "Mr. Belete",
        position: "Chief Executive Officer",
        photo: "/ceo.jpg",
    },
    {
        name: "Mr Solomon Aydagn",
        position: "Technical Manager",
        photo: "/cto.jpg",
    },
    {
        name: "Mr. Mussie Alemayehu",
        position: "HR & Finance Manager",
        photo: "/male.jpeg",
    },
    {
        name: "Mr. Getachew Adera",
        position: "Risk Manager",
        photo: "/male.jpeg",
    },
];

const testimonials = [
    {
        name: 'Ecobuild Trading PLC',
        role: 'Plc',
        quote:
            "We are one of the companies that uses the Binget microfinances salary disbursment and erp system users. Because of the system we made our has changed significantly and we are satisfied.",
        img: '/eco_build.png',
    },
    {
        name: 'MTS Trading Plc',
        role: 'Plc',
        quote:
            'We use the salary disbursment solution provided by Binget Microfinance. and it help us modernise our business,   ',
        img: '/mts.png',
    },
];

export default function AboutUs() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        slides: { perView: 1 },
        animation: { duration: 2000 },
        renderMode: 'performance',
    });

    const features = [
        {
            title: 'Strong Foundation',
            descriptions: [
                'Supported by the binget Group`s resource and experties.',
                'Guided by an experianced board with proven success in Ethiopian and international markets.'
            ]
        },
        {
            title: 'Dual Experties',
            descriptions: [
                'Operating with dual experties, Binget MFI excels as both a dynamic financial organization and a forward-thinking technology provider, combining the best of both worlds to deliver innovative and efficient solutions.',
            ]
        },
        {
            title: 'Blended Fin-Tech model',
            descriptions: [
                'A seamless integration of traditional financial services with cutting-edge fintech solutions, creating a transformative approach that bridges the gap between modern technology and financial accessibility.',
            ]
        }
    ]

    return (
            <main className="min-h-screen bg-white text-gray-800 overflow-hidden">

            {/* Hero Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                }}
                className="text-center max-w-4xl mx-auto h-screen content-center"
            >
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4"
                    variants={fadeInUp}
                    custom={0}
                >
                    Who We Are
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-600"
                    variants={fadeInUp}
                    custom={1}
                >
                    Bingt Microfinance Institution S.C (BMFl)was established on May 11,2022,with 12
                    shareholders.It operates in accordance with the commercial code of Ethiopia and
                    Microfinance Business Proclamation No.626/2009,as amended by Microfinance
                    Business Amendment Proclamation No.1164/2019 and various directives issued by
                    the National Bank of Ethiopia.The institution started with a paid-up capital of 50
                    millon br. BMFI has also acquired a feature-rich digital wallet platform,to offer
                    BingetBirr services.
                </motion.p>
            </motion.div>

            <section className="bg-gray-100 py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left Side (Text Content) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#baa452]">
                            <span className="text-[#212c62]">Why Choose Us</span>
                        </h2>

                    </motion.div>

                    {/* Right Side (Feature Cards) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {features.map((feature, index) => (
                            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md  items-center gap-4">
                                {feature.icon}
                                <h3 className="text-xl font-semibold text-gray-900 ">{feature.title}</h3>
                                <ul className="list-disc pl-5">
                                    {feature.descriptions.map(x => {
                                        return (
                                            <li className='text-gray-900'>
                                                {x}
                                            </li>
                                        )
                                    })}
                                </ul>

                                <p className="font-semibold text-gray-900 dark:text-white">{feature.description}</p>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </section>


            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 px-[10%]">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    className="bg-gray-100 shadow-md p-6 rounded-xl text-center"

                >
                    <h2 className="text-2xl font-semibold text-blue-900 mb-2">🎯 Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        To provide efficient and affordable financial service to theproductive poor and help to uplift them out of poverty.
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={3}
                    className="bg-gray-100 shadow-md p-6 rounded-xl text-center"
                >
                    <h2 className="text-2xl font-semibold text-blue-900 mb-2">👁️ Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                        To be one of the leading microfinance institutions in East Africa by the year 2030.
                    </p>
                </motion.div>
            </div>

            {/* Impact Stats */}
            <motion.div
                className="mt-20 bg-blue-50 rounded-xl p-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
                <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">📊 Our Impact in Numbers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    {[
                        { value: '50K+', label: 'Clients Served' },
                        { value: '$10M+', label: 'Loans Disbursed' },
                        { value: '98%', label: 'Repayment Rate' },
                    ].map((stat, i) => (
                        <motion.div key={stat.label} variants={fadeInUp} custom={i}>
                            <p className="text-3xl font-bold text-blue-800">{stat.value}</p>
                            <p className="text-gray-700">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Values */}
            <motion.div
                className="mt-20 p-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
                <h2 className="text-2xl font-bold text-blue-900 mb-10 text-center">
                    💡 What We Stand For
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Users className="w-8 h-8 text-blue-600" />,
                            title: 'Community First',
                            desc: 'We prioritize the needs of the people we serve.',
                        },
                        {
                            icon: <Handshake className="w-8 h-8 text-blue-600" />,
                            title: 'Integrity & Trust',
                            desc: 'We build transparent and long-lasting relationships.',
                        },
                        {
                            icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
                            title: 'Responsible Finance',
                            desc: 'We offer ethical, sustainable, and fair financial solutions.',
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            className="bg-white shadow-md p-6 rounded-xl text-center border"
                            variants={fadeInUp}
                            custom={i}
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
                                >
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-gray-200"
                                    />
                                    <h3 className="text-lg font-semibold">{member.name}</h3>
                                    <p className="text-gray-500 text-sm">{member.position}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            {/* Testimonials Carousel */}
            <motion.div
                className="p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">
                    💬 What Our Clients Say
                </h2>

                <div
                    ref={sliderRef}
                    className="keen-slider max-w-3xl mx-auto rounded-xl shadow-xl bg-white overflow-hidden"
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="keen-slider__slide p-8 flex flex-col items-center text-center space-y-4"
                        >
                            <img
                                src={t.img}
                                alt={t.name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow"
                            />
                            <p className="text-gray-700 italic text-sm max-w-md">“{t.quote}”</p>
                            <div>
                                <p className="font-semibold text-blue-800">{t.name}</p>
                                <p className="text-xs text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </main>
    );
}
