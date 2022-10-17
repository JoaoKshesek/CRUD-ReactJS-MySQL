import React from "react";
import "./card.css";
import ModalForm from "../Modal/modalForm";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ModalForm
        open={open}
        setOpen={setOpen}
        title={props.name}
        color={props.color}
        style={props.style}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <p>Vinho: {props.name}</p>
        <p>Cor: {props.color}</p>
        <p>Estilo: {props.style}</p>
      </div>
    </>
  );
}
