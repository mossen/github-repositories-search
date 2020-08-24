import React, { useMemo } from "react";
import styled from "styled-components";
import Loading from "../Loading";
import Item from "../Item";
import { RepositoryItemInterface } from "../../redux/slices/repoSlice";

type Props = {
  items: RepositoryItemInterface[];
  isLoading: boolean;
  canLoadMore: boolean;
  loadMoreHandler: Function;
};

const List: React.FC<Props> = props => {
  const { items, isLoading, loadMoreHandler } = props;

  const handleScroll = (event): void => {
    if (!props.canLoadMore) {
      return;
    }

    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollHeight <= scrollTop + clientHeight) {
      loadMoreHandler();
    }
  };

  /*
   * Improving performance to reduce calling this
   * function when items remains unchanged
   */
  const itemElements = useMemo(
    () =>
      items &&
      items.map((item: RepositoryItemInterface) => (
        <Item key={item.id} item={item} />
      )),
    [items]
  );

  return (
    items && (
      <Wrapper
        items={items}
        onScroll={handleScroll}
        className="mt-2 max-w-full bg-white rounded overflow-scroll shadow-lg"
      >
        {itemElements}
        <Loading show={isLoading} />
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  max-height: ${(props): string => (props.items.length ? "300px" : "auto")};
`;

export default List;
