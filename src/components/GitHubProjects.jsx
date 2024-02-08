import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const GitHubProjects = ({ username, isOrganization }) => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 10;

  useEffect(() => {
    const fetchRepos = async () => {
      const baseUrl = 'https://api.github.com';
      const url = isOrganization
        ? `${baseUrl}/orgs/${username}/repos`
        : `${baseUrl}/users/${username}/repos`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
  
        if (response.ok) {
          if (Array.isArray(data)) {
            setRepos(data.filter(repo => !repo.fork));
          } else {
            console.error('Unexpected data format:', data);
            setError('Unexpected data format');
            setRepos([]);
          }
        } else {
          console.error('API error:', data);
          setError(data.message);
          setRepos([]);
        }
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setError(err.message);
        setRepos([]);
      }
    };
  
    fetchRepos();
  }, [username, isOrganization]); // Don't forget to include dependencies

  // Get current repos
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  // Change page
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div>
      {error && <div class="error">{error}</div>}
      <div class="grid">
        {currentRepos.map((repo) => (
          <article class="card">
            <h1>{repo.name}</h1>
            <p>{repo.description}</p>
            <div class="row">
                <a href={repo.html_url} target="_blank">Repository</a>
            </div>
          </article>
        ))}
      </div>
      <div>
        {currentPage > 1 && <button class="button margin" onClick={prevPage}>Previous</button>}
        {currentPage < Math.ceil(repos.length / reposPerPage) && <button class="button margin" onClick={nextPage}>Next</button>}
      </div>
    </div>
  );
};

export default GitHubProjects;