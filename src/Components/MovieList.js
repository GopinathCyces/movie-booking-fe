import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const navigate = useNavigate()
  const datas =[
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpcDVL33kkIhOUaUHnREuY1yP9rkh5Q84Nw&usqp=CAU",
      name: "Leo",
      language: "Tamil",
      price: 180,
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/en/4/40/Mark_Antony_2023_poster.jpg",
      name: "Mark Antony ",
      language: "Tamil",
      price: 180,
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMTJjN2NhY2EtYzZkOC00NDQ0LWFhMzEtNWZhYTFhNzNhNjllXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
      name: "Good Night",
      language: "Tamil",
      price: 180,
    },
    {
      url: "https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/joe-20231122123202-22358.jpg",
      name: "Joe",
      language: "Tamil",
      price: 180,
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BM2JhYWIyZGYtMmM3Yy00YTIwLTg1OWItM2FlNWQ2ZGQxZDllXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg",
      name: "Chandramukhi 2",
      language: "Tamil",
      price: 180,
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMzQ5MzBjZDQtZTZjMC00OTMwLThhZmUtN2I1MmEwMDk2OTdhXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg",
      name: "Por Thozil",
      language: "Tamil",
      price: 180,
    },
  ] 
  function goToTimings(name){
    localStorage.setItem("movieName",name);
    navigate("/timings")
  }
  return (
    <div>
      <div className="moviesHead">
        <div className="headLeft">
          <h5>Tagline</h5>
          <h1 style={{fontWeight:"700"}}>Movies</h1>
          <p style={{fontWeight:"500"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="headRight">
          <Button variant="outline-dark">View all</Button>
        </div>
      </div>

      <div className="moviesBox">
        {datas.map((data, idx) => {
          return (
            <Card key={idx} style={{ width: "17rem",cursor:"pointer" }} onClick={()=>goToTimings(data.name)}>
              <Card.Img style={{height: "27rem"}} variant="top" src={data.url} />
              <Card.Body>
                <Card.Title style={{fontWeight:"700"}}  >{data.name}</Card.Title>
                <Card.Text style={{fontWeight:"500"}}>{data.language}</Card.Text>
                <Card.Title style={{fontWeight:"500"}}>Rs. {data.price}/ per seat</Card.Title> 
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
