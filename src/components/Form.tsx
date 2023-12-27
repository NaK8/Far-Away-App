import React, { useState } from "react";
import { ListType } from "../GlobalTypes";

interface FormProps {
  getList: (e: ListType) => void;
}

const Form = ({ getList }: FormProps) => {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const itemData: ListType = {
      quantity,
      description,
      packed: false,
      id: Date.now(),
    };
    getList(itemData);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleForm}>
      <h3>What do you need for your 😍 trip?</h3>
      <div className="form">
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setQuantity(() => Number(e.target.value))
          }
          value={quantity}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <input
          required
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(() => e.target.value)
          }
          value={description}
        />
        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;
