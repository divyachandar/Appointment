// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {toggleIsLike, appointmentDetails} = props
  const {id, title, dateInput, isLike} = appointmentDetails
  const starImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStarIcon = () => {
    toggleIsLike(id)
  }
  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          type="button"
          onClick={onClickStarIcon}
          className="star-button"
          data-testId="star"
        >
          <img src={starImgUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {dateInput}</p>
    </li>
  )
}

export default AppointmentItem
