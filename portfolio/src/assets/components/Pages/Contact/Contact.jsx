import React, { useEffect, useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [title, setTitle] = useState("CRUD");
  const [singleData, getSingleData] = useState({
    firstName: "",
    lastName: "",
    id: "",
  });
  const [editValue, getEditValue] = useState({
    firstName: "",
    lastName: "",
    id: "",
  });
  let [dataContainer, setDataContainer] = useState([]);
  let [counter, setCounter] = useState(1);
  const [editingId, setEditingId] = useState(null);
  
  const changeHandler = (e) => {
    const { name, value } = e.target;
    getSingleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
//  Crud - CREATE
  const clickHandler = (e) => {
    e.preventDefault();
    if (singleData.firstName != "" && singleData.lastName != "") {
      setCounter(counter + 1);
      let valFirst = singleData.firstName;
      let valLast = singleData.lastName;

      setDataContainer((prev) => {
        return [
          ...prev,
          { firstName: valFirst, lastName: valLast, id: counter },
        ];
      });

      getSingleData({ firstName: "", lastName: "", id: counter });
    }
  };

//   Crud - DELETE
  const removeItem = (key) => {
    setDataContainer((prev) => {
      const updatedData = prev.filter((item) => item.id !== key);
      return updatedData;
    });
  };

//   Crud - UPDATE
  const editHandler = (id) => {
    setEditingId(id);
  };
  const editChangeHandler = (e) => {
    const { name, value } = e.target;
    getEditValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const updateHandler = (e, id) => {
    e.preventDefault();
    if (editValue.firstName != "" && editValue.lastName != "") {
        setDataContainer((prev)=>{
            return prev.filter((item) => item.id !== editingId)
        })
        setDataContainer((prev) => [
          ...prev,
          { firstName: editValue.firstName, lastName: editValue.lastName, id: editingId },
        ]);

        setEditingId(null)
    }    
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
              placeholder="First name"
              className="mb-3 w-100"
              name="firstName"
              value={singleData.firstName}
            />
            <input
              onChange={changeHandler}
              type="text"
              placeholder="Last name"
              className="mb-3 w-100"
              name="lastName"
              value={singleData.lastName}
            />
            <input
              type="submit"
              className="w-25 mx-auto btn-success btn"
              value="Add"
            />
          </form>
          {dataContainer.length ? (
            <div className="output w-50 mx-auto">
              <ul className="mb-0 ps-0 d-flex flex-column">
                {dataContainer.map((item, index) => (
                  <li
                    key={index}
                    data-key={item.id}
                    className="d-flex w-100 flex-column justify-content-between mb-0 align-items-center p-3"
                  >
                    <div className="result w-100 d-flex justify-content-between align-items-center">
                      <span>
                        {item.firstName} {item.lastName}
                      </span>
                      <div className="cta-wrapper">
                        <button
                          id="edit"
                          className="edit btn btn-info"
                          onClick={() => editHandler(item.id)}
                        >
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
                    </div>
                    {editingId === item.id ? (
                      <div className="edit-wrapper w-100 d-flex justify-content-between mt-4">
                        <form
                          onSubmit={(e) => updateHandler(e, item.id)}
                          className="w-100 d-flex  edit-form"
                        >
                          <input
                            onChange={editChangeHandler}
                            type="text"
                            placeholder="First name"
                            className="mb-0 w-100"
                            name="firstName"
                          />
                          <input
                            onChange={editChangeHandler}
                            type="text"
                            placeholder="Last name"
                            className="mb-0 w-100"
                            name="lastName"
                          />
                          <input
                            type="submit"
                            className="w-25 mx-auto btn-success btn"
                            value="Update"
                          />
                        </form>
                      </div>
                    ) : (
                      ""
                    )}
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
