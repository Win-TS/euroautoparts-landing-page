import { RiDoubleQuotesL } from "react-icons/ri";
import { motion } from "framer-motion";

export default function TestimonialSlider() {
    const reviews = [
        {
            review: "งานมือจับเนี๊ยบมาก เข้ารูป สีตรง ใส่ได้แทนของเดิมดีมากเลยค่ะ",
            channel: "FB Page"
        },
        {
            review: "งานมือจับเนี๊ยบมาก เข้ารูป สีตรง ใส่ได้แทนของเดิมดีมากเลยค่ะ",
            channel: "FB Page"
        },
        {
            review: "งานมือจับเนี๊ยบมาก เข้ารูป สีตรง ใส่ได้แทนของเดิมดีมากเลยค่ะ",
            channel: "FB Page"
        },
        {
            review: "งานมือจับเนี๊ยบมาก เข้ารูป สีตรง ใส่ได้แทนของเดิมดีมากเลยค่ะ",
            channel: "FB Page"
        },
        {
            review: "งานมือจับเนี๊ยบมาก เข้ารูป สีตรง ใส่ได้แทนของเดิมดีมากเลยค่ะ",
            channel: "FB Page"
        },
    ]

    const duplicatedReviews = [...reviews, ...reviews];

    return (
    <div className="relative content-center w-full md:w-2/3 overflow-hidden rounded-lg md:basis-2/3">
        <div className="hover:overflow-x-auto">
            <motion.div
                className="flex space-x-5"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 20,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedReviews.map((review, index) => (
                    <div key={index}>
                        <div className="flex flex-col items-center">
                            <TestimonialCard review={review.review} channel={review.channel} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
    )
}

interface TestimonialCardProps {
    review: string;
    channel: string;
}

function TestimonialCard({ review, channel }: TestimonialCardProps) {
    return (
        <div className="bg-gray-200 rounded-lg shadow-lg p-5 w-56 h-64 md:w-60 md:h-72 flex flex-col justify-between">
            <RiDoubleQuotesL className="text-red-400 text-4xl opacity-75" />
            <p className="text-xl md:text-2xl font-notothai">{`"${review}"`}</p>
            <p className="text-md md:text-lg text-right font-notothai">{`คุณลูกค้าทาง ${channel}`}</p>
        </div>
    )
}