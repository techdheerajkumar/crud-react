import React, { useEffect, useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [title, setTitle] = useState("Crud");
  const [singleData, getSingleData] = useState({ userName: "" });
  let [dataContainer, setDataContainer] = useState([]);
  let [counter, setCounter] = useState(1);
  const changeHandler = (e) => {
    getSingleData({
      userName: e.target.value,
      id: "",
    });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (singleData.userName != "") {
      setCounter(counter + 1);
      let val = singleData.userName;
      setDataContainer((prev) => {
        return [...prev, { userName: val, id: counter }];
      });
      getSingleData({ userName: "", id: counter });
    }
  };

  const removeItem = (key) => {
    setDataContainer((prev) => {
      const updatedData = prev.filter((item) => item.id !== key);
      return updatedData;
    });
  };

  return (
    <>
      <section className="contact-form">
        <div className="container">
          <h1 className="text-center mb-5">{title}</h1>
          <form
            onSubmit={clickHandler}
            className="w-25 d-flex flex-column mx-auto bg-base-black text-center crud-form"
          >
            <input
              onChange={changeHandler}
              type="text"
              placeholder="Enter your name"
              className="mb-3 w-100"
              value={singleData.userName}
            />
            <input type="submit" className="w-25 mx-auto" value="Add" />
          </form>
          {dataContainer.length ? (
            <div className="output w-50 mx-auto">
              <ul className="mb-0 ps-0">
                {dataContainer.map((item, index) => (
                  <li
                    key={index}
                    data-key={item.id}
                    className="d-flex justify-content-between mb-0 align-items-center p-3"
                  >
                    <span>{item.userName}</span>
                    <div className="cta-wrapper">
                      <button id="edit" className="edit btn btn-info">
                        Edit
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        id="delete"
                        className="delete btn btn-danger ms-3"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-center mt-5">No data present</p>
          )}
        </div>
      </section>
    </>
  );
};
export default Contact;
