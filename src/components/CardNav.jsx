import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';
import './CardNav.css';

const CardNav = ({
    logo,
    logoAlt = 'Logo',
    items,
    className = '',
    baseColor = '#fff',
    menuColor,
    buttonBgColor,
    buttonTextColor
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef(null);

    // Calculate height for animation - simplified for framer motion "auto"
    // Framer motion handles height: "auto" beautifully, so we might not need explicit calculation logic like GSAP

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`card-nav-container ${className}`}>
            <motion.nav
                ref={navRef}
                className={`card-nav ${isExpanded ? 'open' : ''}`}
                style={{ backgroundColor: baseColor, overflow: 'hidden' }}
                initial={false}
                animate={{
                    height: isExpanded ? 'auto' : 60,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } // Power3.out approx
                }}
            >
                <div className="card-nav-top">
                    {/* Hamburger - Left side */}
                    <div
                        className={`hamburger-menu ${isExpanded ? 'open' : ''}`}
                        onClick={toggleMenu}
                        role="button"
                        aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                        tabIndex={0}
                        style={{ color: menuColor || '#000' }}
                    >
                        <motion.div
                            className="hamburger-line"
                            animate={{ rotate: isExpanded ? 45 : 0, y: isExpanded ? 4 : 0 }}
                        />
                        <motion.div
                            className="hamburger-line"
                            animate={{ rotate: isExpanded ? -45 : 0, y: isExpanded ? -4 : 0 }}
                        />
                    </div>

                    <div className="logo-container">
                        <span className="font-['Museo_Sans:900',sans-serif] font-bold text-2xl tracking-wider" style={{ color: menuColor || '#000' }}>FOCUS</span>
                    </div>

                    <a
                        href="https://luma.com/64o45o5x"
                        target="_blank" rel="noopener noreferrer"
                        className="card-nav-cta-button flex items-center justify-center no-underline"
                        style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                    >
                        Sign Up
                    </a>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            className="card-nav-content"
                            aria-hidden={!isExpanded}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
                            exit={{ opacity: 0, transition: { duration: 0.2 } }}
                            style={{ visibility: 'visible', pointerEvents: 'auto', position: 'relative', top: 0 }} // Override CSS positioning for flow
                        >
                            {(items || []).slice(0, 3).map((item, idx) => (
                                <motion.div
                                    key={`${item.label}-${idx}`}
                                    className="nav-card"
                                    style={{ backgroundColor: item.bgColor, color: item.textColor }}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 10, opacity: 0 }}
                                    transition={{ delay: 0.1 + (idx * 0.05), duration: 0.4 }}
                                >
                                    <div className="nav-card-label">{item.label}</div>
                                    <div className="nav-card-links">
                                        {item.links?.map((lnk, i) => (
                                            <a
                                                key={`${lnk.label}-${i}`}
                                                className="nav-card-link"
                                                href={lnk.href}
                                                target={lnk.href.startsWith('#') ? undefined : "_blank"}
                                                rel={lnk.href.startsWith('#') ? undefined : "noopener noreferrer"}
                                                aria-label={lnk.ariaLabel || lnk.label}
                                                onClick={() => setIsExpanded(false)}
                                            >
                                                <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                                                {lnk.label}
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default CardNav;
