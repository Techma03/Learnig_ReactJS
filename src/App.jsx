import { useState } from "react";
import Count from "./composants/Count";
import Navbar from "./composants/Navbar";
import Post from "./composants/Post";
import "./main.css";
import { Link } from "react-router-dom";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      titre: "Bill Joe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      like: false,
    },
    {
      id: 2,
      titre: "Bill Joe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      like: false,
    },
    {
      id: 3,
      titre: "Bill Joe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      like: false,
    },
    {
      id: 4,
      titre: "Bill Joe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      like: false,
    },
  ]);
  const liker = (data) => {
    const donneeCopier = [...posts];
    const index = posts.indexOf(data);
    donneeCopier[index] = { ...posts[index], liker: !posts[index].liker };
    setPosts(donneeCopier);
    console.log(donneeCopier);
  };
  const effacerPost = (id) => {
    const nouvelledonnee = posts.filter((p) => p.id != id);
    setPosts(nouvelledonnee);
  };
  const nbrLiker = posts.filter((p) => p.liker);
  return (
    <div className="App">
      <Navbar nbrLiker={nbrLiker.length} />
      {posts.map((p) => (
        <Post data={p} key={p.id} liker={liker} supression={effacerPost} />
      ))}
      <Link to="/apropos">A propos </Link>
      <Link to="/blog">Notre blog </Link>
    </div>
  );
}
