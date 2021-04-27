import React, { useState, useEffect, MouseEventHandler } from "react";
import CustomForm from "../../components/CustomForm";
import { Container } from "react-bootstrap";
import CustomCard from "../../components/CustomCard";
import "./index.css";
import { createStructuredSelector } from "reselect";
import { makeSelectBooks } from "../../selectors/bookSelector";
import { useDispatch, useSelector } from "react-redux";
import { bookData } from "../../types";
import { useHistory } from "react-router-dom";
import { addBook, searchBook } from "../../services/bookService";
import { addBooks } from "../../actions/bookActions";
const booksState = createStructuredSelector({
  books: makeSelectBooks(),
});
const Home = ({ handleRerunder }: HomeProps) => {
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [description, setDescription] = useState("");

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
      await addBook({ title: title, description: description });
      setDescription("");
      setTitle("");
      handleRerunder();
    }
  };
  const history = useHistory();
  const { books } = useSelector(booksState);
  const myClick = (e: number) => {
    history.push(`details/${e}`);
  };
  const dispatch = useDispatch();

  const handleSearch = async (e: any) => {
    if (e.target.value) {
      setSearch(e.target.value);
      const data = await searchBook(e.target.value);
      data.reverse();
      dispatch(addBooks(data));
    } else {
      handleRerunder();
    }
  };
  return (
    <Container>
      <div className="App">
        <CustomForm
          title={title}
          description={description}
          handleChange={handleChange}
          handleClick={handleClick}
          handleSearch={handleSearch}
          btnLabel="Add"
        />
        <div className="border_Box">
          {books.map((item: bookData) => (
            <CustomCard
              showBtn={true}
              title={item.title}
              description={item.description}
              handleClick={(e) => {
                myClick(item.id);
              }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
