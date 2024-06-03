import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";

interface AccordionProps {
    question: string;
    answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="m-4 rounded-lg overflow-hidden border border-gray-300">
            <div className="py-5 px-10 flex items-center cursor-pointer transition duration-300 ease-in-out bg-amber-100 hover:bg-amber-200 gap-3" onClick={toggleAccordion}>
                <h1 className="text-2xl font-notothai font-bold">Q:</h1>
                <p className="text-lg font-notothai font-bold grow">{question}</p>
                <motion.div
                    className="texl-lg md:text-xl font-notothai"
                    animate={{ rotate: isOpen ? -180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <FaAngleDown />
                </motion.div>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                        className="px-10"
                    >
                        <div className="py-5">
                            <p className="text-lg font-notothai">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
