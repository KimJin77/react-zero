//路由
import { Switch, Route } from 'react-router-dom'
import App from '../views/App'

const RouterConfig = () =>{
    return(
        <Switch>
            <Route exact path='/' component={App} />
        </Switch>
    )
}
export default RouterConfig;
