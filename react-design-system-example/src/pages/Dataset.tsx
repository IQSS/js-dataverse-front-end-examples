import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dataset as JSDataset, getDataset } from '@iqss/dataverse-client-javascript'

export const Dataset = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const persistentId = searchParams.get('persistentId')
  const [dataset, setDataset] = useState<JSDataset | undefined>(undefined)

  useEffect(() => {
    if (persistentId === null) {
      // Handle the case where persistentId is null
      console.error('persistentId is null')
      return
    }
    //Make a request to the API to get the dataset details using the persistentId
    getDataset.execute(persistentId).then((dataset) => {
      setDataset(dataset)
    })
  }, [persistentId])

  return (
    <section>
      <Link to="/spa">Back to List</Link>
      <h1>Dataset</h1>
      <p>Persistent ID: {persistentId}</p>
      {dataset ? (
        <>
          <p>ID: {dataset.id}</p>
          <p>Version ID: {dataset.versionId}</p>
          <p>Version Info: {JSON.stringify(dataset.versionInfo)}</p>
          <p>License: {dataset.license ? JSON.stringify(dataset.license) : 'Data not available'}</p>
          <p>
            Alternative Persistent ID: {dataset.alternativePersistentId || 'Data not available'}
          </p>
          <p>Publication Date: {dataset.publicationDate || 'Data not available'}</p>
          <p>Citation Date: {dataset.citationDate || 'Data not available'}</p>
          <p>Metadata Blocks: {JSON.stringify(dataset.metadataBlocks)}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
