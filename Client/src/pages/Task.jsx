import React from 'react'

const Task = () => {
  return (
    <div>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-base-300">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap -mx-4 justify-center">
            <div className="w-full md:w-2/3 lg:w-3/4 px-4">
              {/* Your main content goes here */}
              <div className="card max-w-screen-md mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Task