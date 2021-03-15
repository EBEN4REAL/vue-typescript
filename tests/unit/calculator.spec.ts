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
let buttons: any;
let output: any;
  
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
            for(let i=0; i<10; i++) {
                test(`should render a button with digit ${i} with a class of digit-${i}`, () => {
                    expect(calc.find(`.digit-${i}`).exists()).toBe(true)
                })
                test(`Digit ${i} button should update output when clicked`, async () => {
                    await calc.find(`.digit-${i}`).trigger("click")
                    expect(calc.find('.output').text()).toBe("" + i);
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

    describe("Interactivity and computation", () => {
        beforeEach(() => (buttons = getButtons(calc)))
       
        describe("clearing output display", () => {
            test('It should clear the output when the clear button is clicked', async () => {
                let actions: string[][] = [
                    ['digit-2', '2'],
                    ['clear', ""]
                ]
                for(const [op, expected] of actions) {
                    await buttons[op].trigger('click')
                    expect(output.text()).toBe(expected)
                }
            })
        })
        describe("Simple operations" , () => {
            beforeEach(() => (buttons = getButtons(calc)))

            test("It should successfully add numbers together", async () => {
                const actions: string[][] = [
                    ['digit-1', "1"],
                    ['op-add', "1+"],
                    ['digit-2', "1+2"],
                    ['eq', "3.00"]
                ]
                
                for(const [btn, expected] of actions) {
                    await buttons[btn].trigger('click')
                    expect(output.text()).toBe(expected)
                }
            })

            test("Subtraction of numbers must run successfully", async () => {
                const actions: string[][] = [
                    ['digit-5', "5"],
                    ['op-sub', "5-"],
                    ['digit-2', "5-2"],
                    ['eq', "3.00"]
                ]
                
                for(const [btn, expected] of actions) {
                    await buttons[btn].trigger('click')
                    expect(output.text()).toBe(expected)
                }
            })

            test("Multiplication of numbers must run successfully", async () => {
                const actions: string[][] = [
                    ['digit-5', "5"],
                    ['op-mul', "5*"],
                    ['digit-2', "5*2"],
                    ['eq', "10.00"]
                ]
                
                for(const [btn, expected] of actions) {
                    await buttons[btn].trigger('click')
                    expect(output.text()).toBe(expected)
                }
            })

            test("Multiplication of numbers must run successfully", async () => {
                const actions: string[][] = [
                    ['digit-5', "5"],
                    ['op-div', "5/"],
                    ['digit-2', "5/2"],
                    ['eq', "2.50"]
                ]
                
                for(const [btn, expected] of actions) {
                    await buttons[btn].trigger('click')
                    expect(output.text()).toBe(expected)
                }
            })
        })
    })
    
})