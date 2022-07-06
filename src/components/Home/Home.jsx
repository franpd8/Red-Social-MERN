import AddPost from "./AddPost/AddPost";
import Posts from "./Posts/Posts";
import SearchPost from "./Posts/SearchPost/SearchPost";

const Home = () => {
  return (
    <div className ="home">
      <AddPost/>
      <h1>Home</h1>
      <SearchPost/>
      <h2>Here will display all Posts</h2>
      <Posts />
    </div>
  );
};

export default Home;
