// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {toggleIsLike, appointmentDetails} = props
  const {id, title, dateInput, isLike} = appointmentDetails
  const starImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  const onClickStarIcon = () => {
    toggleIsLike(id)
  }
  return (
    <li className="appointment-item">
      <div className="appointment-container">
        <div className="appointment-details-card">
          <p className="title">{title}</p>
          <p className="date-time">{dateInput}</p>
        </div>
        <div className="star-container">
          <button
            type="button"
            onClick={onClickStarIcon}
            className="star-icon-container"
          >
            <img src={starImgUrl} className="star-icon" alt="star" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AppointmentItem
