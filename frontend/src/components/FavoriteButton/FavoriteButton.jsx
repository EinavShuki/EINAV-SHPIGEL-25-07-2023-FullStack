import React from 'react';
import _ from 'lodash';
import { AiFillHeart } from 'react-icons/ai';

const FavoriteButton = ({ action, disableButton, onClick }) => {
  return (
    <button
      disabled={disableButton}
      className={disableButton ? 'buttonDisable' : 'fav_btn'}
      onClick={onClick}>
      {action} to favories
      <AiFillHeart style={{ marginLeft: '3px', color: 'red' }} />
    </button>
  );
};

export default FavoriteButton;
