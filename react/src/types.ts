export interface Author {
  name: string;
  email: string;
}

export interface Github {
  name: string;
  repo: string;
  stars: number;
  forks: number;
  issues: number;
  pullRequests: number;
}

export interface PageData {
  authors: Author[];
  devStatus: string;
  firstRelease: string;
  github: Github;
  license: string;
  operatingSystems: string[];
  readme: string;
  releaseDate: string;
  requirements: string;
  tags: string[];
  version: string;
  versions: string[];
}
