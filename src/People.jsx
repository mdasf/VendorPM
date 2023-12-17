import { data } from "./assets/data";
function People() {
  console.log(data);
  return (
    data && (
      <table className="people">
        <tbody>
          {data.map((person, index) => {
            return (
              <tr key={index} className="row">
                <td>{person.name}</td>
                <td>{person.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
}

export default People;
