import { useState } from "react";
import { ListType } from "../GlobalTypes";
import List from "./List";

interface PackageProps {
  ListItem: ListType[];
  deletedItem: (e: number) => void;
  packedItem: (e: number) => void;
  clear: () => void;
}

const PackingList = ({
  ListItem,
  deletedItem,
  packedItem,
  clear,
}: PackageProps) => {
  const [sortOrder, setSortOrder] = useState<string>("input");
  let sortedItems: ListType[] | undefined;
  console.log(sortOrder);
  if (sortOrder === "input") sortedItems = ListItem;
  if (sortOrder === "descripiton")
    sortedItems = ListItem.slice().sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sortOrder === "packed")
    sortedItems = ListItem.slice().sort(
      (a, b) => Number(b.packed) - Number(a.packed)
    );

  return (
    <div className="list">
      <ul>
        {sortedItems &&
          sortedItems.map((item) => (
            <List
              list={item}
              key={item.id}
              deleted={deletedItem}
              packed={packedItem}
            />
          ))}
      </ul>
      <div className="actions">
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSortOrder(e.currentTarget.value)
          }
          value={sortOrder}
        >
          <option value="input">Sort by input order</option>
          <option value="descripiton">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clear}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
