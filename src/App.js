import Movie from "./Component/Movie";
import * as MS from "./Component/MovieStyle";



function App(movies) {
  return (
    <MS.appContainer>
        {
          movies.results.map((item) => {
            return (
              <Movie {...item}/>

            )
          })
        }
      </MS.appContainer>
  );
}

export default App;
