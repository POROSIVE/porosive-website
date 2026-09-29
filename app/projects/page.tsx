import type { Metadata } from "next";
import ProjectPage from "./project";

export const metadata: Metadata = {
  title: "Project",
  description: "List of projects worked on by POROSIVE",
};
type Repo = {
  name: string;
};

export default async function Projects() {
  const reposRes = await fetch(
    "https://api.github.com/orgs/POROSIVE/repos?per_page=100&type=public",
    { cache: "no-store" }
  );

  const repos: Repo[] = await reposRes.json();
  const commitCounts = await Promise.all(
    repos.map(async (repo) => {
      const statsRes = await fetch(
        `https://api.github.com/repos/POROSIVE/${repo.name}/stats/participation`,
        { cache: "no-store" }
      );
      const stats = await statsRes.json();
      if (!stats?.all) return 10;
      return stats.all.reduce((a: number, b: number) => a + b, 0);
    })
  );

  const totalCommits = commitCounts.reduce((a, b) => a + b, 0);
  return <ProjectPage totalCommits={totalCommits} repoCount={repos.length} />;
}
