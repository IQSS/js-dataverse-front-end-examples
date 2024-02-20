import './App.css'
import { ApiConfig } from '@iqss/dataverse-client-javascript/dist/core'
import {DataverseApiAuthMechanism} from "@iqss/dataverse-client-javascript/dist/core/infra/repositories/ApiConfig";
import {DatasetTable} from "./datasets/dataset-table/DatasetTable.tsx";
ApiConfig.init('http://localhost:8000/api/v1', DataverseApiAuthMechanism.API_KEY,'<API TOKEN>' )



function App() {
  return (
     <DatasetTable />
  )
}

export default App
