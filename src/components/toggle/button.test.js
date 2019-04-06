import React from 'react';
import Button from './button.component';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

describe('Button', () => {
    describe('when user clicks button', () => {
        it('calls correct function to modify task status', () => {
            const onButtonClickMock = jest.fn();
            const wrapper = shallow(
                <Button clicked={onButtonClickMock} />,
            );

            const buttonElement = wrapper.find('.button');
            buttonElement.simulate('click');

            expect(onButtonClickMock).toHaveBeenCalledTimes(1);
        })
    })
})