"use client";

import { useSearchQuery } from "@/state/api";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import ProjectCard from "@/components/ProjectCard";
import UserCard from "@/components/UserCard";

const Search = () => {
  const [searchTerm, setSearchterm] = useState("");
  const {
    data: searhResults,
    isLoading,
    isError,
  } = useSearchQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });

  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchterm(event.target.value);
    },
    500,
  );

  useEffect(() => {
    return handleSearch.cancel;
  }, [handleSearch.cancel]);

  return (
    <div className="p-8">
      <Header name="Search " />

      <div>
        <input
          type="text"
          placeholder="Search ..."
          className="w-1/2 rounded p-3 shadow"
          onChange={handleSearch}
        />
      </div>

      <div className="p-5">
        {isLoading && <p>Loading ...</p>}
        {isError && <p>Error occurred while fetching search results. </p>}
        {!isError && !isError && searhResults && (
          <div className="">
            {searhResults.tasks && searhResults.tasks?.length > 0 && (
              <h2>Tasks</h2>
            )}

            {searhResults.tasks?.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
            {searhResults.projects && searhResults.projects?.length > 0 && (
              <h2>Projects</h2>
            )}

            {searhResults.projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {searhResults.users && searhResults.users?.length > 0 && (
              <h2>Users</h2>
            )}

            {searhResults.users?.map((user) => (
              <UserCard key={user.userId} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
