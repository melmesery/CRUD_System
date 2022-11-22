import { Button, ButtonGroup } from "react-bootstrap";

const PostListItem = ({ data, deleteRecord }) => {
  const deleteHandler = (item) => {
    if (window.confirm(`Do you really want to delete record: ${item.title}?`)) {
      deleteRecord(item.id);
    }
  };
  const records = data.map((el, idx) => (
    <tr key={el.id}>
      <td className="text-center">{++idx}</td>
      <td>
        <p className="m-0 text-capitalize">{el.title}</p>
        <p className="m-0 job text-capitalize">{el.description}</p>
      </td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success" className="rounded-0 text-white">
            Edit
          </Button>
          <Button
            variant="danger"
            className="rounded-0 text-white"
            onClick={() => deleteHandler(el)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{records}</>;
};

export default PostListItem;
