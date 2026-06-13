(function () {
  const characters = window.CHARACTERS || [];

  function byId(id) {
    return document.getElementById(id);
  }

  function characterUrl(character) {
    return `character.html?id=${encodeURIComponent(character.id)}`;
  }

  function renderList(title, items) {
    if (!items || !items.length) return "";

    return `
      <section class="detail-section">
        <h2>${title}</h2>
        <ul>
          ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    `;
  }

  function renderGallery() {
    const grid = byId("character-grid");
    if (!grid) return;

    grid.innerHTML = characters
      .map(
        (character) => `
          <a class="character-card" href="${characterUrl(character)}">
            <span class="portrait-frame">
              <img src="${character.image}" alt="${character.name}">
            </span>
            <span class="card-copy">
              <span class="character-name">${character.name}</span>
              <span class="character-meta">${character.race} ${character.className}</span>
            </span>
          </a>
        `
      )
      .join("");
  }

  function renderDetail() {
    const detail = byId("character-detail");
    if (!detail) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const character = characters.find((entry) => entry.id === id);

    if (!character) {
      document.title = "Character Not Found";
      detail.innerHTML = `
        <section class="empty-state">
          <p class="eyebrow">Missing character</p>
          <h1>That profile is not in the roster.</h1>
          <p>The link may be outdated, or the character id may have changed.</p>
          <a class="button-link" href="index.html#characters">Back to characters</a>
        </section>
      `;
      return;
    }

    document.title = `${character.name} | Character Details`;
    detail.innerHTML = `
      <div class="detail-art">
        <img src="${character.image}" alt="${character.name}">
      </div>
      <div class="detail-copy">
        <a class="back-link" href="index.html#characters">Back to characters</a>
        <p class="eyebrow">${character.race} ${character.className}</p>
        <h1>${character.name}</h1>
        <p class="tagline">${character.tagline}</p>
        <p>${character.description}</p>
        ${renderList("Strengths", character.strengths)}
        ${renderList("Tradeoffs", character.tradeoffs)}
        ${
          character.playstyle
            ? `
              <section class="detail-section">
                <h2>Playstyle</h2>
                <p>${character.playstyle}</p>
              </section>
            `
            : ""
        }
      </div>
    `;
  }

  renderGallery();
  renderDetail();
})();
