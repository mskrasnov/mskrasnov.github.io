const OWNER = "mskrasnov";
const REPO = "FSM";

const contentEl = document.getElementById("content");

async function getLatestRelease() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/releases/latest`,
      { headers: { "Accept": "application/vnd.github+json" } }
    );

    if(!response.ok) {
      if(response.status === 404) {
        return await fetchLatestFromList();
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const release = await response.json();
    renderRelease(release);
  } catch(err) {
    contentEl.innerHTML = `<span class="error">Error: ${err.message}</span>`;
  }
}

async function fetchLatestFromList() {
  const response = await fetch(
    `https://api.github.com/repos/${OWNER}/{$REPO}/releases?per_page=1`,
      { headers: { "Accept": "application/vnd.github+json" } }
  );

  if(!response.ok) {
    throw new Error(`Releases not found (${response.status})`);
  }

  const releases = await response.json();
  if(!releases.length) {
    throw new Error(`No releases found`);
  }

  renderRelease(releases[0]);
}

function renderRelease(release) {
  const publishedAt = new Date(release.published_at).toLocaleDateString("ru-RU");

  contentEl.innerHTML = `${release.tag_name}, dated ${publishedAt} (<a href="https://github.com/mskrasnov/FSM/releases/tag/${release.tag_name}">github</a>).`;
}

getLatestRelease();
