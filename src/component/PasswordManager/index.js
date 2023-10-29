import {Component} from 'react'

import {v4 as JakId} from 'uuid'

import './index.css'

import List from '../List/index'

class PaawordManager extends Component {
  state = {
    initialLst: [],
    urlValue: '',
    userNameValue: '',
    passwordValue: '',
    showPassword: false,
    passwordCount: 0,
  }

  trackUrl = event => {
    this.setState({urlValue: event.target.value})
  }

  trackUsername = event => {
    this.setState({userNameValue: event.target.value})
  }

  trackPassword = event => {
    this.setState({passwordValue: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {urlValue, userNameValue, passwordValue} = this.state

    const addNewPassword = {
      id: JakId(),
      url: urlValue,
      user: userNameValue,
      password: passwordValue,
    }
    this.setState(prevState => ({
      initialLst: [...prevState.initialLst, addNewPassword],
    }))

    this.setState({userNameValue: '', passwordValue: '', urlValue: ''})
    this.setState(prevState => ({passwordCount: prevState.passwordCount + 1}))
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  deleteById = id => {
    this.setState(prevState => ({
      initialLst: prevState.initialLst.filter(i => i.id !== id),
    }))
    this.setState(prevState => ({passwordCount: prevState.passwordCount - 1}))
  }

  render() {
    const {
      showPassword,
      passwordCount,
      initialLst,
      urlValue,
      userNameValue,
      passwordValue,
    } = this.state

    return (
      <div className="main-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="form-img-container">
          <form className="form-container">
            <h1 className="add-new-heading">Add New Password</h1>
            <div className="website-container">
              <img
                className="website-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                onChange={this.trackUrl}
                className="url-input"
                placeholder="Enter Website"
                type="text"
                value={urlValue}
              />
            </div>
            <div className="website-container">
              <img
                className="website-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                onChange={this.trackUsername}
                className="url-input"
                placeholder="Enter username"
                type="text"
                value={userNameValue}
              />
            </div>
            <div className="website-container">
              <img
                className="website-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                onChange={this.trackPassword}
                className="url-input"
                placeholder="Enter Password"
                type="password"
                value={passwordValue}
              />
            </div>
            <button
              onClick={this.addPassword}
              className="add-btn"
              type="submit"
            >
              Add
            </button>
          </form>
          <div className="img-container">
            <img
              className="password-manager-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="saved-password-container">
          <div className="password-count-search-element">
            <div className="para-password-count">
              <h1 className="para1">Your Passwords</h1>
              <div className="para-container">
                <p className="para">{passwordCount}</p>
              </div>
            </div>
            <div className="search-img-container">
              <img
                className="search-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                placeholder="search"
                className="search-input"
                type="search"
              />
            </div>
          </div>
          <div className="check-container">
            <label id="labelId" className="show-para">
              <input
                htmlFor="labelId"
                type="checkbox"
                onClick={this.onClickShowPassword}
              />
              Show Passwords
            </label>
          </div>
          <hr className="horizantal" />
          {initialLst.length > 0 ? (
            <ul className="unorder-list">
              {initialLst.map(i => (
                <List
                  deleteById={this.deleteById}
                  showPassword={showPassword}
                  details={i}
                  key={i.id}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-container">
              <img
                className="no-passwords-img"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PaawordManager
