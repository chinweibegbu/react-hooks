import React, { useState, useEffect } from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    const [currentSpeaker, setCurrentSpeaker] = useState("");
    const [mouseEventCount, setMouseEventCount] = useState(0);

    useEffect(() => {
        window.document.title = currentSpeaker;
        console.log(`useEffect: setting title to ${currentSpeaker}`)
    }, [currentSpeaker]);

    return (
        <div>
            <span>mouseEventCount: {mouseEventCount}</span>
            {
                ['chinwe-ibegbu.jpg', 'kofi-sannie-amosah.png', 'ajmere-dale.jpg', 'brian-southwell.jpg', 'chris-evans.png'].map((speaker) => {
                    return (
                        <div
                            key={speaker}
                            onMouseOver={() => {
                                setCurrentSpeaker(speaker);
                                setMouseEventCount(mouseEventCount + 1);
                                console.log(`onMouseOver: $speaker`);
                            }}>
                            <ImageToggleOnScroll
                                primaryImg={`/static/speakers/bw/${speaker}`}
                                secondaryImg={`/static/speakers/${speaker}`}
                                loader={'/static/speakers/spinner-loader.gif'}
                                alt={speaker}
                            />
                        </div>
                    )
                })
            }

        </div>
    );
}

export default ImageChangeOnScroll;