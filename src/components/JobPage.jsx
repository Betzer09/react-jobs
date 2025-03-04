import React from 'react'
import { useState } from 'react'
import { useParams, useLoaderData } from 'react-router-dom';

const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();

    return (
        <div>{JSON.stringify(job)}</div>
    )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`)
    return await res.json()
}

export { JobPage as default, jobLoader }