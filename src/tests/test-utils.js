import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "../reducers/index";
import AddForm from "../components/AddForm";

function render(
    AddForm,
    {
        initialState,
        store=createStore(reducer, initialState),
        ...renderOptions
    } = {}
){
    function Wrapper({ children }){
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(AddForm, { wrapper: Wrapper, ...renderOptions })
}

export * from "@testing-library/react";
export { render };