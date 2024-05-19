import { motion } from "framer-motion";

interface RevealProps {
    children: JSX.Element;
}

export default function Reveal({ children }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            {children}
        </motion.div>
    );
}