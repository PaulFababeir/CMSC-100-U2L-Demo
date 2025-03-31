import Message from "./components/Message";
import MyList from "./components/MyList";

function App() {
  var games = ["Valorant", "LoL", "Genshin", "Minecraft"];
  var animes = ["Aot", "jjk", "frieren", "Naruto"];

  return(
    //<Message></Message>
    <>
      <MyList header = "Games" items={games}/>
      <MyList header = "Anime" items={animes}/>
    </>
  );
}

export default App;
