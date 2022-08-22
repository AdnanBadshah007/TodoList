import React, { useState } from "react";

export const TodoList = () => {
  const [inputData, SetInputData] = useState("");
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(true);
  const [Id, setId] = useState("");

  const inputHandler = (e) => {
    const val = e.target.value;
    SetInputData(val);
  };

  const SubmitData = (e) => {
    e.preventDefault();
    if (!inputData) {
      alert("No Data Found");
    } else if (inputData && !flag) {
      setData(
        data.map((elem, index) => {
          if (index === Id) {
            return [inputData];
          }
          return elem;
        })
      );
      setFlag(true);

      SetInputData("");

      setId(null);

      alert("Data Edited Succefully...✍️");
    } else {
      setData([...data, inputData]);
      SetInputData("");
    }
  };

  const deleteData = (id) => {
    const filterData = data.filter((items, index) => {
      return index !== id;
    });

    setData(filterData);
  };

  const editData = (id) => {
    setId(id);
    const fiterEditData = data.filter((items, index) => {
      return index === id;
    });

    SetInputData(fiterEditData);
    setFlag(false);
  };

  // const dataEdited = () => {
  //   setData(
  //     data.map((items, index) => {
  //       if (index === Id) {
  //         // return [...items, inputData];
  //         console.log("clicked");
  //       }
  //       // return items;
  //     })
  //   );
  //   setFlag(true);
  // };

  return (
    <>
      <section className="vh-100  gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100  w-50 mx-auto">
            <div className="col col-xl-10">
              <div
                className="card night-fade-gradient color-block mb-3 mx-auto z-depth-1-half"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-5">
                  <h3 className="mb-3 text">Todo List</h3>

                  <form className="d-flex justify-content-center align-items-center">
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form3"
                        className="form-control form-control-lg"
                        onChange={inputHandler}
                        value={inputData}
                        autoComplete="off"
                      />
                    </div>

                    {/* <button type="submit" className="btn  btn-lg ms-2">
                      <i className="fa-solid fa-plus"></i>
                    </button> */}

                    {flag ? (
                      <button
                        variant="text"
                        type="submit"
                        className="button"
                        onClick={SubmitData}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    ) : (
                      <button
                        variant="text"
                        type="submit"
                        className="button"
                        onClick={SubmitData}
                      >
                        <i className="fa-solid fa-edit"></i>
                      </button>
                    )}
                  </form>
                  <label className="form-label mb-5 mx-4" htmlFor="form3">
                    What do you need to do today?
                  </label>

                  <ul className="list-group mb-0">
                    {data.map((items, index) => {
                      return (
                        <li
                          className="list-group-item d-flex justify-content-between align-items-center  mb-2"
                          key={index}
                        >
                          <div className="d-flex align-items-center">
                            {items}
                          </div>
                          <div>
                            <a
                              href="#!"
                              data-mdb-toggle="tooltip"
                              title="Remove item"
                            >
                              <i
                                className="fa-solid fa-edit mx-3"
                                onClick={() => {
                                  editData(index);
                                }}
                              ></i>
                            </a>
                            <a
                              href="#!"
                              data-mdb-toggle="tooltip"
                              title="Remove item"
                            >
                              <i
                                className="fa-solid fa-xmark"
                                onClick={() => {
                                  deleteData(index);
                                }}
                              ></i>
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
