import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
    return ( 
        <div>
            <ImageToggleOnMouseOver
                primaryImg="/static/speakers/bw/chinwe-ibegbu.jpg"
                secondaryImg="/static/speakers/chinwe-ibegbu.jpg"
                alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver
                primaryImg="/static/speakers/bw/kofi-sannie-amosah.png"
                secondaryImg="/static/speakers/kofi-sannie-amosah.png"
                alt="" />
        </div>
     );
}
 
export default ImageChangeOnMouseOver;