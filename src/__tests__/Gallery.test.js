import React from 'react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

import Gallery from '../components/Gallery';
import NoImages from '../components/NoImages';
import Image from '../components/Image';

let component;

const props = {
    data: [],
};

describe("<Gallery />", () => {

    beforeEach(() => {
        component = create(<Gallery {...props} />);
    });

    it("Renderiza correctamente", () => {
        expect(component).toBeDefined();

        expect(component.root.findByType("div")).toBeDefined();
        expect(component.root.findByType("ul")).toBeDefined();
    });

    it("Muestra NoImages si la data esta vacia", () => {
        expect(component.root.findByType(NoImages)).toBeDefined();
    });

    it("Renderiza las imagenes si la data existe o cambia", () => {
        const data=  [
            { id: "52225981038", owner: "9817122@N05", secret: "75a0ff88f1", server: "65535", farm: 66, title: "DSC03447", ispublic: 1, isfriend: 0, isfamily: 0 },
            { id: "52225981039", owner: "9817122@N05", secret: "75a0ff88f1", server: "65535", farm: 66, title: "DSC03447", ispublic: 1, isfriend: 0, isfamily: 0 },
            { id: "52225981040", owner: "9817122@N05", secret: "75a0ff88f1", server: "65535", farm: 66, title: "DSC03447", ispublic: 1, isfriend: 0, isfamily: 0 },
            { id: "52225981041", owner: "9817122@N05", secret: "75a0ff88f1", server: "65535", farm: 66, title: "DSC03447", ispublic: 1, isfriend: 0, isfamily: 0 },
        ];
          
        component.update(<Gallery data={data} />);
        expect(component.root.findAllByType(NoImages).length).toEqual(0);
        expect(component.root.findAllByType(Image).length).toEqual(data.length);
        // console.log(component.root.findAllByType(Image)[0].props);
        expect(component.root.findAllByType(Image)[0].props.alt).toEqual(data[0].title)

    });

});