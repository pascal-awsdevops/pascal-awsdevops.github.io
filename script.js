// Employment history data using the STAR method
const jobs = [
  {
    role: "Cloud Support Engineer (Remote)",
    company: "AzureTech Global Solutions, UAE",
    duration: "Jan 2024 – Present",
    star: `
    • Situation: Company migrating 20+ legacy apps to AWS.<br>
    • Task: Migrate infrastructure and improve uptime.<br>
    • Action: Deployed VPC, EC2, RDS, and monitoring with Lambda.<br>
    • Result: Achieved 99.99% uptime with automated backups and alerts.
    `
  },
  {
    role: "DevOps Intern (Remote)",
    company: "TechNova Solutions, Australia",
    duration: "May 2023 – Dec 2023",
    star: `
    • Situation: Development delays due to manual deployment.<br>
    • Task: Automate CI/CD and cloud provisioning.<br>
    • Action: Built pipelines with GitHub Actions and Terraform.<br>
    • Result: Deployment time cut by 40%, improved team velocity.
    `
  }
];

// Utility to create a beautiful expandable card
function createTimelineCard(job) {
  const card = document.createElement("div");
  card.classList.add("timeline-item");

  const header = document.createElement("div");
  header.classList.add("timeline-header");
  header.innerHTML = `
    <h3 style="color: var(--primary); margin-bottom: 0.3rem;">${job.role}</h3>
    <p style="color: var(--secondary); font-weight: bold;">${job.company}</p>
    <p style="font-size: 0.9rem; color: var(--text);">${job.duration}</p>
  `;

  const details = document.createElement("div");
  details.classList.add("star-details");
  details.innerHTML = job.star;
  details.style.display = "none";

  // Toggle STAR section with animation
  header.addEventListener("click", () => {
    const isVisible = details.style.display === "block";
    details.style.display = isVisible ? "none" : "block";
    details.classList.toggle("fade-in", !isVisible);
  });

  card.appendChild(header);
  card.appendChild(details);
  return card;
}

// Render all jobs in the timeline
const timeline = document.getElementById("timeline");
jobs.forEach(job => {
  timeline.appendChild(createTimelineCard(job));
});

// Optional: Fade-in animation CSS (inject via JS if not in CSS file)
const style = document.createElement('style');
style.innerHTML = `
  .fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
