"use client"

import { transitionVariantsPage } from "@/utils/motion-transition";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                className="fixed top-0 bottom-0 right-full 
                w-screen z-30 bg-[#d6d6d6]"
                variants={transitionVariantsPage}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{delay:0.1, duration: 0.3, ease:"easeInOut"}}
                >

                </motion.div>
            </div>
        </AnimatePresence>

    );
}

export default TransitionPage;