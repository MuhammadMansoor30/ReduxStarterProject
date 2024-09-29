import { createAction } from "@reduxjs/toolkit";

export const apiCallback = createAction('api/CallBegin');

// NOTES: (SEC 7)
// Creating and using the genral api action with a specif name of api/{anyName}.
// This action is used to make callbacks to our api middleware so that we dont have to mnaully type the name of action we want to execute for middleware.