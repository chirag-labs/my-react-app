import { Link } from "react-router-dom";

function AddCountry() {
  return (
    <>
      <main>
        <h2>Add Country</h2>
        <hr />
        <form>
          <div className="formitem">
            <label htmlFor="ctitle">Country Name:</label>
            <input
              type="text"
              id="ctitle"
              name="Country"
              placeholder="Country Name"
            />
          </div>
          <div className="formitem">
            <label htmlFor="code">ISDN Code:</label>
            <input
              type="number"
              id="code"
              name="ISDNCode"
              placeholder="ISDN Code"
            />
          </div>
          <div className="formbutton">
            <button>
              <Link to="/country">Back</Link>
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default AddCountry;
