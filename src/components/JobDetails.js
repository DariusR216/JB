// src/components/JobDetails.js

import React from 'react';

function JobDetails({ job, onBackClick }) {
  if (!job) return null; // If no job is selected, return null

return (
    <div className="job-details">
    <button onClick={onBackClick}>Back to Listings</button>
    <h2>{job.title}</h2>
    <p><strong>Company:</strong> {job.company}</p>
    <p><strong>Location:</strong> {job.location}</p>
    <p><strong>Description:</strong> {job.description}</p>
    <p><strong>Requirements:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p><strong>Salary:</strong> $70,000 - $90,000</p>
    <button>Apply Now</button>
    </div>
);
}

export default JobDetails;
