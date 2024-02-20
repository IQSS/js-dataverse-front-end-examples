import {ChangeEvent, useState} from 'react';
import {DatasetPreview, getAllDatasetPreviews} from "@iqss/dataverse-client-javascript";

import {Button} from "@iqss/dataverse-design-system";
import {Table}   from "@iqss/dataverse-design-system";
import {Form} from "@iqss/dataverse-design-system";

import {ApiConfig} from "@iqss/dataverse-client-javascript/dist/core";
import {DataverseApiAuthMechanism} from "@iqss/dataverse-client-javascript/dist/core/infra/repositories/ApiConfig";
import styles from './DatasetTable.module.css';
// Define the type for your object


export function DatasetTable()  {
    const [datasetPreviewList, setDatasetPreviewList] = useState<DatasetPreview[]>([]);
    const [apiKey, setApiKey] = useState(''); // State to store the API Key
    const [datasetCount, setDatasetCount] = useState(0); // State to store the dataset count
    // Function to handle the API Key input changes
    const handleApiKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {  value } = event.target
        console.log('value' + value)
        setApiKey(value)
        console.log('apiKey' + apiKey)
        ApiConfig.init('http://localhost:8000/api/v1', DataverseApiAuthMechanism.API_KEY, value)

    }


    // Action to populate the table
    const populateTable = () => {
        getAllDatasetPreviews.execute().then((datasetPreviewSubset) => {
            setDatasetPreviewList(datasetPreviewSubset.datasetPreviews);
            setDatasetCount(datasetPreviewSubset.totalDatasetCount);
        });

    };

    return (
        <article>
            <header className={styles.header}>
                <h1>Dataset Table</h1>
            </header>
            <div className={styles['separation-line']}></div>
            <div className={styles.container}>
                <div>

                    {!apiKey && (
                        <Form>
                            <Form.Group controlId="basic-form-apikey">
                                <Form.Group.Label>API Key</Form.Group.Label>
                                <Form.Group.Input value={apiKey}
                                                  onChange={handleApiKeyChange} type="text" placeholder="API Key"/>
                            </Form.Group>
                        </Form>
                    )}
                    {apiKey && (
                        <>
                            <Button onClick={populateTable}>Populate Table</Button>

                            <Table>
                                <thead>
                                <tr>
                                    <th>Citation</th>
                                    <th>Create Time</th>
                                    <th>Title</th>
                                    <th>Version State</th>
                                </tr>
                                </thead>
                                <tbody>
                                {datasetPreviewList.map(datasetPreview => (
                                    <tr key={datasetPreview.versionId}>
                                        <td>{datasetPreview.citation}</td>
                                        <td>{datasetPreview.versionInfo.createTime.toUTCString()}</td>
                                        <td>{datasetPreview.title}</td>
                                        <td>{datasetPreview.versionInfo.state}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </>

                    )}
                </div>
            </div>
        </article>
                )
                }

