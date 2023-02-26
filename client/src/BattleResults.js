import { useState, useEffect } from "react";
import axios from 'axios';

import MainLoader from './components/mainLoader/mainLoader.component';
import Team from './components/team/team.component';
import Header from './components/header/header.component';

import './BattleResults.scss';

const API_BASE_URL = process.env.REACT_APP_API_URL;

const BattleResults = () => {
  const [gameInfo, setGameInfo] = useState();
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/game`)
      .then(res => {
        setGameInfo(res.data);

        setTimeout(() => {
          setIsLoader(false);
        }, 2000);
      })
  }, []);

  return (
    <>
      {
        isLoader
          ? <MainLoader/>
          :
          <div className='BattleResults'>
            <Header winner={gameInfo.winner} duration={gameInfo.duration} mapName={gameInfo.mapName}/>
            <div className='BattleResults__teams-wrapper'>
              <Team teamData={gameInfo.teams[0]}/>
              <Team teamData={gameInfo.teams[1]}/>
            </div>
          </div>
      }
    </>
  );
}

export default BattleResults;
