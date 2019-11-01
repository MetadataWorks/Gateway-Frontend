import React from "react";
import { create } from "react-test-renderer";
import SearchPage from "./SearchPage.js";
import Search from "../../components/search/search.js";

import { SearchBar } from "../../styles/carbonComponents.js";

import { AppContext } from "../../HOC/AppContext/AppContext.js";
import context from "../../__mocks__/AppContextMock.js";

describe("<SearchPage> ", () => {
    let renderedComponent;
    let renderedOutput;

    beforeEach(() => {
        renderedComponent = create(
            <AppContext.Provider value={context}>
                <SearchPage />
            </AppContext.Provider>
        );
        renderedOutput = renderedComponent.root;
    });

    it("should test that the correct components are rendered", () => {
        const search = renderedOutput.findByType(SearchBar);
        console.log(search.children[0].props);
    });
});
