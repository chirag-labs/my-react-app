import { Link } from "react-router-dom";

function AddState() {
  return (
    <>
      <main>
        <h2>Add State</h2>
        <hr />
        <htmlform>
          <div classNameNameName="htmlformitem">
            <label htmlhtmlFor="country">Country Name:</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country Name"
              required
            />
          </div>
          <div classNameNameName="htmlformitem">
            <label htmlhtmlFor="state">State Name:</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State Name"
              required
            />
          </div>
          <div classNameNameName="htmlformbutton">
            <button>
              <Link to="/state">Back</Link>
            </button>
            <button type="submit">Save</button>
          </div>
        </htmlform>
      </main>
    </>
  );
}

export default AddState;
