export interface IndustryFeature {
  title: string;
  description: string;
}

export interface IndustryUseCase {
  title: string;
  description: string;
}

export interface IndustryDetail {
  slug: string;
  name: string;
  tagline: string;
  color: string;
  overview: string;
  challenges: string[];
  solutions: IndustryFeature[];
  useCases: IndustryUseCase[];
  benefits: string[];
}

export const industriesData: IndustryDetail[] = [
  {
    slug: 'agriculture',
    name: 'Agriculture',
    tagline: 'Smart farming solutions for sustainable and productive agricultural practices.',
    color: 'from-green-600 to-emerald-600',
    overview:
      'Agriculture is undergoing a digital revolution. We help farmers, agribusinesses, and government agencies harness AI, IoT, and data analytics to maximise crop yields, reduce resource waste, and build resilient food systems — from smallholder farms to large commercial operations.',
    challenges: [
      'Unpredictable weather and climate change impacting crop productivity',
      'Water scarcity and inefficient irrigation practices',
      'Late detection of crop diseases and pest infestations',
      'Limited access to agronomic advisory services in local languages',
      'Lack of real-time visibility into soil health and field conditions',
    ],
    solutions: [
      { title: 'Smart Irrigation Systems', description: 'Soil moisture sensors and AI-driven irrigation scheduling reduce water usage by up to 35% while maintaining optimal crop health.' },
      { title: 'AI Crop Advisory', description: 'Data-driven crop recommendations based on soil type, weather forecasts, historical yield data, and market prices — delivered in local languages.' },
      { title: 'Pest & Disease Prediction', description: 'Early-warning models using satellite imagery, weather data, and historical outbreak patterns to trigger proactive interventions.' },
      { title: 'Yield Forecasting', description: 'Machine learning models predicting crop yield weeks in advance for better planning and supply chain management.' },
      { title: 'Drone-based Monitoring', description: 'Aerial imaging combined with computer vision for large-scale crop health assessment, nutrient deficiency mapping, and field scouting.' },
      { title: 'Farm Management Platform', description: 'Unified dashboard integrating all farm data — soil, weather, crop, equipment — for informed daily decision-making.' },
    ],
    useCases: [
      { title: 'Smart Irrigation for Sugarcane Farmers', description: 'IoT soil sensors and automated drip irrigation reduced water consumption by 32% across 500 acres in Maharashtra.' },
      { title: 'Multilingual AI Crop Advisory Bot', description: 'WhatsApp-based chatbot in Hindi, Marathi, and Telugu providing personalised crop advice to 10,000+ smallholder farmers.' },
      { title: 'Pest Prediction System', description: 'ML model integrating weather stations and historical pest data, providing 7-day advance alerts and reducing pesticide use by 25%.' },
      { title: 'Drone Crop Health Survey', description: 'Multispectral drone surveys covering 1,000 acres per day identifying nutrient deficiencies and disease hotspots.' },
    ],
    benefits: [
      'Increase crop yields by 20–40% with data-driven decisions',
      'Reduce water and fertiliser costs through precision agriculture',
      'Early pest and disease detection protecting revenue',
      'Empower smallholder farmers with accessible AI advisory',
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    tagline: 'AI-powered solutions delivering better patient outcomes and operational efficiency.',
    color: 'from-red-600 to-pink-600',
    overview:
      'Healthcare is one of the highest-impact areas for AI. We build solutions that augment clinical decision-making, streamline hospital operations, and extend quality care to underserved populations — while maintaining the highest standards of privacy, security, and regulatory compliance.',
    challenges: [
      'Overwhelming diagnostic workloads leading to delayed or missed diagnoses',
      'Fragmented patient data across multiple systems and care settings',
      'Rising operational costs and inefficient resource utilisation',
      'Limited access to specialist care in rural and remote areas',
      'Managing chronic disease populations at scale',
    ],
    solutions: [
      { title: 'AI Diagnostics Support', description: 'Deep learning models assisting radiologists and pathologists in detecting anomalies in X-rays, MRIs, CT scans, and pathology slides.' },
      { title: 'Patient Analytics & Risk Scoring', description: 'Predictive models identifying high-risk patients for proactive intervention, reducing avoidable readmissions and emergency visits.' },
      { title: 'Remote Patient Monitoring', description: 'IoT wearables and AI algorithms enabling continuous monitoring of vital signs with intelligent alerts for care teams.' },
      { title: 'Clinical NLP', description: 'Automated extraction of clinical insights from physician notes, discharge summaries, and medical records.' },
      { title: 'Hospital Operations Optimisation', description: 'AI scheduling, bed management, and resource allocation tools reducing wait times and improving throughput.' },
      { title: 'Telemedicine AI', description: 'AI-assisted triage and symptom checker platforms enabling remote consultations and improving first-contact resolution.' },
    ],
    useCases: [
      { title: 'Diabetic Retinopathy Screening', description: 'AI screening tool deployed in rural eye camps achieving 94% sensitivity, enabling early detection in populations with no access to ophthalmologists.' },
      { title: 'Sepsis Early Warning System', description: 'Real-time ICU monitoring model providing 6-hour advance sepsis alerts, reducing mortality by 18% in pilot deployment.' },
      { title: 'Clinical Note Summarisation', description: 'NLP pipeline automatically summarising physician notes and extracting ICD codes, reducing documentation time by 60%.' },
      { title: 'Patient Readmission Prediction', description: 'Risk model identifying high-readmission-risk patients at discharge, enabling targeted follow-up care and reducing 30-day readmissions by 22%.' },
    ],
    benefits: [
      'Earlier and more accurate diagnoses saving lives',
      'Reduced clinician burnout through AI-assisted documentation',
      'Extended specialist-quality care to underserved communities',
      'Lower operational costs with smarter resource utilisation',
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'Industrial AI and automation solutions for smarter, leaner production.',
    color: 'from-blue-600 to-indigo-600',
    overview:
      'Modern manufacturing demands zero-downtime operations, consistent quality, and agile supply chains. We deploy AI and automation solutions on the factory floor — from predictive maintenance and visual inspection to intelligent scheduling — helping manufacturers stay competitive in Industry 4.0.',
    challenges: [
      'Unplanned equipment downtime causing costly production stoppages',
      'Manual quality inspection that is slow, inconsistent, and costly',
      'Complex supply chains with poor visibility and demand uncertainty',
      'Rising labour costs and difficulty scaling operations',
      'Energy waste and sustainability compliance requirements',
    ],
    solutions: [
      { title: 'Predictive Maintenance', description: 'Vibration, temperature, and acoustic sensors combined with AI models predict equipment failures 2–4 weeks in advance.' },
      { title: 'Automated Visual Quality Control', description: 'Computer vision systems inspecting 100% of production at line speed, detecting defects invisible to the human eye.' },
      { title: 'Process Automation', description: 'Intelligent robotic and software automation of repetitive manufacturing tasks, assembly processes, and material handling.' },
      { title: 'Production Scheduling Optimisation', description: 'AI scheduling engines maximising throughput while minimising changeovers, energy use, and WIP inventory.' },
      { title: 'Supply Chain Intelligence', description: 'Real-time demand forecasting, supplier risk monitoring, and inventory optimisation across the supply network.' },
      { title: 'Digital Twin', description: 'Virtual replicas of production lines enabling simulation, what-if analysis, and remote monitoring.' },
    ],
    useCases: [
      { title: 'Bearing Failure Prediction', description: 'Vibration analysis ML model on CNC machines providing 21-day advance failure alerts, reducing unplanned downtime by 67%.' },
      { title: 'PCB Defect Detection', description: 'Vision AI inspecting 1,200 PCBs per hour with 99.2% accuracy, replacing a team of 8 manual inspectors.' },
      { title: 'Production Schedule Optimiser', description: 'Constraint-based AI scheduler reducing changeover time by 35% and increasing OEE from 72% to 86%.' },
      { title: 'Energy Consumption Optimisation', description: 'AI-driven energy management reducing electricity consumption by 18% through intelligent load scheduling.' },
    ],
    benefits: [
      'Eliminate unplanned downtime with predictive maintenance',
      'Near-zero defect rates with automated visual inspection',
      'Higher OEE and throughput with AI scheduling',
      'Reduced energy costs and improved sustainability metrics',
    ],
  },
  {
    slug: 'smart-cities',
    name: 'Smart Cities',
    tagline: 'IoT and AI solutions for safer, more efficient, and sustainable urban living.',
    color: 'from-purple-600 to-violet-600',
    overview:
      'Cities face growing pressure to deliver better services with constrained budgets and ageing infrastructure. We work with municipal bodies, urban planners, and infrastructure operators to deploy AI and IoT solutions that optimise energy, mobility, safety, and citizen services.',
    challenges: [
      'Traffic congestion and inefficient public transport reducing productivity',
      'High energy consumption from public lighting and municipal buildings',
      'Waste collection inefficiencies and poor recycling rates',
      'Public safety challenges with limited surveillance analytics',
      'Siloed city data preventing integrated urban management',
    ],
    solutions: [
      { title: 'Intelligent Traffic Management', description: 'Adaptive traffic signal control using real-time vehicle counts and AI optimisation, reducing average commute times by up to 25%.' },
      { title: 'Smart Street Lighting', description: 'Motion-activated and schedule-optimised LED lighting reducing municipal energy bills by 40–60%.' },
      { title: 'Smart Waste Management', description: 'Fill-level sensors in bins with AI-optimised collection routes reducing fuel costs and carbon emissions.' },
      { title: 'Environmental Monitoring', description: 'Air quality, noise, and water quality sensor networks with real-time dashboards and public alert systems.' },
      { title: 'Public Safety Analytics', description: 'Video analytics for crowd monitoring, incident detection, and emergency response optimisation.' },
      { title: 'City Data Platform', description: 'Unified urban data platform integrating feeds from all city systems for integrated operations and planning.' },
    ],
    useCases: [
      { title: 'Adaptive Traffic Control', description: 'AI traffic management system across 45 intersections reducing average waiting time by 28% and emergency vehicle response time by 35%.' },
      { title: 'Smart Bin Network', description: 'IoT fill-level sensors across 2,000 bins with AI-optimised collection routes, reducing collection trips by 42% and fuel costs by ₹18L annually.' },
      { title: 'Air Quality Monitoring Network', description: '50-node sensor network with public dashboard and school alert system, reducing children\'s exposure to hazardous air quality events.' },
      { title: 'Integrated City Dashboard', description: 'Real-time city operations dashboard integrating traffic, utilities, emergency services, and citizen feedback for a municipal corporation.' },
    ],
    benefits: [
      'Significant reduction in municipal operational costs',
      'Improved quality of life for citizens through better services',
      'Data-driven urban planning and infrastructure investment',
      'Measurable progress towards sustainability and net-zero targets',
    ],
  },
  {
    slug: 'education-research',
    name: 'Education & Research',
    tagline: 'Technology solutions that transform learning experiences and accelerate research outcomes.',
    color: 'from-orange-600 to-yellow-600',
    overview:
      'Education and research institutions face unique challenges — personalising learning at scale, managing vast research datasets, and bridging the gap between academic output and real-world application. We build technology platforms and AI tools that empower educators, researchers, and learners.',
    challenges: [
      'One-size-fits-all teaching failing to meet diverse student needs',
      'Research data management challenges reducing productivity',
      'Limited access to quality education in remote and under-resourced areas',
      'Difficulty measuring and proving learning outcomes',
      'Gap between academic research and commercial application',
    ],
    solutions: [
      { title: 'AI-powered Adaptive Learning', description: 'Personalised learning paths that adjust content, pace, and assessment style based on each student\'s performance and learning style.' },
      { title: 'Research Data Management', description: 'Platforms for collecting, storing, versioning, and collaboratively analysing large research datasets.' },
      { title: 'Intelligent Assessment', description: 'Automated grading, plagiarism detection, and formative feedback tools freeing educator time for high-value teaching.' },
      { title: 'Virtual Laboratories', description: 'Simulated lab environments for science, engineering, and medical students — enabling safe, scalable practical learning.' },
      { title: 'Learning Analytics', description: 'Dashboards giving educators real-time insights into student engagement, comprehension, and at-risk indicators.' },
      { title: 'Research Collaboration Platform', description: 'Tools for academic-industry collaboration, IP management, grant tracking, and publication workflows.' },
    ],
    useCases: [
      { title: 'Adaptive STEM Learning Platform', description: 'AI learning platform deployed across 20 rural schools, improving average math scores by 31% in one academic year.' },
      { title: 'Research Data Lake', description: 'Centralised research data platform for a university department, reducing data preparation time by 60% and enabling cross-study meta-analysis.' },
      { title: 'Student At-risk Early Warning', description: 'Predictive model identifying at-risk students 6 weeks before examinations, enabling targeted intervention and improving pass rates by 18%.' },
      { title: 'Industry-Academia Collaboration Portal', description: 'Platform connecting 35 companies with university research teams, facilitating 12 joint R&D projects and 3 patent applications in the first year.' },
    ],
    benefits: [
      'Improved learning outcomes with personalised AI instruction',
      'Reduced educator administrative burden through automation',
      'Accessible quality education beyond geographic boundaries',
      'Faster research-to-application cycles through better collaboration',
    ],
  },
  // ─── Potential Impact Areas ─────────────────────────────────────────
  {
    slug: 'ai-chat-for-farmers',
    name: 'AI Chat for Farmers',
    tagline: 'Multilingual AI assistants bringing expert crop advisory to every farmer\'s phone.',
    color: 'from-green-600 to-teal-600',
    overview:
      'Millions of smallholder farmers lack access to timely, affordable agronomic advice. Our AI-powered multilingual chatbot delivers personalised crop advisory, weather alerts, market prices, and pest management guidance directly through WhatsApp or SMS — in the farmer\'s own language.',
    challenges: [
      'Limited access to qualified agronomists in rural areas',
      'Language barriers preventing farmers from using existing digital tools',
      'Delayed response to pest outbreaks and weather events',
      'Low smartphone penetration and digital literacy in farming communities',
      'High cost of traditional extension services limiting reach',
    ],
    solutions: [
      { title: 'Multilingual Conversational AI', description: 'NLP models supporting Hindi, Marathi, Telugu, Tamil, Kannada, and more — farmers interact in their native language.' },
      { title: 'Personalised Crop Advisory', description: 'Recommendations tailored to the farmer\'s crop, soil type, location, and growth stage, not generic advice.' },
      { title: 'Weather-based Alerts', description: 'Automated alerts for rainfall, frost, heatwaves, and humidity conditions affecting specific crops and districts.' },
      { title: 'Pest & Disease Identification', description: 'Farmers share crop photos; AI identifies the pest or disease and recommends treatment within seconds.' },
      { title: 'Market Price Intelligence', description: 'Real-time mandi prices for the farmer\'s crops, helping them decide when and where to sell.' },
      { title: 'Works on Basic Phones', description: 'SMS and WhatsApp compatibility ensures reach to farmers without smartphones or reliable internet.' },
    ],
    useCases: [
      { title: 'Kharif Season Advisory', description: 'AI chatbot advised 10,000+ farmers on soybean sowing decisions, reducing crop loss from delayed sowing by an estimated 15%.' },
      { title: 'Pest Outbreak Response', description: 'Automated district-wide alerts during a fall armyworm outbreak helped 3,500 farmers take preventive action within 48 hours.' },
      { title: 'Market Access', description: 'Daily mandi price updates helped onion farmers in Nashik secure 12% higher prices by timing their sales optimally.' },
      { title: 'Fertiliser Optimisation', description: 'Soil-test-based fertiliser recommendations reduced input costs by ₹2,400 per acre on average for participating farmers.' },
    ],
    benefits: [
      'Expert agronomic advice available 24/7 at zero cost to the farmer',
      'Faster response to crop threats reducing yield losses',
      'Improved farm income through better input and market decisions',
      'Scalable to millions of farmers without linear cost increase',
    ],
  },
  {
    slug: 'smart-iot-edge-gateway',
    name: 'Smart IoT Edge Gateway',
    tagline: 'Precision agriculture and industrial intelligence with real-time edge processing.',
    color: 'from-blue-600 to-cyan-600',
    overview:
      'Our Smart IoT Edge Gateway is a ruggedised, solar-powered device that collects data from field sensors, processes it locally with on-device AI, and transmits only relevant insights to the cloud — enabling precision agriculture and remote monitoring in areas with poor connectivity.',
    challenges: [
      'Poor or unreliable internet connectivity in rural and industrial locations',
      'High cloud data transfer costs for large sensor deployments',
      'Latency constraints for time-critical agricultural and industrial decisions',
      'Power supply challenges for remote deployments',
      'Need for AI inference without constant cloud connectivity',
    ],
    solutions: [
      { title: 'On-device AI Inference', description: 'Runs trained ML models locally — soil moisture prediction, anomaly detection, and pest risk scoring without cloud dependency.' },
      { title: 'Multi-sensor Integration', description: 'Connects soil sensors, weather stations, water flow meters, and camera modules through a single unified gateway.' },
      { title: 'Edge-to-Cloud Sync', description: 'Intelligent data tiering — critical alerts sent immediately, raw data batched for cost-efficient cloud upload.' },
      { title: 'Solar + Battery Powered', description: 'Self-sufficient power system enabling deployment in remote fields and facilities without grid connectivity.' },
      { title: 'OTA Updates', description: 'Remote firmware and model updates ensuring the gateway improves over time without field visits.' },
      { title: 'Rugged & Weatherproof', description: 'IP67-rated enclosure designed for field deployment in extreme heat, monsoon rains, and dusty environments.' },
    ],
    useCases: [
      { title: 'Precision Irrigation Control', description: 'Gateway with soil moisture sensors autonomously controlling irrigation pumps, saving 30% water across 200-acre sugarcane farm.' },
      { title: 'Greenhouse Climate Control', description: 'Real-time temperature, humidity, and CO2 monitoring with automated fan and vent actuation for optimal crop conditions.' },
      { title: 'Industrial Equipment Monitoring', description: 'Vibration and temperature sensors on remote pump stations with edge anomaly detection, eliminating the need for daily site visits.' },
      { title: 'Village Water Quality Monitoring', description: 'Gateway monitoring water quality parameters in village bore wells with SMS alerts to gram panchayat when levels exceed safe limits.' },
    ],
    benefits: [
      'Real-time decisions without dependence on cloud connectivity',
      'Up to 70% reduction in cloud data costs through edge filtering',
      'Extend IoT deployments to the most remote locations',
      'Rapid ROI through automated resource management',
    ],
  },
  {
    slug: 'automated-insights-platform',
    name: 'Automated Insights Platform',
    tagline: 'Comprehensive data analytics delivering actionable business intelligence automatically.',
    color: 'from-indigo-600 to-blue-600',
    overview:
      'Organisations are drowning in data but starved for insights. Our Automated Insights Platform connects your data sources, applies AI to identify patterns and anomalies, and delivers plain-language narrative insights and interactive dashboards — so decision-makers get answers, not raw numbers.',
    challenges: [
      'Data trapped in silos across multiple systems and departments',
      'Analysts spending 80% of time preparing data rather than analysing it',
      'Business users unable to self-serve insights without technical help',
      'Delayed reporting cycles causing decisions to be made on stale data',
      'Lack of proactive alerting when KPIs deviate from expectations',
    ],
    solutions: [
      { title: 'Automated Data Integration', description: 'Pre-built connectors to 150+ data sources — ERPs, CRMs, databases, spreadsheets, and APIs — with automated refresh.' },
      { title: 'AI-generated Narrative Insights', description: 'Natural language summaries explaining what changed, why it changed, and what to do about it — generated automatically each morning.' },
      { title: 'Interactive Dashboards', description: 'Self-service drag-and-drop dashboards with drill-down, filtering, and export — no SQL or coding required.' },
      { title: 'Anomaly Detection & Alerting', description: 'AI continuously monitors KPIs and sends proactive alerts via email, SMS, or Slack when unusual patterns are detected.' },
      { title: 'Predictive Analytics', description: 'Embedded forecasting models predicting sales, churn, inventory, and financial performance with configurable confidence intervals.' },
      { title: 'Mobile-first Design', description: 'Executive dashboards and alert notifications fully optimised for mobile, enabling on-the-go decision making.' },
    ],
    useCases: [
      { title: 'Sales Performance Intelligence', description: 'Daily AI-generated sales briefings for regional managers, highlighting top performers, at-risk accounts, and pipeline gaps — saving 2 hours of manual reporting per day.' },
      { title: 'Supply Chain Visibility', description: 'Real-time supplier lead time monitoring with AI anomaly detection flagging delays before they impact production schedules.' },
      { title: 'Financial Close Acceleration', description: 'Automated variance analysis and narrative commentary reducing month-end financial reporting time from 5 days to 1 day.' },
      { title: 'Retail Store Performance', description: 'Multi-store analytics dashboard with AI-detected sales anomalies enabling store managers to act on insights the same day they arise.' },
    ],
    benefits: [
      'Reduce time-to-insight from days to minutes',
      'Empower every business user with self-service analytics',
      'Proactive alerts before problems become crises',
      'Consistent, reliable insights replacing manual spreadsheet reports',
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryDetail | undefined {
  return industriesData.find((i) => i.slug === slug);
}

export function getSlugForIndustry(name: string): string {
  const map: Record<string, string> = {
    'Agriculture': 'agriculture',
    'Healthcare': 'healthcare',
    'Manufacturing': 'manufacturing',
    'Smart Cities': 'smart-cities',
    'Education & Research': 'education-research',
    'AI Chat for Farmers': 'ai-chat-for-farmers',
    'Smart IoT Edge Gateway': 'smart-iot-edge-gateway',
    'Automated Insights Platform': 'automated-insights-platform',
  };
  return map[name] ?? '';
}
