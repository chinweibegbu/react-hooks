import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    return (
        <div>
            {
                ['chinwe-ibegbu.jpg', 'kofi-sannie-amosah.png', 'ajmere-dale.jpg', 'brian-southwell.jpg', 'chris-evans.png'].map((speaker) => {
                    return (
                        <div key={speaker}>
                            <ImageToggleOnScroll
                                primaryImg={`/static/speakers/bw/${speaker}`}
                                secondaryImg={`/static/speakers/${speaker}`}
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