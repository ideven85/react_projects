import MovieCard from "./MovieCard";
import Student from "./Student";
//import Card1 from "./Card";
import MovieList from "./MovieList";



export default function App(){
  return(
    <>

      <MovieList  />

    </>

  )
}
Student.defaultProps = {
  name:"Student",
  age: "NAN"
}