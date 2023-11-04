'use client';

import React from "react";
import { useState } from "react";

import ReactModal from "react-modal";

import Button from "../UI/Button/Button";
import ListFromDataPack from "../UI/ListFromDataPack/ListFromDataPack";
import cssStyle from "./TrashPage.module.css";

const TrashPage = ({ dataPack, setDataPack }) => {
    const [animationActive, setAnimationActive] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => { setModalIsOpen(true) };
    const closeModal = () => { setModalIsOpen(false) };

    const addHero = async (name) => {
        const url = new URL(`http://localhost:3000/api/trashRemoverList?${name}|MONGOPUSH`);

        await fetch(url.toString(), {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
    };

    const addObject = (whoEng, whoUa) => {
        addHero(whoEng);
        setModalIsOpen(false);
        setAnimationActive(true)
        
        setTimeout(
            () => {
                setDataPack([...dataPack, { name: whoUa }]);
            }, 1000
        );

        setTimeout(
            () => {
                setAnimationActive(false); 
            }, 3000
        );
    };

    return (
        <div className={cssStyle.content}>
            <p className={cssStyle.pageLabel}>Той, хто останній виніс мусор:</p>

            <div className={cssStyle.middleContentBlock}>
                <div />

                <div className={cssStyle.listFromDataPack}>
                    <ListFromDataPack dataPack={dataPack} animationActive={animationActive} />
                </div>
                <button className={cssStyle.toNextPageButton}>
                    🠞
                </button>
            </div>

            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={cssStyle.modalWindow}
                overlayClassName={cssStyle.overlayWindow}
                contentLabel="Хто ти?"
            >
                <div className={cssStyle.buttonBlock}>
                    <Button action={() => addObject("Serhii", "Сергій")} >Сергій</Button>
                    <Button action={() => addObject("Vlad", "Влад")} >Влад</Button>
                    <Button action={() => addObject("Maks", "Максим")} >Максим</Button>
                </div>
                <Button action={closeModal} >Close Modal Window</Button>
            </ReactModal>
            <Button action={openModal}>Add me</Button>
        </div>
    );
};

export default TrashPage;