import { ApiConfig } from '@iqss/dataverse-client-javascript/dist/core'
import { DataverseApiAuthMechanism } from '@iqss/dataverse-client-javascript/dist/core/infra/repositories/ApiConfig'
import Router from './router'

ApiConfig.init(
  'http://localhost:8000/api/v1',
  DataverseApiAuthMechanism.API_KEY,
  import.meta.env.DATAVERSE_API_TOKEN
)

function App() {
  return <Router />
}

export default App
