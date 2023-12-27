import { ListType } from "../GlobalTypes";

interface ListProps {
  list: ListType;
  deleted: (e: number) => void;
  packed: (e: number) => void;
}

const List = ({ list, deleted, packed }: ListProps) => {
  function deletedItem() {
    deleted(list.id);
  }

  function checkBox() {
    packed(list.id);
  }

  return (
    <li>
      <input type="checkbox" onClick={checkBox} checked={list.packed} />
      <span style={list.packed ? { textDecoration: "line-through" } : {}}>
        {list.quantity} {list.description}
      </span>
      <button onClick={deletedItem}>❌</button>
    </li>
  );
};

export default List;
