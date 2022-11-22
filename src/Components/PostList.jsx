import { memo } from "react";
import { Table } from "react-bootstrap";
import PostListItem from "./PostListItem";

const PostList = ({ data, deleteRecord }) => {
  return (
    <Table striped hover bgcolor="#fff">
      <thead>
        <tr>
          <th className="text-center">#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }} className="text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="align-items-baseline">
        <PostListItem data={data} deleteRecord={deleteRecord} />
      </tbody>
    </Table>
  );
};

export default memo(PostList);
