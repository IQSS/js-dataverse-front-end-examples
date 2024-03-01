import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Dataset as JSDataset,getDataset} from "@iqss/dataverse-client-javascript";

export const Dataset = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const persistentId = searchParams.get('persistentId')
    const [dataset, setDataset] = useState<JSDataset | undefined>(undefined);



    useEffect(() => {
        if (persistentId === null) {
            // Handle the case where persistentId is null
            console.error('persistentId is null');
            return;
        }
        //Make a request to the API to get the dataset details using the persistentId
    getDataset.execute(persistentId).then((dataset) => {
        setDataset(dataset);
    })

  }, [persistentId]);

  return (

    <section>
      <h1>Dataset</h1>
      <p>Persistent ID: {persistentId}</p>
        {dataset?.persistentId}
    </section>
  );
};
