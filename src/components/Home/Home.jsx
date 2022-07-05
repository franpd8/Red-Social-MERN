import AddPost from "./AddPost/AddPost";
import Posts from "./Posts/Posts";

const Home = () => {
  return (
    <div className ="home">
      <AddPost/>
      <h1>Home</h1>
      <h2>Here will display all Posts</h2>
      <Posts />
      <AddPost/>
    </div>
  );
};

export default Home;
