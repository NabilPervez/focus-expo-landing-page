export default function About() {

    const stats = [
        {
            value: "500+",
            label: "Expected Attendees",
            bgColor: "bg-[#025054]",
            borderColor: "border-[#52a0ad]"
        },
        {
            value: "25+",
            label: "Industry Speakers",
            bgColor: "bg-[#025054]",
            borderColor: "border-[#f68d6f]"
        },
        {
            value: "12",
            label: "Expert-Led Workshops",
            bgColor: "bg-[#025054]",
            borderColor: "border-[#52a0ad]"
        },
        {
            value: "1",
            label: "Transformative Day",
            bgColor: "bg-[#025054]",
            borderColor: "border-[#f68d6f]"
        }
    ];

    return (
        <div id="about" className="bg-[#f2e7d1] flex flex-col items-center relative shrink-0 w-full py-24" data-name="2_Section_Intro" data-node-id="16:4">
            <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row gap-12 items-center justify-center relative shrink-0 w-full mb-16" data-name="AboutSection" data-node-id="4:538">
                <div className="flex items-center relative shrink-0" data-name="Heading 2" data-node-id="4:539">
                    <p className="font-['Transducer_Test:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#1c3d42] text-4xl md:text-5xl max-w-lg whitespace-pre-wrap" data-node-id="4:540">
                        <span className="text-[#013030]">The Answers You Have Been</span>
                        <span>{` `}</span>
                        <span className="font-['Transducer_Test:Bold',sans-serif] text-[#025054]">Seeking.</span>
                    </p>
                </div>
                <div className="flex flex-col gap-6 items-start not-italic relative shrink-0 text-[#1c3d42] text-lg max-w-2xl" data-name="Container" data-node-id="4:541">
                    <p className="font-['Museo_Sans:500',sans-serif] leading-relaxed" data-node-id="4:543">
                        In a world that often demands we compartmentalize our identities, FOCUS Expo invites you to bring your whole self.
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal" data-node-id="4:545">
                        <span className="font-['Museo_Sans:500',sans-serif] leading-relaxed">{`Designed specifically for professionals aged 25-45, this event is not just about networking - it is about `}</span>
                        <span className="font-['Museo_Sans:700',sans-serif] leading-relaxed text-[#3d7a85]">calibration</span>
                        <span className="font-['Museo_Sans:500',sans-serif] leading-relaxed">.</span>
                    </p>
                    <p className="font-['Museo_Sans:500',sans-serif] leading-relaxed" data-node-id="4:547">
                        We are creating a sophisticated space where career ambition meets spiritual grounding, and where mental wellness is recognized as the foundation of functioning at our best.
                    </p>
                </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid container mx-auto px-4 max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative shrink-0 w-full" data-name="StatsSection" data-node-id="11:605">
                {stats.map((stat, index) => (
                    <div key={index} className={`${stat.bgColor} ${stat.borderColor} border-t-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow flex flex-col gap-2 items-center justify-center p-8 relative shrink-0 transform hover:-translate-y-1 duration-300`}>
                        <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[#f2e7d1] text-5xl text-center">
                            {stat.value}
                        </h3>
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#f2e7d1] text-sm text-center tracking-wider uppercase opacity-90">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden w-full relative">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8 scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
                    {stats.map((stat, index) => (
                        <div key={index} className={`snap-center shrink-0 w-[240px] ${stat.bgColor} ${stat.borderColor} border-t-8 rounded-lg shadow-xl flex flex-col gap-2 items-center justify-center p-8 relative`}>
                            <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[#f2e7d1] text-4xl text-center">
                                {stat.value}
                            </h3>
                            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#f2e7d1] text-xs text-center tracking-wider uppercase opacity-90">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
