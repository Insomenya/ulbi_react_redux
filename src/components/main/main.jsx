import React from "react"
import { useGetReposQuery } from "../../services/repoService";
import Repo from "./repo/repo";

const Main = (props) => {
    const { data, error, isFetching } = useGetReposQuery('query');

    return (
        <div>
            {!isFetching && data.items.map((repo) => (
                <Repo repo={repo} key={repo.id}></Repo>
            ))}
        </div>
    )
};

export default Main;