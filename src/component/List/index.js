import './index.css'

const List = props => {
  // eslint-disable-next-line no-unused-vars
  const {details, showPassword, deleteById} = props
  const {id, url, password, user} = details

  const deleteOnClick = () => {
    deleteById(id)
  }

  return (
    <li className="list">
      <div className="initial-container">
        <p>Y</p>
      </div>
      <div className="form-details-container">
        <p className="paraa">{url}</p>
        <p className="paraa">{user}</p>
        {showPassword ? (
          <p className="user-password">{password}</p>
        ) : (
          <img
            className="star-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>

      <button
        type="button"
        data-testid="delete"
        onClick={deleteOnClick}
        className="delete-btn"
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default List
