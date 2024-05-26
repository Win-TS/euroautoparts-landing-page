import { useEffect } from "react";
import Reveal from "../animations/Reveal";
import Accordion from "../components/Accordion";

export default function FAQ() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const accordionIds = [
        {
            title:"test q1",
            description:"ans q1"
        },
        {
            title:"test q2",
            description:"ans q2"
        },
        {
            title:"test q3",
            description:"ans q3"
        },
        {
            title:"test q4",
            description:"ans q4"
        },
        {
            title:"test q5",
            description:"ans q5"
        },
    ];

    return (
        <>
            
                <div className="p-4 bg-gray-200">
                    <Reveal>
                        <>
                            <h1 className="text-2xl md:text-3xl text-center font-notothai font-bold">คำถามที่พบบ่อย</h1>
                            <h1 className="text-2xl md:text-3xl text-center font-notothai font-bold">Frequently Asked Questions (FAQ)</h1>
                        </>
                    </Reveal>
                </div>
            
            <div>
                <Reveal>
                    <div className="faq-items">
                        {accordionIds.map((item) => (
                        <Accordion
                            key={item.title}
                            question={item.title}
                            answer={item.description}
                        />
                        ))}
                    </div>
                </Reveal>
            </div>
        </>
    )
}