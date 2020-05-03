/* eslint-disable @typescript-eslint/camelcase */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RepositoryItemInterface {
  id?: number | string;
  name?: string;
  watchers_count?: number;
};

export interface RepositoriesInterface {
  items: RepositoryItemInterface[];
  total_count: number;
}

interface RepositoriesStateInterface {
  data: RepositoriesInterface;
  error: string | null;
  loading: boolean;
}

const initialState: RepositoriesStateInterface = {
  data: {
    items: [],
    total_count: 1000
  },
  error: null,
  loading: false
};

const repoDetails = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    cleanRepositories(state): void {
      state.data.items = [];
      state.data.total_count = 1000;
      state.error = null;
      state.loading = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getRepositoriesRequest(state, action: PayloadAction<{ keyword: string; perPage: number }>): void {
      state.loading = true;
    },
    getRepositoriesSuccess(state, action: PayloadAction<RepositoriesInterface>): void {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    },
    getRepositoriesFailed(state, action: PayloadAction<string>): void {
      state.data = initialState.data;
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const {
  cleanRepositories,
  getRepositoriesRequest,
  getRepositoriesSuccess,
  getRepositoriesFailed
} = repoDetails.actions;

export default repoDetails.reducer;
