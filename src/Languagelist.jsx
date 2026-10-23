import { Link } from "react-router-dom";

function Languagelist() {
  return (
    <>
      <main>
        <h2>Language List</h2>
        <button type="submit">
          <Link to="/addLanguage">Add Language</Link>
        </button>
        <hr />
        <section>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Language Code</th>
                <th>Language Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>en</td>
                <td>English</td>
                <td>Active/Inactive</td>
                <td>
                  <button type="submit">
                    <Link to="/editLanguage">Edit</Link>
                  </button>
                  <button type="submit">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default Languagelist;
