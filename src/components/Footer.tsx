import { ListType } from "../GlobalTypes";

interface FooterProps {
  listItem: ListType[];
}

const Footer = ({ listItem }: FooterProps) => {
  if (!listItem.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const totalItems: number = listItem.length;
  const totalPackedItems: number = listItem.filter(
    (item) => item.packed
  ).length;
  const percentage: number = Math.round((totalPackedItems / totalItems) * 100);
  return (
    <footer className="stats">
      <p>
        {percentage === 100
          ? "You got everything ready to go ✈"
          : `💼 You have ${totalItems} items on your list, and you already packed ${totalPackedItems} (${percentage}%)`}
      </p>
    </footer>
  );
};

export default Footer;
