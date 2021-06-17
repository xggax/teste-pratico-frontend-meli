import { Switch, Route } from 'react-router-dom';
import { SearchPage } from '../pages/SearchPage';
import { ProductPage } from '../pages/ProductPage';

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SearchPage} />
            <Route path="/:id" exact component={ProductPage} />
            
        </Switch>
    );
}