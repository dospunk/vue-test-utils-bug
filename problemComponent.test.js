const { mount } = require('@vue/test-utils');
const ProblemComponent= require('./ProblemComponent.vue').default;

test('select span in span', () => {
  const wrapper = mount(ProblemComponent);
  expect(wrapper.get('span').html()).toBe('<span> <span class="font-semibold">12</span> years old</span>'); //will pass
  expect(wrapper.get('span > span').text()).toBe('this one will be selected but not the other one'); //will pass
  expect(wrapper.get('p > span').text()).toBe('12'); //will pass
  expect(wrapper.get('span > span').text()).toBe('12'); //will fail
  expect(wrapper.findAll('span > span').length).toBe(2); //will fail
});