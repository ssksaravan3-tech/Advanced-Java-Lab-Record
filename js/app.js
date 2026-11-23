(function () {
  const nav = document.getElementById("weekNav");
  const introNavBtn = document.getElementById("introNavBtn");
  const panel = document.getElementById("weekPanel");
  const pageTitle = document.getElementById("pageTitle");
  const pageEyebrow = document.getElementById("pageEyebrow");
  const overlay = document.getElementById("viewerOverlay");
  const frame = document.getElementById("viewerFrame");
  const viewerTitle = document.getElementById("viewerTitle");
  const closeViewer = document.getElementById("closeViewer");
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeLightbox = document.getElementById("closeLightbox");

  if (!Array.isArray(LAB_RECORDS)) {
    panel.innerHTML =
      "<p class='no-docs'>Record config missing. Check <code>js/records.js</code>.</p>";
    return;
  }

  let activeTopicId = ADV_JAVA_NOTES?.topics?.[0]?.id || null;
  let activeSubsectionId = null;
  let currentActiveWeek = null;

  function fileName(path) {
    return path.split("/").pop() || path;
  }

  function setIntroActive(isActive) {
    introNavBtn.classList.toggle("active", isActive);
    introNavBtn.setAttribute("aria-current", isActive ? "page" : "false");
  }

  function setHomeActive(isActive) {
    const brand = document.querySelector(".brand");
    if (brand) brand.classList.toggle("active", isActive);
  }

  function renderNav(activeId) {
    setIntroActive(activeId === "introduction");
    setHomeActive(activeId === "home");
    nav.innerHTML = LAB_RECORDS.filter(Boolean).map((week) => {
      const count = week.documents?.length || 0;
      const subCount = week.subsections?.length || 0;
      const active = week.id === activeId ? "active" : "";
      
      // Strict Singular/Plural Grammar Rule: 1 topic vs N topics; never display empty
      let meta = "1 topic";
      if (subCount > 0) {
        meta = subCount === 1 ? "1 topic" : subCount + " topics";
      } else if (count > 0) {
        meta = count === 1 ? "1 topic" : count + " topics";
      }

      return `
        <button
          type="button"
          class="week-btn ${active}"
          data-week="${week.id}"
          aria-current="${week.id === activeId ? "page" : "false"}"
        >
          <span class="label">${escapeHtml(week.label)}</span>
          <span class="meta">${meta}</span>
        </button>
      `;
    }).join("");

    const activeBtn = nav.querySelector(".week-btn.active");
    if (activeBtn) {
      activeBtn.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function renderScreenshots(outputs, folderHint) {
    return (outputs || [])
      .map((shot) => {
        const folder = folderHint || shot.file.split("/").slice(0, -1).join("/") + "/";
        const file = shot.file.startsWith("documents/") || shot.file.startsWith("images/") ? shot.file : folder + shot.file;
        const caption = shot.caption || "Laboratory output execution observation";
        return `
          <figure class="shot-figure" data-lightbox="${escapeHtml(file)}" data-caption="${escapeHtml(caption)}">
            <div class="shot-frame">
              <img
                src="${escapeHtml(file)}"
                alt="${escapeHtml(caption)}"
                loading="lazy"
                onerror="this.onerror=null;this.parentElement.classList.add('img-fallback');this.alt='Screenshot asset pending execution';"
              />
              <div class="shot-zoom-hint" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                <span>Click to Enlarge</span>
              </div>
            </div>
            ${caption ? `<figcaption class="shot-caption">${escapeHtml(caption)}</figcaption>` : ""}
          </figure>
        `;
      })
      .join("");
  }

  // ===== RIGOROUS ACADEMIC 10-SECTION RENDERING ENGINE =====
  function renderSubsectionContent(section, week) {
    if (section.pending) {
      return `
        <div class="no-docs">
          <strong>${escapeHtml(section.title)} — In Progress</strong>
          This subsection content is currently being finalized.
        </div>
      `;
    }

    const parentWeek = week || currentActiveWeek || {};

    // 1. Aim / Objective
    const aimBlock = section.aim
      ? `
        <section class="lab-section lab-section--aim">
          <div class="section-header">
            <div class="section-title-wrap">
              <span class="section-badge section-badge--aim">OBJECTIVE</span>
              <h3>1. Aim / Objective</h3>
            </div>
          </div>
          <div class="prose"><p>${escapeHtml(section.aim)}</p></div>
        </section>
      `
      : "";

    // 2. Software & Environmental Requirements
    const reqs = section.requirements || section.softwareRequirements || [
      { item: "Operating System", spec: "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS" },
      { item: "Java Platform", spec: "Java Development Kit (JDK) 21.0.11 LTS (64-bit)" },
      { item: "IDE / Build Tool", spec: "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9" },
      { item: "Database / Server", spec: "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0" }
    ];
    const requirementsBlock = `
      <section class="lab-section lab-section--requirements">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="section-badge section-badge--req">ENVIRONMENT</span>
            <h3>2. Software &amp; Environmental Requirements</h3>
          </div>
        </div>
        <div class="req-grid">
          ${reqs
            .map(
              (r) => `
            <div class="req-card">
              <span class="req-label">${escapeHtml(r.item)}</span>
              <span class="req-spec">${escapeHtml(r.spec)}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </section>
    `;

    // 3. Theory & Architectural Concepts
    const theoryBlock = section.theory
      ? `
        <section class="lab-section lab-section--theory">
          <div class="section-header">
            <div class="section-title-wrap">
              <span class="section-badge section-badge--theory">CONCEPT</span>
              <h3>3. Theory &amp; Architectural Concepts</h3>
            </div>
          </div>
          <div class="prose"><p>${escapeHtml(section.theory)}</p></div>
        </section>
      `
      : "";

    // 4. Step-by-Step Procedure / Algorithm
    const procedureBlock = section.procedure
      ? `
        <section class="lab-section lab-section--procedure">
          <div class="section-header">
            <div class="section-title-wrap">
              <span class="section-badge section-badge--steps">METHODOLOGY</span>
              <h3>4. Step-by-Step Procedure / Algorithm</h3>
            </div>
          </div>
          ${
            Array.isArray(section.procedure)
              ? `<ol class="lab-steps">${section.procedure
                  .map(
                    (step, idx) => `
                    <li class="lab-step">
                      <div class="step-num">${idx + 1}</div>
                      <div class="step-text"><p>${escapeHtml(step)}</p></div>
                    </li>
                  `
                  )
                  .join("")}</ol>`
              : `<div class="prose"><p>${escapeHtml(section.procedure)}</p></div>`
          }
        </section>
      `
      : "";

    // 5. Source Code Listing
    const programBlock = section.program
      ? `
        <section class="lab-section lab-section--code">
          <div class="section-header">
            <div class="section-title-wrap">
              <span class="section-badge section-badge--code">SOURCE CODE</span>
              <h3>5. Source Code Listing</h3>
            </div>
            <button type="button" class="btn-copy-code" aria-label="Copy source code">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>Copy Code</span>
            </button>
          </div>
          <div class="code-terminal">
            <div class="code-terminal-bar">
              <div class="code-dots"><span class="dot dot--red"></span><span class="dot dot--amber"></span><span class="dot dot--green"></span></div>
              <span class="code-filename">${escapeHtml(section.filename || (section.id ? section.id + ".java" : "Program.java"))}</span>
              <span class="code-lang">${escapeHtml(section.lang || "JAVA")}</span>
            </div>
            <pre class="lab-code"><code>${escapeHtml(section.program)}</code></pre>
          </div>
        </section>
      `
      : "";

    // 6. Input Test Matrix & Schema Table
    const tableBlock = (section.tableHtml || section.testMatrix)
      ? `
        <section class="lab-section lab-section--table">
          <div class="section-header">
            <div class="section-title-wrap">
              <span class="section-badge section-badge--matrix">OBSERVATIONS</span>
              <h3>6. Input Test Matrix &amp; Schema Table</h3>
            </div>
          </div>
          <div class="table-wrap">${section.tableHtml || section.testMatrix}</div>
        </section>
      `
      : "";

    // 7. Execution Observations & Console Output
    const outputTextBlock = section.outputText
      ? `
        <section class="lab-section lab-section--output">
          <div class="section-header">
            <div class="section-title-wrap">
              <span class="section-badge section-badge--terminal">CONSOLE LOG</span>
              <h3>7. Execution Observations &amp; Console Output</h3>
            </div>
            <span class="status-pill status-pill--success">
              <span class="status-dot"></span> Verified
            </span>
          </div>
          <div class="code-terminal code-terminal--output">
            <div class="code-terminal-bar">
              <div class="code-dots"><span class="dot dot--red"></span><span class="dot dot--amber"></span><span class="dot dot--green"></span></div>
              <span class="code-filename">execution telemetry log</span>
              <span class="code-lang">STDOUT</span>
            </div>
            <pre class="lab-code lab-code--terminal"><code>${escapeHtml(section.outputText)}</code></pre>
          </div>
        </section>
      `
      : "";

    // 8. Visual Terminal / Output Screenshots
    const screenshotsBlock = section.outputs?.length
      ? `
        <section class="lab-section lab-section--shots">
          <div class="section-header">
            <div class="section-title-wrap">
              <span class="section-badge section-badge--shots">EVIDENCE</span>
              <h3>8. Visual Terminal / Output Screenshots</h3>
            </div>
          </div>
          <div class="lab-shots">${renderScreenshots(section.outputs, parentWeek.folder)}</div>
        </section>
      `
      : "";

    // 9. Result & Academic Conclusion
    const resultBlock = section.result
      ? `
        <section class="lab-section lab-section--result">
          <div class="section-header">
            <div class="section-title-wrap">
              <span class="section-badge section-badge--result">VERIFICATION</span>
              <h3>9. Result &amp; Academic Conclusion</h3>
            </div>
            <span class="result-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Validated
            </span>
          </div>
          <div class="prose"><p>${escapeHtml(section.result)}</p></div>
        </section>
      `
      : "";

    // 10. Document Downloads & Modal Preview
    const currentWeekDocs = parentWeek.documents || [];
    const documentsBlock = currentWeekDocs.length
      ? `
        <section class="lab-section lab-section--docs">
          <div class="section-header">
            <div class="section-title-wrap">
              <span class="section-badge section-badge--docs">ARCHIVE</span>
              <h3>10. Document Downloads &amp; Modal Preview</h3>
            </div>
          </div>
          <div class="doc-download-grid">
            ${currentWeekDocs
              .map(
                (doc) => `
              <div class="doc-download-card">
                <div class="doc-card-left">
                  <div class="doc-icon-badge ${doc.type === "pdf" ? "doc-icon-badge--pdf" : ""}">
                    ${(doc.type || "docx").toUpperCase()}
                  </div>
                  <div class="doc-card-info">
                    <span class="doc-card-title">${escapeHtml(doc.name || fileName(doc.file))}</span>
                    <span class="doc-card-meta">${escapeHtml(doc.size || "Official Record")} • ${escapeHtml((doc.type || "docx").toUpperCase())}</span>
                  </div>
                </div>
                <div class="doc-card-actions">
                  <a href="${escapeHtml(doc.file)}" download="${fileName(doc.file)}" class="btn-doc-action btn-doc-download" title="Download Document">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    <span>Download</span>
                  </a>
                  <button type="button" class="btn-doc-action btn-doc-preview" data-view-doc="${escapeHtml(doc.file)}" data-doc-name="${escapeHtml(doc.name || fileName(doc.file))}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    <span>Preview</span>
                  </button>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </section>
      `
      : "";

    return `
      <div class="lab-record">
        ${aimBlock}
        ${requirementsBlock}
        ${theoryBlock}
        ${procedureBlock}
        ${programBlock}
        ${tableBlock}
        ${outputTextBlock}
        ${screenshotsBlock}
        ${resultBlock}
        ${documentsBlock}
      </div>
    `;
  }

  function getDocIconGradient(type) {
    const t = (type || "").toUpperCase();
    if (t === "PDF") return "linear-gradient(135deg, #be123c, #e11d48)";
    if (t === "DOCX" || t === "DOC") return "linear-gradient(135deg, #ea580c, #f97316)";
    if (t === "ZIP" || t === "RAR") return "linear-gradient(135deg, #65a30d, #84cc16)";
    return "linear-gradient(135deg, #101512, #2a342c)";
  }

  function renderUnit(week, subsectionId) {
    currentActiveWeek = week;
    const sections = week.subsections || [];
    const selected =
      sections.find((s) => s.id === subsectionId) ||
      sections.find((s) => !s.pending) ||
      sections[0];

    if (!selected) {
      panel.innerHTML = "<p class='no-docs'>No subsections configured.</p>";
      return;
    }

    activeSubsectionId = selected.id;
    pageEyebrow.textContent = week.label;
    pageTitle.textContent = week.title;

    // Optional unit filter pills if week has subsections from multiple units
    const units = Array.from(new Set(sections.map((s) => s.unit).filter(Boolean)));
    const filterTabsHtml =
      units.length > 1
        ? `
          <div class="unit-filter-tabs" role="group" aria-label="Filter subsections by unit">
            <button type="button" class="unit-filter-btn active" data-unit-filter="all">
              All Topics (${sections.length})
            </button>
            ${units
              .map((u) => {
                const count = sections.filter((s) => s.unit === u).length;
                return `<button type="button" class="unit-filter-btn" data-unit-filter="${escapeHtml(u)}">${escapeHtml(u)} (${count})</button>`;
              })
              .join("")}
          </div>
        `
        : "";

    const tabs = sections
      .map(
        (s) => {
          const badgeHtml = s.badge
            ? `<span class="topic-tab-badge ${s.badge === "Unit 2" ? "topic-tab-badge--u2" : ""}">${escapeHtml(s.badge)}</span>`
            : "";
          return `
      <button
        type="button"
        class="topic-tab ${s.id === selected.id ? "active" : ""}"
        data-subsection="${s.id}"
        data-unit="${week.id}"
        data-section-unit="${escapeHtml(s.unit || "")}"
      >
        ${badgeHtml}${escapeHtml(s.label)}
      </button>`;
        }
      )
      .join("");

    const docs = week.documents || [];
    const docsHtml =
      docs.length === 0
        ? ""
        : `
          <section class="unit-docs-section" aria-label="Documents">
            <header class="unit-docs-header">
              <h3 class="unit-docs-title">
                <span class="unit-docs-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </span>
                Academic Documents &amp; Word Reports
                <span class="unit-docs-count">${docs.length}</span>
              </h3>
            </header>
            <div class="doc-list unit-docs-list" id="unitDocsList" role="region">
              ${docs
                .map(
                  (doc, index) => `
                <article class="doc-card unit-doc-card">
                  <div class="doc-info">
                    <div class="doc-icon" style="background: ${getDocIconGradient(doc.type || 'FILE')}">${(doc.type || "FILE").toUpperCase()}</div>
                    <div class="doc-details">
                      <h4>${escapeHtml(doc.name || fileName(doc.file))}</h4>
                      <span class="doc-meta">${fileName(doc.file)}${doc.size ? " · " + doc.size : ""}</span>
                    </div>
                  </div>
                  <div class="doc-actions">
                    <button
                      type="button"
                      class="btn btn-view"
                      data-view="${week.id}:${index}"
                      aria-label="View ${doc.name || fileName(doc.file)}"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      Preview
                    </button>
                    <a
                      class="btn btn-download"
                      href="${doc.file}"
                      download="${fileName(doc.file)}"
                      aria-label="Download ${doc.name || fileName(doc.file)}"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Download
                    </a>
                  </div>
                </article>
              `
                )
                .join("")}
            </div>
          </section>
        `;

    panel.innerHTML = `
      <div class="notes-layout">
        <section class="notes-hero">
          <p class="notes-kicker">${escapeHtml(week.label)}${selected.unit ? ` · ${escapeHtml(selected.unit)}` : ""}</p>
          <h3>${escapeHtml(selected.title)}</h3>
          <p class="notes-lead">${escapeHtml(week.lead || week.intro || "Laboratory subsections for practical implementation.")}</p>
        </section>
        ${docsHtml}
        ${filterTabsHtml}
        <div class="topic-tabs" role="tablist" aria-label="${escapeHtml(week.label)} topics">
          ${tabs}
        </div>
        <div class="unit-body">
          ${renderSubsectionContent(selected, week)}
        </div>
      </div>
    `;
  }

  // ===== EXECUTIVE RESUME (CV) DASHBOARD (#home) =====
  function renderHomePage() {
    const info = STUDENT_INFO;
    pageEyebrow.textContent = "Academic Profile";
    pageTitle.textContent = info.name + " — Student Profile";

    panel.innerHTML = `
      <div class="home-page">
        <!-- 1. Academic Profile Hero Card -->
        <section class="home-hero">
          <div class="home-avatar" aria-label="Student initials">${escapeHtml(info.initials || "VS")}</div>
          <div class="home-hero-content">
            <p class="home-hero-kicker">ACADEMIC LABORATORY RECORD • STUDENT PROFILE</p>
            <h2 class="home-name">${escapeHtml(info.name)}</h2>
            <p class="home-title-line">${escapeHtml(info.department)}</p>
            <p class="home-inst-line">${escapeHtml(info.college)} • ${escapeHtml(info.location || "Kanuru, Vijayawada, India")}</p>
            
            <div class="home-badges">
              <span class="home-badge home-badge--primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Roll: ${escapeHtml(info.rollNumber)}
              </span>
              <span class="home-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                ${escapeHtml(info.year)} • ${escapeHtml(info.semester)}
              </span>
              <span class="home-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                ${escapeHtml(info.subject)} (${escapeHtml(info.courseCode || "24IT385")})
              </span>
            </div>
          </div>
        </section>

        <!-- 2. Academic Enrollment Details Grid -->
        <section class="home-section">
          <div class="home-section-header">
            <div class="home-header-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            </div>
            <h3 class="home-col-title">Academic &amp; Enrollment Details</h3>
          </div>
          <div class="home-academic-grid">
            <div class="home-academic-card">
              <span class="home-academic-label">Candidate Name</span>
              <span class="home-academic-val">${escapeHtml(info.name)}</span>
            </div>
            <div class="home-academic-card">
              <span class="home-academic-label">University Roll Number</span>
              <span class="home-academic-val home-academic-val--highlight">${escapeHtml(info.rollNumber)}</span>
            </div>
            <div class="home-academic-card">
              <span class="home-academic-label">Department</span>
              <span class="home-academic-val">${escapeHtml(info.department)}</span>
            </div>
            <div class="home-academic-card">
              <span class="home-academic-label">Institution</span>
              <span class="home-academic-val">${escapeHtml(info.college)}</span>
            </div>
            <div class="home-academic-card">
              <span class="home-academic-label">Laboratory Course</span>
              <span class="home-academic-val">${escapeHtml(info.subject)} (${escapeHtml(info.courseCode || "24IT385")})</span>
            </div>
            <div class="home-academic-card">
              <span class="home-academic-label">Year of Study &amp; Semester</span>
              <span class="home-academic-val">${escapeHtml(info.year)} • ${escapeHtml(info.semester)} (${escapeHtml(info.academicYear || "2025–2026")})</span>
            </div>
          </div>
        </section>

        <!-- 3. Quick Access to Laboratory Practicals -->
        <section class="home-section">
          <div class="home-section-header">
            <div class="home-header-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </div>
            <h3 class="home-col-title">Laboratory Practical Records (Weeks 1 to 13)</h3>
          </div>
          <div class="home-weeks-grid">
            ${LAB_RECORDS.filter(Boolean).map((w) => {
              const subCount = w.subsections?.length || 0;
              const meta = subCount === 1 ? "1 topic" : subCount + " topics";
              return `
                <a href="#${w.id}" class="home-week-card" title="Open ${escapeHtml(w.label)}">
                  <div class="home-week-header">
                    <span class="home-week-pill">${escapeHtml(w.label)}</span>
                    <span class="home-week-meta">${meta}</span>
                  </div>
                  <h4 class="home-week-title">${escapeHtml(w.title)}</h4>
                </a>
              `;
            }).join("")}
          </div>
        </section>

        <!-- 4. Academic Institutional Footer -->
        <footer class="home-footer">
          <p>Advanced Java Programming Laboratory Record (24IT385) • Department of Information Technology • ${escapeHtml(info.college)}</p>
        </footer>
      </div>
    `;
  }

  function renderWeek(week, subsectionId) {
    if (week.isHome) {
      renderHomePage();
      return;
    }

    if (week.subsections?.length) {
      renderUnit(week, subsectionId || activeSubsectionId);
      return;
    }

    currentActiveWeek = week;
    pageEyebrow.textContent = week.label;
    pageTitle.textContent = week.title;

    const docs = week.documents || [];
    panel.innerHTML = `
      <div class="notes-layout">
        <section class="notes-hero">
          <p class="notes-kicker">${escapeHtml(week.label)}</p>
          <h3>${escapeHtml(week.title)}</h3>
          <p class="notes-lead">${escapeHtml(week.lead || week.intro || "")}</p>
        </section>
      </div>
    `;
  }

  function getTopic(topicId) {
    return (
      ADV_JAVA_NOTES.topics.find((t) => t.id === topicId) ||
      ADV_JAVA_NOTES.topics[0]
    );
  }

  function renderIntroduction(topicId) {
    if (!ADV_JAVA_NOTES?.topics?.length) {
      panel.innerHTML =
        "<p class='no-docs'>Notes missing. Check <code>js/notes.js</code>.</p>";
      return;
    }

    activeTopicId = topicId || activeTopicId || ADV_JAVA_NOTES.topics[0].id;
    const topic = getTopic(activeTopicId);

    pageEyebrow.textContent = "Curriculum Reference";
    pageTitle.textContent = ADV_JAVA_NOTES.title;

    const topicTabs = ADV_JAVA_NOTES.topics
      .map(
        (t) => `
      <button
        type="button"
        class="topic-tab ${t.id === topic.id ? "active" : ""}"
        data-topic="${t.id}"
      >
        ${escapeHtml(t.title)}
      </button>`
      )
      .join("");

    panel.innerHTML = `
      <div class="notes-layout">
        <section class="notes-hero">
          <p class="notes-kicker">Curriculum Reference • Textbook Notes</p>
          <h3>${escapeHtml(ADV_JAVA_NOTES.title)}</h3>
          <p class="notes-lead">${escapeHtml(ADV_JAVA_NOTES.subtitle)}</p>
          <p class="notes-overview">${escapeHtml(ADV_JAVA_NOTES.overview)}</p>
        </section>

        <div class="topic-tabs" role="tablist" aria-label="Advanced Java topics">
          ${topicTabs}
        </div>

        <div class="notes-body" role="tabpanel">
          ${topic.html}
        </div>
      </div>
    `;
  }

  function selectWeek(id, subsectionId) {
    const week = LAB_RECORDS.filter(Boolean).find((w) => w.id === id);
    if (!week) return;
    currentActiveWeek = week;
    renderNav(id);
    renderWeek(week, subsectionId);
    if (week.subsections?.length) {
      const sub = subsectionId || activeSubsectionId || week.subsections[0].id;
      history.replaceState(null, "", `#${id}/${sub}`);
    } else {
      history.replaceState(null, "", `#${id}`);
    }
  }

  function selectIntroduction(topicId) {
    renderNav("introduction");
    renderIntroduction(topicId);
    const hash = topicId ? `introduction/${topicId}` : "introduction";
    history.replaceState(null, "", `#${hash}`);
  }

  function selectHome() {
    renderNav("home");
    renderHomePage();
    history.replaceState(null, "", "#home");
  }

  // ===== ENHANCED DOCUMENT VIEWER (DOCX + PDF) =====
  function openViewer(doc) {
    viewerTitle.textContent = doc.name || fileName(doc.file);
    const isDocx = (doc.file || "").toLowerCase().endsWith(".docx");

    let docxPreviewEl = document.getElementById("viewerDocxPreview");
    if (!docxPreviewEl) {
      docxPreviewEl = document.createElement("div");
      docxPreviewEl.id = "viewerDocxPreview";
      docxPreviewEl.className = "viewer-docx-preview";
      frame.parentNode.insertBefore(docxPreviewEl, frame);
    }

    if (isDocx) {
      frame.style.display = "none";
      docxPreviewEl.style.display = "flex";
      docxPreviewEl.innerHTML = `
        <div class="docx-preview-card">
          <div class="docx-preview-icon">DOCX</div>
          <h4>${escapeHtml(doc.name || fileName(doc.file))}</h4>
          <p class="docx-preview-meta">Microsoft Word Laboratory Document • 24IT385</p>
          <p class="docx-preview-desc">
            Candidate: <strong>V Saravan (24EU08198)</strong><br />
            Department of Information Technology, Siddhartha Academy of Higher Education.<br />
            Contains formal problem statement, architecture theory, source code listing, schema tables, and terminal execution observations.
          </p>
          <div class="docx-preview-actions">
            <a href="${escapeHtml(doc.file)}" download="${fileName(doc.file)}" class="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>Download Word Document (.docx)</span>
            </a>
          </div>
        </div>
      `;
    } else {
      if (docxPreviewEl) docxPreviewEl.style.display = "none";
      frame.style.display = "block";
      frame.src = doc.file;
    }

    overlay.hidden = false;
    overlay.classList.remove("hiding");
    document.body.style.overflow = "hidden";
  }

  function hideViewer() {
    overlay.classList.add("hiding");
    setTimeout(() => {
      overlay.hidden = true;
      frame.src = "";
      document.body.style.overflow = "";
    }, 200);
  }

  // ===== LIGHTBOX MODAL CONTROLLER =====
  function openLightbox(src, caption) {
    if (!lightboxOverlay || !lightboxImage) return;
    lightboxImage.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption || "";
    lightboxOverlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function hideLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.hidden = true;
    if (lightboxImage) lightboxImage.src = "";
    document.body.style.overflow = "";
  }

  if (closeLightbox) closeLightbox.addEventListener("click", hideLightbox);
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener("click", (e) => {
      if (e.target === lightboxOverlay) hideLightbox();
    });
  }

  // Mobile sidebar drawer toggle
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  const brandEl = document.querySelector(".brand");
  if (brandEl) {
    brandEl.addEventListener("click", () => {
      selectHome();
      if (sidebar) sidebar.classList.remove("open");
    });
  }

  introNavBtn.addEventListener("click", () => {
    selectIntroduction(activeTopicId);
    if (sidebar) sidebar.classList.remove("open");
  });

  nav.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-week]");
    if (!btn) return;
    activeSubsectionId = null;
    selectWeek(btn.dataset.week);
    if (sidebar) sidebar.classList.remove("open");
  });

  panel.addEventListener("click", (e) => {
    const filterBtn = e.target.closest("[data-unit-filter]");
    if (filterBtn) {
      const filter = filterBtn.dataset.unitFilter;
      panel.querySelectorAll(".unit-filter-btn").forEach((b) => b.classList.toggle("active", b === filterBtn));
      panel.querySelectorAll(".topic-tab[data-section-unit]").forEach((tab) => {
        const match = filter === "all" || tab.dataset.sectionUnit === filter;
        tab.style.display = match ? "" : "none";
      });
      requestAnimationFrame(updateTabIndicator);
      return;
    }

    const subBtn = e.target.closest("[data-subsection]");
    if (subBtn) {
      selectWeek(subBtn.dataset.unit, subBtn.dataset.subsection);
      return;
    }

    const topicBtn = e.target.closest("[data-topic]");
    if (topicBtn) {
      selectIntroduction(topicBtn.dataset.topic);
      panel.querySelector(".notes-body")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const copyBtn = e.target.closest(".btn-copy-code");
    if (copyBtn) {
      const codeEl = copyBtn.closest(".lab-section")?.querySelector(".lab-code code");
      if (codeEl) {
        const textToCopy = codeEl.textContent;
        const btnSpan = copyBtn.querySelector("span");
        const notifyCopied = () => {
          copyBtn.classList.add("copied");
          if (btnSpan) btnSpan.textContent = "Copied!";
          setTimeout(() => {
            copyBtn.classList.remove("copied");
            if (btnSpan) btnSpan.textContent = "Copy Code";
          }, 2000);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).then(notifyCopied).catch(() => {
            const ta = document.createElement("textarea");
            ta.value = textToCopy;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
            notifyCopied();
          });
        } else {
          const ta = document.createElement("textarea");
          ta.value = textToCopy;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          notifyCopied();
        }
      }
      return;
    }

    // Lightbox click on screenshot figure
    const figure = e.target.closest("[data-lightbox]");
    if (figure) {
      openLightbox(figure.dataset.lightbox, figure.dataset.caption);
      return;
    }

    const viewDocBtn = e.target.closest("[data-view-doc]");
    if (viewDocBtn) {
      openViewer({
        file: viewDocBtn.dataset.viewDoc,
        name: viewDocBtn.dataset.docName || "Curriculum Vitae"
      });
      return;
    }

    const btn = e.target.closest("[data-view]");
    if (!btn) return;
    const [weekId, indexStr] = btn.dataset.view.split(":");
    const week = LAB_RECORDS.filter(Boolean).find((w) => w.id === weekId);
    const doc = week?.documents?.[Number(indexStr)];
    if (doc) openViewer(doc);
  });

  closeViewer.addEventListener("click", hideViewer);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) hideViewer();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!overlay.hidden) hideViewer();
      if (lightboxOverlay && !lightboxOverlay.hidden) hideLightbox();
    }
  });

  // Client-Side Hash Router
  const rawHash = location.hash.replace(/^#/, "");
  if (rawHash === "home") {
    selectHome();
  } else if (rawHash === "introduction" || rawHash.startsWith("introduction/")) {
    const topicFromHash = rawHash.split("/")[1] || null;
    selectIntroduction(topicFromHash);
  } else if (rawHash) {
    const [recordId, subId] = rawHash.split("/");
    const resolvedId = (recordId === "unit-1" || recordId === "unit-2") ? "week-3" : recordId;
    const weekMatch = LAB_RECORDS.filter(Boolean).find((w) => w.id === resolvedId);
    if (weekMatch) {
      selectWeek(weekMatch.id, subId || null);
    } else {
      selectIntroduction(ADV_JAVA_NOTES.topics[0].id);
    }
  } else {
    // Default route to home dashboard or week-1
    selectHome();
  }

  window.addEventListener("hashchange", () => {
    const currentHash = location.hash.replace(/^#/, "");
    if (currentHash === "home") {
      selectHome();
    } else if (currentHash === "introduction" || currentHash.startsWith("introduction/")) {
      const topicFromHash = currentHash.split("/")[1] || null;
      selectIntroduction(topicFromHash);
    } else if (currentHash) {
      const [recordId, subId] = currentHash.split("/");
      const resolvedId = (recordId === "unit-1" || recordId === "unit-2") ? "week-3" : recordId;
      const weekMatch = LAB_RECORDS.filter(Boolean).find((w) => w.id === resolvedId);
      if (weekMatch) {
        selectWeek(weekMatch.id, subId || null);
      }
    }
  });

  // ===== Scroll reveal observer =====
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });

  function observeRevealElements() {
    const panel = document.getElementById("weekPanel");
    if (!panel) return;
    const elements = panel.querySelectorAll(
      ".lab-section, .intro-card, .notes-hero, .doc-card, .screenshot-card, .result-list li, .lab-code, .lab-shot, .home-hero, .home-section"
    );
    elements.forEach((el, i) => {
      el.classList.add("reveal-on-scroll");
      if (i < 7) el.classList.add(`stagger-${(i % 7) + 1}`);
      revealObserver.observe(el);
    });
  }

  // ===== Tab indicator animation =====
  function updateTabIndicator() {
    const tabsContainer = panel?.querySelector(".topic-tabs");
    const activeTab = tabsContainer?.querySelector(".topic-tab.active");
    if (tabsContainer && activeTab) {
      const rect = activeTab.getBoundingClientRect();
      const containerRect = tabsContainer.getBoundingClientRect();
      tabsContainer.style.setProperty("--active-tab-width", `${rect.width}px`);
      tabsContainer.style.setProperty("--active-tab-left", `${rect.left - containerRect.left}px`);
      tabsContainer.classList.add("has-active");
    }
  }

  // Observe after each render
  const originalRenderWeek = renderWeek;
  renderWeek = function(week, subsectionId) {
    originalRenderWeek(week, subsectionId);
    requestAnimationFrame(() => {
      observeRevealElements();
      updateTabIndicator();
    });
  };

  const originalRenderIntroduction = renderIntroduction;
  renderIntroduction = function(topicId) {
    originalRenderIntroduction(topicId);
    requestAnimationFrame(() => {
      observeRevealElements();
      updateTabIndicator();
    });
  };

  const originalRenderHomePage = renderHomePage;
  renderHomePage = function() {
    originalRenderHomePage();
    requestAnimationFrame(() => {
      observeRevealElements();
    });
  };

  panel.addEventListener("click", (e) => {
    const tabBtn = e.target.closest(".topic-tab[data-subsection], .topic-tab[data-topic]");
    if (tabBtn) {
      requestAnimationFrame(updateTabIndicator);
    }
  });

  requestAnimationFrame(() => {
    observeRevealElements();
    updateTabIndicator();
  });
})();
