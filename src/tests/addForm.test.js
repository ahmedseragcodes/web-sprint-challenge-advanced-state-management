import React from "react";
import { render, screen, waitFor } from "./test-utils";
import userEvent from "@testing-library/user-event";

import "../index";
import App from "../App";
import AddForm from "../components/AddForm";

describe ("tests related to add smurf form", ()=>{
    test("components render without error", ()=>{
        render(<App />, { initialState: {  name: "Smurf One",
        position:"Chief Of Smurfs",
        nickname:"One",
        description:"Runs Smurf Operations" } })

    })
})

//Couldn't get past the setupWorker errors