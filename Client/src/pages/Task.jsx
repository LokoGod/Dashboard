import React, { useState, useEffect } from "react";
import axios from "axios";

const Task = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [categories, setCategories] = useState([]);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/v1/categories/"
      );
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen">
      <main className="w-full overflow-x-hidden overflow-y-auto bg-base-300 p-5">
        <div className="flex justify-center items-center mb-5">
          <div role="tablist" className="tabs tabs-boxed">
            <a
              role="tab"
              className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              View List
            </a>
            <a
              role="tab"
              className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              Add to List
            </a>
          </div>
        </div>

        {activeTab === 1 && (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="card bg-neutral text-neutral-content">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Dashboard project</h2>
                <p>Connect with the API to finish what you started.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Finish</button>
                  <button className="btn btn-ghost">Ignore</button>
                </div>
                <div className="card-actions justify-end mt-2">
                  <div className="badge badge-accent">Personal</div>
                </div>
              </div>
            </div>

            {/* Add more cards as needed */}
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <form>
              <div className="flex justify-center">
                <div className="card w-full md:w-128 bg-neutral text-neutral-content">
                  <div className="card-body">
                    <h2 className="card-title">Add to List</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Category</span>
                        </label>
                        <select className="select select-bordered w-full">
                          <option value="" disabled selected>
                            Select a Category
                          </option>
                          {categories.map((category) => (
                            <option key={category.category_id}>
                              {category.category_name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Task Summary</span>
                          <span className="label-text-alt">
                            e.g., conquer the galaxy
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Task Description</span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered w-full"
                        placeholder="Describe the task"
                      ></textarea>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">State of Task</span>
                      </label>
                      <select className="select select-bordered w-full">
                        <option disabled selected>
                          Select Task State
                        </option>
                        <option>Chill</option>
                        <option>Urgent</option>
                        <option>Lightyears</option>
                      </select>
                    </div>

                    {/* Additional content and actions for Add to List */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Task;
