import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  matchStatusClassName = matchStatus => {
    if (matchStatus === 'Won') {
      return 'match-won'
    }
    return 'match-lost'
  }

  render() {
    const {matchData} = this.props
    const {competingTeamLogo, competingTeam, matchStatus, result} = matchData

    return (
      <li className="match-card">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="competingTeamLogo"
        />
        <p className="competingTeam">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={`matchStatus ${this.matchStatusClassName(matchStatus)}`}>
          {matchStatus}
        </p>
      </li>
    )
  }
}

export default MatchCard
