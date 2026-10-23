import { Link } from "react-router-dom";

function AddState() {
  return (
    <>
      <main>
        <h2>Add State</h2>
        <hr />
        <form>
          <div className="formitem">
            <label htmlFor="country">Country Name:</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country Name"
              required
            />
          </div>
          <div className="formitem">
            <label htmlFor="state">State Name:</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State Name"
              required
            />
          </div>
          <div className="formbutton">
            <button>
              <Link to="/state">Back</Link>
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default AddState;
