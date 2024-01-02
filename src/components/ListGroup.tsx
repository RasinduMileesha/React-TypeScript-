import { useState } from "react";

// {items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook
  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="List-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item-active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
