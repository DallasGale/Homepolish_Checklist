import React from 'react';
import Toast, { StyledToast } from './toast.component';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import 'jest-styled-components'


describe('<Toast />', () => {
    it('returns a task name when a value is assigned to "task" prop', () => {
        const wrapper = mount(<Toast task="Task #1" />);
        expect(wrapper.props().task).toBe('Task #1')
        
        wrapper.setProps({ task: 'Task #2' });
        expect(wrapper.props().task).toBe('Task #2');
    });

    it('"toastMounted" prop returns a boolean', () => {
        const wrapper = mount(<Toast toastMounted />);
        expect(wrapper.props().toastMounted).toBe(true);
    })

    it('opacity is set to 0 when "visible" prop is false', () => {
        const styled = shallow(<StyledToast visible={false} />)
        expect(styled).toHaveStyleRule('opacity', '0');
    })

    it('opacity is set to 1 when "visible" prop is true', () => {
        const styled = shallow(<StyledToast visible={true} />)
        expect(styled).toHaveStyleRule('opacity', '1');
    })
});


