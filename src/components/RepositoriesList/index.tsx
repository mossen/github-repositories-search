/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useEffect, Profiler, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/rootReducer";
import { useDispatch } from "react-redux";
import SearchBox from "../../components/SearchBox";
import List from "../../components/List";
import { getRepositoriesRequest } from "../../redux/slices/repoSlice";

const RepositoriesList: React.FC = () => {
  const [
    repositories,
    loading,
    total_count
  ] = useSelector((state: RootStateType) => [
    state.repositories.data.items,
    state.repositories.loading,
    state.repositories.data.total_count
  ]);

  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const [perPage, setPerPage] = useState(20);
  const initialUpdate = useRef(true);
  useEffect(() => {
    // Preventing dispatch on initiating state
    if (initialUpdate.current) {
      initialUpdate.current = false;
      return;
    }
    dispatch(getRepositoriesRequest({ keyword, perPage }));
  }, [keyword, perPage, dispatch]);

  /* 
    REducing one time re-rendering which might not be very effective 
    here but in expensive component is.
  */
  const memoizedElements = useMemo(
    () => {
      // Having this for observation - to be removed for production
      const profilerCallback = (
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions
      ): void => {
        console.log(
          id,
          phase,
          actualDuration,
          baseDuration,
          startTime,
          commitTime,
          interactions,
          [keyword, loading]
        );
      };

      return (
        <Profiler id="repositories-list" onRender={profilerCallback}>
          <div className="flex justify-center">
            <div className="mb-4 mt-4 w-full sm:max-w-md px-5">
              <SearchBox
                label="Search Repositories"
                onChangeHandler={(keyword): void => setKeyword(keyword)}
              />
              <List
                isLoading={loading}
                items={repositories}
                loadMoreHandler={(): void => setPerPage(perPage + 20)}
                canLoadMore={total_count > perPage}
              />
            </div>
          </div>
        </Profiler>
      );
    },
    [keyword, loading, repositories, total_count, perPage]
  );

  return memoizedElements;
};

export default RepositoriesList;
