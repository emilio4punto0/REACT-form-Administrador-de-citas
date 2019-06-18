import React, { Component } from 'react';
import uuid from 'uuid';

const initialState = {
    date: {
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    },
    error: false,
  }

class NewDate extends Component {

  state = {...initialState}
                           //capturar escritura de usuarios en inputs
  handleChange = e => {
                          //enviar al state
    this.setState({
      date: {
        ...this.state.date,
        [e.target.name] : e.target.value
      }
    })
  }
  //capturar todo el submit
  handleSubmit = e => {
    e.preventDefault();
    const{ mascota, propietario, fecha, hora, sintomas } = this.state.date;

    if(mascota === '' || propietario === '' || fecha === '' || hora === '' || 
    sintomas === ''){
      this.setState({error: true});
      
        return; 
     }
//crear onjeto de datos
    const newDate = {...this.state.date};
    newDate.id = uuid();

     this.props.createNewDate(newDate);

     this.setState({
       ...initialState
  });

  }

  render() {

    const{ error } = this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
          Llena el formulario para obtener tu cita
          </h2>

          {error ? <div className="alert alert-danger mt-2 mb-5 text-center">
          Todos los campos son obligatorios</div> : null}

          <form
            onSubmit={this.handleSubmit}
          >
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
              Nombre Mascota
              </label>
                <div className="col-sm-8 col-lg-10">
                  <input 
                    type="text"
                    className="form-control"
                    placeholder="Nombre de mascota"
                    name="mascota"
                    onChange={this.handleChange}
                    value={this.state.date.mascota}
                  />
                </div>
            </div>
          
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
              Nombre Dueño
              </label>
                <div className="col-sm-8 col-lg-10">
                  <input 
                    type="text"
                    className="form-control"
                    placeholder="Nombre Dueño"
                    name="propietario"
                    onChange={this.handleChange}
                    value={this.state.date.propietario}
                    />
                </div>
            </div>
        
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
              Fecha
              </label>
                <div className="col-sm-8 col-lg-4">
                  <input 
                    type="date"
                    className="form-control"
                    name="fecha"
                    onChange={this.handleChange}
                    value={this.state.date.fecha}
                    />
                </div>
            <label className="col-sm-4 col-lg-2 col-form-label">
              Hora
              </label>
                <div className="col-sm-8 col-lg-4">
                  <input 
                    type="time"
                    className="form-control"
                    name="hora"
                    onChange={this.handleChange}
                    value={this.state.date.hora}
                    />
                </div>
            </div>
          
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
              Síntomas
              </label>
                <div className="col-sm-8 col-lg-10">
                  <textarea 
                    className="form-control"
                    name="sintomas"
                    placeholder="Describe los síntomas"
                    onChange={this.handleChange}
                    value={this.state.date.sintomas}
                    >
                    </textarea>
                </div> 
            </div>

            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" 
            value="Agregar Nueva Cita"/>
           
          </form>
        </div>
      </div>
    );
  }
}

export default NewDate;


