import { store } from './redux/store';
import './App.css';
import Form from './Components/Form';
import Bookings from './Components/Bookings';
import { Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
      <Form></Form>
      <Bookings></Bookings>
    </div>
    </Provider>
  );
}

export default App;
