import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from '../configs/routes';
import Characters from '../pages/CharactersPage/Characters';
import Character from '../pages/CharacterPage/Character';
import WatchList from '../pages/WatchListPage/WatchList';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.pathToCharactersPage} component={Characters}/>
        <Route path={routes.pathToCharacterPage} component={Character}/>
        <Route path={routes.pathToWatchListPage} component={WatchList}/>
        <Route path='/*' render={() => 'Not Found'}/>
      </Switch>
    </Router>
  );
};

export default Routes;