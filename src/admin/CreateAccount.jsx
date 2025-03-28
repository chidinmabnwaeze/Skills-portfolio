import React from "react";

const CreateAccount = () => {
  return (
    <div>
      <h1>Welcome create a free account!</h1>
      <form action="" className="py-4">
        <div className="field1">
          <div>
            <label htmlFor="position" className="font-medium">
              Position
            </label>
          </div>
          <input
            type="text"
            name="position"
            id="position"
            style={{ padding: "1rem", width: "100%" }}
            placeholder="Enter your position"
          />
        </div>
        <div className="field1">
          <div>
            <label htmlFor="org" className="font-medium">
              Name of Organization
            </label>
          </div>
          <input
            type="text"
            name="org"
            id="org"
            style={{ padding: "1rem", width: "100%" }}
            placeholder="Enter organization name"
          />
        </div>
        <div className="field1">
          <div>
            <label htmlFor="year" className="font-medium">
              Duration
            </label>
          </div>
          <label htmlFor="from" className="mx-2">
            From
          </label>
          <input
            type="date"
            name="from"
            id="from"
            style={{ padding: "1rem" }}
          />
          <label htmlFor="to" className="mx-2">
            To
          </label>
          <input
            type="date"
            name="to"
            id="to"
            style={{ padding: "1rem", margin: "8px" }}
          />
        </div>

        {/* <div className="field1">
                <div>
                  <label htmlFor="course" className="font-medium">
                    Award
                  </label>
                </div>
                <input
                  type="text"
                  name="degree"
                  id="degree"
                  style={{ padding: "1rem", width: "100%" }}
                  placeholder="E.g bachelors"
                />
              </div> */}
        <div>
          <button className="rounded-lg bg-purple-700 text-white m-3 p-3 w-1/4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
