import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

let count: number;
const incrementCount = (increment: number) => {
  count += increment;
};

test("+1 Button works", () => {
  count = 0;
  const { container } = render(
    <Button increment={1} onClickFunction={incrementCount} />
  );
  const button: ChildNode | any = container.firstChild;
  expect(button.textContent).toBe("+1");
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(1);
});

test("+10 Button works", () => {
  count = 0;
  const { container } = render(
    <Button increment={10} onClickFunction={incrementCount} />
  );
  const button: ChildNode | any = container.firstChild;
  expect(button.textContent).toBe("+10");
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(10);
});

test("+100 Button works", () => {
  count = 0;
  const { container } = render(
    <Button increment={100} onClickFunction={incrementCount} />
  );
  const button: ChildNode | any = container.firstChild;
  expect(button.textContent).toBe("+100");
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(100);
});

test("+1000 Button works", () => {
  count = 0;
  const { container } = render(
    <Button increment={1000} onClickFunction={incrementCount} />
  );
  const button: ChildNode | any = container.firstChild;
  expect(button.textContent).toBe("+1000");
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(1000);
});
