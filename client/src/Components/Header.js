import React, { Component } from "react";
import { connect } from "react-redux";
// TO DO
// CONDITIONAL LINK DEPENDING ON USER SIGNED IN OR NOT 
class Header extends Component {
  renderHeader = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">MassMail</a>
          <ul className="right">
            {this.renderHeader()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
