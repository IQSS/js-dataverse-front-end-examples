import './App.css'
import { ApiConfig } from '@iqss/dataverse-client-javascript/dist/core'
import {DataverseApiAuthMechanism} from "@iqss/dataverse-client-javascript/dist/core/infra/repositories/ApiConfig";
import {getAllDatasetPreviews} from "@iqss/dataverse-client-javascript";
import {DatasetTable} from "./datasets/dataset-table/DatasetTable.tsx";
//ApiConfig.init('http://localhost:8000/api/v1', DataverseApiAuthMechanism.API_KEY, 'b6517bb1-99f3-48c6-b71d-eb7efe284f2b')



function App() {
  //const [count, setCount] = useState(0)

    getAllDatasetPreviews.execute().then((datasetPreviewSubset) => {
        console.log('Dataset List:', JSON.stringify(datasetPreviewSubset));
    });
  return (
    <>
     <DatasetTable />
    </>
  )
}

export default App
