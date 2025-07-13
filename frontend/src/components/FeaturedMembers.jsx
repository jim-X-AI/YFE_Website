import { motion } from 'framer-motion';

const members = [
  {
    name: "Princess Ayomide Bamigboye",
    role: "Founder & Co-Head, Embedded Systems & Robotics",
    avatar:"https://i.ibb.co/F4cVyfyH/img3.jpg",
    company: "YFE"
  },
  {
    name: "Chukwuebuka Anulunko",
    role: "Co-Head, Machine Learning & Artificial Intelligence",
    avatar: "https://i.ibb.co/d0mFvgNF/img1.jpg",
    company: "YFE"
  },
  {
    name: "Nnenna Kazie",
    role: "Co-Head, Embedded Systems & Robotics",
    avatar: "https://i.ibb.co/nq0wbfJj/img2.jpg",
    company: "YFE"
  }
];

export default function FeaturedMembers() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Featured Members
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 dark:border-white/10 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{member.name}</h3>
              <p className="text-purple-600 dark:text-purple-300 mb-2">{member.role}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{member.company}</p>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-800 dark:to-blue-800 text-purple-600 dark:text-purple-200 rounded-full text-sm font-medium">
                View Profile
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
