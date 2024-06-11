import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
    children: JSX.Element;
    className?: string;
}

export default function Reveal({ children, className }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
