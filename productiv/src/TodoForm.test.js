import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";


describe("TodoForm", function () {
  it("renders without crashing", function () {
    render(
      <TodoForm handleSave={jest.fn} />
    );
  });


  it("contains default priority", function () {
    const result = render( <TodoForm handleSave={jest.fn} /> );

    expect(result.queryByText("Make dinner")).toBeInTheDocument();
    expect(result.queryByText("Cook something healthy")).toBeInTheDocument();
    expect(result.queryByText("(priority: 1)")).toBeInTheDocument();
  });

  // it("should match snapshot", function () {
  //   const { debug, container } = render( <TopTodo todos={TODOS} /> );

  //   expect(container).toMatchSnapshot();
  // });

});