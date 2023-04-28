import { movies } from "./movies.js";

//1.Create an array of movies containing the movies with a short title

const moviesWithShortTitle = movies.filter((movie) => movie.title.length < 5);
console.log("movies with a short title are ", moviesWithShortTitle);

//2.Create an array of movie titles with long movie titles

const moviesWithLongTitle = movies.filter((movie) => movie.title.length > 50);
console.log("long movie titles are ", moviesWithLongTitle);

//3. Count the number of movies made between 1980-1989 (including both the years)

const numberOfMovies = movies.filter(
	(movie) => movie.year >= 1980 && movie.year <= 1989
).length;
console.log("Number of movies between 1980-1989", numberOfMovies);

//4. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const movieTag = movies.map((movie) => {
	if (movie.rating >= 7) movie.tag = "Good";
	else if (movie.rating >= 4 && movie.rating < 7) movie.tag = "Average";
	else if (movie.rating < 4) movie.tag = "Bad";
	return movie;
});
console.log("The movies tag based on ratings are ", movieTag);

//5.Using chaining, first filter the movies array to only contain the movies rated higher than 6.
//Now map the movies array to only the rating of the movies.

const moviesHigherRated = movies
	.filter((movie) => movie.rating > 6)
	.map((movie) => movie.rating);
console.log("Movies rated higher than 6 are ", moviesHigherRated);

//6.Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
// So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6.
// Can you make sure the search is case insensitive?

const moviesWithKeywords = movies
	.map((movie) => movie.title.toLowerCase())
	.filter(
		(title) =>
			title.includes("surfer") ||
			title.includes("alien") ||
			title.includes("benjamin")
	);
console.log("Movies with keywords are ", moviesWithKeywords);

