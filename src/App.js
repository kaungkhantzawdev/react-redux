import './App.css';
import CakeContainer from './components/cake/cakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookCakeContainer from './components/cake/HookCakeContainer';
import  IceCreamContainer from './components/iceCream/iceCreamContainer'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CakeContainer/>
      <HookCakeContainer/>
      <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
