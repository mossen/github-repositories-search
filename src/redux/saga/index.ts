import { SagaIterator } from "@redux-saga/core";
import { all, fork } from "redux-saga/effects";
import { watchFetchRepositories } from "./repoSaga";

/**
 * Root saga manages watcher life cycle
 * Export all sagas as root saga
 */
export default function* root(): SagaIterator {
  yield all([fork(watchFetchRepositories)]);
}
