import React from "react";
import { RepositoryItemInterface } from "../../redux/slices/repoSlice";

type Props = {
  item: RepositoryItemInterface;
}
const Item: React.FC<Props> = ({ item }) => {
  return (
    <div className="w-full h-12 flex justify-between items-center px-4 py-3 hover:bg-teal-100 cursor-pointer" test-dataid="item">
      <p className="text-sm">
        <span className="text-xs text-gray-500 mr-2">ID:{item.id}</span>
        {item.name}
      </p>
      <p className="text-xs">Watchers: {item.watchers_count}</p>
    </div>
  );
};

export default Item;
