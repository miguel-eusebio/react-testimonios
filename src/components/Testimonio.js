import React from "react";
import '../styles/Testimonio.css';

function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img
                className="imagen-testimonio"
                src={require(`../img/testimonio-${props.image}.png`)}
                alt={props.name}
            />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.name}</strong> en {props.country}</p>
                <p className="cargo-testimonio">{props.charge} en <strong>{props.company}</strong></p>
                <p className="texto-testimonio">"{props.testimony}"</p>
            </div>
        </div>
    );
}

export default Testimonio;