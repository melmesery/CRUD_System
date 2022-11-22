import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { insertPosts } from "../State/PostSlice";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const formHandler = (e) => {
    const id = Math.floor(Math.random() * 500);
    dispatch(insertPosts({ id, title, description })).then(() => {
      navigate("/");
    });
  };

  return (
    <Form onSubmit={formHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-0"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-0"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="rounded-0">
        Submit
      </Button>
    </Form>
  );
};

export default AddPost;
