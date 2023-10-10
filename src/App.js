import Movie from "./Component/Movie";

function App(movies) {
  return (
    <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie {...item}/>

            )
          })
        }
      </div>
  );
}

export default App;
