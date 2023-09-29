import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

const TODOS = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

describe("Top Todo", function () {
  it("renders without crashing", function () {
    render(
      <TopTodo todos={TODOS} />
    );
  });


  it("contains expected title", function () {
    const result = render( <TopTodo todos={TODOS} /> );

    expect(result.queryByText("Make dinner")).toBeInTheDocument();
    expect(result.queryByText("Cook something healthy")).toBeInTheDocument();
    expect(result.queryByText("(priority: 1)")).toBeInTheDocument();
  });

  it("should match snapshot", function () {
    const { debug, container } = render( <TopTodo todos={TODOS} /> );

    expect(container).toMatchSnapshot();
  });

});