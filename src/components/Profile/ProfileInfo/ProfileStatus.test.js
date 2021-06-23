import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("state from props should be in the state", () => {
    const component = create(<ProfileStatus status="We" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("We");
  });

  test("after creation span with status should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="We" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation input shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="We" />);
    const root = component.root;
    expect(()=>{
      let input = root.findByType("input");
    }).toThrow();
  });

  test("after creation span with status should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="We" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("We");
  });

  test("input should be displayed in edit mode insted of span", () => {
    const component = create(<ProfileStatus status="We" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input")
    expect(input.props.value).toBe("We");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="We" updateUserStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
