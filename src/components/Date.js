import React from 'react'

 const Date = ({date, deleteDate}) => (
        <div className="media mt-3">
            <div className="media-body ml-5">
                <h3 className="mt-0">{date.mascota}</h3>
                <p className="card-text"><span>Nombre Dueño: </span> {date.propietario} </p>
                <p className="card-text"><span>Fecha: </span> {date.fecha} </p>
                <p className="card-text"><span>Hora: </span> {date.hora} </p>
                <p className="card-text"><span>Sintomas: </span> </p>
                <p className="card-text sintomas">{date.sintomas}</p>
                <button 
                className="btn btn-danger"
                onClick={()=> deleteDate(date.id)}
                >Borrar &times;</button>
            </div>
        </div>
 );

export default Date;