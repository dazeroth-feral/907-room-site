import ElementOfList from "./ElementOfList/ElementOfList";
import cssStyle from "./ListFromDataPack.module.css";

const ListFromDataPack = ({ dataPack, animationActive }) => {
    return(
        <div className={cssStyle.content}>
            <div className={cssStyle.oldHeroes}>
                {dataPack.map((element, index) => {
                    if (index > dataPack.length - 5 && index + 1 != dataPack.length){
                        return(
                            <ElementOfList data={element} key={index} animationActive={animationActive} />
                        )
                    }
                })}
            </div>
            <div className={
                    animationActive
                        ? [cssStyle.lastHero, cssStyle.active].join(" ")
                        : cssStyle.lastHero
                } >
                <ElementOfList data={dataPack[dataPack.length - 1]} last={true} />
            </div>
        </div>
    );
};

export default ListFromDataPack;