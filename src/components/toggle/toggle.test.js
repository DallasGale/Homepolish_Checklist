import React from 'react';
import Toggle, { StyledButtonBorder, StyledButtonInner } from './toggle.component';
import * as colors from '../../styles/colors';
import { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components'

const white = colors.WHITE;
const completeTheme = colors.THEME_COMPLETED;
const notStartedTheme = colors.THEME_NOT_STARTED;

const border = shallow(<StyledButtonBorder />)
const inner = shallow(<StyledButtonInner />);

describe('Toggle', () => {
    it('will render without exploding!', () => {
        const tree = renderer.create(<Toggle />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    describe('when task status is not set to "complete"', () => {
        it('will have a default "border-color"', () => {
            expect(border).toHaveStyleRule('border-color', notStartedTheme)
        })
        it('will have "white" inner "background-color"', () => {
            expect(inner).toHaveStyleRule('background-color', white)
        })
    })

    describe('when task status is set to "complete"', () => {
        
        describe("<StyledButtonInner />", () => {
            it('will change "border-color"', () => {
                border.setProps({ 
                    taskStatus: 'complete'
                })
                expect(border).toHaveStyleRule('border-color', completeTheme)
            })
        });

        describe("<StyledButtonInner />", () => {
            it('will change "background-color"', () => {
                inner.setProps({ 
                    taskStatus: 'complete' 
                })
                expect(inner).toHaveStyleRule('background-color', completeTheme)
            })
        })
    })

})