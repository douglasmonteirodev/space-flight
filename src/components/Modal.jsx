import React, { useEffect, useState } from "react";
import "./Modal.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router-dom";

const Modal = ({ flight }) => {
    const [card, setCard] = useState({});

    // aqui eu pego o parâmetro ou seja o id da rota
    const params = useParams();

    // aqui vou utilizar para mandar para outras rotas
    const navigate = useNavigate();

    const handleBackSlider = (id) => {
        if (id !== null) {
            navigate(`/${id}`);
        }
    };

    useEffect(() => {
        // aqui eu pego o id do elemento que foi clicado
        const index_card = flight.findIndex((card) => card.id === +params.id);

        if (index_card !== -1) {
            // aqui eu pego o index do anterior
            const prev = index_card - 1 >= 0 ? flight[index_card - 1].id : null;

            // aqui eu pego o index do próximo
            const next =
                index_card + 1 < flight.length ? flight[index_card + 1].id : null;

            // adiciono isso em um "modelo" de card
            const modelCard = { ...flight[index_card], prev, next };
            // como o estado será alterado o card também mudará dependendo da rota
            setCard(modelCard);
        }
    }, [params, flight]);

    // aqui eu verifico se existe algum card para ser mortrado no modal dependendo da rota
    return Object.keys(card).length ? (
        <div className='modal--container'>
            <div className='cards--container'>
                {/* se eu clicar em fechar eu volto para rota padrão  */}
                <button onClick={() => navigate("/")}>
                    <CloseIcon id='btn-modal-close' />
                </button>
                <h1>{card.title}</h1>
                <img src={card.imageUrl} alt={card.title} />
                <span>
                    {card.publishedAt.slice(0, -14).split("-").reverse().join("/")}
                </span>
                <p>
                    {card.summary.length > 250
                        ? `${card.summary.substring(0, 250)}...`
                        : `${card.summary}`}
                </p>
                <a href={card.url} target='_blank' rel='noreferrer'>
                    Site
                </a>
            </div>
            <div className='area--buttons'>
                <span>
                    <ArrowBackIosIcon
                        // veja que aqui eu passo o id do card anterior
                        id='btn--nav--back'
                        onClick={() => handleBackSlider(card.prev)}
                    />
                </span>
                <span>
                    <ArrowForwardIosIcon
                        // aqui eu passo o id do proximo card
                        id='btn--nav--next'
                        onClick={() => handleBackSlider(card.next)}
                    />
                </span>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default Modal;
