import Image from "next/image";

import cssStyle from "./ElementOfList.module.css";

import dazerothImage from "@assets/dazeroth.jpg";
import pusiVladImage from "@assets/pusivlad.jpg";
import maksImage from "@assets/maks.jpg";

const ElementOfList = ({ data, last, animationActive = false }) => {
    return(
        <div className={cssStyle.content}>
            <Image alt="imageOfAvatar" src={
                data.name == "Serhii" | data.name == "dazeroth" | data.name == "Сергій" ? dazerothImage
                : data.name == "Vlad" | data.name == "mr.Vlad" | data.name == "Влад" ? pusiVladImage
                : data.name == "Maks" | data.name == "Максим" && maksImage
            } className={
                last
                    ? [cssStyle.convasAvatar, cssStyle.true].join(" ")
                    : animationActive
                        ? [cssStyle.convasAvatar, cssStyle.active].join(" ")
                        : cssStyle.convasAvatar
            } />
            
            <div className={
                last
                    ? [cssStyle.name, cssStyle.true].join(" ")
                    : animationActive
                        ? [cssStyle.name, cssStyle.active].join(" ")
                        : cssStyle.name
            }>
                {data.name}
            </div>
        </div>
    );
};

export default ElementOfList;