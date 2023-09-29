import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("One Todo", function () {
  it("renders without crashing", function () {
    render(
      <Todo
        id={1}
        title="Code!"
        description="Write some code"
        priority={2} />
    );
  });


  it("contains expected title", function () {
    const result = render(
                    <Todo
                      id={1}
                      title="Code!"
                      description="Write some code"
                      priority={2} />
                  );

    expect(result.queryByText("Code!")).toBeInTheDocument();
    expect(result.queryByText("Write some code")).toBeInTheDocument();
    expect(result.queryByText("(priority: 2)")).toBeInTheDocument();
  });

  it("should match snapshot", function () {
    const { debug, container } = render(
                                  <Todo
                                    id={1}
                                    title="Code!"
                                    description="Write some code"
                                    priority={2} />
                                );

    expect(container).toMatchSnapshot();
  });
});