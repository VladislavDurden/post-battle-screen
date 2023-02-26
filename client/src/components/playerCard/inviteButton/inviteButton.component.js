import { useState } from "react";
import axios from 'axios';

import './inviteButton.styles.scss';

const API_BASE_URL = process.env.REACT_APP_API_URL;

const InviteButton = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFriendAdded, setIsFriendAdded] = useState(false);

  const { playerId } = props;

  const sendInvite = () => {
    setIsLoading(true);

    axios.put(`${API_BASE_URL}/users/${playerId}/invite`, { friends: {id: 'id', status: 'pending'} })
      .then((res) => {
        setIsLoading(false);
        setIsFriendAdded(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      })
  };

  return(
    <button
      disabled={isFriendAdded}
      className={`InviteButton${isFriendAdded ? ' InviteButton--disabled' : ''}`}
      onClick={() => sendInvite()}>
      {
        isLoading
          ? 'In progress'
          : isFriendAdded ? 'Added' : 'Add friend'
      }
    </button>
  )
};

export default InviteButton;