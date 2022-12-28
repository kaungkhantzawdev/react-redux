import './App.css';
import CakeContainer from './components/cake/cakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookCakeContainer from './components/cake/HookCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CakeContainer/>
      <HookCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
