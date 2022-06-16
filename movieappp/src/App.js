import React from "react";
import { useState } from "react";
import MovieList from "./Components/MovieList";
import Header from "./Components/Header";
import AddMovie from "./Components/AddMovie";
import Footer from "./Components/Footer";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Up",
      posterUrl: "../Assets/up.jpeg",
      description:
        "Carl Fredricksen, a 78-year-old balloon salesman, tying thousands of balloons to his house, he flies away to the South American wilderness. His worst nightmare comes true as little Russell is a stowaway on the house.",
      rating: 5,
    },
    {
      id: 2,
      title: "Encanto",
      posterUrl: "../Assets/encanto.jpeg",
      description:
        "The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. Encanto has blessed every child in the family with a unique gift except Mirabel. ",
      rating: 4.5,
    },
    {
      id: 3,
      title: "Project Power",
      posterUrl: "../Assets/power.jpeg",
      description:
        "When a pill that gives its users unpredictable superpowers for five minutes hits the streets of New Orleans, a teenage dealer and a local cop must team with an ex-soldier to take down the group responsible for its creation.",
      rating: 3.5,
    },

    {
      id: 4,
      title: "Bohemian Rhapsody",
      posterUrl: "../Assets/bohemian.jpeg",
      description:
        "With his impeccable vocal abilities, Freddie Mercury and his rock band, Queen, achieve superstardom. However, amidst his skyrocketing success, he grapples with his ego, sexuality and a fatal illness.",
      rating: 4,
    },
    {
      id: 5,
      title: "Avengers : Infinity Wars",
      posterUrl: "../Assets/infinitywars.jpeg",
      description:
        "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality.",
      rating: 4.8,
    },
    {
      id: 6,
      title: "The Incredibles 2",
      posterUrl: "../Assets/theincredibles.jpeg",
      description:
        "Everyone's favorite family of superheroes is back in Incredibles 2 - but this time Helen is in the spotlight, leaving Bob at home with Violet and Dash to navigate the day-to-day heroics of normal life.",
      rating: 4.5,
    },
  ]);

  const [addMovie, setAddMovie] = useState(false);

  const handleChange = () => {
    setAddMovie(!addMovie);
  };

  const handleFilter = (e) => {
    setMovies(
      movies.filter(
        (movie) => movie.rating >= e || movie.title.match(new RegExp(e, "i"))
      )
    );
  };

  const handleAdd = (e) => {
    setMovies([...movies, e]);
  };

  return (
    <div>
      <Header handleChange={handleChange} handleFilter={handleFilter} />
      {addMovie ? <AddMovie handleAdd={handleAdd} /> : null}
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
