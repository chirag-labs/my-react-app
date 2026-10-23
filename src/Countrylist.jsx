import { Link } from "react-router-dom";

function Countrylist() {
  return (
    <>
      <main>
        <h2>Country List</h2>
        <button type="submit">
          <Link to="/addCountry">Add country</Link>
        </button>
        <hr />
        <section>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Country Name</th>
                <th>ISDN Code</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.</td>
                <td>India</td>
                <td>+91</td>
                <td>
                  <button type="submit">
                    <Link to="/editCountry">Edit</Link>
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

export default Countrylist;
