import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";

function TestimonialScroller({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${v}%`);
    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // Update position
        baseX.set(baseX.get() + moveBy);

        // Wrap the position to keep the content cycling
        if (baseX.get() <= -100) {
            baseX.set(baseX.get() + 100);
        } else if (baseX.get() >= 100) {
            baseX.set(baseX.get() - 100);
        }
    });

    return (
        <div className="testimonial-container">
            {/* <motion.div className="scroller" style={{ x }}>
            </motion.div> */}
                {React.Children.map(children, (child, index) => (
                    <div key={index} className="testimonial-item" style={{display:'block',height:200}}>
                        {child}
                    </div>
                ))}
        </div>
    );
}

export default TestimonialScroller;
