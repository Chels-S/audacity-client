import { Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Logout from '../Logout/Logout';
import About from '../../pages/About';
import Raids from '../raids/Raids';
import Trials from '../trials/Trials';
import Admin from '../../pages/AdminRoute';




const Sidebar = () => {

    return(
        <div className="sidebar">
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/raids'>Raids</Link></li>
                    <li><Link to='/trials'>Trials</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                </ul>
            </div>
            <div className ='sidebar-route'>
                <Switch>
                    <Route exact path='/about'><About /></Route>
                    <Route exact path='/raids'><Raids /></Route>
                    <Route exact path='/trials'><Trials /></Route>
                    <Route exact path='/admin'><Admin /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;