import React from "react";

const Task = () => {
  return (
    <div>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-base-300">
        <div role="tablist" className="tabs tabs-bordered max-w-screen-md mx-auto">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Add to list"
          />
          <div role="tabpanel" className="tab-content p-10">
            create todo
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="View list"
            checked
          />
          <div role="tabpanel" className="tab-content p-10">
          <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Task;
