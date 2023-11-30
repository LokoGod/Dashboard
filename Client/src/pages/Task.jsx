import React, { useState, useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

const apiEndpoint = "http://localhost:5000/api/v1/";

const Task = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    category_id: "",
    state_id: "",
    summary: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${apiEndpoint}task`, formData);
      console.log("POST request successful:", response);
      window.location.reload();
    } catch (error) {
      console.error("POST request failed", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiEndpoint}task/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.task_id !== id));
      console.log("Task deleted successfully");
      toast.info("Event has been deleted");
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(`${apiEndpoint}categories/`);
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchState = async () => {
      const response = await axios.get(`${apiEndpoint}state/`);
      setStates(response.data);
    };
    fetchState();
  }, []);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios.get(`${apiEndpoint}task/`);
      const updatedTasks = response.data.map((task) => {
        const category = categories.find(
          (cat) => cat.category_id === task.category_id
        );
        return {
          ...task,
          category_name: category ? category.category_name : "",
        };
      });
      setTasks(updatedTasks);
    };
    fetchTask();
  }, [categories]);

  const getBadgeColorClass = (state_id) => {
    switch (state_id) {
      case 1:
        return "badge-accent";
      case 2:
        return "badge-secondary";
      case 3:
        return "badge-primary";
      default:
        return ""; // Default class if state_id doesn't match any case
    }
  };

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
          <div>
            <h1 className="text-center">Pending Tasks</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {tasks.map((task) => (
                <div className="card bg-neutral text-neutral-content">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{task.summary}</h2>
                    <p>{task.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Finish</button>
                      <button
                        className="btn btn-ghost"
                        onClick={() => handleDelete(task.task_id)}
                      >
                        Ignore
                      </button>
                    </div>
                    <div className="card-actions justify-end mt-2">
                      <div
                        className={`badge ${getBadgeColorClass(task.state_id)}`}
                      >
                        {task.category_name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add more cards as needed */}
            </div>

            <h1 className="text-center mt-5">Completed tasks</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {tasks.map((task) => (
                <div className="card bg-neutral text-neutral-content">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{task.summary}</h2>
                    <p>{task.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Finish</button>
                      <button
                        className="btn btn-ghost"
                        onClick={() => handleDelete(task.task_id)}
                      >
                        Ignore
                      </button>
                    </div>
                    <div className="card-actions justify-end mt-2">
                      <div
                        className={`badge ${getBadgeColorClass(task.state_id)}`}
                      >
                        {task.category_name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center">
                <div className="card w-full md:w-128 bg-neutral text-neutral-content">
                  <div className="card-body">
                    <h2 className="card-title">Add to List</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Category</span>
                        </label>
                        <select
                          className="select select-bordered w-full"
                          name="category_id"
                          value={formData.category_id}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled>
                            Select a Category
                          </option>
                          {categories.map((category) => (
                            <option
                              key={category.category_id}
                              value={category.category_id}
                            >
                              {category.category_name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Task Summary</span>
                          <span className="label-text-alt">
                            e.g. conquer the galaxy
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          name="summary"
                          value={formData.summary}
                          onChange={handleInputChange}
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
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">State of Task</span>
                      </label>
                      <select
                        className="select select-bordered w-full"
                        name="state_id"
                        value={formData.state_id}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled>
                          Select Task State
                        </option>
                        {states.map((state) => (
                          <option key={state.state_id} value={state.state_id}>
                            {state.state_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="btn btn-active btn-wide btn-primary"
                        onClick={() => toast.success("Task has been created")}
                      >
                        Submit
                      </button>
                    </div>
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
