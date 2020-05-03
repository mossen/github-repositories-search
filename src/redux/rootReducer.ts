import { combineReducers } from "@reduxjs/toolkit";

import repoReducer from "./slices/repoSlice";

const rootReducer = combineReducers({
  repositories: repoReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
