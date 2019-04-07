import React from 'react';
import Toast, { StyledToast } from './toast.component';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

const toast = mount(<Toast />);
const styledToast = shallow(<StyledToast />)


describe('<Toast />', () => {

    it('will render without exploding!', () => {
        const tree = renderer.create(<Toast />).toJSON()
        expect(tree).toMatchSnapshot();
    })
    
    it('returns the task name', () => {
        toast.setProps({
            task: 'Task #1'
        })
        expect(toast.props().task).toBe('Task #1')
    });

    describe('when task status is set to "complete"', () => {
        it('"opacity" will be set to "1"', () => {
            styledToast.setProps({
                visible: true
            })
            expect(styledToast).toHaveStyleRule('opacity', '1');
        })
    });

    
    describe('when task status is set to "not_started"', () => {
        it('"opacity" will be set to "0"', () => {
            styledToast.setProps({
                visible: false
            })
            expect(styledToast).toHaveStyleRule('opacity', '0');
        })
    });

    

});


