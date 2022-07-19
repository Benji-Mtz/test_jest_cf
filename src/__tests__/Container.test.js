import React from 'react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

jest.mock("axios")

console.log(jest);

import Container from '../components/Container';

let component;

describe("<Container />", () => {
    // beforeEach( () => {
    //     component = create(<Container />)
    // });

    it("Renderiza correctamente", () => {
        
    });
});