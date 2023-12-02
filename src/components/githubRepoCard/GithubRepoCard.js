import React from "react";
import "./GithubRepoCard.scss";
import { Fade } from "react-reveal";
import { formatFileSizeDisplay } from "../../utils";

export default function GithubRepoCard({ repo, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL in ${name} is undefined`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  // Convert size from KB to a more readable format (e.g., MB)
  const formattedSize = formatFileSizeDisplay(repo.size * 1024); // Assuming size is in KB

  return (
    <Fade bottom duration={1000} distance="20px">
      <div>
        <div
          className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
          key={repo.id}
          onClick={() => openUrlInNewTab(repo.html_url, repo.name)}
        >
          <div className="repo-name-div">
            {/* SVG icon for the repo */}
            <p className="repo-name">{repo.name}</p>
          </div>
          <p className="repo-description">{repo.description || 'No description available'}</p>
          <div className="repo-stats">
            <div className="repo-left-stat">
              {/* Language display logic removed as it requires additional fetch */}
              
            </div>
            <div className="repo-right-stat">
              <p>{formattedSize}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
