import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "./TodoForm";


describe("TodoForm", function () {
  it("renders without crashing", function () {
    render(
      <TodoForm handleSave={jest.fn} />
    );
  });

  it("")

});