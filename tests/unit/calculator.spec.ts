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
    return accumulator;
  }, {})

  let calc: any;
  let buttons;
  let output;

  
describe('Calculator.vue', () => {
    beforeEach(() => {
        calc = mount(Calculator);
        output = calc.find(".output");
    });
    afterEach(() => {
        // calc.destroy();
    });
    describe("Output element", () => {
        const wrapper = mount(Calculator)
        it('Should render an element with a classname of output', () => {
            expect(calc.find('.output').text()).toEqual("")
        })
        it("should have an empty output display initially" , () => {
            expect(calc.find('.output').text()).toEqual("")
        })
    })
})