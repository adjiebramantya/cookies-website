import { useState } from "react";
import Button from "../../ui/Button";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./userSlice";
import { stringToDate } from "../../helpers/helper";

function UserCreate({ isOpenHandle }) {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user.name ? user.name : "");
  const [date, setDate] = useState(user.date ? stringToDate(user.date) : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !date) return;

    let formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    const dateFix = formattedDate;

    const update = {
      name,
      date: dateFix,
    };

    dispatch(updateUser(update));
    isOpenHandle(false);
  };

  return (
    <div className="text-center mt-10">
      <form onSubmit={handleSubmit}>
        <p className="mb-4 text-sm text-primary md:text-base w-[75%] mx-auto">
          {user.name === "" && user.date === ""
            ? "👋 Welcome! Please start by telling us your name and pick-up date :"
            : `Hi, ${user.name} 😊! Edit your name and pick-up date if you want to change :`}
        </p>

        <input
          type="text"
          placeholder="Your name (Nama)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input mb-8 w-72 md:w-80"
        />
        <div>
          <ReactDatePicker
            closeOnScroll={(e) => e.target === document}
            className="input w-72 md:w-80"
            placeholderText="Pick-up date (Waktu pengambilan)"
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        {name !== "" && date !== "" && (
          <div className="my-5">
            <Button type="primary-normal">Submit</Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default UserCreate;
