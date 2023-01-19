import { Component } from 'react';
import QuantityCounter from './components/QuantityCounter';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Vamsy's First ReactJS SPA"
    };
  }

  render() {
    return (
      <div>
        <header className='banner'>
          <h3>{this.state.title}</h3>
        </header>
        <section>
          <QuantityCounter />
          <QuantityCounter initValue="1" />
          <QuantityCounter initValue="10" />
          <QuantityCounter initValue="100" />
        </section>
        <FriendsList />
      </div>

    );
  }
}

export default App;