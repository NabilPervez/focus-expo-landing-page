
const imgLayer10 = "/assets/imgLayer10.svg";
const imgGroup = "/assets/imgGroup.svg";
const imgGroup1 = "/assets/imgGroup1.svg";
const imgGroup2 = "/assets/imgGroup2.svg";

export default function Hero() {
    return (
        <div className="bg-[#1c3d42] content-stretch flex flex-col gap-[40px] md:gap-[90px] min-h-screen items-center justify-center overflow-hidden py-[100px] md:py-[200px] relative shrink-0 w-full" data-name="1_Section_Hero" data-node-id="4:419">
            <div className="absolute h-full w-full left-0 top-0 overflow-hidden pointer-events-none fade-in" data-name="Layer_10" data-node-id="5:5">
                <img alt="" className="block w-full h-full object-cover opacity-30" src={imgLayer10} />
            </div>
            <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0" data-node-id="16:3">
                <div className="content-stretch flex flex-col md:flex-row gap-[32px] items-center justify-center relative shrink-0" data-name="Container" data-node-id="4:522">
                    <div className="relative shrink-0 max-w-full px-4 py-8 flex justify-center" data-name="Layer_10" data-node-id="5:9">
                        <img alt="Focus Expo Logo" className="block max-w-[400px] md:max-w-[600px] h-auto w-full object-contain" src="/assets/Focus_Logo_Main_White4k.png" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[34px] items-center md:items-start relative shrink-0 max-w-full px-4" data-node-id="7:119">
                        <div className="content-stretch flex flex-col gap-[24px] items-center md:items-start relative shrink-0 w-full" data-node-id="7:121">
                            <div className="content-stretch flex flex-col font-['Transducer_Test:Regular',sans-serif] items-center md:items-start leading-tight not-italic relative shrink-0 text-4xl md:text-[72px] tracking-[-1px] md:tracking-[-1.8px] w-full max-w-full md:max-w-4xl text-center md:text-left break-words" data-name="Heading 1" data-node-id="4:525">
                                <p className="relative shrink-0 text-[#f2e7d1] max-w-full" data-node-id="4:526">
                                    Aligning Direction.
                                </p>
                                <p className="relative shrink-0 text-[#3ea0ab] max-w-full" data-node-id="4:527">
                                    Through The Lens of Faith
                                </p>
                            </div>
                            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Paragraph" data-node-id="4:529">
                                <p className="font-['Museo_Sans:500',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f2e7d1] text-[20px] text-center" data-node-id="4:530">
                                    <span className="leading-[32.5px]">{`A professional intersection of `}</span>
                                    <span className="font-['Museo_Sans:900',sans-serif] leading-[32.5px] text-[#3ea0ab]">Islamic values</span>
                                    <span className="leading-[32.5px]">,</span>
                                    <span className="leading-[32.5px] text-[#3ea0ab]">{` `}</span>
                                    <span className="font-['Museo_Sans:900',sans-serif] leading-[32.5px] text-[#A83F3F]">mental wellness</span>
                                    <span className="leading-[32.5px]">{`, and `}</span>
                                    <span className="font-['Museo_Sans:900',sans-serif] leading-[32.5px] text-[#dd664e]">financial growth.</span>
                                </p>
                            </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col items-start justify-center left-0 overflow-clip top-0" data-name="Paragraph" data-node-id="7:109" />
                    </div>
                </div>
                <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full px-4" data-node-id="7:120">
                    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 w-full max-w-md" data-node-id="11:604">
                        <div className="flex flex-col font-['Museo_Sans:900',sans-serif] justify-center leading-normal not-italic relative shrink-0 text-[#3ea0ab] text-2xl md:text-5xl text-center w-full" data-node-id="4:532">
                            <p className="whitespace-nowrap">April 4, 2026</p>
                            <p className="whitespace-nowrap">Allen, TX</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[16px] items-center justify-center relative shrink-0 w-full max-w-lg" data-name="Container" data-node-id="4:533">
                        <button className="bg-white flex-1 min-w-[200px] h-[54px] rounded-[4px] cursor-pointer hover:bg-gray-100 transition-colors border-2 border-white flex items-center justify-center shadow-lg" data-name="Button" data-node-id="4:534">
                            <p className="font-['Transducer_Test:Bold',sans-serif] text-[#025054] text-[14px] text-center tracking-[1px] uppercase">
                                Sign Up Now
                            </p>
                        </button>
                        <a href="#about" className="flex-1 min-w-[200px] h-[54px] rounded-[4px] cursor-pointer hover:bg-[#3ea0ab]/10 transition-colors border-2 border-[#3ea0ab] flex items-center justify-center text-decoration-none" data-name="Button" data-node-id="4:536">
                            <p className="font-['Transducer_Test:Bold',sans-serif] text-[#3ea0ab] text-[14px] text-center tracking-[1px] uppercase">
                                Learn More
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
