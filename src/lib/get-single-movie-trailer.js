export async function getSingleMovieTrailer(movieId) {
  const api_key = process.env.NEXT_PUBLIC_API_KEY
    try {
       const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key }`);

        const videos = await response.json();
 
      const trailers = videos?.results.filter(video => video.type === 'Trailer');
      const latestTrailer = trailers.length > 0 ? trailers[0] : null;
      if (latestTrailer) {
        const streamingUrl = `https://www.youtube.com/embed/${latestTrailer.key}`;
        // console.log('Latest Trailer Streaming URL:', streamingUrl);
       return  {error:false,url:streamingUrl} 
      } else {
        console.log('No trailers found.');
        return {error:true,url:null}
      }
    } catch (error) {
      console.error('Error retrieving the latest trailer:', error.message);
    }
  }
  
 