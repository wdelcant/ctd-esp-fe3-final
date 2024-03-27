import Map from './Map';

const DetailTable = ({ dentistSelected }) => {
  return (
    <table className="detailTable">
      <tbody>
        <tr>
          <td>Name:</td>
          <td>{dentistSelected.name}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>
            <a href={`mailto:${dentistSelected.email}`}>
              {dentistSelected.email}
            </a>
          </td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td>
            <a href={`tel:${dentistSelected.phone}`}>{dentistSelected.phone}</a>
          </td>
        </tr>
        <tr>
          <td>Website:</td>
          <td>
            <a
              href={dentistSelected.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dentistSelected.website}
            </a>
          </td>
        </tr>
        <tr>
          <td>Location:</td>
          <td>
            <Map geo={dentistSelected.address?.geo} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailTable;
