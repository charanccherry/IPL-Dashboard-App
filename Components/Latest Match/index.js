import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchData} = this.props
    const {
      umpires,
      manOfTheMatch,
      date,
      venue,
      firstInnings,
      secondInnings,
      result,
      competingTeam,
      competingTeamLogo,
    } = latestMatchData
    return (
      <div className="latest-match-cont">
        <h1 className="card-text head">Latest Matches </h1>
        <div className="latest-match-card">
          <div className="card-first-part">
            <p className="card-text head">{competingTeam}</p>
            <p className="card-text date">{date}</p>
            <p className="card-text">{venue}</p>
            <p className="card-text">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competingTeamLogo-latest-card"
          />
          <div className="card-last-part">
            <p className="card-text head-two">First Innings</p>
            <p className="card-text">{firstInnings}</p>
            <p className="card-text head-two">Second Innings</p>
            <p className="card-text">{secondInnings}</p>
            <p className="card-text head-two">Man Of The Match</p>
            <p className="card-text">{manOfTheMatch}</p>
            <p className="card-text head-two">Umpires</p>
            <p className="card-text">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
