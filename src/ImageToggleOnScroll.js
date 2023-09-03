import React, { useState, useRef, useEffect } from "react";

const ImageToggleOnScroll = ( { primaryImg, secondaryImg, loader, alt } ) => {
    const imageRef = useRef(null);
    const [inView, setInView] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Empty dependency array: Only run when the component is first rendered
    // NOTE: Runs AFTER the first render
    useEffect(() => {
        // setIsLoading(false);
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);

        // Carry out on dismount
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, []);

    const scrollHandler = () => {
        setInView(isInView());
    }

    // isLoading ? loader :
    return ( 
        <img
            style={{'width':'300px', 'height':'300px'}}
            src={inView ? secondaryImg : primaryImg}
            alt={alt}
            ref={imageRef}
        />
     );
}
 
export default ImageToggleOnScroll;