import minesweeperIMG from "../media/minesweeper.jpg";
import Foscars from "../media/oscar-picture.jpg";
import pageRank from "../media/pageRank.png";

export const projects = [
  {
    title: "Foscars",
    description:
      "This C++ application that uses a movie's popularity rating to give movie recommendations to users.",
    image: Foscars,
    tags: ["C++", "Kaggle"],
    source: "",
    liveVersion: "",
    id: 0,
  },
  {
    title: "Minesweeper",
    description:
      "I built a replica of the classic game Minesweeper! This version includes a resizeable gameboard and a toggle to display hidden mines.",
    image: minesweeperIMG,
    tags: ["C++", "SFML"],
    source: "https://github.com/Dariont25/Minesweeper",
    liveVersion: "",
    id: 1,
  },
  {
    title: "Page Rank Algorithm",
    description:
      "A simple implementation of the PageRank Algorithm used by Google Search to rank web pages in their search engine results to order or rank different web pages on the internet.",
    image: pageRank,
    tags: ["C++"],
    source: "",
    liveVersion: "",
    id: 2,
  },
  {
    title: "Portfolio Website",
    description:
      "Portfolio website using React and the MaterialUI library",
    image: pageRank,
    tags: ["React", "MaterialUI", "JavaScript", "Netlify"],
    source: "",
    liveVersion: "",
    id: 3,
  },
];
