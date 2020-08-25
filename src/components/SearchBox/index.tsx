import React, { useState, useEffect, Profiler, useMemo } from "react";

type Props = {
  label: string;
  onChangeHandler: (keyword: string) => void;
};

const SearchBox: React.FC<Props> = ({ label, onChangeHandler }) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    onChangeHandler(keyword);
  }, [keyword, onChangeHandler]);

  const memoizedElements = useMemo(() => {
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
        [keyword]
      );
    };

    return (
      <Profiler id="search-box" onRender={profilerCallback}>
        <>
          <label className="block text-gray-700 text-sm mb-2" htmlFor="search">
            {label}
          </label>
          <input
            className="shadow-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            id="search"
            data-testid="search-input"
            type="text"
            value={keyword}
            onChange={(event): void => setKeyword(event.target.value)}
          />
        </>
      </Profiler>
    );
  }, [keyword, label]);

  return memoizedElements;
};

export default SearchBox;
