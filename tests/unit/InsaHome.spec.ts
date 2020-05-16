import { mount } from "@vue/test-utils";
import { expect } from "chai";
import InsaHome from "../../src/components/InsaHome.vue";

describe("InsaHome", () => {
  it("test the component mount", () => {
    const msg = "test";
    const wrapper = mount(InsaHome, {
      mocks: {
        $t: () => undefined,
      },
      propsData: { msg },
    });
    expect(wrapper.isVueInstance()).to.equal(true);
  });
});
