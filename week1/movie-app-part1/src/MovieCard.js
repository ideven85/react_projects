import React from "react";

class MovieCard extends React.Component{
    constructor(props){
        super(props);
        //Creating the state object

        }


        //Binding the event handler in the constructor if event handler is not an arrow function
       // this.addStars = this.addStars.bind(this)


    //Creating an arrow function for addStars which automatically binds to the current instance

    render() {
        //Destructing the state object in render function
        const {title, plot, poster, price, rating, star, fav, isInCart} = this.props.movies;

        return (
            <div className="main">

                {/**Movie Card */}
                <div className="movie-card">

                    {/**Left section of Movie Card */}
                    <div className="left">
                        <img alt="poster" src={poster}/>
                    </div>

                    {/**Right section Movie Card */}
                    <div className="right">

                        {/**Title, plot, price of the movie */}
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        {/**Footer starts here with ratings, stars and buttons */}
                        <div className="footer">
                            <div className="rating">{rating}</div>

                            {/**Star image with increase and decrease buttons and star count */}
                            <div className="star-dis">
                                <img className="str-btn"
                                     alt="Decrease"
                                     src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                     height="20"
                                     width="20"
                                     onClick={() => this.props.decStars(this.props.movies)}
                                />
                                <img className="stars"
                                     alt="stars"
                                     src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                                />
                                <img className="str-btn"
                                     alt="increase"
                                     src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                    // No binding required as addStars() is an arrow function
                                     height="20"
                                     width="20"
                                     onClick={() => this.props.addStars(this.props.movies)}
                                />
                                <span className="starCount">{star}</span>
                            </div>

                            {/**Favourite and add to cart buttons */}

                            <button className={fav ? "unfavourite-btn" : "favourite-btn"}
                                    onClick={() => this.props.toggleFav(this.props.movies)}>{fav ? "UnFavorite" : "Favorite"}</button>
                            :

                            <button className={isInCart ? "remove-cart-btn" : "cart-btn"}
                                    onClick={() => this.props.toggleCart(this.props.movies)}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>

                        </div>
                    </div>

                </div>
            </div>
        );

    }
}

export default MovieCard;