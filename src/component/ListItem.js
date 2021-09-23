import "./Home.css";
const ListItem = (props) => {
  const { nama, umur, jenis_kelamin } = props.data;
  const { hapusPengunjung, editAnggota } = props;

  return (
    <tbody>
      <tr>
        <td>{nama}</td>
        <td>{umur}</td>
        <td>{jenis_kelamin}</td>
        <td >
          <button onClick={editAnggota}>Edit</button>
          <button c onClick={hapusPengunjung}>Hapus</button>
        </td>
      </tr>
    </tbody>
  );
};

export default ListItem;
