import { expect } from "chai";
import { mount } from "@vue/test-utils";
import InsaHome from "../../src/components/InsaHome";

describe("InsaHome", () => {
  it("test the component mount", () => {
    const msg = "test";
    const wrapper = mount(InsaHome, {
      propsData: { msg },
      mocks: {
        $t: () => {},
      },
    });
    expect(wrapper.isVueInstance()).to.be.true;
  });
});
