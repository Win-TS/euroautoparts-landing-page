import { RiDoubleQuotesL } from "react-icons/ri";

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

    return (
        <div className="relative content-center mr-6 w-full md:w-2/3">
            <div id="slider" className="overflow-x-scroll flex space-x-5 rounded-lg scroll-smooth">
                {reviews.map((review, index) => (
                    <div key={index}>
                        <TestimonialCard review={review.review} channel={review.channel} />
                    </div>
                ))}
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
        <div className="bg-gray-200 rounded-lg shadow-lg p-5 w-60 h-72 flex flex-col justify-between">
            <RiDoubleQuotesL className="text-red-400 text-4xl opacity-75" />
            <p className="text-2xl font-notothai">{`"${review}"`}</p>
            <p className="text-lg text-right font-notothai">{`คุณลูกค้าทาง ${channel}`}</p>
        </div>
    )
}