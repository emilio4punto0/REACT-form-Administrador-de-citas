import React, { Component } from 'react';
import Header from './components/Header';
import NewDate from './components/NewDate'
import './bootstrap.min.css'
import DateList from "./components/DateList";

class App extends Component {
  state={
    date: [],
    
  }

  componentDidMount(){
    const datesLS = localStorage.getItem('dates')
    if(datesLS){
      this.setState({
        date : JSON.parse(datesLS)
      })
    }

  }

  componentDidUpdate(){
    localStorage.setItem('dates', JSON.stringify(this.state.date))
  }

  createNewDate = data =>{
    const date = [...this.state.date, data]
    this.setState({
      date
    }) 
  }

  deleteDate = id => {
    const presentDates = [...this.state.date]

    const date = presentDates.filter(date => date.id !== id)
    this.setState({
      date
    })
  }

  render() {

    return (
      <div className="container">
        <Header
        title="Administrador de pacientes"
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewDate
            createNewDate={this.createNewDate}/>
          </div>

          <div className="mt-5 col-md-10 mx-auto">
          <DateList
          date={this.state.date}
          deleteDate={this.deleteDate}
          />
          </div>
        </div>
        
      </div>

    )
  }
}


export default App;
