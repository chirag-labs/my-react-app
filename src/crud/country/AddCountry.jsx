import { Link } from "react-router-dom";

function AddCountry() {
  return (
    <>
      <main>
        <h2>Add Country</h2>
        <hr />
        <htmlform>
          <div classNameName="htmlformitem">
            <label htmlhtmlFor="ctitle">Country Name:</label>
            <input
              type="text"
              id="ctitle"
              name="Country"
              placeholder="Country Name"
            />
          </div>
          <div classNameName="htmlformitem">
            <label htmlhtmlFor="code">ISDN Code:</label>
            <input
              type="number"
              id="code"
              name="ISDNCode"
              placeholder="ISDN Code"
            />
          </div>
          <div classNameName="htmlformbutton">
            <button>
              <Link to="/country">Back</Link>
            </button>
            <button type="submit">Save</button>
          </div>
        </htmlform>
      </main>
    </>
  );
}

export default AddCountry;
