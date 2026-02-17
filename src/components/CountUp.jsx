
import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, useMemo } from 'react';

export default function CountUp({
    to,
    from = 0,
    direction = 'up',
    delay = 0,
    duration = 2,
    className = '',
    startWhen = true,
    separator = '',
    onStart,
    onEnd
}) {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === 'down' ? to : from);

    const damping = 20 + 40 * (1 / duration);
    const stiffness = 100 * (1 / duration);

    const springValue = useSpring(motionValue, {
        damping,
        stiffness
    });

    const isInView = useInView(ref, { once: true, margin: '0px' });

    useEffect(() => {
        if (ref.current) {
            ref.current.textContent = String(direction === 'down' ? to : from);
        }
    }, [from, to, direction]);

    useEffect(() => {
        if (isInView && startWhen) {
            if (typeof onStart === 'function') onStart();

            const timeoutId = setTimeout(() => {
                motionValue.set(direction === 'down' ? from : to);
            }, delay * 1000);

            const durationTimeoutId = setTimeout(
                () => {
                    if (typeof onEnd === 'function') onEnd();
                },
                delay * 1000 + duration * 1000
            );

            return () => {
                clearTimeout(timeoutId);
                clearTimeout(durationTimeoutId);
            };
        }
    }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

    const formatter = useMemo(() => {
        return new Intl.NumberFormat('en-US', {
            useGrouping: !!separator,
            maximumFractionDigits: 0,
        });
    }, [separator]);

    useEffect(() => {
        const unsubscribe = springValue.on('change', latest => {
            if (ref.current) {
                const formattedNumber = formatter.format(latest.toFixed(0));
                ref.current.textContent = separator
                    ? formattedNumber.replace(/,/g, separator)
                    : formattedNumber;
            }
        });

        return () => unsubscribe();
    }, [springValue, separator, formatter]);

    return <span className={className} ref={ref} />;
}
