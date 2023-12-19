import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Game, Types } from 'modules';

const PlayAndUpdate = () => {
  const [player1, setPlayer1] = React.useState<Types.IEntity.Game.Player | null>(null);
  const [player2, setPlayer2] = React.useState<Types.IEntity.Game.Player | null>(null);
  const { gameId } = useParams();

  React.useEffect(() => {
    const getGame = async () => {
      const { data } = (await Game.single({ id: gameId! })) as { data: Types.IEntity.Game.Main };
      console.log('data: ', data);
      // @ts-ignore
      setPlayer1(data.data.player1);
      // @ts-ignore
      setPlayer2(data.data.player2);
    };
    getGame();
  }, []);

  return (
    <div className="game">
      <div className="container">
        <button className="newGame">🔁Yangi o'yin</button>
        <div className="players">
          <div className="player--0 active">
            <h1>{player1?.name}</h1>
            <p className="score--0">0</p>
            <div className="box1 box">
              <p>CURRENT</p>
              <p id="cs--0">0</p>
            </div>
          </div>
          <img id="img" />
          <div className="player--1">
            <h1>{player2?.name}</h1>
            <p className="score--1">0</p>
            <div className="box2 box">
              <p>CURRENT</p>
              <p id="cs--1">0</p>
            </div>
          </div>
        </div>

        <button className="random">🎲Toshni tashlash</button>
        <button className="save">📩Saqlash</button>
      </div>

      <Link to="/" className="btn">
        Back
      </Link>
    </div>
  );
};

export default PlayAndUpdate;
