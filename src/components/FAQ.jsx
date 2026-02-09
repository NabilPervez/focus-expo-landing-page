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
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-[#f2e7d1] border-2 border-[#e8e8e8] border-solid flex flex-col items-start overflow-hidden rounded-[6px] shrink-0 w-full transition-all duration-300" data-name="Container">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex items-center justify-between w-full h-[80px] px-6 text-left focus:outline-none hover:bg-black/5 transition-colors"
                        >
                            <span className="font-['Museo_Sans:900',sans-serif] text-[#1c3d42] text-[18px] pr-4">
                                {faq.question}
                            </span>
                            <span className={`font-['Inter:Medium',sans-serif] font-medium text-[#52a0ad] text-[24px] transform transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-[#e47159]' : ''}`}>
                                +
                            </span>
                        </button>
                        <div
                            className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="font-['Museo_Sans:500',sans-serif] text-[#1c3d42] text-[16px] px-6 pb-6 pt-0">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
