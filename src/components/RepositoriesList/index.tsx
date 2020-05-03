/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/rootReducer";
import { useDispatch } from "react-redux";
import SearchBox from "../../components/SearchBox";
import List from "../../components/List";
import { getRepositoriesRequest } from "../../redux/slices/repoSlice";

const Item: React.FC = () => {
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
  useEffect(() => {
    dispatch(getRepositoriesRequest({ keyword, perPage }));
  }, [keyword, perPage, dispatch]);

  return (
    <div className="flex justify-center">
      <div className="mb-4 mt-4 w-full sm:max-w-md px-5">
        <SearchBox
          label="Search Repositories"
          onChangeHandler={ (keyword): void => setKeyword(keyword) }
        />
        <List
          isLoading={loading}
          items={repositories}
          loadMoreHandler={(): void => setPerPage(perPage + 20)}
          canLoadMore={total_count > perPage}
        />
      </div>
    </div>
  );
};

export default Item;
