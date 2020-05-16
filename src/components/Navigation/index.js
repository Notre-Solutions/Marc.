import React, { Component } from 'react';
import { Link } from 'gatsby';
import MarcSymbolFull from '../../../assets/MarcSymbolFull.inline.svg';
import MagnifyingGlass from '../../../assets/MagnifyingGlass.svg';
import { AuthUserContext } from '../Session';
import ReactDOM from 'react-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import ShoppingBagModal from '../ShoppingBag';

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onInputChange = this.onInputChange.bind(this)

    this.state = {};
  }
  onBlur() {
    this.setState({ focused: false, loaded: true });
  }
  onFocus() {
    this.setState({ focused: true });
  }
  onInputChange(event){
    console.log("Hello from onChange", event.target.value);
  }

  Navigation() {
    return (
      <AuthUserContext.Consumer>
        {(authUser) => {
          return this.NavigationMenu(authUser);
        }}
      </AuthUserContext.Consumer>
    );
  }

  NavigationMenu(authUser) {
    var titleStyle = '';
    var searchAnimation = ''
    if (this.state.focused) {
      titleStyle = '-search';
    } else {
      titleStyle = '';
    }
    if (this.state.loaded){
      searchAnimation = 'nav-input-loaded'
    }
    return (
      <div>
        <ul className={`nav nav${titleStyle}`}>
          <li className="nav-item">
            <Link to={ROUTES.LANDING}>
              <MarcSymbolFull />
            </Link>
          </li>
          <div className="nav-main nav-title">
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
          <li className='nav-search-bar'>
            <form>
              <input
                className={`${searchAnimation}`}
                onChange={this.onInputChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                type="text"
                name="search"
                placeholder="Search.."
              />
            </form>
          </li>
          <div className="nav-sb nav-icons">
            {/* <li className="nav-item">
              <MagnifyingGlass />
            </li> */}
            <li className="nav-item">
              <ShoppingBagModal />
            </li>
          </div>
        </ul>
      </div>
    );
  }

  render() {
    return <div>{this.Navigation()}</div>;
  }
}

export default Nav;
