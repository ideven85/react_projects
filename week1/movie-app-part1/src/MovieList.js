import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies : [
                {
                    title: 'The Avengers',
                    plot:
                        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    poster:
                        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                    rating: '8.0',
                    price: 99,
                    star: 0,
                    fav: false,
                    isInCart: false
                },
                {
                    title: 'The Dark Knight',
                    plot:
                        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                    poster:
                        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
                    rating: '9.0',
                    price: 199,
                    star: 0,
                    fav: false,
                    isInCart: false
                },
                {
                    title: 'Iron Man',
                    plot:
                        'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
                    poster:
                        'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
                    rating: '7.9',
                    price: 139,
                    star: 0,
                    fav: false,
                    isInCart: false
                }]
        }
    }


    addStars = (movie) => {
        const {movies}=this.state;

        const mid = movies.indexOf(movie);

        //Condition to stop the stars from increasing beyond 5
        if(movies[mid].star >= 5){
            return
        }
        movies[mid].star+=0.5
        //Form 1 of setState() - increasing the star count by 0.5
        this.setState({
            movies
        })

        //Form 2 of setState() - increasing the star count by 0.5

        /* this.setState((prevState)) = ()  => {
             console.log(prevState);
         return {

         star: prevState + 0.5
         }
         });*/
    }

    // event handler to decrease the star by 0.5
    decStars = (movie) => {
        const {movies}=this.state;
        const mid = movies.indexOf(movie);
        //Condition to stop the stars from decreasing beyond 0
        if(movies[mid].star <= 0){
            return
        }
        movies[mid].star-=0.5;
        //form1 of setState
        this.setState({
            movies
        })
    }
    /* handleClick = () => {
         if(this.state.favorite){
             this.setState({favorite:false})
         }else{
             this.setState({favorite: true})
         }
     }*/
    toggleFav = (movie) => {
        const {movies}=this.state;
        const mid = movies.indexOf(movie);
        movies[mid].fav= !movies[mid].fav
        this.setState({
           movies
        })
    }
    toggleCart = (movie) => {
        const {movies}=this.state;
        const mid = movies.indexOf(movie);
        movies[mid].isInCart=!movies[mid].isInCart
        this.setState({
            movies
        })
    }
    render() {

        const {movies} = this.state;
        return (
            <div className="main">
                {movies.map((movie,index) => (
                    <MovieCard movies={movie} key={index} addStars={this.addStars} decStars={this.decStars}
                               toggleFav={this.toggleFav} toggleCart={this.toggleCart}/>
                ))}

            </div>
        );
    }
}
export default MovieList;