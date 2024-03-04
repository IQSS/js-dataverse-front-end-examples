import { ApiConfig } from '@iqss/dataverse-client-javascript/dist/core'
import { DataverseApiAuthMechanism } from '@iqss/dataverse-client-javascript/dist/core/infra/repositories/ApiConfig'
import Router from './router'

// Initialize the API configuration
ApiConfig.init('http://localhost:8000/api/v1', DataverseApiAuthMechanism.API_KEY, '<API_KEY>')

function App() {
  return <Router />
}

export default App
