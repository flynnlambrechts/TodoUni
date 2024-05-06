import React from "react";
// https://yoavik.com/snippets/mouse-tracker

const MouseTracker = ({ children, offset = { x: 0, y: 0 } }) => {
    const element = React.useRef({});
    React.useEffect(() => {
        function handler(e) {
            if (element.current) {
                const x = e.clientX + offset.x,
                    y = e.clientY + offset.y;
                element.current.style.transform = `translate(${x}px, ${y}px)`;
                element.current.style.visibility = "visible";
            }
        }
        document.addEventListener("mousemove", handler);
        return () => document.removeEventListener("mousemove", handler);
    }, [offset.x, offset.y]);
    return <div
            className="mouse-tracker"
            ref={element}
            styles={{
                position: "fixed",
                pointerEvents: "none",
                visibility: "hidden",
            }}>
            {" "}
            {children}{" "}
        </div>;
};

export default MouseTracker;
