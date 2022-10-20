import {Component} from 'react'
import './index.css'
import './App.css'

class HistoryList extends Component {
  render() {
    const {historyList, deleteHistory} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = historyList
    const onDelete = () => {
      deleteHistory(id)
    }

    return (
      <li className="list-container">
        <p className="time">{timeAccessed}</p>
        <div className="domain-container">
          <img className="domain-logo" alt="domain logo" src={logoUrl} />
          <div className="details-container">
            <p className="domain-name">{title}</p>
            <p className="domain-link">{domainUrl}</p>
          </div>
          <button onClick={onDelete} type="button" className="button">
            <img
              className="delete-icon"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default HistoryList
