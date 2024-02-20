import './App.css'
import { ApiConfig } from '@iqss/dataverse-client-javascript/dist/core'
import {DataverseApiAuthMechanism} from "@iqss/dataverse-client-javascript/dist/core/infra/repositories/ApiConfig";
import {getAllDatasetPreviews} from "@iqss/dataverse-client-javascript";
import {DatasetTable} from "./datasets/dataset-table/DatasetTable.tsx";
ApiConfig.init('http://localhost:8000/api/v1', DataverseApiAuthMechanism.API_KEY,'your api key' )



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
