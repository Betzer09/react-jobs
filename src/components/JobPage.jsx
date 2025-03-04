import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await fetch(`/api/jobs/${id}`);
                const data = await response.json();
                setJob(data);
                console.log(data)
            } catch {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false)
            }
        }

        fetchJob();
    }, [])

    return (
        <div>{JSON.stringify(job)}</div>
    )
}



export default JobPage