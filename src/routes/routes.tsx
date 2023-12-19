import { Game } from 'pages';
import { Route, Routes as Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Route index element={<Game.Game />} />
        <Route path="/games/:gameId" element={<Game.Play />} />
      </Route>
    </Switch>
  );
};

export default Routes;
