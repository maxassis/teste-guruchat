import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Home);

    expect(wrapper.vm).toBeTruthy();
  });
});

test("check the button exists", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Home);


    it('has a button with text mazino', () => {
      let button = wrapper.find('.card__button');
      expect(button.text()).toBe('DESCUBRA');
    });
  });

 
  
});
