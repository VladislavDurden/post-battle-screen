import PlayerCard from '../playerCard/playerCard.component';

import './team.styles.scss';

const Team = (props) => {
  const { teamName, players } = props.teamData;

  const renderPlayers = () => {

    return players.map((player) => {
      return <PlayerCard playerData={player} team={teamName} key={player.userId}/>;
    });
  };

  return(
    <div className='Team'>
      <div className="Team__title">{teamName}</div>
      {renderPlayers()}
    </div>
  )
};

export default Team;