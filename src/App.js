import './App.css';
// import CakeContainer from './components/cake/cakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserContainer from './components/user/UserContainer';
// import HookCakeContainer from './components/cake/HookCakeContainer';
// import  IceCreamContainer from './components/iceCream/iceCreamContainer'
// import NewCakeContainer from './components/cake/NewCakeContaier';
// import NewItem from './components/NewItem';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      {/* <NewItem />
      <NewItem cake />
      <CakeContainer/>
      <HookCakeContainer/>
      <IceCreamContainer />
      <NewCakeContainer /> */}

      <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
