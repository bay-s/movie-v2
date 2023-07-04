export async function getLatestTrailer(movieId) {
  const api_key = process.env.NEXT_PUBLIC_API_KEY
    try {
        const posters = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`);

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}`);

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
  
 