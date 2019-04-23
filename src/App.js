import React, { Component } from 'react';
import { HeaderSection, UserSection } from './components'
import './app.css'

class App extends Component {
  render() {
    const Divider = () => <hr className="divider" />;
    return (
      <div className="root-container">
          <HeaderSection />
          <Divider />
          <UserSection />
          <Divider />
          <div className="footer">
            Footer
          </div>
      </div>
    );
  }
}

export default App;
