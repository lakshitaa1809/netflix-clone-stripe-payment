const API_Key = "93fd144bc83d77f906d907527309d20c";
const Requests = {
  originals: `discover/tv?api_key=${API_Key}&with_networks=213`,
  action: `discover/movie?api_key=${API_Key}&with_genres=28`,
  romance: `discover/movie?api_key=${API_Key}&with_genres=10749`,
  horror: `discover/movie?api_key=${API_Key}&with_genres=27`,
  science_fiction: `discover/movie?api_key=${API_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate`,
  animation: `discover/movie?api_key=${API_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`,
  comedy: `discover/movie?api_key=${API_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
};
export default Requests;
