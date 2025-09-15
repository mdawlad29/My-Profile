import { motion } from "framer-motion";

export const FAQ = () => {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold text-white">
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Questions
        </span>
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {[...Array(4)].map((_, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl border border-gray-700/50 p-6"
            style={{ background: "rgb(30, 41, 59)" }}
          >
            <h2 className="mb-3 text-xl font-bold text-white">
              {idx === 0
                ? "What is your typical process for new projects?"
                : idx === 1
                ? "How long does a typical project take to complete?"
                : idx === 2
                ? "Do you offer maintenance services after project completion?"
                : "What payment methods do you accept?"}
            </h2>
            <p className="text-gray-400">
              {idx === 0
                ? "My process typically includes an initial consultation, proposal and planning phase, design and development, review and testing, and finally launch with follow-up support."
                : idx === 1
                ? "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while more complex applications can take several months. I'll provide a detailed timeline during our initial consultation."
                : idx === 2
                ? "Yes, I offer ongoing maintenance and support packages to ensure your project continues to run smoothly and stays up-to-date with the latest standards and security practices."
                : "I accept credit cards, PayPal, bank transfers, and cryptocurrency. Projects typically require a 50% deposit to begin, with the remainder due upon completion."}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
