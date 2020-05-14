import React from 'react';
import { Link } from 'gatsby';
import MarcSymbolFull from '../../../assets/MarcSymbolFull.inline.svg';
import MagnifyingGlass from '../../../assets/MagnifyingGlass.svg';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import ShoppingBagModal from '../ShoppingBag'
const Navigation = () => (
  <AuthUserContext.Consumer>
    {(authUser) => <NavigationMenu authUser={authUser} />}
  </AuthUserContext.Consumer>
);

const NavigationMenu = (authUser) => (
  <div>
    <ul className="nav">
      <li className="nav-item">
        <Link to={ROUTES.LANDING}>
          <MarcSymbolFull />
        </Link>
      </li>
      <div className="nav-main">
        <li className="nav-item">
          <Link to={ROUTES.PHONES}>PHONES</Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.LAPTOPS}>LAPTOPS</Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.ACCESSORIES}>ACCESSORIES</Link>
        </li>
      </div>
      <div className="nav-sb">
        <li className="nav-item">
          <MagnifyingGlass />
        </li>
        <li className="nav-item">
          <ShoppingBagModal/>
            
        </li>
      </div>
    </ul>
  </div>
);

export default Navigation;
