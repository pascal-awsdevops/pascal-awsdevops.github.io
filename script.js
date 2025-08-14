// Employment history data using STAR method (centralized for professional appeal)
const jobs = [
  {
    role: "Cloud Support Engineer (Remote)",
    company: "AzureTech Global Solutions, UAE",
    duration: "Jan 2024 – Present",
    star: `
      • <strong>Situation:</strong> Company migrating 20+ legacy apps to AWS.<br>
      • <strong>Task:</strong> Migrate infrastructure and improve uptime.<br>
      • <strong>Action:</strong> Deployed VPC, EC2, RDS, Lambda monitoring, and automated alerts.<br>
      • <strong>Result:</strong> Achieved 99.99% uptime with automated backups and proactive monitoring.
    `
  },
  {
    role: "AWS Cloud Engineer (Remote)",
    company: "Freelance / Remote",
    duration: "Jan 2023 – Dec 2023",
    star: `
      • <strong>Situation:</strong> Multiple small businesses required cloud migration and automation.<br>
      • <strong>Task:</strong> Deploy scalable and secure AWS infrastructure.<br>
      • <strong>Action:</strong> Built IaC templates using Terraform & CloudFormation; automated CI/CD pipelines with GitHub Actions.<br>
      • <strong>Result:</strong> Reduced deployment time by 50%, improved reliability, and optimized cloud costs.
    `
  },
  {
    role: "DevOps Intern (Remote)",
    company: "TechNova Solutions, Australia",
    duration: "May 2023 – Oct 2023",
    star: `
      • <strong>Situation:</strong> Development delays due to manual deployments.<br>
      • <strong>Task:</strong> Automate CI/CD and cloud provisioning.<br>
      • <strong>Action:</strong> Built pipelines with GitHub Actions, Dockerized apps, and implemented Terraform IaC.<br>
      • <strong>Result:</strong> Deployment time cut by 40%, improved team velocity and workflow consistency.
    `
  },
  {
    role: "Volunteer Cloud Engineer",
    company: "OpenSource Cloud Initiative, Remote",
    duration: "Mar 2022 – Aug 2022",
    star: `
      • <strong>Situation:</strong> Non-profit organization needed cloud infrastructure for internal apps.<br>
      • <strong>Task:</strong> Deploy cost-effective cloud solutions for volunteers.<br>
      • <strong>Action:</strong> Set up AWS free-tier infrastructure, automated backups, and serverless functions.<br>
      • <strong>Result:</strong> Reduced operational costs by 70%, enabled remote team collaboration.
    `
  },
  {
    role: "Junior Cloud Support Engineer",
    company: "ABC Tech Services, Remote",
    duration: "Jan 2022 – Dec 2022",
    star: `
      • <strong>Situation:</strong> Client issues with AWS resource configuration.<br>
      • <strong>Task:</strong> Troubleshoot and optimize cloud resources.<br>
      • <strong>Action:</strong> Assisted in migrations, monitored logs, and configured alerts.<br>
      • <strong>Result:</strong> Increased customer satisfaction and improved cloud reliability.
    `
  }
];

// Utility to create a beautiful, centralized expandable card
function createTimelineCard(job) {
  const card = document.createElement("div");
  card.classList.add("timeline-item");

  const header = document.createElement("div");
  header.classList.add("timeline-header");
  header.innerHTML = `
    <h3 style="color: var(--harvard-crimson); margin-bottom: 0.3rem; text-align: center;">${job.role}</h3>
    <p style="color: var(--mit-blue); font-weight: bold; text-align: center;">${job.company}</p>
    <p style="font-size: 0.95rem; color: var(--dark-text); text-align: center;">${job.duration}</p>
  `;

  const details = document.createElement("div");
  details.classList.add("star-details");
  details.innerHTML = `<p style="text-align: center;">${job.star}</p>`;
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

// Inject fade-in and card styles
const style = document.createElement('style');
style.innerHTML = `
  .fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .timeline-item {
    background: #fff;
    border-left: 4px solid var(--aws-orange);
    padding: 1rem 1.5rem;
    margin-bottom: 1.8rem;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(0,0,0,0.1);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .timeline-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }

  .timeline-header h3,
  .timeline-header p {
    margin: 0.2rem 0;
  }

  .star-details {
    margin-top: 1rem;
    color: var(--dark-text);
    line-height: 1.6;
  }
`;
document.head.appendChild(style);
