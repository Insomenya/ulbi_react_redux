import React, { useEffect, useState } from "react"
import { useGetReposQuery } from "../../services/repoService";
import Repo from "./repo/repo";
import './main.less';

const Main = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const { data = { items: [] }, isFetching, isUninitialized } = useGetReposQuery(searchValue);

    function searchHandler() {
        setSearchValue(inputValue);
    }

    return (
        <div>
            <div className="search">
                <input type="text" placeholder="Input repo name" className="search-input" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                <button className="search-btn" onClick={() => searchHandler()} >Search</button>
            </div>
            {(isUninitialized || isFetching) ? <div className="fetching"></div> :
            data.items.map((repo) => (
                <Repo repo={repo} key={repo.id}></Repo>
            ))}
        </div>
    )
};

export default Main;