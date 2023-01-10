// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
///////////////////////////////////////
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("App works", () => {
  const { container } = render(<App />);
  console.log(container);
  const buttons = container.querySelectorAll("button");

  expect(buttons[0].textContent).toBe("+1");
  expect(buttons[1].textContent).toBe("+10");
  expect(buttons[2].textContent).toBe("+100");
  expect(buttons[3].textContent).toBe("+1000");
  const result: ChildNode | any = container.querySelector("span");
  expect(result.textContent).toBe("0");
  fireEvent.click(buttons[0]);
  expect(result.textContent).toBe("1");
  fireEvent.click(buttons[0]);
  expect(result.textContent).toBe("2");
  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[0]);
  expect(result.textContent).toBe("5");

  // 10's
  fireEvent.click(buttons[1]);
  expect(result.textContent).toBe("15");
  fireEvent.click(buttons[1]);
  fireEvent.click(buttons[1]);
  expect(result.textContent).toBe("35");

  // 100's
  fireEvent.click(buttons[2]);
  expect(result.textContent).toBe("135");
  fireEvent.click(buttons[2]);
  fireEvent.click(buttons[2]);
  expect(result.textContent).toBe("335");
  fireEvent.click(buttons[0]);
  expect(result.textContent).toBe("336");
  fireEvent.click(buttons[1]);
  expect(result.textContent).toBe("346");

  // 1000's
  fireEvent.click(buttons[3]);
  expect(result.textContent).toBe("1346");
  fireEvent.click(buttons[3]);
  fireEvent.click(buttons[3]);
  expect(result.textContent).toBe("3346");
  fireEvent.click(buttons[0]);
  expect(result.textContent).toBe("3347");
  fireEvent.click(buttons[1]);
  expect(result.textContent).toBe("3357");
  fireEvent.click(buttons[2]);
  expect(result.textContent).toBe("3457");
  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[1]);
  fireEvent.click(buttons[2]);
  fireEvent.click(buttons[3]);
  expect(result.textContent).toBe("4568");
});
