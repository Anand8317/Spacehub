import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Navigation from '../components/navigation';
import store from '../redux/configureStore';

const App = () => {
  <Provider store={store}>
    <Navigation />
  </Provider>;
};

describe('Navigation component test', () => {
  it('Testing Navigation rendering', () => {
    const NavigationComponent = renderer.create(<App />).toJSON();
    expect(NavigationComponent).toMatchSnapshot();
  });
});