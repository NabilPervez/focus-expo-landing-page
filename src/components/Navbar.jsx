import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const imgVector = "/assets/imgVector.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-[#1c3d42]/90 backdrop-blur-md border-b border-[#3ea0ab]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer w-10 h-10" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img src={imgVector} alt="FOCUS Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#about" className="text-white hover:text-[#3ea0ab] px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide">About</a>
                            <a href="#speakers" className="text-white hover:text-[#3ea0ab] px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide">Speakers</a>
                            <a href="#agenda" className="text-white hover:text-[#3ea0ab] px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide">Agenda</a>
                            <a href="#location" className="text-white hover:text-[#3ea0ab] px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide">Location</a>
                            <a href="#faq" className="text-white hover:text-[#3ea0ab] px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide">FAQ</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-[#3ea0ab] text-[#1c3d42] px-6 py-2.5 rounded-[4px] font-bold text-sm hover:bg-[#2d7a83] transition-colors uppercase tracking-wide">
                            Sign Up Now
                        </button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#3ea0ab]/20 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden fixed inset-0 top-20 bg-[#1c3d42] border-b border-[#3ea0ab]/20 z-40 overflow-y-auto">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#3ea0ab] block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide">About</a>
                        <a href="#speakers" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#3ea0ab] block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide">Speakers</a>
                        <a href="#agenda" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#3ea0ab] block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide">Agenda</a>
                        <a href="#location" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#3ea0ab] block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide">Location</a>
                        <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#3ea0ab] block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide">FAQ</a>
                        <button className="w-full mt-4 bg-[#3ea0ab] text-[#1c3d42] px-4 py-3 rounded-[4px] font-bold text-sm hover:bg-[#2d7a83] transition-colors uppercase tracking-wide">
                            Sign Up Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
