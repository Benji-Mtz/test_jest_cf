import React from 'react';
import Form from '../components/Form';
import { create, act } from 'react-test-renderer';
import '@testing-library/jest-dom';

let component;

const props = {
    history: {},
    handleSubmit: jest.fn(),
};

describe("<Form />", () => {

    beforeEach(() => {
        component = create(<Form {...props} />);
    });

    it("Renderiza correctamente", () => {
        expect(component).toBeDefined();
        expect(component.toJSON().type).toEqual("form");
        
        expect(component.root.findByType("input")).toBeDefined();
        expect(component.root.findByType("button")).toBeDefined();
        expect(component.root.findByType("svg")).toBeDefined();
    });

    it("El botón debe habilitarse si el input tiene un valor diferente de vacío", () => {
        const form = component.root.findByType("form");
        const input = form.findByType("input");
        const button = form.findByType("button");

        expect(button.props.disabled).toBeTruthy();
        // expect(button.props.className).toEqual("search-button null");
        expect(button.props.className).toEqual("search-button null");

        act(() => {
            input.props.onChange({ target: { value: "aves" }})
        });

        expect(button.props.disabled).toBeFalsy();
        expect(button.props.className).toEqual("search-button active");

    });

    it("Se debe llamar al onSubmit sin problemas", () => {
        
        const form = component.root.findByType("form");

        form.props.onSubmit();

        expect(props.handleSubmit).toHaveBeenCalled();
        expect(props.handleSubmit).toHaveBeenCalledTimes(1);
        expect(props.handleSubmit).toHaveBeenCalledWith(undefined, props.history, "");

    });
});