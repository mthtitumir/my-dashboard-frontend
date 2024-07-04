export type TChildrenProps = {
    children: React.ReactNode;
}

export type TProject = {
    project_id: number;
    title: string;
    description: string;
    contributions: string[];
    duration: string;
    technologies_used: string[];
    live_url: string;
    github_client: string;
    github_server: string;
    image_url: string;
    stack: string;
    team_size?: number;
    status: string;
}

export type TBlog = {
    title: string;
    banner: string;
    tags: string[];
    shortDesc: string;
    longDesc: string;
    content: string;
}

export type TExperience = {
    title: string;
    company: string;
    company_website: string;
    location: string;
    job_location: string;
    duration: string;
    responsibilities: string[];
    technologies: string[];
};