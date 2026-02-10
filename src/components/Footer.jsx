
const imgLayer12 = "/assets/imgLayer12.svg";
const imgVector = "/assets/imgVector.svg";
const imgGroup3 = "/assets/imgGroup3.svg";
const imgGroup4 = "/assets/imgGroup4.svg";

export default function Footer() {
    return (
        <div className="bg-[#1c3d42] flex flex-col gap-12 items-center pb-12 pt-16 px-4 relative w-full overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none">
                <img alt="" className="w-full h-full object-cover opacity-50" src={imgLayer12} />
            </div>

            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                {/* Brand Column */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8">
                            <img alt="Logo" className="w-full h-full" src={imgVector} />
                        </div>
                        <span className="text-white font-bold text-2xl tracking-wider">FOCUS</span>
                    </div>
                    <p className="font-['Museo_Sans:500',sans-serif] text-[#e5e5e3] text-sm leading-relaxed max-w-xs">
                        Aligning direction through the lens of faith. A professional intersection for Muslim leaders.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-['Museo_Sans:900',sans-serif] text-[#6bb5c1] text-sm tracking-wider uppercase">
                        Quick Links
                    </h4>
                    <div className="flex flex-col gap-2">
                        <a href="#about" className="font-['Museo_Sans:500',sans-serif] text-[#f2f2f1]/80 hover:text-[#dd664e] text-sm transition-colors">About</a>
                        <a href="#speakers" className="font-['Museo_Sans:500',sans-serif] text-[#f2f2f1]/80 hover:text-[#dd664e] text-sm transition-colors">Speakers</a>
                        <a href="#agenda" className="font-['Museo_Sans:500',sans-serif] text-[#f2f2f1]/80 hover:text-[#dd664e] text-sm transition-colors">Agenda</a>
                        <a href="#location" className="font-['Museo_Sans:500',sans-serif] text-[#f2f2f1]/80 hover:text-[#dd664e] text-sm transition-colors">Location</a>
                        <a href="#register" className="font-['Museo_Sans:500',sans-serif] text-[#f2f2f1]/80 hover:text-[#dd664e] text-sm transition-colors">Register</a>
                    </div>
                </div>

                {/* Contact Column (Updated/Removed Subscribe) */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-['Museo_Sans:900',sans-serif] text-[#6bb5c1] text-sm tracking-wider uppercase">
                        Contact Us
                    </h4>
                    <p className="font-['Museo_Sans:500',sans-serif] text-[#e5e5e3] text-sm">
                        info@focusexpo.com
                    </p>
                    {/* Social Icons could go here */}
                </div>
            </div>

            {/* Copyright */}
            <div className="w-full max-w-7xl relative z-10 border-t border-[#2a5359] pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-['Museo_Sans:500',sans-serif] text-[#e5e5e3] text-sm text-center md:text-left">
                    © 2026 FOCUS EXPO. All rights reserved.
                </p>
                <div className="flex gap-4">
                    {/* Privacy Policy / Terms Links could go here */}
                </div>
            </div>
        </div>
    );
}
