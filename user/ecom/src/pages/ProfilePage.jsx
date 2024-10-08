import React, { Component, Fragment } from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NaveMenu'; 
import Profile from '../components/Common/Profile';

class ProfilePage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { user } = this.props;
    return (
      <Fragment>
        {}
        <NavMenu user={user} />
        <Profile user={user} />
        <Footer />
      </Fragment>
    );
  }
}

export default ProfilePage;
