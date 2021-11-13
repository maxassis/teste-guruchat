import { mount } from "@vue/test-utils";
import Header from "@/components/header.vue";

describe("Header", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Header);

    expect(wrapper.vm).toBeTruthy();
  });
});

test("should link names", () => {
  const wrapper = mount(Header);
  expect(wrapper.text()).toContain("Home");
});

test("should link names", () => {
  const wrapper = mount(Header);
  expect(wrapper.text()).toContain("Post");
});

test("test on link names", () => {
  const wrapper = mount(Header);
  expect(wrapper.classes()).toContain("header-external-container");
});
