import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// components
import CommandCenter from '../../../../../components/command-center/CommandCenter';
import CommandForm from '../../../../../components/form/CommandForm';
// Enzyme vconfiguration
Enzyme.configure({ adapter: new Adapter() });

let component;

beforeEach(() => {
  const fn = () => {};
  component = shallow(<CommandCenter setCommand={fn} />);
});

describe('<CommandCenter /> component', () => {
  it('<CommandCenter /> should be defined', () => {
    expect(component).toBeDefined();
  });

  it('<CommandCenter>should render <CommandForm>', () => {
    expect(component.find(CommandForm)).toHaveLength(1);
  });

  it('<CommandCenter> accepts assignCommand function as prop', () => {
    expect(component.props('setCommand')).toBeDefined();
  });
});
