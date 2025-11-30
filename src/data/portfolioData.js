// Central data configuration file for the portfolio
// All content can be easily updated here

export const personalInfo = {
  name: "Pranav Mehrotra",
  pronouns: "He/Him",
  title: "Undergraduate in Computer Science & Math",
  subtitle: "Passionate about Mathematical Modeling, Computer Science, and Finance",
  location: "Madison, Wisconsin, United States",
  university: "University of Wisconsin-Madison",
  department: "UW-Madison CDIS",
  email: "mehrotra.pranav123@gmail.com",
  phone: "+1 (608) 286 5294",
  linkedin: "https://www.linkedin.com/in/pranav-mehrotra-a57747175",
  github: "https://github.com/pmehrotra3"
};

export const about = {
  description: `I am an undergraduate at the University of Wisconsin-Madison, majoring in Computer Science with a current GPA of 3.645. My passion lies in Mathematical Modeling and Algorithm Analysis, and I enjoy applying these skills to various practical aspects such as portfolio management, renewable energy system analysis, and supply chain planning.

I have hands-on experience with Python, Java, and MySQL, focusing on analyzing and storing data. I have built models using logistic regression, neural networks, decision trees, and clustering techniques.

In my coursework, I have delved into algorithms, linear optimization, and AI, providing a solid foundation for my interests. I am eager to leverage these skills and my enthusiasm for creating innovative solutions to real-world problems, particularly in finance, energy, and logistics.`
};

export const experiences = [
  {
    id: 1,
    title: "Senior Honors Thesis (SAGEnet)",
    company: "UW-Madison CDIS",
    type: "Part-time",
    location: "Madison, Wisconsin, United States",
    startDate: "May 2025",
    endDate: "Present",
    duration: "7 mos",
    current: true,
    description: "Working with Professor Josiah Hanna as my advisor, independently developing SAGEnet – a Gaussian evolution, block-wise CMA-ES neural policy optimizer that serves as a gradient-free alternative to backprop-based policy optimization in reinforcement learning.",
    skills: ["Research Skills", "Reinforcement Learning", "C++", "Python"]
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Epistemic Analytics",
    type: "Part-time",
    location: "Madison, Wisconsin, United States · Hybrid",
    startDate: "Apr 2024",
    endDate: "Present",
    duration: "1 yr 8 mos",
    current: true,
    description: "Currently contributing to the Epistemic Analytics lab, specializing in debugging and enhancing algorithm efficiency in R and R Markdown. Testing and analyzing new code pieces to support computational techniques and statistical tools for Epistemic Network Analysis (ENA) in education, healthcare, and policy domains. Thriving under the mentorship of Cody Marquart, Associate Director for Technology.",
    skills: ["R (Programming Language)", "Statistical Data Analysis", "Software Development", "Debugging Code", "Testing", "Algorithms"],
    highlights: [
      "Dynamic Publications Interface: Developed a dynamic publications interface using JavaScript and the Zotero API so that new items added to the Zotero library automatically appear on the lab website without manual updates.",
      "Multilingual Research Websites: Implemented site-wide multilingual support for the iPlan Angular site using ngx-translate and Angular, including a language selector, JSON-based translation files, and a caching layer.",
      "RAG Curriculum Q&A System: Built a retrieval-augmented generation (RAG) system for the iPlan site using a Python web crawler, stored chunked text in a ChromaDB vector database, and connected it to a locally hosted Ollama model.",
      "ENA Repository Debugging: Debugged R-based data analysis workflows in the ENA repository in response to user-reported inconsistencies, improving performance, reliability, and maintainability."
    ]
  }
];

