import { Link } from "react-router-dom";

function EditLanguage() {
  return (
    <>
      <main>
        <h2>Edit Language</h2>
        <hr />
        <form>
          <div className="formitem">
            <label htmlFor="langcode">Language Code:</label>
            <input
              type="text"
              id="langcode"
              name="langcode"
              placeholder="Language Code"
              required
            />
          </div>
          <div className="formitem">
            <label htmlFor="langname">Language Name:</label>
            <input
              type="text"
              id="langname"
              name="ISDNCode"
              placeholder="Language Name"
              required
            />
          </div>
          <div className="formitem">
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              name="ISDNCode"
              placeholder="Active/Inactive"
              required
            />
          </div>
          <div className="formbutton">
            <button>
              <Link to="/language">Back</Link>
            </button>
            <button type="submit">Update</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default EditLanguage;
