import { Component } from 'react';
import QuantityCounter from './components/QuantityCounter';
import FriendsList from './components/FriendsList';
import Header from './components/Header';
import LapCounter from './components/LapCounter';
import LapCounterFn from './components/LapCounterFn';

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
        <Header title={this.state.title} />
        <section>
          <QuantityCounter />
          <QuantityCounter initValue="1" />
          <QuantityCounter initValue="10" />
          <QuantityCounter initValue="100" />
        </section>
        <FriendsList />
        <section>
          <LapCounter />
        </section>
        <section>
          <LapCounterFn />
        </section>
      </div>
    );
  }
}

export default App;