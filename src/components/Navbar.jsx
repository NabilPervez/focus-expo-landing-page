import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const imgVector = "/assets/imgVector.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed w-full z-50 bg-[#1c3d42]/90 backdrop-blur-md border-b border-[#3ea0ab]/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0 cursor-pointer w-10 h-10" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <img src={imgVector} alt="FOCUS Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <a href="#about" className="text-[#3EA0AB] hover:text-[#dd664e] px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide">About</a>
                                <a href="#speakers" className="text-[#3EA0AB] hover:text-[#dd664e] px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide">Speakers</a>
                                <a href="#agenda" className="text-[#3EA0AB] hover:text-[#dd664e] px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide">Agenda</a>
                                <a href="#location" className="text-[#3EA0AB] hover:text-[#dd664e] px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide">Location</a>
                                <a href="#faq" className="text-[#3EA0AB] hover:text-[#dd664e] px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wide">FAQ</a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <a href="https://luma.com/64o45o5x" className="bg-white text-[#025054] px-6 py-2.5 rounded-[4px] font-bold text-sm hover:bg-gray-100 transition-colors uppercase tracking-wide shadow-md">
                                Sign Up Now
                            </a>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#3ea0ab]/20 focus:outline-none transition-colors"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - High Z-Index to cover everything */}
            {isOpen && (
                <div className="fixed inset-0 z-[9999] bg-[#1c3d42] md:hidden flex flex-col h-[100dvh] w-screen overflow-hidden">
                    {/* Header inside Menu for continuity */}
                    <div className="flex items-center justify-between h-20 px-4 sm:px-6 border-b border-[#3ea0ab]/20 shrink-0">
                        <div className="flex-shrink-0 cursor-pointer w-10 h-10" onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            <img src={imgVector} alt="FOCUS Logo" className="w-full h-full object-contain" />
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#3ea0ab]/20 focus:outline-none transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Menu Links */}
                    <div className="flex-1 overflow-y-auto px-4 py-8 flex flex-col gap-6">
                        <a href="#about" onClick={() => setIsOpen(false)} className="text-[#3EA0AB] hover:text-[#dd664e] text-2xl font-bold uppercase tracking-wide transition-colors border-b border-[#3ea0ab]/10 pb-4">About</a>
                        <a href="#speakers" onClick={() => setIsOpen(false)} className="text-[#3EA0AB] hover:text-[#dd664e] text-2xl font-bold uppercase tracking-wide transition-colors border-b border-[#3ea0ab]/10 pb-4">Speakers</a>
                        <a href="#agenda" onClick={() => setIsOpen(false)} className="text-[#3EA0AB] hover:text-[#dd664e] text-2xl font-bold uppercase tracking-wide transition-colors border-b border-[#3ea0ab]/10 pb-4">Agenda</a>
                        <a href="#location" onClick={() => setIsOpen(false)} className="text-[#3EA0AB] hover:text-[#dd664e] text-2xl font-bold uppercase tracking-wide transition-colors border-b border-[#3ea0ab]/10 pb-4">Location</a>
                        <a href="#faq" onClick={() => setIsOpen(false)} className="text-[#3EA0AB] hover:text-[#dd664e] text-2xl font-bold uppercase tracking-wide transition-colors border-b border-[#3ea0ab]/10 pb-4">FAQ</a>

                        <a href="https://luma.com/64o45o5x" className="w-full mt-4 bg-white text-[#025054] px-6 py-4 rounded-[4px] font-bold text-lg hover:bg-gray-100 transition-colors uppercase tracking-wide shadow-lg text-center block" onClick={() => setIsOpen(false)}>
                            Sign Up Now
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
