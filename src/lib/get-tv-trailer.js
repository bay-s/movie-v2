export async function getLatestTvTrailer(movieId) {
 
    try {
        const posters = await fetch(`https://api.themoviedb.org/3/tv/${movieId}?api_key=0ccbee0a69447c2b1bd0090bf76b0358`);

        const response = await fetch(`https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=0ccbee0a69447c2b1bd0090bf76b0358`);

        const videos = await response.json();
        const images = await posters.json()
 
      const trailers = videos?.results.filter(video => video.type === 'Trailer');
      const latestTrailer = trailers.length > 0 ? trailers[0] : null;
 
      if (latestTrailer) {
        const streamingUrl = `https://www.youtube.com/embed/${latestTrailer.key}`;
        // console.log('Latest Trailer Streaming URL:', streamingUrl);
        return {
          streamingUrl,
          images
        }
      } else {
        console.log('No trailers found.');
        return 'No trailers found.'
      }
    } catch (error) {
      console.error('Error retrieving the latest trailer:', error.message);
    }
  }
  
 