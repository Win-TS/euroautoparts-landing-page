import Accordion from "../components/Accordion";

export default function FAQ() {
    const accordionIds = [
        {
            title:"test q1",
            description:"ans q1"
        },
        {
            title:"test q2",
            description:"ans q2"
        }
    ];

    return (
        <>
            <div className="p-2 bg-gray-300">
                <h1 className="text-3xl text-center font-notothai font-bold">คำถามที่พบบ่อย</h1>
                <h1 className="text-3xl text-center font-notothai font-bold">Frequently Asked Questions (FAQ)</h1>
            </div>

            <div>
                <div className="faq-items">
                    {accordionIds.map((item) => (
                    <Accordion
                        question={item.title}
                        answer={item.description}
                    />
                    ))}
                </div>
            </div>
        </>
    )
}