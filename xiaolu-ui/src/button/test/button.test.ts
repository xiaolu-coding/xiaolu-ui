import { render } from "@testing-library/vue";
import Button from "../src/button";

test("按钮是否正常渲染", () => {
  const { getByRole } = render(Button);

  getByRole("button");
});

test("按钮default插槽是否生效", () => {
  const { getByText } = render(Button);

  getByText("按钮");
});

test("按钮插槽是否生效", () => {
  // 通过第二个参数传slots插槽
  const { getByText } = render(Button, {
    slots: {
      default() {
        return "测试插槽";
      },
    },
  });

  getByText("测试插槽");
});

test("按钮props:type 默认是否生效", () => {
  const { getByRole } = render(Button);

  const button = getByRole("button");

  expect(button.classList.contains("s-btn--secondary")).toBe(true);
});

test("按钮props:type 传值是否生效", () => {
  // 通过第二个参数传props
  const { getByRole } = render(Button, {
    props: {
      type: "primary",
    },
  });

  const button = getByRole("button");

  expect(button.classList.contains("s-btn--primary")).toBe(true);
});

test("按钮props:size 默认是否生效", () => {
  const { getByRole } = render(Button);

  const button = getByRole("button");

  expect(button.classList.contains("s-btn--small")).toBe(true);
});

test("按钮props:size 传值是否生效", () => {
  // 通过第二个参数传props
  const { getByRole } = render(Button, {
    props: {
      size: "medium",
    },
  });

  const button = getByRole("button");

  expect(button.classList.contains("s-btn--medium")).toBe(true);
});

test("按钮props:disabled 默认是否生效", () => {
  const { getByRole } = render(Button);

  const button = getByRole("button");

  expect(button.getAttribute("disabled")).toBe(null);
});

test("按钮props:disabled 传值是否生效", () => {
  const { getByRole } = render(Button, {
    props: {
      disabled: true,
    },
  });

  const button = getByRole("button");

  expect(button.getAttribute("disabled")).toBe("");
});

test("按钮props:block 默认是否生效", () => {
  const { getByRole } = render(Button);

  const button = getByRole("button");

  expect(button.classList.contains("s-btn--block")).toBe(false);
});

test("按钮props:block 传值是否生效", () => {
  const { getByRole } = render(Button, {
    props: {
      block: true,
    },
  });

  const button = getByRole("button");

  expect(button.classList.contains("s-btn--block")).toBe(true);
});
