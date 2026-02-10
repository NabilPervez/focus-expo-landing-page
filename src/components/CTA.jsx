import Lanyard from './Lanyard';

export default function CTA() {
    return (
        <div className="bg-[#f2e7d1] flex flex-col gap-[32px] items-center py-[96px] relative shrink-0 w-full overflow-hidden" data-name="9_Section_CTA" data-node-id="4:611">
            <div className="hidden md:block w-full h-[400px] -mb-32 relative z-10 pointer-events-none">
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
            <div className="container mx-auto px-4 max-w-7xl flex flex-col gap-[16px] items-center relative shrink-0 w-full z-20" data-name="Container" data-node-id="12:818">
                <div className="content-stretch flex flex-col items-center justify-center px-4 relative shrink-0 w-full" data-name="Container" data-node-id="12:819">
                    <p className="font-['Museo_Sans:700',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e47159] text-[14px] text-center tracking-[3.5px] uppercase" data-node-id="12:820">
                        Limited Availability
                    </p>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center px-4 relative shrink-0 w-full" data-name="Heading 2" data-node-id="12:821">
                    <p className="font-['Transducer_Test:Medium',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#1c3d42] text-[48px] text-center tracking-[-1.2px]" data-node-id="12:822">
                        Secure Your Spot
                    </p>
                </div>
            </div>
            <div className="opacity-90 relative shrink-0 w-full max-w-3xl px-4" data-name="Paragraph" data-node-id="4:614">
                <p className="font-['Museo_Sans:500',sans-serif] leading-[32.5px] not-italic text-[#1c3d42] text-[20px] text-center w-full whitespace-pre-wrap" data-node-id="4:615">
                    Early Bird tickets are now available. Join the community that is redefining professional success.
                </p>
            </div>
            <button className="bg-white px-[48px] py-[20px] rounded-[4px] shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 group border-2 border-white">
                <p className="font-['Transducer_Test:Bold',sans-serif] text-[18px] text-center text-[#025054] tracking-[2px] uppercase group-hover:tracking-[3px] transition-all">
                    SIGN UP FOR EARLY BIRD
                </p>
            </button>
        </div>
    );
}
