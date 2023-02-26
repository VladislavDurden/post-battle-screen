import './header.styles.scss';

const Header = (props) => {
  const { winner, duration, mapName } = props;

  return(
    <div className='Header'>
      <div>Map name: {mapName}</div>
      <div>Duration: {duration}</div>
      <div>Win: {winner}</div>
    </div>
  )
};

export default Header;