import React from 'react';

import { Trash } from '../assets';
import { Game, Types } from 'modules';
import { Link } from 'react-router-dom';

interface CardProps {
  id?: string;
  isNew?: boolean;
  winner?: string | null;
  player1?: string;
  player2?: string;
}

const CardStyle = {
  backgroundImage: 'url("https://cdn.abacused.com.au/media/catalog/product/cache/1c466febb7976293cb7109e77597dd14/1/e/1e208_4.jpg")'
};

const Card: React.FC<CardProps> = ({ isNew = false, id, winner, player1, player2 }) => {
  const handleClick = async (id: string) => {
    const { data } = await Game.single({ id });
    console.log('data: ', data);
  };

  return (
    <>
      {isNew ? (
        <div className="card new">New Game</div>
      ) : (
        <div className="card" style={CardStyle}>
          <div className="header">
            <button className="btn-danger">
              <Trash />
            </button>
          </div>

          <div className="footer">
            <div className="info">
              <h5>
                Winner: <span>{winner || 'N/A'}</span>
              </h5>
              <h5>
                First Player: <span>{player1 || 'N/A'}</span>
              </h5>
              <h5>
                Second Player: <span>{player2 || 'N/A'}</span>
              </h5>
            </div>
            <Link className="btn" to={`/games/${id}`}>
              Play
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
