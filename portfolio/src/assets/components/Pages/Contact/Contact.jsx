import React, { useEffect, useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [title, setTitle] = useState("Crud");
  const [singleData, getSingleData] = useState({ firstName: "", lastName: "", id: "" });
  let [dataContainer, setDataContainer] = useState([]);
  let [counter, setCounter] = useState(1);

  const changeHandler = (e) => {
    const {name, value} = e.target;
    getSingleData((prev)=>({
        ...prev,
        [name]: value
    }));
  };
 
  const clickHandler = (e) => {
    e.preventDefault();
    if (singleData.firstName != "" && singleData.lastName != "") {
      setCounter(counter + 1);
      let valFirst = singleData.firstName;
      let valLast = singleData.lastName; 

      setDataContainer((prev) => {
        return [...prev, { firstName: valFirst,lastName: valLast, id: counter }];
      });
      
      getSingleData({ firstName: "", lastName: "", id: counter });
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
                    <span>{item.firstName} {item.lastName}</span>
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
