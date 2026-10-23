import { Link } from "react-router-dom";
function Statelist() {
  return (
    <>
      <main>
        <h2>State List</h2>
        <button type="submit">
          <Link to="/addState">Add State</Link>
        </button>
        <hr />
        <section className="statelist">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>State Name</th>
                <th>Country Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>state name</td>
                <td>country name</td>
                <td>
                  <button>
                    <Link to="/editState">Edit</Link>
                  </button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default Statelist;
