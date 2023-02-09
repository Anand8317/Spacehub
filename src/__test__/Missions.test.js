import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../redux/configureStore';

const App = () => {
  <Provider store={store}>
    <Missions />
  </Provider>;
};

describe('Mission component test', () => {
  it('Testing Mission page rendering', () => {
    const MissionComponent = renderer.create(<App />).toJSON();
    expect(MissionComponent).toMatchSnapshot();
  });
});
