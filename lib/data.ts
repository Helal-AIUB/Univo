export interface Initiative {
  id: string;
  slug: string;
  title: string;
  category: "Soil Rights" | "Conservation" | "Youth Mobilization" | "Disaster Relief";
  location: string;
  summary: string;
  challenge: string;
  solution: string;
  status: "Active Field Work" | "Scaling" | "Continuous Operation";
  raised?: number;
  target?: number;
  image: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export const initiativesData: Initiative[] = [
  {
    id: "1",
    slug: "sylhet-emergency-flood-relief",
    title: "Sylhet Frontline Flood Defense & Soil Relief",
    category: "Disaster Relief",
    location: "Sylhet & Sunamganj Basin",
    summary: "Mobilizing youth vanguard units to distribute emergency biological soil treatments, clean water, and rebuild natural silt drainage banks following flash floods.",
    challenge: "Catastrophic monsoon floods submerge topsoil under contaminated silt, wiping out agricultural sustenance and leaving coastal settlements completely cut off.",
    solution: "We deployed 400+ trained student responders providing both immediate relief provisions and post-flood biological remediation to restore soil arability.",
    status: "Active Field Work",
    raised: 1500000,
    target: 2000000,
    image: "/cart/campaign1.jpg",
    metrics: [
      { label: "Families Protected", value: "3,800+" },
      { label: "Soil Acres Restored", value: "450" },
      { label: "Youth Deployed", value: "420" },
    ],
    tags: ["Disaster Response", "Soil Regeneration", "Youth Units"],
  },
  {
    id: "2",
    slug: "coastal-mangrove-regeneration",
    title: "Coastal Mangrove Shield & Salinity Defense",
    category: "Conservation",
    location: "Sundarbans Coastal Belt",
    summary: "Combating rising seawater intrusion by planting salt-tolerant mangrove buffers and training local youth collectives in natural estuary guardianship.",
    challenge: "Excessive salinity is penetrating inland delta soil, destroying biodiversity, killing agricultural fertility, and displacing coastal farming families.",
    solution: "Constructing natural biodiverse barriers with indigenous mangrove seedlings nurtured in community-run youth nurseries.",
    status: "Continuous Operation",
    raised: 850000,
    target: 1200000,
    image: "/cart/campaign2.jpg",
    metrics: [
      { label: "Mangrove Saplings", value: "50,000+" },
      { label: "Coastline Secured", value: "18 km" },
      { label: "Community Stewards", value: "950" },
    ],
    tags: ["Mangroves", "Salinity Defense", "Biodiversity"],
  },
  {
    id: "3",
    slug: "youth-climate-strike-academy",
    title: "Youth Leadership Vanguard & Legal Advocacy",
    category: "Youth Mobilization",
    location: "National (Dhaka, Chittagong, Sylhet)",
    summary: "Equipping young activists with environmental law literacy, grassroots organizing frameworks, and field campaign techniques.",
    challenge: "Youth voices are historically excluded from policy boardrooms, leaving industrial polluters unaccountable for land grabbing and dumping.",
    solution: "Structured regional chapters that mobilize university students to document environmental infringements and lead peaceful mass advocacy.",
    status: "Scaling",
    raised: 620000,
    target: 800000,
    image: "/events/1.jpg",
    metrics: [
      { label: "Certified Organizers", value: "1,200+" },
      { label: "Campus Chapters", value: "24" },
      { label: "Policy Petitions", value: "8" },
    ],
    tags: ["Policy Action", "Youth Leadership", "Advocacy"],
  },
  {
    id: "4",
    slug: "indigenous-soil-regeneration",
    title: "Grassroots Soil Rights & Microbial Health",
    category: "Soil Rights",
    location: "Northern Delta Plains",
    summary: "Replacing synthetic industrial fertilizers with organic micro-biome restoration techniques taught directly to marginal farmers.",
    challenge: "Decades of chemical runoff have depleted vital soil microbiomes, reducing crop yield and forcing farmers into predatory debt cycles.",
    solution: "Setting up local youth-assisted composting centers and free biological soil testing labs for farming communities.",
    status: "Active Field Work",
    raised: 950000,
    target: 1500000,
    image: "/cart/mission.jpg",
    metrics: [
      { label: "Farming Collectives", value: "34" },
      { label: "Soil Quality Gain", value: "+40%" },
      { label: "Testing Labs Active", value: "3" },
    ],
    tags: ["Soil Rights", "Regenerative Farming", "Zero Salinity"],
  },
];

export const impactMetrics = [
  { value: "50,000+", label: "Trees & Mangroves Planted", description: "Across endangered delta borders and vulnerable riverbeds." },
  { value: "৳2.4M+", label: "Frontline Relief Mobilized", description: "Direct non-profit aid delivered to flood and salinity affected regions." },
  { value: "12,000+", label: "Youth Mobilized", description: "Active students and organizers in our national environmental defense vanguard." },
  { value: "34", label: "Defended Communities", description: "Frontline agricultural villages protected through soil restoration and legal advocacy." },
];

export const verifiedLeadership = [
  {
    name: "Ahmed Sayeed",
    title: "Founder & Executive Director",
    organization: "Univo Environmental Initiative",
    bio: "Pioneering youth-led land rights advocacy and community mobilization across climate-vulnerable coastal belts.",
    image: "/member/sayeed.png",
  },
  {
    name: "Md. Helal Uddin",
    title: "Chairperson of Advisory Board",
    organization: "Institute of Climate & Ecology",
    bio: "Guiding ecological restoration policy and scientific oversight for soil regeneration initiatives.",
    image: "/member/helal.png",
  },
  {
    name: "Amir Hamza",
    title: "Founding Trustee & Operations Lead",
    organization: "Frontline Disaster Response",
    bio: "Coordinating logistical ground deployment and disaster resilience networks across the Sylhet basin.",
    image: "/member/amir.png",
  },
  {
    name: "Golam Rabbani Musanna",
    title: "Director of Youth Mobilization",
    organization: "Grassroots Climate Collective",
    bio: "Directing campus student chapters, environmental workshops, and direct community actions.",
    image: "/member/golam.png",
  },
  {
    name: "Hasib R. Tamim",
    title: "Head of Strategy & Impact",
    organization: "Sustainable Development Forum",
    bio: "Managing impact measurement frameworks, partnership alliances, and verified transparency reporting.",
    image: "/member/tamim.png",
  },
];

export const upcomingEvents = [
  {
    id: 1,
    step: "01",
    title: "Global Climate Strike & Soil Summit",
    date: "Sep 20, 2026",
    location: "Dhaka University Campus",
    image: "/events/1.jpg",
    description: "Join thousands of youth organizers to demand strict legal accountability for riverbank soil destruction and industrial chemical runoff.",
    stats: { attendees: "5,000+", impact: "Policy Action", focus: "Emissions & Soil" },
  },
  {
    id: 2,
    step: "02",
    title: "Coastal Mangrove Wall Restoration",
    date: "Oct 05, 2026",
    location: "Sundarbans Coastal Frontier",
    image: "/events/2.jpg",
    description: "A week-long field initiative to plant 15,000 salt-resistant mangrove saplings and build protective natural coastal buffers.",
    stats: { attendees: "1,200", impact: "Buffer Creation", focus: "Estuary Life" },
  },
  {
    id: 3,
    step: "03",
    title: "Green Youth Innovation Summit",
    date: "Nov 12, 2026",
    location: "BICC, Dhaka",
    image: "/events/3.jpg",
    description: "Showcasing student-engineered open-source soil moisture testing sensors and low-cost bio-fertilizer innovations.",
    stats: { attendees: "450+", impact: "Technology", focus: "Regenerative Tech" },
  },
];

