import React, { useState, useRef, useEffect } from "react";

const ImageToggleOnScroll = ( { primaryImg, secondaryImg, alt } ) => {
    const [inView, setInView] = useState(false);
    const imageRef = useRef(null);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Empty dependency array: Only run when the component is first rendered
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        // Carry out on dismount
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, []);

    const scrollHandler = () => {
        setInView(isInView());
    }

    return ( 
        <img
            style={{'width':'400px', 'height':'400px'}}
            src={inView ? secondaryImg : primaryImg}
            alt={alt}
            ref={imageRef}
        />
     );
}
 
export default ImageToggleOnScroll;