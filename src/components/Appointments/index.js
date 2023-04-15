// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentList: [], title: '', dateInput: ''}

  toggleIsLike = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isLike: !prevState.isLike}
        }
        return eachAppointment
      }),
    }))
  }

  renderAppointmentList = () => {
    const {appointmentList} = this.state
    return appointmentList.map(eachAppointment => (
      <AppointmentItem
        toggleIsLike={this.toggleIsLike}
        key={eachAppointment.id}
        appointmentDetails={eachAppointment}
      />
    ))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, dateInput} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      dateInput,
      isLike: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      dateInput: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({dateInput: event.target.value})
  }

  render() {
    const {title, dateInput} = this.state

    return (
      <div className="app-container">
        <div className="appointment-container">
          <h1 className="app-heading">Add Appointment</h1>
          <div className="appointment-inputs">
            <form className="form" onSubmit={this.onAddAppointment}>
              <label htmlFor="title" className="title-label">
                title
              </label>
              <input
                id="title"
                type="text"
                className="title-input"
                value={title}
                onChange={this.onChangeTitle}
                placeholder="Title"
              />
              <label htmlFor="date" className="date-label">
                date
              </label>
              <input
                id="date"
                type="date"
                className="date-input"
                value={dateInput}
                onChange={this.onChangeDate}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="line" />
          <div className="appointment-result-container">
            <h1 className="app-heading">Appointments</h1>
            <button type="button" className="star-button">
              Starred
            </button>
          </div>
          <ul className="appointment-list">{this.renderAppointmentList()}</ul>
        </div>
      </div>
    )
  }
}
export default Appointments
