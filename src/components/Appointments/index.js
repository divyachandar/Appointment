// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentList: [], title: '', dateInput: '', isActiveStar: false}

  toggleIsLike = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isLike: !eachAppointment.isLike}
        }
        return eachAppointment
      }),
    }))
  }

  renderStarAppointmentList = () => {
    const {appointmentList, isActiveStar} = this.state
    if (isActiveStar) {
      return appointmentList.filter(
        eachAppointment => eachAppointment.isLike === true,
      )
    }
    return appointmentList
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, dateInput} = this.state
    const formattedDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      : ''
    const newAppointment = {
      id: uuidv4(),
      title,
      dateInput: formattedDate,
      isLike: false,
    }
    console.log(dateInput)
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      dateInput: '',
    }))
  }

  onClickStarred = () => {
    this.setState(prevState => ({
      isActiveStar: !prevState.isActiveStar,
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({dateInput: event.target.value})
  }

  render() {
    const {title, dateInput, isActiveStar} = this.state
    const filterClassName = isActiveStar ? 'filter-filled' : 'filter-empty'
    const filteredAppointmentsList = this.renderStarAppointmentList()
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="appointments-container">
            <div className="add-appointment-container">
              <form className="form" onSubmit={this.onAddAppointment}>
                <h1 className="app-heading">Add Appointment</h1>
                <label htmlFor="title" className="label">
                  title
                </label>
                <input
                  id="title"
                  type="text"
                  className="input"
                  value={title}
                  onChange={this.onChangeTitle}
                  placeholder="Title"
                />
                <label htmlFor="date" className="label">
                  date
                </label>
                <input
                  id="date"
                  type="date"
                  className="input"
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
              <h1 className="appointments-heading">Appointments</h1>
              <button
                type="button"
                className={`filter-style ${filterClassName}`}
                onClick={this.onClickStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointment-list">
              {filteredAppointmentsList.map(eachAppointment => (
                <AppointmentItem
                  toggleIsLike={this.toggleIsLike}
                  key={eachAppointment.id}
                  appointmentDetails={eachAppointment}
                />
              ))}{' '}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
