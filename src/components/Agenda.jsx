

export default function Agenda() {
    const agendaItems = [
        {
            time: "8:00 AM",
            color: "#52a0ad",
            title: "Registration & Welcome Breakfast",
            description: "Network with fellow attendees over coffee and light refreshments"
        },
        {
            time: "9:30 AM",
            color: "#f68d6f",
            title: "Opening Keynote",
            description: "Setting the tone: Faith as the foundation of professional excellence"
        },
        {
            time: "11:00 AM",
            color: "#e47159",
            title: "Breakout Workshops (Track A & B)",
            description: "Choose from Financial Planning, Career Development, or Mental Wellness sessions"
        },
        {
            time: "1:00 PM",
            color: "#3d7a85",
            title: "Networking Lunch",
            description: "Connect with mentors, peers, and industry leaders"
        },
        {
            time: "2:30 PM",
            color: "#f68d6f",
            title: "Panel Discussion",
            description: "Balancing ambition with values in modern professional life"
        },
        {
            time: "4:00 PM",
            color: "#1c3d42",
            title: "Closing Session & Networking Reception",
            description: "Final insights and continued connections"
        }
    ];

    const agendaItemComponents = agendaItems.map((item, index) => (
        <div
            key={index}
            className="bg-[#f2e7d1] py-8 px-6 md:px-10 flex gap-4 md:gap-8 rounded-xl w-full shadow-lg border-2 border-transparent hover:border-[#1c3d42]/10 transition-colors"
        >
            <div className="flex-shrink-0 w-[80px] md:w-[100px] flex flex-col items-center">
                <p className="font-['Museo_Sans:700',sans-serif] text-[16px] md:text-[18px]" style={{ color: item.color }}>
                    {item.time}
                </p>
            </div>
            <div className="w-[4px] rounded-full self-stretch flex-shrink-0" style={{ backgroundColor: item.color }} />
            <div className="flex flex-col gap-2 flex-grow">
                <h3 className="font-['Museo_Sans:900',sans-serif] text-[#1c3d42] text-[18px] md:text-[20px] leading-tight">
                    {item.title}
                </h3>
                <p className="font-['Museo_Sans:500',sans-serif] text-[#1c3d42] text-[14px] md:text-[16px] opacity-80 leading-relaxed">
                    {item.description}
                </p>
            </div>
        </div>
    ));

    return (
        <div id="agenda" className="bg-[#faf7f2] flex flex-col gap-[64px] items-center pt-[96px] pb-24 relative shrink-0 w-full" data-name="6_Section_Agenda" data-node-id="11:701">
            <div className="container mx-auto px-4 max-w-7xl flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="11:702">
                <div className="h-[20px] relative shrink-0 w-full text-center" data-name="Container" data-node-id="11:703">
                    <p className="font-['Museo_Sans:700',sans-serif] leading-[20px] not-italic text-[#e47159] text-[14px] tracking-[3.5px] uppercase" data-node-id="11:704">
                        What To Expect
                    </p>
                </div>
                <div className="h-[48px] relative shrink-0 w-full text-center" data-name="Heading 2" data-node-id="11:705">
                    <p className="font-['Transducer_Test:Medium',sans-serif] leading-[48px] not-italic text-[#1c3d42] text-[48px] tracking-[-1.2px]" data-node-id="11:706">
                        Event Agenda
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 max-w-4xl relative shrink-0 w-full h-[600px]" data-name="Container" data-node-id="11:707">
                <AnimatedList
                    items={agendaItemComponents}
                    showGradients={true}
                    displayScrollbar={true}
                    enableArrowNavigation={false}
                />
            </div>
            <button className="bg-white border-2 border-white content-stretch flex h-[54px] items-center justify-center px-[43px] py-[17px] relative rounded-[4px] shrink-0 w-full max-w-xs cursor-pointer hover:bg-gray-100 transition-colors shadow-md" data-name="Button" data-node-id="16:5">
                <p className="font-['Transducer_Test:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#025054] text-[14px] text-center tracking-[1px] uppercase" data-node-id="16:6">
                    VIEW EVENT AGENDA
                </p>
            </button>
        </div>
    );
}
