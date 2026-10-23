import { Link } from "react-router-dom";

function EditLanguage() {
  return (
    <>
      <main>
        <h2>Edit Language</h2>
        <hr />
        <htmlform>
          <div classNameName="htmlformitem">
            <label htmlhtmlFor="langcode">Language Code:</label>
            <input
              type="text"
              id="langcode"
              name="langcode"
              placeholder="Language Code"
              required
            />
          </div>
          <div classNameName="htmlformitem">
            <label htmlhtmlFor="langname">Language Name:</label>
            <input
              type="text"
              id="langname"
              name="ISDNCode"
              placeholder="Language Name"
              required
            />
          </div>
          <div classNameName="htmlformitem">
            <label htmlhtmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              name="ISDNCode"
              placeholder="Active/Inactive"
              required
            />
          </div>
          <div classNameName="htmlformbutton">
            <button>
              <Link to="/language">Back</Link>
            </button>
            <button type="submit">Update</button>
          </div>
        </htmlform>
      </main>
    </>
  );
}

export default EditLanguage;
