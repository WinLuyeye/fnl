'use client';

import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#0A1F44] flex items-center justify-center z-50">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >

        {/* LOGO TEXT */}
        <h1 className="text-3xl font-extrabold text-[#F2B233] tracking-widest">
          FNL
        </h1>

        <p className="text-gray-300 text-sm mt-2">
          Forum National de la Logistique
        </p>

        {/* ANIMATION BAR */}
        <div className="mt-6 w-40 h-[2px] bg-white/10 overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-[#F2B233]"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: 'linear',
            }}
          />
        </div>

      </motion.div>

    </div>
  );
};

export default Loader;