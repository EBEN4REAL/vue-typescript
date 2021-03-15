import { shallowMount, mount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'

const buttonNames = [
    "op-add", "op-mul", "op-div", "op-sub",  "clear", "eq",
    // @ts-ignore
    ...Array(10).fill().map((e, i) => `digit-${i}`),
];
const getButtons = (calc: any) => 
  buttonNames.reduce((accumulator: any, btn) => {
    accumulator[btn] = calc.find("." + btn);
    console.log(accumulator)
    return accumulator;
  }, {})

console.log(getButtons)

  let calc: any;
  let buttons;
  let output;

  
describe('Calculator.vue', () => {
    beforeEach(() => {
        calc = mount(Calculator);
        output = calc.find(".output");
    });
    afterEach(() => {
        calc.unmount();
    });
    describe("Output element", () => {
        it('Should render an element with a classname of output', () => {
            expect(calc.find('.output').text()).toBe("")
        })
        it("should have an empty output display initially" , () => {
            expect(calc.find('.output').text()).toBe("")
        })
    })
    describe('Buttons should be rendered and be clickable', () => {
        describe("Operator Buttons", () => {
            const operatorButtons = [ "op-add", "op-mul", "op-div", "op-sub"]
            for(let i=0; i<operatorButtons.length; i++)  {
                test(`shouild render a button  class name of ${operatorButtons[i]}`, () => {
                    expect(calc.find(`.${operatorButtons[i]}`).exists()).toBe(true)
                })
            }
        })
        describe('Digit buttons', () => {
            beforeEach(() => {
                buttons = getButtons(calc)
            });
            // @ts-ignore
            const digitClasses: string[] =  Array(10).fill().map((e, i) => `digit-${i}`)
            for(let i=0; i<digitClasses.length; i++) {
                test(`should render a button with digit ${i} with a class of ${digitClasses[i]}`, () => {
                    expect(calc.find(`.${digitClasses[i]}`).exists()).toBe(true)
                })
            }
        })
        it('should render the clear button with a class of clear', () => {
            expect(calc.find('.clear').exists()).toBe(true)
        })

        it('should render the equal button with a class of eq', () => {
            expect(calc.find('.eq').exists()).toBe(true)
        })
    })
    
})