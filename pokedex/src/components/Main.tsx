import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import PokemonInfo from './PokemonInfo';

const Main = () => {
    
    return(
        <Router>
            <Switch>
                <Route exact path = '/' component = {Home}/>
                <Route path = '/:pokemonName' component = {PokemonInfo}/>
            </Switch>
        </Router>
    )
}

export default Main