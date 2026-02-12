
import { useState, useRef, useEffect } from 'react';

const pillars = [
    {
        letter: "F",
        title: "Faith",
        description: "The bedrock of our identity. Aligning our professional pursuits with our spiritual north star.",
        color: "#52a0ad"
    },
    {
        letter: "O",
        title: "Opportunity",
        description: "Unlocking new horizons. Connecting with mentors and markets that value your unique perspective.",
        color: "#f68d6f"
    },
    {
        letter: "C",
        title: "Career",
        description: "Precision in execution. Workshops and insights to elevate your professional trajectory.",
        color: "#e47159"
    },
    {
        letter: "U",
        title: "Unity",
        description: "Strength in numbers. Building a cohesive network of like-minded, high-achieving professionals.",
        color: "#3d7a85"
    },
    {
        letter: "S",
        title: "Strength",
        description: "Mental and financial resilience.",
        color: "#1c3d42"
    }
];

export default function Pillars() {
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
        <div id="pillars" className="bg-[#faf7f2] flex flex-col items-center justify-center py-20 relative w-full overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col gap-8 items-center w-full">
                <div className="text-center max-w-2xl">
                    <p className="font-['Museo_Sans:700',sans-serif] text-[#6bb5c1] text-sm tracking-[3.5px] uppercase mb-4">
                        What focus stands for
                    </p>
                    <h2 className="font-['Transducer_Test:Medium',sans-serif] text-[#1c3d42] text-4xl md:text-5xl tracking-[-1.2px]">
                        The Five Pillars
                    </h2>
                </div>

                {/* Desktop Grid Layout - Forced Row */}
                <div className="hidden md:flex flex-nowrap justify-center gap-4 w-full max-w-7xl mt-8 px-4 sm:px-6 md:px-12 lg:px-24">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="flex flex-col items-start p-6 rounded-lg border-2 bg-white w-full min-h-[300px] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-default" style={{ borderColor: pillar.color }}>
                            <div
                                className="font-['Museo_Sans:900',sans-serif] text-5xl leading-none mb-4"
                                style={{ color: pillar.color }}
                            >
                                {pillar.letter}
                            </div>
                            <h3 className="font-['Museo_Sans:900',sans-serif] text-[#1c3d42] text-xl mb-2">
                                {pillar.title}
                            </h3>
                            <p className="font-['Museo_Sans:500',sans-serif] text-[#1c3d42] text-sm leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel Layout */}
                <div className="md:hidden w-full mt-8 relative">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-4 scrollbar-hide"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {pillars.map((pillar, index) => (
                            <div
                                key={index}
                                className="snap-center shrink-0 w-[85vw] max-w-[320px] flex flex-col items-center justify-center p-6 text-center rounded-xl bg-white shadow-sm border-t-8"
                                style={{ borderColor: pillar.color }}
                            >
                                <div
                                    className="font-['Museo_Sans:900',sans-serif] text-6xl leading-none mb-4"
                                    style={{ color: pillar.color }}
                                >
                                    {pillar.letter}
                                </div>
                                <h3 className="font-['Museo_Sans:900',sans-serif] text-[#1c3d42] text-xl mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="font-['Museo_Sans:500',sans-serif] text-[#1c3d42] text-sm leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {pillars.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-6 bg-[#1c3d42]' : 'w-2 bg-[#1c3d42]/20'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
