import { useState, useEffect } from 'preact/hooks';

const GitHubProjects = ({ username, isOrganization }) => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 10;

  const fetchRepos = async (page = 1, allRepos = []) => {
    const baseUrl = 'https://api.github.com';
    const url = isOrganization
        ? `${baseUrl}/orgs/${username}/repos?page=${page}&per_page=100`
        : `${baseUrl}/users/${username}/repos?page=${page}&per_page=100`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        if (Array.isArray(data)) {
          allRepos = allRepos.concat(data.filter(repo => !repo.fork));
          // If the data length is 100, there might be more repositories to fetch
          if (data.length === 100) {
            return fetchRepos(page + 1, allRepos);
          }
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

    setIsLoading(false);
    return allRepos;
  };

  useEffect(() => {
    fetchRepos().then(setRepos);
  }, [username, isOrganization]);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
      <div>
        {isLoading ? (
            <div>Loading...</div>
        ) : (
            <>
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
            </>
        )}
      </div>
  );
};

export default GitHubProjects;
