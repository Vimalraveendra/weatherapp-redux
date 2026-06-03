import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { configureStore} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "./store/root-Reducer";

export function renderWithProviders(
       ui:React.ReactElement,
        {
            preloadedState={},
            store=configureStore({
                reducer:rootReducer,
                preloadedState
            }),
            ...renderOptions
        }={}
){
     function Wrapper({children}:PropsWithChildren){
         return <Provider store={store}>{children}</Provider>
     }
     return{
        store,
        ...render(ui,{wrapper:Wrapper,...renderOptions}),
     };
}