import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Who should attend FOCUS Expo?",
            answer: "FOCUS Expo is designed for professionals aged 25-45 looking to align their career ambitions with their spiritual values."
        },
        {
            question: "What is the dress code?",
            answer: "The dress code is business casual / smart casual. We check-in coat check available."
        },
        {
            question: "Will food be provided?",
            answer: "Yes! We will provide halal breakfast, lunch, and refreshments throughout the day. Dietary restrictions can be noted during registration."
        },
        {
            question: "Are there virtual attendance options?",
            answer: "Currently, this is an in-person only event to maximize networking and engagement."
        },
        {
            question: "What is the refund policy?",
            answer: "Tickets are refundable up to 30 days before the event. Transfers are available until 1 week prior."
        }
    ];

    return (
        <div id="faq" className="bg-[#faf7f2] flex flex-col items-center py-24 relative shrink-0 w-full" data-name="8_Section_FAQ" data-node-id="11:766">
            <div className="container mx-auto px-4 max-w-4xl flex flex-col gap-4 items-center relative shrink-0 w-full mb-12" data-name="Container" data-node-id="17:26">
                <div className="flex items-center justify-center relative shrink-0 w-full" data-name="Container" data-node-id="17:27">
                    <p className="font-['Museo_Sans:700',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e47159] text-[14px] text-center tracking-[3.5px] uppercase" data-node-id="17:28">
                        Frequently Asked Questions
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Heading 2" data-node-id="17:29">
                    <p className="font-['Transducer_Test:Medium',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#1c3d42] text-4xl md:text-[48px] text-center tracking-[-1.2px]" data-node-id="17:30">
                        Additional Info
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 max-w-4xl flex flex-col gap-4 relative shrink-0 w-full" data-name="Container" data-node-id="11:769">
                <div className="space-y-1 w-full">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group [&_summary::-webkit-details-marker]:hidden bg-white border border-gray-200 rounded-lg overflow-hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 text-[#1c3d42] hover:bg-gray-50 transition-colors">
                                <span className="font-['Museo_Sans:900',sans-serif] text-lg font-medium">
                                    {faq.question}
                                </span>
                                <svg
                                    className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180 text-[#52a0ad]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <div className="px-6 pb-6 pt-2">
                                <p className="font-['Museo_Sans:500',sans-serif] text-[#1c3d42]/80 leading-relaxed text-[16px]">
                                    {faq.answer}
                                </p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
}
