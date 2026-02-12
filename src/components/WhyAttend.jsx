
import { useRef, useState } from 'react';

const imgLayer1 = "/assets/imgLayer1.svg";
const imgFrame = "/assets/imgFrame.svg";
const imgFrame1 = "/assets/imgFrame1.svg";

const reasons = [
    {
        title: "Curated Community",
        description: "Meet 500+ professionals who share your values and ambitions. These are not just contacts - they are your future collaborators, mentors, and friends.",
        icon: imgLayer1,
        borderColor: "#52a0ad"
    },
    {
        title: "Actionable Workshops",
        description: "No fluff. Just practical strategies you can implement Monday morning. From financial planning to career pivots to mental health practices.",
        icon: imgFrame,
        borderColor: "#f68d6f"
    },
    {
        title: "Holistic Approach",
        description: "We address the full spectrum: spiritual alignment, mental wellness, career growth, and financial literacy. Because success is multidimensional.",
        icon: imgFrame1,
        borderColor: "#52a0ad"
    }
];

export default function WhyAttend() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = scrollRef.current.offsetWidth;
            const index = Math.round(scrollLeft / itemWidth);
            setActiveIndex(index);
        }
    };

    return (
        <div id="why-attend" className="bg-[#f2e7d1] flex flex-col gap-[64px] items-center pt-[96px] pb-24 relative shrink-0 w-full" data-name="4_Section_WhyFocus" data-node-id="11:665">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container" data-node-id="11:806">
                <div className="flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container" data-node-id="11:807">
                    <p className="font-['Museo_Sans:700',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e47159] text-[14px] text-center tracking-[3.5px] uppercase" data-node-id="11:808">
                        MORE THAN A CONFERENCE
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Heading 2" data-node-id="11:809">
                    <p className="font-['Transducer_Test:Medium',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#1c3d42] text-4xl md:text-[48px] text-center tracking-[-1.2px]" data-node-id="11:810">
                        Why Attend FOCUS EXPO?
                    </p>
                </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl grid-cols-1 md:grid-cols-3 gap-8 relative shrink-0 w-full" data-name="Container" data-node-id="11:671">
                {reasons.map((reason, index) => (
                    <div key={index} className={`bg-[#faf7f2] border-2 border-[${reason.borderColor}] border-solid flex flex-col gap-[24px] min-h-[335px] h-auto items-start pb-[2px] pt-[34px] px-[34px] relative rounded-[6px] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-default`} style={{ borderColor: reason.borderColor }}>
                        <div className="content-stretch flex items-start p-[10px] relative shrink-0 w-full">
                            <div className="size-[48px] relative shrink-0">
                                <img alt="" className="w-full h-full" src={reason.icon} />
                            </div>
                        </div>
                        <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full">
                            <p className="flex-[1_0_0] font-['Museo_Sans:700',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#1c3d42] text-[24px] whitespace-pre-wrap">
                                {reason.title}
                            </p>
                        </div>
                        <div className="opacity-90 relative shrink-0 w-full">
                            <p className="font-['Museo_Sans:500',sans-serif] leading-[26px] not-italic text-[#1c3d42] text-[16px] w-full whitespace-pre-wrap">
                                {reason.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden w-full relative">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8 scrollbar-hide"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {reasons.map((reason, index) => (
                        <div key={index} className="snap-center shrink-0 w-[85vw] max-w-[320px] bg-[#faf7f2] border-2 flex flex-col gap-[20px] min-h-[280px] h-auto items-start p-6 relative rounded-[6px]" style={{ borderColor: reason.borderColor }}>
                            <div className="size-[40px] relative shrink-0 mb-2">
                                <img alt="" className="w-full h-full" src={reason.icon} />
                            </div>
                            <h3 className="font-['Museo_Sans:700',sans-serif] text-[#1c3d42] text-xl leading-tight">
                                {reason.title}
                            </h3>
                            <p className="font-['Museo_Sans:500',sans-serif] text-[#1c3d42] text-sm leading-relaxed opacity-90">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-4">
                    {reasons.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-6 bg-[#1c3d42]' : 'w-2 bg-[#1c3d42]/20'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
