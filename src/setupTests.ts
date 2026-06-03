import "@testing-library/dom";
import {server} from "./mocks/server";
import {cleanup} from "@testing-library/react";

beforeAll(()=>server.listen())
afterEach(()=>{
    cleanup();
    server.resetHandlers();
})
afterAll(()=>server.close())