export const education = [
  {
    id: 1,
    institution: "University of Wisconsin-Madison",
    degree: "B.Sc. in Computer Science (Honors) and Mathematics",
    grade: "Senior",
    gpa: "3.645",
    startDate: "Sep 2022",
    endDate: "Jun 2026",
    location: "Madison, Wisconsin",
    computerScienceCourses: [
      "COMP SCI 540 – Introduction to Artificial Intelligence",
      "COMP SCI 577 – Introduction to Algorithms (Honors)",
      "COMP SCI 524 – Introduction to Optimization",
      "COMP SCI 525 – Linear Optimization (Proof based)",
      "COMP SCI 544 – Introduction to Big Data Systems",
      "COMP SCI 537 – Introduction to Operating Systems",
      "COMP SCI 639 – Game Theory and Learning",
      "COMP SCI 681 – Senior Honors Thesis in Computer Sciences"
    ],
    mathematicsCourses: [
      "MATH 521 – Analysis I",
      "MATH 531 – Probability Theory (Honors)",
      "MATH 571 – Mathematical Logic (Honors)",
      "MATH 632 – Introduction to Stochastic Processes (Honors)",
      "MATH 541 – Modern Algebra"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Distributed Memetic Algorithm for the Traveling Salesman Problem (TSP)",
    date: "May 2025 - Present",
    description: "In this project, I developed a distributed memetic algorithm to solve the NP-hard Traveling Salesman Problem (TSP) at scale. The system combines a C++ genetic algorithm engine, enhanced with 2-opt and 3-opt heuristics, with a Python orchestrator that manages distributed execution. The two components communicate via Redis signals, which synchronize population migrations across parallel islands.",
    longDescription: `At the algorithmic core, the GA evolves solutions using crossover and mutation, while local refinements exploit Euclidean structure to improve tour quality. To ensure scalability, I implemented a dual-level strategy. Horizontally, an island model runs in Docker containers: each evolves subpopulations independently and periodically exchanges solutions through Redis, where a Python coordinator applies stochastic best-of-K migration before redistributing updated populations. Vertically, within each container, the C++ engine leverages OpenMP parallelism to accelerate crossover, mutation, and refinement across CPU cores.

The systems design ensures modularity and efficiency: C++ delivers raw computational performance, Python orchestrates container lifecycles and migration, Redis serves as a lightweight message broker, and Docker guarantees reproducibility and portability.

This integration allowed the system to achieve near-optimal tours (within ~0.5% error) on benchmarks with up to 1000 cities—a scale at which brute-force search (10^2564 possible tours) is physically impossible. By blending evolutionary computation, heuristic search, parallel computing, and distributed systems, this project demonstrates how hybrid AI + systems engineering can address massive combinatorial problems.`,
    skills: [
      "Genetic Algorithms & Memetic Algorithms",
      "Distributed Systems Engineering",
      "Parallel Computing (OpenMP)",
      "Docker & Containerization",
      "Redis Integration",
      "C++",
      "Python"
    ],
    github: "https://github.com/pmehrotra3/tsp-island-ga-plus",
    tags: ["Algorithms", "Distributed Systems", "C++", "Python"]
  },
  {
    id: 2,
    title: "SAGEnet: An Alternative RL Policy Optimization Method Using Block-wise CMA-ES",
    date: "May 2025 - Present",
    affiliation: "University of Wisconsin-Madison",
    description: "For my thesis I'm building SAGEnet, an alternative policy optimization framework for reinforcement learning based on block-wise CMA-ES, instead of standard policy-gradient methods like PPO or SAC.",
    longDescription: `Rather than using backpropagation, I treat the policy network as a black box and optimize directly in weight space. The network parameters are modeled by a block-diagonal CMA-ES: each small group of neurons has its own Gaussian (mean + covariance) over weights and biases. For each episode I sample one full network, run a full episode, and use the total return as the fitness.

I keep a rolling buffer of the last 20 policies, select the top 5 "elite" policies, and update the block-wise Gaussians using CMA-ES style mean and covariance adaptation. This gives a structured, second-order evolutionary update rule over the policy, with no gradients, no TD-learning, and no backprop.

On the systems side, I built a Redis-backed Gymnasium server in Python, a C++ CMA-ES agent implementing this block-wise + FIFO + top-k update, and a set of baseline agents (PPO, A2C, SAC, DQN via Stable-Baselines3) that share the same Redis interface. This lets me benchmark SAGEnet directly against modern RL algorithms and study when evolutionary policy search can realistically act as an alternative to gradient-based policy optimization.`,
    skills: ["Research Skills", "Reinforcement Learning", "C++", "Python", "Redis"],
    github: "https://github.com/pmehrotra3/SAGEnet",
    tags: ["Machine Learning", "Research", "C++", "Python"]
  },
  {
    id: 3,
    title: "MetalPy: GPU Array Library for Apple Silicon",
    date: "2024",
    description: "Implemented a CuPy-like GPU library on top of Apple's Metal via PyObjC, with 40+ compute kernels for elementwise math (add, mul, pow, exp, trig), neural activations (ReLU, leaky ReLU, Swish, GELU, etc.), reductions (sum, mean, max/min, argmax/argmin), and tiled matrix multiplication/transpose.",
    longDescription: "Optimized reductions using threadgroups, grouped work sizes, and persistent GPU buffers to minimize allocations and kernel launches, beating NumPy on large (> 5 × 10^6 element) arrays.",
    skills: ["Metal", "PyObjC", "GPU Computing", "Python", "Performance Optimization"],
    tags: ["GPU", "Python", "Performance"]
  },
  {
    id: 4,
    title: "Dimensionality Reduction using PCA",
    date: "Nov 2024",
    description: "In this project, I implemented two Random Forest Classifiers to classify a high-dimensional dataset. The first model, without using Principal Component Analysis (PCA), achieved high accuracy but took significant time to train. The second model, incorporating PCA to reduce the dataset's dimensionality, decreased the training time by 71%, while retaining 96% of the original model's accuracy.",
    skills: [
      "Machine Learning",
      "Principal Component Analysis",
      "Random Forest Classifier",
      "Python (scikit-learn)",
      "Model Optimization"
    ],
    tags: ["Machine Learning", "Python", "Optimization"]
  },
  {
    id: 5,
    title: "Resource Allocation Optimizer",
    date: "2024",
    description: "Implemented a linear-programming-based resource allocation optimizer in Julia using JuMP with HiGHS and Gurobi solvers, applied to a computer-parts supply chain to maximize profit under capacity and demand constraints.",
    skills: ["Julia", "JuMP", "Linear Programming", "Optimization"],
    tags: ["Optimization", "Julia"]
  },
  {
    id: 6,
    title: "Online Auction Server",
    date: "2024",
    description: "Built an Express.js and Node.js REST API for an online auction platform with real-time bidding support and automated item listing workflows.",
    skills: ["Node.js", "Express.js", "REST API", "JavaScript"],
    tags: ["Web Development", "Node.js", "API"]
  }
];

export const skills = {
  languages: [
    "Python",
    "C++",
    "C",
    "Objective-C",
    "Java",
    "JavaScript",
    "Julia",
    "R"
  ],
  frameworks: [
    "Node.js",
    "Express.js",
    "Angular",
    "React"
  ],
  tools: [
    "Redis",
    "Docker",
    "OpenMP",
    "Git",
    "PostgreSQL",
    "ChromaDB",
    "Ollama"
  ],
  libraries: [
    "JuMP",
    "HiGHS",
    "Gurobi",
    "scikit-learn",
    "Stable-Baselines3",
    "Metal (PyObjC)"
  ],
  domains: [
    "Machine Learning",
    "Reinforcement Learning",
    "Distributed Systems",
    "Parallel Computing",
    "Algorithm Analysis",
    "Mathematical Modeling",
    "Optimization",
    "Statistical Data Analysis"
  ]
};

export const socialLinks = [
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "email"
  },
  {
    name: "LinkedIn",
    url: personalInfo.linkedin,
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: personalInfo.github,
    icon: "github"
  }
];
