import { SagaIterator } from "@redux-saga/core";
import { call, put, debounce } from "redux-saga/effects";
import api from "../../services/api";
import { repositoriesEndpoint } from "../../services/endpoints";

import {
  cleanRepositories,
  getRepositoriesRequest,
  getRepositoriesSuccess,
  getRepositoriesFailed
} from "../slices/repoSlice";

function* fetchRepositories(action): SagaIterator {
  try {
    // Empty the list if keyword is null
    if (!action.payload.keyword) {
      yield put(cleanRepositories());
      return;
    }

    const response = yield call(
      api,
      repositoriesEndpoint(action.payload.keyword, action.payload.perPage),
      "GET",
      action.payload
    );

    yield put(getRepositoriesSuccess(response.data));
  } catch (error) {
    yield put(getRepositoriesFailed(error));
  }
}

export function* watchFetchRepositories(): SagaIterator {
  yield debounce(300, getRepositoriesRequest.toString(), fetchRepositories);
}
