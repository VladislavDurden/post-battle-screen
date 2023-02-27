import { Tooltip } from 'react-tooltip';
import InviteButton from './inviteButton/inviteButton.component';
import AliveImg from '../../assets/alive.png';
import DeadImg from '../../assets/dead.png';

import "react-tooltip/dist/react-tooltip.css";
import './playerCard.styles.scss';

const PlayerCard = (props) => {
  const { name, userId, kills, deaths, assists, totalDamage, isAlive } = props.playerData;
  const avatar = `https://unsplash.it/150/200?image=${userId}`;

  return(
    <>
      <div className='PlayerCard' id={`player-${userId}-info`}>
        <img className='PlayerCard__image' src={avatar} alt=""/>
        <div className={`PlayerCard__name PlayerCard__name--${props.team}`}>{name+userId}</div>
        <div className='PlayerCard__player-dmg'>DMG: <strong>{totalDamage}</strong></div>
        <div className='PlayerCard__info-container'>
          {isAlive ? 'alive' : 'dead'}
          <img
            className='PlayerCard__player-state'
            src={isAlive ? AliveImg : DeadImg}
            alt="player state img"
          />
        </div>
      </div>

      <Tooltip
        anchorId={`player-${userId}-info`}
        place="top"
        clickable={true}
        content={
          <div className='PlayerCard__info-wrapper'>
            <div className='PlayerCard__player-kda'>KDA: {kills}/{deaths}/{assists}</div>
            <InviteButton playerId={userId}/>
          </div>
        }
      />
    </>
  )
};

export default PlayerCard;