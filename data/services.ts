// Copy source: content doc (Expertise page) and PRD section 3.3. Nothing here is invented.
import type { Post } from "./posts";

export type Service = {
  slug: string;
  code: string;
  title: string;
  summary: string;
  detail: string;
  focus: string;
  deliverables: string[];
  included?: { title: string; items: string[] };
  relatedCategory?: Post["categories"][number];
};

export const services: Service[] = [
  {
    slug: "tech-leadership",
    code: "TL",
    title: "Tech Leadership",
    summary: "Guiding your organization with a clear technology vision.",
    detail: "Guiding your organization with a clear technology vision that aligns engineering, product, and business outcomes.",
    focus: "Clear technology vision for organizations.",
    deliverables: ["Executive coaching", "Technology strategy"],
  },
  {
    slug: "fractional-cto",
    code: "CT",
    title: "Fractional CTO",
    summary: "Aligning IT strategy with business objectives for sustainable growth.",
    detail: "Aligning IT strategy with business objectives for sustainable growth, from audits to execution.",
    focus: "Strategic vision, aligning IT with business goals.",
    deliverables: ["CTO-as-a-Service", "Technology due diligence", "Roadmapping"],
    included: {
      title: "Technology strategy and executive leadership",
      items: [
        "CTO-as-a-Service for startups and scale-ups.",
        "Technology due diligence for investors.",
        "Leading distributed teams across the UK, Africa, and beyond.",
        "Roadmapping scalable products.",
        "Navigating compliance, security, and market readiness.",
      ],
    },
  },
  {
    slug: "best-use-of-ai",
    code: "AI",
    title: "Best Use of AI",
    summary: "Artificial intelligence enhances consulting by driving innovation.",
    detail: "Artificial intelligence enhances consulting by driving innovation, efficiency, and competitive advantage.",
    focus: "AI implementation and innovation.",
    deliverables: ["LLM integration (GPT-4, Claude)", "RAG", "MLOps", "AI training for non-tech professionals"],
    included: {
      title: "Artificial intelligence and machine learning",
      items: [
        "Fine-tuning LLMs like GPT-4, Claude, and Gemini for domain-specific performance.",
        "Building autonomous agents and multi-domain AI workflows.",
        "Designing ethical, human-aligned AI systems with governance.",
        "AI training for non-technical professionals.",
      ],
    },
    relatedCategory: "Best Use Of AI",
  },
  {
    slug: "engineering-management",
    code: "EM",
    title: "Engineering Management",
    summary: "Enabling strategic decision-making for business success.",
    detail: "Enabling strategic decision-making for business success through proven engineering practices.",
    focus: "Strategic decision-making, managing global teams.",
    deliverables: ["Team structuring", "Process optimization"],
  },
  {
    slug: "technology-talent-development",
    code: "TD",
    title: "Technology Talent Development",
    summary: "Empowering your teams with the skills and knowledge needed to excel.",
    detail: "Empowering your teams with the skills and knowledge needed to excel in a fast-changing landscape.",
    focus: "Training, mentorship, job placement.",
    deliverables: ["Curriculum development", "Mentorship programs"],
  },
  {
    slug: "tech-talent-visa",
    code: "TV",
    title: "Tech Talent Visa",
    summary: "Empowering global tech experts to contribute to the UK's thriving technology ecosystem.",
    detail: "Empowering global tech experts to contribute to the UK's thriving technology ecosystem.",
    focus: "UK Global Talent Visa coaching.",
    deliverables: ["Relocation pathways", "Visa processing", "Integration support"],
    relatedCategory: "Visa",
  },
  {
    slug: "best-use-of-technology",
    code: "BT",
    title: "Best Use of Technology",
    summary: "Technology is best when it brings people together and increases their knowledge.",
    detail: "Technology is best when it brings people together and increases their knowledge.",
    focus: "Using tech to bring people together and increase knowledge.",
    deliverables: ["Community building", "Knowledge sharing platforms"],
  },
  {
    slug: "startup-scaleup-advisory",
    code: "SA",
    title: "Startup / Scaleup Advisory",
    summary: "Strategic growth, funding, mentorship, scalability, innovation, and leadership.",
    detail: "Strategic growth, funding, mentorship, scalability, innovation, and leadership.",
    focus: "Growth, funding, mentorship, scaling to acquisition.",
    deliverables: ["Strategic advisory", "Fundraising support"],
    included: {
      title: "Research beyond the business plan",
      items: ["Client prospecting.", "Website research.", "Grant and funding research."],
    },
  },
];

export const offerGroups = [
  {
    title: "Artificial Intelligence & Machine Learning",
    items: [
      "Fine-tuning LLMs like GPT-4, Claude, and Gemini for domain-specific performance.",
      "Building autonomous agents and multi-domain AI workflows.",
      "Designing ethical, human-aligned AI systems with governance.",
      "AI training for non-technical professionals.",
    ],
  },
  {
    title: "Technology Strategy & Executive Leadership",
    items: [
      "CTO-as-a-Service for startups and scale-ups.",
      "Technology due diligence for investors.",
      "Leading distributed teams across the UK, Africa, and beyond.",
      "Roadmapping scalable products.",
      "Navigating compliance, security, and market readiness.",
    ],
  },
  {
    title: "Product Innovation & Delivery",
    items: [
      "Multi-platform products (mobile, API, web, messaging).",
      "Launching new product categories in fintech, healthtech, and govtech.",
      "Optimizing UX through data-driven design.",
      "Iterating with Agile, Scrum, and Lean Product methods.",
    ],
  },
  {
    title: "Research Beyond The Business Plan",
    items: ["Client Prospecting.", "Website Research.", "Grant & Funding Research."],
  },
];
