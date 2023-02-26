import InviteButton from './inviteButton/inviteButton.component';
import AliveImg from '../../assets/alive.png';
import DeadImg from '../../assets/dead.png';

import './playerCard.styles.scss';

const PlayerCard = (props) => {
  const { name, userId, kills, deaths, assists, totalDamage, isAlive } = props.playerData;
  const avatar = `https://unsplash.it/150/200?image=${userId}`;

  return(
    <div className='PlayerCard'>
      <img className='PlayerCard__image' src={avatar} alt=""/>
      <div className={`PlayerCard__name PlayerCard__name--${props.team}`}>{name+userId}</div>
      <div className='PlayerCard__info-container'>
        <div className='PlayerCard__info-wrapper'>
          <div className='PlayerCard__player-kda'>KDA: {kills}/{deaths}/{assists}</div>
          <div className='PlayerCard__player-dmg'>DMG: <strong>{totalDamage}</strong></div>
        </div>
        <img
          className='PlayerCard__player-state'
          src={isAlive ? AliveImg : DeadImg}
          alt="player state img"
        />
      </div>
      <InviteButton playerId={userId}/>
    </div>
  )
};

export default PlayerCard;