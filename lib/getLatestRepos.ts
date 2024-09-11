import axios, { AxiosResponse } from "axios";

interface Repository {
  // GitHub repository özelliklerini burada tanımlayın
  id: number;
  name: string;
  // Diğer özellikler...
}

const getLatestRepos = async (token?: string): Promise<Repository[] | undefined> => {
  try {
    const username = "srkanyalcinkaya";
    const baseUrl = `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`;

    let response: AxiosResponse<{ items: Repository[] }>;

    if (token) {
      response = await axios.get(baseUrl, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
    } else {
      response = await axios.get(baseUrl);
    }

    const repos = response.data.items;
    // const latestRepos = repos.slice(0, token ? 9 : 6);
    const latestRepos = repos

    if (token) {
      console.log("En son 6 repo", latestRepos);
    }

    return latestRepos;
  } catch (err) {
    console.error("Repolar alınırken hata oluştu:", err);
    return undefined;
  }
};

export default getLatestRepos;