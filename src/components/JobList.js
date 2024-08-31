// src/components/JobList.js

import React, { useMemo, useState } from 'react';
import JobDetails from './JobDetails';

// Mock data for job listings
const jobData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    description: 'Looking for a passionate Frontend Developer with experience in React.',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Innovative Apps LLC',
    location: 'New York, NY',
    description: 'Seeking a Backend Developer proficient in Java and Spring Boot.',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'WebWorks',
    location: 'San Francisco, CA',
    description: 'A Full Stack Developer needed with skills in both frontend and backend technologies.',
  },
];

function JobList() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ company: '', location: '' });
    const [favoriteJobs, setFavoriteJobs] = useState([]);
  
    const handleJobClick = (job) => {
      setSelectedJob(job);
    };
  
    const handleBackClick = () => {
      setSelectedJob(null);
    };
  
    const handleFavoriteClick = (job) => {
      setFavoriteJobs((prevFavorites) => {
        if (prevFavorites.some(favJob => favJob.id === job.id)) {
          // Remove job from favorites if it already exists
          return prevFavorites.filter(favJob => favJob.id !== job.id);
        } else {
          // Add job to favorites
          return [...prevFavorites, job];
        }
      });
    };
  
    // Filter jobs based on search and filter criteria
    const filteredJobs = useMemo(() => {
      return jobData.filter(job => {
        const matchesSearchTerm = job.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCompanyFilter = job.company.toLowerCase().includes(filters.company.toLowerCase());
        const matchesLocationFilter = job.location.toLowerCase().includes(filters.location.toLowerCase());
        return matchesSearchTerm && matchesCompanyFilter && matchesLocationFilter;
      });
    }, [searchTerm, filters]);
  
    return (
      <div className="job-list">
        {selectedJob ? (
          <JobDetails job={selectedJob} onBackClick={handleBackClick} />
        ) : (
          <>
            <h2>Available Job Listings</h2>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by job title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <input
                type="text"
                placeholder="Filter by company"
                value={filters.company}
                onChange={(e) => setFilters({ ...filters, company: e.target.value })}
              />
              <input
                type="text"
                placeholder="Filter by location"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
            </div>
            <div className="job-cards">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div key={job.id} className="job-card">
                    <h3>{job.title}</h3>
                    <p><strong>Company:</strong> {job.company}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p>{job.description}</p>
                    <button onClick={() => handleJobClick(job)}>View Details</button>
                    <button onClick={() => handleFavoriteClick(job)}>
                      {favoriteJobs.some(favJob => favJob.id === job.id) ? 'Unfavorite' : 'Favorite'}
                    </button>
                  </div>
                ))
              ) : (
                <p>No jobs found</p>
              )}
            </div>
            <div className="favorite-jobs">
              <h2>Favorite Jobs</h2>
              {favoriteJobs.length > 0 ? (
                favoriteJobs.map((job) => (
                  <div key={job.id} className="job-card">
                    <h3>{job.title}</h3>
                    <p><strong>Company:</strong> {job.company}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p>{job.description}</p>
                    <button onClick={() => handleJobClick(job)}>View Details</button>
                    <button onClick={() => handleFavoriteClick(job)}>Unfavorite</button>
                  </div>
                ))
              ) : (
                <p>No favorite jobs</p>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
  
  export default JobList;