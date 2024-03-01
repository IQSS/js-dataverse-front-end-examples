import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Dataset = () => {
  const { persistentId } = useParams<{ persistentId: string }>();

  useEffect(() => {
    //Make a request to the API to get the dataset details using the persistentId
    console.log(persistentId);
  }, [persistentId]);

  return (
    <section>
      <h1>Dataset</h1>
      <p>Persistent ID: {persistentId}</p>
    </section>
  );
};
