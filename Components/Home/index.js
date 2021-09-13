import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    iplTeamData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsDetails()
  }

  getTeamsDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({iplTeamData: formattedData, isLoading: false})
  }

  render() {
    const {iplTeamData, isLoading} = this.state

    return (
      <div className="ipl-home-container">
        <div className="head-details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <div className="card-details">
          {isLoading ? (
            <div testid="loader" className="loader-container">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            iplTeamData.map(eachTeam => (
              <TeamCard id={eachTeam.id} cardDetails={eachTeam} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Home
