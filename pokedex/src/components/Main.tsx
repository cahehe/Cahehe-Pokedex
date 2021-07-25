import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import PokemonInfo from './PokemonInfo';
import Logo from './Logo';

interface props{
    className: string;
}

const Main = (prop: props) => {
    
    return(
        <div className = {prop.className}>
            <Router>
                <Logo id = 'logo'/>
                <Switch>
                    <Route exact path = '/' component = {Home}/>
                    <Route path = '/:pokemonName' component = {PokemonInfo}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Main