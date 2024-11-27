import { useFetchPhotos } from "./reactQueryCustomHooks";

function Gallery() {
  const { data, isError, error, isLoading } = useFetchPhotos();
  const results = data?.data?.results;

  if (results?.length < 1) {
    return (
      <section className="image-container">
        <h4>No results Found....</h4>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading....</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an ERROR....</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((image) => {
        const url = image?.urls?.regular;
        return (
          <img
            src={url}
            key={image.id}
            alt={image.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
}

export default Gallery;
