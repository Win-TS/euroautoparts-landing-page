import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
    question: string;
    answer: string;
}

export default function Accordion({question, answer}: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="m-4 bg-white">
            <div className="py-5 px-10 flex justify-between items-center cursor-pointer rounded-lg" onClick={toggleAccordion}>
                <p className="text-lg font-notothai font-bold">{question}</p>
                <div className="text-xl font-notothai">
                    {isOpen ? "-" : "+"}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mx-10"
                    >
                        <p className="text-lg font-notothai">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}