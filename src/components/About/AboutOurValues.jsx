/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const values = [
    { title: "Passion never fails", statement: "Great things are only achievable when you love what you do." },
    { title: "People come first", statement: "Happy clients and unhappy team? No, not here. Not with us." },
    { title: "Impossible is nothing", statement: "There’s no such thing as limits. They are in your brain - nowhere else." },
    { title: "We're not executants", statement: "We’re part of the same team. We work with you, not for you." },
    { title: "Every code matters", statement: "We strive to do things of which we're proud to say: 'We've done this!'" },
    { title: "Don't take yourself...", statement: "...too seriously. Have fun, otherwise, it's not worth it." }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ValueCard = ({ title, statement}) => {
    return (
        <motion.div 
            className="bg-transparent text-vibrant-pink p-6 rounded-2xl shadow-lg  transition duration-300 w-full max-w-md mx-auto border border-neon relative overflow-hidden "
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
        >
            <div className="absolute inset-0 bg-neon-glow opacity-20 blur-lg"></div>
            <h3 className="text-xl font-semibold border-l-4 border-neon pl-3 mb-2 bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent ">{title}</h3>
            <p className="text-gray-700">{statement}</p>
        </motion.div>
    );
};

// const BackgroundAnimation = () => {
//     return (
//         <motion.div 
//             className="absolute inset-0  opacity-10 blur-2xl"
//             animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         />
//     );
// };

const OurValues = () => {
    return (
        <section className="py-16 bg-white relative overflow-hidden text-center">
            {/* <BackgroundAnimation /> */}
            <motion.div 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true }}
                variants={containerVariants} 
                className="max-w-4xl mx-auto text-center mb-10 relative z-10"
            >
                <h2 className="text-4xl font-bold bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent">Our Values</h2>
                <p className="text-gray-700">What drives us every day.</p>
            </motion.div>
            <motion.div 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true }}
                variants={containerVariants} 
                className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 relative z-10"
            >
                {values.map((value, index) => (
                    <ValueCard key={index} title={value.title} statement={value.statement} />
                ))}
            </motion.div>
        </section>
    );
};

export default OurValues;

// Tailwind Custom Styles (add in global styles or Tailwind config) 
// .text-neon { color: #0ff; text-shadow: 0px 0px 8px #0ff; }
// .border-neon { border-color: #0ff; }
// .shadow-neon { box-shadow: 0px 0px 12px #0ff; }
// .bg-neon-glow { background: radial-gradient(circle, rgba(0,255,255,0.3) 0%, rgba(0,0,0,0) 70%); }
