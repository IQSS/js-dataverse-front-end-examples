import { useState } from 'react'
import { DatasetPreview, getAllDatasetPreviews } from '@iqss/dataverse-client-javascript'
// @ts-expect-error - Missing types.
import { Button } from '@iqss/dataverse-design-system'
// @ts-expect-error - Missing types.
import { Table } from '@iqss/dataverse-design-system'
import styles from './DatasetTable.module.css'
import { Link } from 'react-router-dom'

export function DatasetTable() {
  const [datasetPreviewList, setDatasetPreviewList] = useState<DatasetPreview[]>([])
  const [datasetCount, setDatasetCount] = useState(0) // State to store the dataset count

  // Action to populate the table
  const populateTable = () => {
    getAllDatasetPreviews.execute().then((datasetPreviewSubset) => {
      setDatasetPreviewList(datasetPreviewSubset.datasetPreviews)
      setDatasetCount(datasetPreviewSubset.totalDatasetCount)
    })
  }

  return (
    <article>
      <header className={styles.header}>
        <h1>Dataset Table</h1>
      </header>
      <div className={styles['separation-line']}></div>
      <div className={styles.container}>
        <div>
          <>
            <Button onClick={populateTable}>Populate Table</Button>
            <p>Dataset Count: {datasetCount}</p>
            <Table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Create Time</th>
                  <th>Citation</th>
                  <th>Version State</th>
                </tr>
              </thead>
              <tbody>
                {datasetPreviewList.map((datasetPreview) => (
                  <tr key={datasetPreview.versionId}>
                    <td>
                      <Link to={`/spa/dataset?persistentId=${datasetPreview.persistentId}`}>
                        {datasetPreview.title}
                      </Link>
                    </td>
                    <td>{datasetPreview.versionInfo.createTime.toUTCString()}</td>
                    <td>{datasetPreview.citation}</td>
                    <td>{datasetPreview.versionInfo.state}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        </div>
      </div>
    </article>
  )
}
