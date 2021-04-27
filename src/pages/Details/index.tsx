import React, {
  useState,
  useEffect,
  MouseEventHandler,
  ChangeEventHandler,
} from "react";
import CustomForm from "../../components/CustomForm";
import { Container } from "react-bootstrap";
import CustomCard from "../../components/CustomCard";
import "./index.css";
import { useHistory, useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { makeSelectBooks } from "../../selectors/bookSelector";
import { useSelector } from "react-redux";
import { bookData } from "../../types";
import { Button, Card } from "react-bootstrap";
import "./index.css";
import { getBook, removeBook, updateBook } from "../../services/bookService";
const Details = ({ handleRerunder }: DetailsProps) => {
  const [title, setTitle] = useState("");
  const [rerender, setRerender] = useState(false);

  const [description, setDescription] = useState("");
  const { id } = useParams<{ id: string }>();
  const currentID = id;
  const handleChange = (e: any) => {
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleClick = async (e: any) => {
    e.preventDefault();
    if (title && description) {
      await updateBook(currentID, { title: title, description: description });
      setDescription("");
      setTitle("");
      handleRerunder();
      setRerender(!rerender);
      setShow(false);
    }
  };

  const [show, setShow] = useState(false);
  const [currentBook, setCurrentBook] = useState<bookData>({
    title: "",
    description: "",
    id: 0,
    created_at: "",
    updated_at: "",
  });
  useEffect(() => {
    async function fetchMyAPI() {
      const data: bookData = await getBook(currentID);
      setCurrentBook(data);
    }

    fetchMyAPI();
  }, [rerender, setRerender]);
  const history = useHistory();

  const handleDelete = async () => {
    await removeBook(currentID);
    handleRerunder();
    history.push(`/`);
  };
  const handleUpdate = () => {
    setShow(true);
    setTitle(currentBook.title);
    setDescription(currentBook.description);
  };
  return (
    <Container>
      <div className="App">
        {show && (
          <CustomForm
            btnLabel="Update"
            title={title}
            description={description}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        )}
        <CustomCard
          showBtn={false}
          title={currentBook.title}
          description={currentBook.description}
          handleClick={() => {}}
        />
        <div className="footer_btn">
          <Button
            variant="info"
            onClick={() => {
              history.push("/");
            }}
          >
            back to Home
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            update
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Details;
