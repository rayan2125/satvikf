import { useAnimationFrame, useMotionValue, useTransform,motion } from "framer-motion";
import React, { useRef } from "react";

function TestimonialScroller({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${v}%`);
    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
        const moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        baseX.set(baseX.get() + moveBy);

        if (baseX.get() <= -100) {
            baseX.set(baseX.get() + 100);
        } else if (baseX.get() >= 100) {
            baseX.set(baseX.get() - 100);
        }
    });

    return (
        <div className="scroller-container">
            <motion.div className="scroller" style={{ x }}>
                {React.Children.map(children, (child, index) => (
                    <div key={index} className="scroller-item">
                        {child}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default TestimonialScroller;
