import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// components
import App from '../../../../components/app/App.js';
import AppWrapper from '../../../../components/app-wrapper/AppWrapper';
import CommandCenter from '../../../../components/command-center/CommandCenter';
import Table from '../../../../components/table/Table';
import Canvas from '../../../../components/canvas/Canvas';

// Enzyme vconfiguration
Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('<App/> Component rendering', () => {
  it('should render one <AppWrapper>', () => {
    expect(wrapper.find(AppWrapper)).toHaveLength(1);
  });

  it('<AppWrapper> should render one <Table> element', () => {
    expect(wrapper.find(AppWrapper).find(Table)).toHaveLength(1);
  });

  it('<AppWrapper> should render one <CommandCenter> element', () => {
    expect(wrapper.find(AppWrapper).find(CommandCenter)).toHaveLength(1);
  });

  it('<Table> should render one <Canvas> element', () => {
    expect(wrapper.find(Table).find(Canvas)).toHaveLength(1);
  });
});
