export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceUseCase {
  industry: string;
  example: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  category: string;
  categoryColor: string;
  tagline: string;
  overview: string;
  features: ServiceFeature[];
  useCases: ServiceUseCase[];
  benefits: string[];
}

export const servicesData: ServiceDetail[] = [
  // ─── AI & Data Solutions ───────────────────────────────────────────
  {
    slug: 'ai-strategy-consulting',
    name: 'AI Strategy & Consulting',
    category: 'AI & Data Solutions',
    categoryColor: 'from-blue-600 to-indigo-600',
    tagline: 'Transform your business with a clear, actionable AI roadmap.',
    overview:
      'We help organizations identify high-impact AI opportunities, prioritize investments, and design end-to-end transformation roadmaps. Our consultants bridge the gap between business goals and technical execution — ensuring AI delivers measurable value from day one.',
    features: [
      { title: 'AI Opportunity Assessment', description: 'Evaluate existing processes to pinpoint where AI can deliver the highest ROI.' },
      { title: 'Transformation Roadmap', description: 'Build a phased, milestone-driven plan aligning AI adoption with business strategy.' },
      { title: 'Technology Selection', description: 'Vendor-neutral guidance on choosing the right frameworks, platforms, and tools.' },
      { title: 'Change Management', description: 'Prepare teams for AI adoption through training, upskilling, and governance frameworks.' },
      { title: 'Scalable Architecture Design', description: 'Design modular AI architectures that grow with your organisation.' },
      { title: 'ROI Measurement', description: 'Define KPIs and dashboards to track the real business impact of every AI initiative.' },
    ],
    useCases: [
      { industry: 'Manufacturing', example: 'Roadmap to automate quality inspection and predictive maintenance across 12 plants.' },
      { industry: 'Healthcare', example: 'AI adoption strategy for diagnostic support and patient flow optimisation.' },
      { industry: 'Retail', example: 'Prioritisation framework for demand forecasting and personalisation engine deployment.' },
      { industry: 'Finance', example: 'End-to-end AI governance and risk strategy for fraud detection models.' },
    ],
    benefits: [
      'Reduce AI project failure rate with proven methodologies',
      'Align technology investments with measurable business outcomes',
      'Accelerate time-to-value for AI initiatives',
      'Build internal AI capability and culture',
    ],
  },
  {
    slug: 'machine-learning-predictive-analytics',
    name: 'Machine Learning & Predictive Analytics',
    category: 'AI & Data Solutions',
    categoryColor: 'from-blue-600 to-indigo-600',
    tagline: 'Turn historical data into accurate forecasts and intelligent decisions.',
    overview:
      'Our ML engineers build and deploy custom predictive models that uncover hidden patterns in your data. From demand forecasting to fraud detection, we deliver production-grade pipelines that scale with your needs and continuously improve over time.',
    features: [
      { title: 'Demand Forecasting', description: 'Predict sales, inventory, and resource needs with high accuracy using time-series models.' },
      { title: 'Customer Behaviour Prediction', description: 'Anticipate churn, lifetime value, and next-best-action for every customer.' },
      { title: 'Risk & Fraud Detection', description: 'Real-time anomaly detection and risk scoring to protect revenue and assets.' },
      { title: 'Recommendation Engines', description: 'Personalised product, content, and service recommendations at scale.' },
      { title: 'MLOps & Model Monitoring', description: 'Automated retraining pipelines, drift detection, and performance dashboards.' },
      { title: 'Explainable AI (XAI)', description: 'Interpretable models that meet regulatory and stakeholder transparency requirements.' },
    ],
    useCases: [
      { industry: 'E-commerce', example: 'Reduce stockouts by 30% with ML-driven demand forecasting.' },
      { industry: 'Banking', example: 'Cut false-positive fraud alerts by 40% using ensemble anomaly detection.' },
      { industry: 'Telecom', example: 'Proactive churn intervention reducing subscriber loss by 25%.' },
      { industry: 'Agriculture', example: 'Crop yield prediction using weather, soil, and satellite imagery data.' },
    ],
    benefits: [
      'Data-driven decisions replacing gut-feel guesswork',
      'Continuous model improvement with automated retraining',
      'Reduced operational costs through accurate forecasting',
      'Competitive advantage through personalisation at scale',
    ],
  },
  {
    slug: 'data-engineering-big-data-solutions',
    name: 'Data Engineering & Big Data Solutions',
    category: 'AI & Data Solutions',
    categoryColor: 'from-blue-600 to-indigo-600',
    tagline: 'Build the reliable data foundation that every AI initiative needs.',
    overview:
      'Great AI starts with great data. We design and implement robust data pipelines, cloud data platforms, and real-time streaming architectures that give your teams clean, governed, and accessible data — at any scale.',
    features: [
      { title: 'Data Pipeline Development', description: 'ETL/ELT pipelines that move, transform, and validate data across any source or destination.' },
      { title: 'Cloud Data Architecture', description: 'Scalable data lakehouse and warehouse solutions on AWS, Azure, and GCP.' },
      { title: 'Real-time Streaming', description: 'Apache Kafka, Flink, and Spark Streaming architectures for sub-second data processing.' },
      { title: 'Data Governance & Quality', description: 'Cataloguing, lineage tracking, and automated data quality rules.' },
      { title: 'Data Lakehouse Design', description: 'Unified storage and compute architectures combining the best of lakes and warehouses.' },
      { title: 'API & Data Integration', description: 'Connect disparate systems, SaaS tools, and legacy databases into a single data fabric.' },
    ],
    useCases: [
      { industry: 'Logistics', example: 'Real-time shipment tracking pipeline processing 2M events per hour.' },
      { industry: 'Healthcare', example: 'HIPAA-compliant data lake unifying EHR, imaging, and claims data.' },
      { industry: 'Smart Cities', example: 'IoT sensor data ingestion and processing for traffic management.' },
      { industry: 'Retail', example: 'Near-real-time sales dashboard replacing overnight batch reports.' },
    ],
    benefits: [
      'Single source of truth across the entire organisation',
      'Faster time-to-insight with automated pipelines',
      'Cost-optimised cloud infrastructure',
      'Future-proof architecture that scales with data growth',
    ],
  },
  {
    slug: 'natural-language-processing',
    name: 'Natural Language Processing (NLP)',
    category: 'AI & Data Solutions',
    categoryColor: 'from-blue-600 to-indigo-600',
    tagline: 'Enable machines to understand, generate, and act on human language.',
    overview:
      'We build NLP solutions that help businesses communicate smarter — from intelligent chatbots and virtual assistants to multilingual document processing and sentiment analytics. Leveraging the latest LLM and transformer technologies, we deliver language AI that truly understands context.',
    features: [
      { title: 'Chatbots & Virtual Assistants', description: 'Contextual, multi-turn conversational agents for customer service, HR, and operations.' },
      { title: 'Sentiment & Opinion Analysis', description: 'Extract actionable insights from reviews, social media, and support tickets.' },
      { title: 'Document Intelligence', description: 'Automated extraction, classification, and summarisation of unstructured documents.' },
      { title: 'Multilingual AI', description: 'NLP solutions supporting 50+ languages with translation and localisation capabilities.' },
      { title: 'Named Entity Recognition', description: 'Identify people, organisations, dates, and custom entities in large text corpora.' },
      { title: 'LLM Fine-tuning & RAG', description: 'Custom large language model fine-tuning and retrieval-augmented generation pipelines.' },
    ],
    useCases: [
      { industry: 'Customer Service', example: 'AI assistant handling 70% of tier-1 support queries autonomously.' },
      { industry: 'Legal', example: 'Contract review automation reducing manual review time by 80%.' },
      { industry: 'Agriculture', example: 'Multilingual crop advisory chatbot for farmers in regional languages.' },
      { industry: 'Healthcare', example: 'Clinical note summarisation and ICD code extraction from physician notes.' },
    ],
    benefits: [
      '24/7 intelligent customer engagement without increased headcount',
      'Faster document processing with higher accuracy',
      'Deeper understanding of customer voice and feedback',
      'Scalable multilingual communication for global markets',
    ],
  },
  {
    slug: 'computer-vision',
    name: 'Computer Vision',
    category: 'AI & Data Solutions',
    categoryColor: 'from-blue-600 to-indigo-600',
    tagline: 'Give your systems the ability to see, understand, and act on visual data.',
    overview:
      'Our computer vision solutions automate visual inspection, enable real-time object detection, and unlock intelligence from images and video streams. From factory floors to smart cameras, we deploy CV models that are accurate, fast, and production-ready.',
    features: [
      { title: 'Image Classification', description: 'Deep learning models that categorise images with high accuracy across custom domains.' },
      { title: 'Object Detection & Tracking', description: 'Real-time identification and tracking of objects in video streams.' },
      { title: 'AI-powered Quality Control', description: 'Automated visual defect detection replacing manual inspection on production lines.' },
      { title: 'Facial & Gesture Recognition', description: 'Secure identity verification and gesture-based interaction systems.' },
      { title: 'Medical Imaging Analysis', description: 'AI-assisted analysis of X-rays, MRIs, and pathology slides.' },
      { title: 'Edge CV Deployment', description: 'Optimised models running on edge devices (NVIDIA Jetson, Raspberry Pi, etc.).' },
    ],
    useCases: [
      { industry: 'Manufacturing', example: 'Defect detection system reducing product rejects by 60% on assembly lines.' },
      { industry: 'Agriculture', example: 'Drone-based crop disease detection covering 500 acres per flight.' },
      { industry: 'Retail', example: 'Shelf availability monitoring and planogram compliance via store cameras.' },
      { industry: 'Healthcare', example: 'Diabetic retinopathy screening from retinal images with 95% accuracy.' },
    ],
    benefits: [
      'Eliminate human error in repetitive visual inspection tasks',
      'Real-time insights from existing camera infrastructure',
      'Scalable deployment from cloud to edge devices',
      'Significant reduction in quality control costs',
    ],
  },
  {
    slug: 'ai-for-business-automation',
    name: 'AI for Business Automation',
    category: 'AI & Data Solutions',
    categoryColor: 'from-blue-600 to-indigo-600',
    tagline: 'Automate complex business decisions with intelligent AI-driven workflows.',
    overview:
      'Beyond simple rule-based automation, we integrate AI into your core business processes — enabling intelligent decision-making, dynamic process optimisation, and smart recommendations that adapt to changing conditions in real time.',
    features: [
      { title: 'Intelligent Process Automation', description: 'Combine AI with process automation to handle exceptions and edge cases automatically.' },
      { title: 'Smart Recommendation Engines', description: 'Context-aware recommendations for products, pricing, routing, and resource allocation.' },
      { title: 'Decision Intelligence', description: 'AI-augmented decision support systems for supply chain, finance, and operations.' },
      { title: 'Dynamic Pricing & Optimisation', description: 'Real-time pricing models that maximise revenue based on demand signals.' },
      { title: 'AI-powered Scheduling', description: 'Optimised workforce, asset, and delivery scheduling using constraint AI.' },
      { title: 'Process Mining & Discovery', description: 'Automatically discover inefficiencies in existing processes using event log analysis.' },
    ],
    useCases: [
      { industry: 'Logistics', example: 'AI route optimisation reducing delivery costs by 22%.' },
      { industry: 'HR', example: 'Intelligent resume screening and candidate ranking reducing hiring time by 50%.' },
      { industry: 'Finance', example: 'Automated financial close with AI-driven reconciliation and exception handling.' },
      { industry: 'Energy', example: 'Smart grid load balancing with reinforcement learning reducing peak costs.' },
    ],
    benefits: [
      'Reduce operational costs through intelligent automation',
      'Faster, more consistent decision-making across the organisation',
      'Free human talent for high-value strategic work',
      'Adaptive systems that improve with every data point',
    ],
  },
  // ─── Automation ────────────────────────────────────────────────────
  {
    slug: 'business-process-automation',
    name: 'Business Process Automation',
    category: 'Automation',
    categoryColor: 'from-green-600 to-teal-600',
    tagline: 'Streamline your operations and eliminate costly manual work.',
    overview:
      'We analyse, redesign, and automate end-to-end business processes — reducing manual effort, minimising errors, and freeing your team to focus on work that truly matters. Our approach combines process consulting with technology implementation for lasting results.',
    features: [
      { title: 'Process Analysis & Mapping', description: 'Detailed as-is process documentation and optimisation opportunity identification.' },
      { title: 'Workflow Automation', description: 'Automated approval chains, notifications, and handoffs across departments.' },
      { title: 'Document Automation', description: 'Auto-generation, routing, and archiving of contracts, invoices, and reports.' },
      { title: 'Integration & API Automation', description: 'Connect ERP, CRM, and third-party tools to eliminate re-keying of data.' },
      { title: 'Exception Handling', description: 'Intelligent exception routing ensuring edge cases are resolved efficiently.' },
      { title: 'Audit Trail & Compliance', description: 'Full process logging for regulatory compliance and internal audit.' },
    ],
    useCases: [
      { industry: 'Finance', example: 'Invoice processing automation reducing cycle time from 7 days to 4 hours.' },
      { industry: 'HR', example: 'Onboarding workflow automation cutting manual tasks by 75%.' },
      { industry: 'Healthcare', example: 'Patient appointment scheduling and reminder automation.' },
      { industry: 'Government', example: 'Permit application workflow automation reducing approval time by 60%.' },
    ],
    benefits: [
      'Reduce process cycle times by up to 80%',
      'Eliminate human errors in repetitive tasks',
      'Achieve 24/7 operations without additional headcount',
      'Full visibility and control over every process step',
    ],
  },
  {
    slug: 'robotic-process-automation',
    name: 'Robotic Process Automation (RPA)',
    category: 'Automation',
    categoryColor: 'from-green-600 to-teal-600',
    tagline: 'Deploy software robots that work tirelessly on repetitive tasks.',
    overview:
      'Our RPA solutions deploy software bots that mimic human interactions with digital systems — logging in, copying data, filling forms, and triggering workflows — at machine speed and with zero errors. We handle the full lifecycle from bot design to maintenance.',
    features: [
      { title: 'Bot Design & Development', description: 'Custom RPA bots built on UiPath, Automation Anywhere, or Power Automate.' },
      { title: 'Screen Scraping & Data Entry', description: 'Automated extraction and re-entry of data across legacy and modern systems.' },
      { title: 'Attended & Unattended Bots', description: 'Human-assisted bots for complex tasks and fully autonomous bots for high-volume work.' },
      { title: 'Bot Orchestration', description: 'Centralised management, scheduling, and monitoring of your entire bot fleet.' },
      { title: 'Cognitive RPA', description: 'AI-enhanced bots that read documents, understand language, and make decisions.' },
      { title: 'RPA Maintenance & Support', description: 'Ongoing bot maintenance, error resolution, and performance optimisation.' },
    ],
    useCases: [
      { industry: 'Banking', example: 'KYC document processing automation handling 10,000 cases per day.' },
      { industry: 'Insurance', example: 'Claims data extraction and validation across 15 different systems.' },
      { industry: 'Retail', example: 'Automated order reconciliation between e-commerce platform and ERP.' },
      { industry: 'Telecom', example: 'SIM card activation and billing update automation across legacy systems.' },
    ],
    benefits: [
      'ROI typically achieved within 3–6 months',
      'Bot capacity scalable in hours, not weeks',
      'Zero errors on rule-based processes',
      'Non-invasive — no changes to existing systems required',
    ],
  },
  {
    slug: 'smart-workflow-design',
    name: 'Smart Workflow Design',
    category: 'Automation',
    categoryColor: 'from-green-600 to-teal-600',
    tagline: 'Design intelligent workflows that adapt, optimise, and self-improve.',
    overview:
      'We design dynamic workflows that go beyond static flowcharts — incorporating AI decision nodes, real-time data triggers, and adaptive routing to ensure the right action is always taken at the right time. The result is a living process that continuously improves.',
    features: [
      { title: 'Adaptive Routing', description: 'Workflows that dynamically route tasks based on workload, skills, and priority.' },
      { title: 'AI Decision Nodes', description: 'Embed ML models directly into workflow decision points for intelligent branching.' },
      { title: 'Real-time Triggers', description: 'Event-driven workflows that respond instantly to data changes and external signals.' },
      { title: 'Cross-system Orchestration', description: 'Unified workflows spanning ERP, CRM, HRMS, and custom applications.' },
      { title: 'SLA Monitoring & Escalation', description: 'Automated escalations when tasks breach defined service level agreements.' },
      { title: 'Continuous Optimisation', description: 'Process mining and analytics to identify and eliminate bottlenecks over time.' },
    ],
    useCases: [
      { industry: 'Customer Service', example: 'Intelligent ticket routing reducing average resolution time by 45%.' },
      { industry: 'Supply Chain', example: 'Adaptive procurement workflow responding to live supplier and demand signals.' },
      { industry: 'Healthcare', example: 'Clinical pathway workflows ensuring protocol adherence for every patient.' },
      { industry: 'Education', example: 'Student admission workflow with AI-based eligibility screening and scheduling.' },
    ],
    benefits: [
      'Eliminate workflow bottlenecks before they impact customers',
      'Consistent process execution across teams and locations',
      'Real-time visibility into every active workflow instance',
      'Continuously improving processes driven by operational data',
    ],
  },
  // ─── Edge AI ───────────────────────────────────────────────────────
  {
    slug: 'iot-sensor-integration',
    name: 'IoT & Sensor Integration',
    category: 'Edge AI',
    categoryColor: 'from-purple-600 to-pink-600',
    tagline: 'Connect your physical world to intelligent digital systems.',
    overview:
      'We design and deploy end-to-end IoT ecosystems — from sensor selection and hardware integration to cloud connectivity and analytics dashboards. Our solutions bring real-time intelligence to factories, farms, cities, and healthcare facilities.',
    features: [
      { title: 'Sensor Selection & Deployment', description: 'End-to-end advisory and deployment of temperature, pressure, vision, and custom sensors.' },
      { title: 'IoT Gateway Configuration', description: 'Reliable edge gateways that buffer, filter, and securely transmit sensor data.' },
      { title: 'MQTT / OPC-UA / Modbus', description: 'Support for all major industrial and IoT communication protocols.' },
      { title: 'Cloud Connectivity', description: 'Seamless integration with AWS IoT, Azure IoT Hub, and Google Cloud IoT.' },
      { title: 'Device Management', description: 'OTA firmware updates, remote diagnostics, and fleet management at scale.' },
      { title: 'Analytics & Alerting', description: 'Real-time dashboards and intelligent alerts based on sensor thresholds and patterns.' },
    ],
    useCases: [
      { industry: 'Agriculture', example: 'Smart irrigation system with soil moisture sensors reducing water usage by 35%.' },
      { industry: 'Manufacturing', example: 'Machine health monitoring across 200+ assets with predictive maintenance alerts.' },
      { industry: 'Smart Cities', example: 'Air quality and traffic sensor network for urban planning and emergency response.' },
      { industry: 'Cold Chain', example: 'Temperature monitoring for pharmaceutical logistics with automated compliance reporting.' },
    ],
    benefits: [
      'Real-time visibility into physical assets and environments',
      'Proactive maintenance reducing unplanned downtime',
      'Data-driven resource optimisation (energy, water, materials)',
      'Scalable from 10 to 100,000+ connected devices',
    ],
  },
  {
    slug: 'edge-data-processing',
    name: 'Edge Data Processing',
    category: 'Edge AI',
    categoryColor: 'from-purple-600 to-pink-600',
    tagline: 'Process data where it is generated — faster, cheaper, and more secure.',
    overview:
      'Edge computing moves intelligence closer to the data source, dramatically reducing latency and bandwidth costs. We build edge processing architectures that run AI inference, filter noise, and make decisions locally — with cloud sync for aggregate analytics.',
    features: [
      { title: 'Edge AI Inference', description: 'Deploy optimised ML models (TensorRT, ONNX, TFLite) on edge hardware.' },
      { title: 'Local Data Aggregation', description: 'Aggregate and compress data at the edge before selective cloud upload.' },
      { title: 'Offline-first Architecture', description: 'Systems that continue operating during connectivity loss with sync on reconnect.' },
      { title: 'Edge-Cloud Synchronisation', description: 'Intelligent data tiering between edge nodes and central cloud infrastructure.' },
      { title: 'Security & Encryption', description: 'End-to-end encryption and secure boot for edge device protection.' },
      { title: 'Hardware Optimisation', description: 'Model quantisation and pruning for deployment on low-power edge hardware.' },
    ],
    useCases: [
      { industry: 'Manufacturing', example: 'On-device defect detection at 60 fps with zero cloud dependency.' },
      { industry: 'Retail', example: 'In-store footfall analytics processed locally to protect customer privacy.' },
      { industry: 'Energy', example: 'Smart meter edge processing reducing cloud data costs by 70%.' },
      { industry: 'Defence', example: 'Disconnected edge AI for field reconnaissance and threat detection.' },
    ],
    benefits: [
      'Sub-millisecond response times for time-critical applications',
      'Reduced cloud data transfer and storage costs',
      'Enhanced data privacy — sensitive data stays on-premises',
      'Resilient operations even without internet connectivity',
    ],
  },
  {
    slug: 'real-time-decision-systems',
    name: 'Real-time Decision Systems',
    category: 'Edge AI',
    categoryColor: 'from-purple-600 to-pink-600',
    tagline: 'Act on insights in milliseconds, not hours.',
    overview:
      'We build real-time decision engines that combine streaming data, AI models, and business rules to trigger the right action at the right moment. Whether it\'s fraud prevention, dynamic pricing, or autonomous control — our systems decide and act at machine speed.',
    features: [
      { title: 'Streaming Decision Engine', description: 'Process millions of events per second with consistent, low-latency decisions.' },
      { title: 'Complex Event Processing', description: 'Detect patterns across multiple event streams and trigger compound actions.' },
      { title: 'AI + Rules Fusion', description: 'Combine ML model scores with business rules for explainable, auditable decisions.' },
      { title: 'A/B Decision Testing', description: 'Test competing decision strategies in production with statistical rigour.' },
      { title: 'Decision Logging & Explainability', description: 'Full audit trail of every decision with reasons for regulatory compliance.' },
      { title: 'Feedback Loop Integration', description: 'Closed-loop systems where decision outcomes automatically retrain models.' },
    ],
    useCases: [
      { industry: 'Finance', example: 'Real-time transaction fraud scoring with 50 ms response time at 1M TPS.' },
      { industry: 'E-commerce', example: 'Dynamic pricing engine updating 2M product prices every 5 minutes.' },
      { industry: 'Autonomous Vehicles', example: 'Edge decision system for obstacle avoidance with 10 ms latency requirement.' },
      { industry: 'Telecom', example: 'Real-time network QoS optimisation based on live traffic patterns.' },
    ],
    benefits: [
      'Respond to opportunities and threats in milliseconds',
      'Consistent, bias-free decisions at massive scale',
      'Explainable decisions that satisfy regulators and auditors',
      'Continuously self-improving through feedback integration',
    ],
  },
  // ─── Research & Development ────────────────────────────────────────
  {
    slug: 'collaborative-rd-projects',
    name: 'Collaborative R&D Projects',
    category: 'Research & Development',
    categoryColor: 'from-orange-600 to-red-600',
    tagline: 'Partner with us to research, innovate, and build the future together.',
    overview:
      'We co-create with academic institutions, startups, and enterprises on applied R&D projects. From grant-funded research to proof-of-concept validation, our team brings scientific rigour and engineering excellence to every collaboration.',
    features: [
      { title: 'Joint Research Programmes', description: 'Structured collaboration with shared IP arrangements and co-publication opportunities.' },
      { title: 'Industry-Academia Linkage', description: 'Facilitate partnerships between businesses and leading research institutions.' },
      { title: 'Technology Transfer', description: 'Help academic innovations cross the valley of death into commercial applications.' },
      { title: 'Grant Support', description: 'Assistance with DST, DRDO, BIRAC, and international grant applications.' },
      { title: 'Pilot & Field Trials', description: 'Design and manage controlled pilots to validate research outcomes in real environments.' },
      { title: 'IP Strategy', description: 'Patent filing support and IP commercialisation advisory for research outcomes.' },
    ],
    useCases: [
      { industry: 'Agriculture', example: 'Collaborative AI crop advisory system with a state agricultural university.' },
      { industry: 'Healthcare', example: 'Joint R&D on low-cost medical diagnostics with a medical college.' },
      { industry: 'Smart Cities', example: 'Government-partnered research on IoT-based waste management optimisation.' },
      { industry: 'Education', example: 'EdTech startup co-development of adaptive learning algorithms.' },
    ],
    benefits: [
      'Access world-class research expertise without building it in-house',
      'Reduce innovation risk through structured validation',
      'Leverage government grants and subsidies for R&D funding',
      'Faster path from research to market-ready product',
    ],
  },
  {
    slug: 'proof-of-concept-prototyping',
    name: 'Proof of Concept & Prototyping',
    category: 'Research & Development',
    categoryColor: 'from-orange-600 to-red-600',
    tagline: 'Validate your idea quickly before committing to full-scale development.',
    overview:
      'We rapidly build focused PoCs and prototypes that test the technical feasibility and business value of an idea. Our time-boxed sprints deliver working prototypes in 4–8 weeks, giving stakeholders the evidence they need to invest with confidence.',
    features: [
      { title: 'Feasibility Assessment', description: 'Technical and commercial feasibility analysis before writing a single line of code.' },
      { title: 'Rapid Prototyping Sprints', description: '4–8 week sprints delivering a working prototype with core functionality.' },
      { title: 'User Testing & Validation', description: 'Structured user feedback sessions to validate assumptions early.' },
      { title: 'Architecture Spike', description: 'Test critical technical risks (latency, accuracy, scalability) in isolation.' },
      { title: 'Stakeholder Demos', description: 'Polished demo environments for investor, customer, and board presentations.' },
      { title: 'PoC-to-Product Roadmap', description: 'Clear technical plan for scaling a validated PoC to a production system.' },
    ],
    useCases: [
      { industry: 'Startup', example: 'AI-powered crop disease detection PoC built in 6 weeks for investor demo.' },
      { industry: 'Enterprise', example: 'Document intelligence prototype validated before $2M full-scale investment.' },
      { industry: 'Government', example: 'Smart parking PoC deployed across 3 pilot zones before city-wide rollout.' },
      { industry: 'Healthcare', example: 'Wearable ECG analysis prototype tested with 50 patients in 8 weeks.' },
    ],
    benefits: [
      'Validate assumptions in weeks, not months',
      'Reduce risk before major capital investment',
      'Build investor and stakeholder confidence with working demos',
      'Clear technical foundation for full-scale product development',
    ],
  },
  {
    slug: 'technology-consulting',
    name: 'Technology Consulting',
    category: 'Research & Development',
    categoryColor: 'from-orange-600 to-red-600',
    tagline: 'Expert, independent advice to help you make the right technology decisions.',
    overview:
      'Our technology consultants provide objective, vendor-neutral guidance on architecture decisions, technology selection, digital transformation strategy, and innovation planning. We combine deep technical expertise with business acumen to help you invest wisely.',
    features: [
      { title: 'Technology Due Diligence', description: 'Assess existing systems, technical debt, and vendor solutions for investment or acquisition decisions.' },
      { title: 'Architecture Review', description: 'Independent review of proposed or existing system architectures with actionable recommendations.' },
      { title: 'Digital Transformation Strategy', description: 'End-to-end strategy for modernising legacy systems and adopting cloud and AI.' },
      { title: 'Build vs Buy Analysis', description: 'Objective cost-benefit analysis to decide whether to build, buy, or partner.' },
      { title: 'Vendor Evaluation', description: 'RFP design, vendor scoring, and selection support for technology procurement.' },
      { title: 'Innovation Workshop', description: 'Facilitated workshops to identify and prioritise emerging technology opportunities.' },
    ],
    useCases: [
      { industry: 'Enterprise', example: 'Cloud migration strategy for a 20-year-old ERP, reducing infrastructure costs by 40%.' },
      { industry: 'Startup', example: 'Tech stack selection and architecture design for a Series A SaaS company.' },
      { industry: 'Government', example: 'Digital transformation roadmap for a state department modernising citizen services.' },
      { industry: 'NGO', example: 'Low-cost technology strategy for a non-profit expanding field operations in rural areas.' },
    ],
    benefits: [
      'Avoid costly technology mistakes with independent expert advice',
      'Accelerate decisions with structured evaluation frameworks',
      'Align technology investments with long-term business strategy',
      'Gain access to specialist knowledge without long-term hiring commitment',
    ],
  },
  // ─── Claude AI Services ───────────────────────────────────────────
  {
    slug: 'ai-powered-product-development',
    name: 'AI-Powered Product Development',
    category: 'Claude AI Services',
    categoryColor: 'from-violet-600 to-purple-600',
    tagline: 'Build and ship AI-powered software products using Claude API as the intelligence backbone.',
    overview:
      'We design, build, and deliver production-ready AI-powered products for businesses — from intelligent chatbots and document processing platforms to full HELPER 2.0-style marketplace applications. Leveraging Anthropic\'s Claude API, we compress months of AI development into weeks, giving clients a competitive edge with enterprise-grade AI at a fraction of the cost.',
    features: [
      { title: 'Custom AI Chatbots & Virtual Assistants', description: 'Multilingual conversational AI assistants for customer support, sales, HR, and operations — trained on your business data.' },
      { title: 'Intelligent Document Processing', description: 'Automated extraction, classification, and analysis of invoices, contracts, forms, and reports using Claude\'s 1M token context.' },
      { title: 'AI Workflow Automation', description: 'End-to-end workflow automation connecting your existing tools (CRM, ERP, Tally) with Claude AI decision-making.' },
      { title: 'Marketplace AI Platforms', description: 'HELPER 2.0-style intelligent marketplace platforms for real estate, logistics, healthcare, and agriculture verticals.' },
      { title: 'Managed Agent Deployment', description: 'Deploy Claude Managed Agents for scalable, cloud-hosted AI workloads with automatic scaling and built-in monitoring.' },
      { title: 'SaaS Product Launch', description: 'From MVP to production — we handle architecture, development, testing, and go-to-market for AI SaaS products.' },
    ],
    useCases: [
      { industry: 'Retail', example: 'AI product recommendation engine processing 50,000 daily queries at ₹0.08 per interaction.' },
      { industry: 'Healthcare', example: 'Hospital appointment triage bot handling 80% of inbound queries without human intervention.' },
      { industry: 'Logistics', example: 'Intelligent freight matching platform pairing shippers with carriers using AI scoring.' },
      { industry: 'Finance', example: 'GST document processing platform reducing CA firm\'s manual work by 70% at ₹1.55 per document.' },
    ],
    benefits: [
      'Launch AI products in weeks, not months, using proven Claude API infrastructure',
      'Dramatically lower AI costs with prompt caching (up to 90% savings) and batch processing (50% savings)',
      'Multilingual capability across Hindi, Gujarati, English and 50+ languages for pan-India reach',
      'Scalable SaaS pricing model: ₹2–10L build + ₹15,000–50,000/month recurring revenue',
    ],
  },
  {
    slug: 'document-intelligence-services',
    name: 'Document Intelligence Services',
    category: 'Claude AI Services',
    categoryColor: 'from-violet-600 to-purple-600',
    tagline: 'Process, analyse, and extract insights from business documents at unprecedented scale and speed.',
    overview:
      'Businesses generate thousands of documents daily — contracts, invoices, medical records, compliance filings, and more. Our Document Intelligence service uses Claude\'s advanced language understanding and 1-million-token context window to read, analyse, summarise, and extract structured data from any document type. At approximately ₹1.55 per document, we replace expensive manual processing with fast, accurate AI analysis.',
    features: [
      { title: 'Legal Document Review', description: 'Automated review and summarisation of contracts, agreements, and legal filings — flagging risk clauses, obligations, and deadlines.' },
      { title: 'Invoice & GST Extraction', description: 'Extract line items, GSTIN, HSN codes, tax amounts, and totals from invoices in any format — structured output ready for your ERP.' },
      { title: 'Medical Record Summarisation', description: 'Condense patient histories, lab reports, and discharge summaries into structured clinical summaries for doctors and insurers.' },
      { title: 'Contract Risk Analysis', description: 'Identify unfavourable clauses, missing protections, and compliance gaps across large contract portfolios.' },
      { title: 'Compliance Document Auditing', description: 'Automated audit of regulatory filings, policy documents, and compliance records for regulated industries.' },
      { title: 'Bulk Document Processing', description: 'Process thousands of documents overnight using Batch API at 50% cost reduction — ideal for year-end processing and audits.' },
    ],
    useCases: [
      { industry: 'Legal', example: '500 contracts reviewed and risk-flagged in 4 hours — work that took a team 3 weeks manually.' },
      { industry: 'Accounting', example: 'CA firm processing 10,000 GST invoices monthly at ₹15,500 total AI cost vs ₹2L+ manual cost.' },
      { industry: 'Healthcare', example: 'Hospital digitising 5 years of patient records — full history available in seconds per patient.' },
      { industry: 'Banking', example: 'Loan application document verification reduced from 3 days to 45 minutes per application.' },
    ],
    benefits: [
      'Process 10,000 documents for approximately ₹15,500 — 90%+ cost reduction vs manual processing',
      'Consistent accuracy unaffected by fatigue, volume, or complexity',
      'Handle entire codebases, legal contracts, or large datasets in a single API call',
      'Structured output integrates directly with your ERP, CRM, or database',
    ],
  },
  {
    slug: 'customer-experience-automation',
    name: 'Customer Experience Automation',
    category: 'Claude AI Services',
    categoryColor: 'from-violet-600 to-purple-600',
    tagline: 'Automate and elevate every customer interaction with multilingual AI.',
    overview:
      'We help businesses deploy AI-powered customer experience tools that resolve queries faster, reduce support costs, and deliver personalised interactions at scale. From WhatsApp AI assistants to sentiment analysis platforms, our solutions integrate with your existing MSG91, WhatsApp Business API, and CRM stack — delivering multilingual support in Hindi, Gujarati, English, and 50+ languages.',
    features: [
      { title: 'Multilingual Support Bots', description: 'AI bots handling customer queries in Hindi, Gujarati, English, and regional languages — 24/7 without human intervention.' },
      { title: 'WhatsApp & SMS AI Integration', description: 'Seamless integration with WhatsApp Business API and MSG91 for conversational AI on channels customers already use.' },
      { title: 'Smart Reply Generation', description: 'AI-suggested replies for support agents, reducing handle time by 40–60% while maintaining brand voice.' },
      { title: 'Sentiment Analysis', description: 'Real-time analysis of customer feedback, reviews, and support tickets to surface trends and escalation triggers.' },
      { title: 'Automated Complaint Routing', description: 'AI triage classifying and routing complaints to the right team with priority scoring and SLA tracking.' },
      { title: 'Customer Feedback Intelligence', description: 'Aggregate and analyse unstructured feedback from multiple channels into actionable product and service insights.' },
    ],
    useCases: [
      { industry: 'E-commerce', example: 'WhatsApp AI assistant handling 3,000 daily order queries — 78% resolved without human agent.' },
      { industry: 'Banking', example: 'Multilingual IVR replacement reducing call centre volume by 45% with AI chat deflection.' },
      { industry: 'Healthcare', example: 'Appointment booking bot in Hindi and Gujarati achieving 92% booking completion rate.' },
      { industry: 'Retail', example: 'Sentiment analysis on 50,000 monthly reviews surfacing top 5 product issues within 24 hours.' },
    ],
    benefits: [
      'Reduce customer support costs by 40–70% through AI-first resolution',
      'Serve customers in their native language across all digital channels',
      'Consistent service quality at any scale — peak season or off-peak',
      'Actionable insights from every customer interaction, automatically',
    ],
  },
  {
    slug: 'ai-augmented-development',
    name: 'AI-Augmented Development Services',
    category: 'Claude AI Services',
    categoryColor: 'from-violet-600 to-purple-600',
    tagline: 'Deliver software faster and at higher quality using Claude Code in your development pipeline.',
    overview:
      'We integrate Claude Code and AI-assisted development practices into our software delivery process — and offer this capability as a managed service to client engineering teams. The result: faster delivery, fewer bugs, and lower development costs. Our founder\'s 8+ years of database and Snowflake expertise, combined with Claude\'s code generation, means we can modernise legacy systems and build data pipelines at half the traditional timeline.',
    features: [
      { title: 'AI-Accelerated Software Delivery', description: 'GFRD\'s development pipeline uses Claude Code — clients get faster turnaround at no extra cost.' },
      { title: 'AI Code Review as a Service', description: 'Managed AI code review for client engineering teams — catching bugs, security issues, and anti-patterns automatically.' },
      { title: 'Legacy Modernisation', description: 'Migrate Java, PHP, and legacy monoliths to modern cloud-native architectures with AI-assisted code conversion.' },
      { title: 'Automated Test Generation', description: 'Claude generates comprehensive unit, integration, and E2E test suites for existing or new codebases.' },
      { title: 'Database & Pipeline Consulting', description: 'Snowflake, BigQuery, and data pipeline consulting leveraging GFRD\'s deep data engineering expertise.' },
      { title: 'API & Integration Development', description: 'Rapid API development and third-party integration (Razorpay, MSG91, GST portals, Maps) with AI-assisted development.' },
    ],
    useCases: [
      { industry: 'Fintech', example: 'Legacy payment gateway migrated to microservices in 8 weeks vs projected 6-month timeline.' },
      { industry: 'Manufacturing', example: 'Automated test suite for 150,000 lines of legacy ERP code — 94% code coverage achieved in 2 weeks.' },
      { industry: 'Startup', example: 'Full-stack SaaS MVP delivered in 6 weeks using AI-augmented development — 40% below quoted price.' },
      { industry: 'Enterprise', example: 'Snowflake data warehouse with automated dbt pipelines replacing manual ETL, saving 20 engineering hours per week.' },
    ],
    benefits: [
      'Software delivered 30–50% faster through AI-assisted development',
      'Higher code quality with automated reviews catching issues before production',
      'Modernise legacy systems without rewriting from scratch',
      'Access Snowflake and data engineering expertise combined with AI acceleration',
    ],
  },
  {
    slug: 'enterprise-ai-consulting',
    name: 'Enterprise AI Consulting & Deployment',
    category: 'Claude AI Services',
    categoryColor: 'from-violet-600 to-purple-600',
    tagline: 'Position your organisation at the frontier of enterprise AI with GFRD as your implementation partner.',
    overview:
      'GFRD is positioned to become Gujarat\'s leading Claude AI implementation partner. We deploy, configure, and manage Claude Enterprise for corporate clients — handling everything from SSO integration and RBAC setup to staff training, custom MCP integrations, and ongoing managed service contracts. For companies that want enterprise-grade AI with full governance, compliance, and support, GFRD is the end-to-end partner.',
    features: [
      { title: 'Claude Enterprise Deployment', description: 'Full deployment and configuration of Claude Enterprise — SSO, SCIM, RBAC, audit logs, and compliance API setup.' },
      { title: 'Custom MCP Integrations', description: 'Connect Claude to your existing CRM, ERP, HR systems, Tally, and business tools through custom MCP connectors.' },
      { title: 'Staff Training & Onboarding', description: 'Structured AI onboarding programmes teaching your teams to use Claude effectively and responsibly.' },
      { title: 'Governance Framework Design', description: 'Define AI usage policies, approval workflows, and access controls aligned with your compliance requirements.' },
      { title: 'Managed Service Contracts', description: 'GFRD monitors, maintains, and optimises your Claude deployment — clients get AI value without managing infrastructure.' },
      { title: 'Claude Partner Network Access', description: 'As an Anthropic partner, GFRD provides co-selling support, technical resources, and preferential enterprise pricing.' },
    ],
    useCases: [
      { industry: 'Banking', example: 'Claude Enterprise deployed for 200-seat bank with full audit trail, RBAC by department, and Finacle ERP integration.' },
      { industry: 'Hospital', example: 'HIPAA-ready Claude deployment for hospital system with patient data PII scrubbing and role-based access by ward.' },
      { industry: 'Manufacturing', example: 'Claude integrated with SAP and quality management system — procurement and QA teams using AI daily.' },
      { industry: 'Government', example: 'Compliant AI deployment for state agency with Indian data residency, audit logs, and custom retention policies.' },
    ],
    benefits: [
      'Enterprise-grade AI governance meeting DPDP Act and sector-specific compliance requirements',
      'Data residency in India (GCP Mumbai) — data never leaves Indian borders',
      'Predictable managed service billing replacing unpredictable in-house AI costs',
      'Anthropic partner-level access to enterprise pricing and technical support',
    ],
  },
  {
    slug: 'data-analytics-ai-services',
    name: 'Data & Analytics AI Services',
    category: 'Claude AI Services',
    categoryColor: 'from-violet-600 to-purple-600',
    tagline: 'Transform raw data into boardroom-ready insights with AI-powered analytics.',
    overview:
      'We combine GFRD\'s deep Snowflake and data engineering expertise with Claude\'s analytical reasoning to deliver automated business intelligence for clients. From AI-generated narrative reports to predictive analytics and competitor intelligence, our data services turn data backlogs into daily decision support — without hiring a data science team.',
    features: [
      { title: 'Automated Business Report Generation', description: 'Claude reads your data and writes plain-language executive summaries every morning — sales, ops, finance, in one click.' },
      { title: 'Snowflake AI Data Apps', description: 'Build intelligent applications on top of your Snowflake data warehouse with AI-powered queries and narrative generation.' },
      { title: 'Customer Behaviour Analysis', description: 'Segment customers, predict churn, and identify upsell opportunities using Claude-powered analytics on your CRM data.' },
      { title: 'Financial Report Summarisation', description: 'AI-generated financial commentary for CFOs and investors — P&L analysis, variance explanations, and forecasts.' },
      { title: 'Competitor Intelligence', description: 'Automated gathering and summarisation of competitor news, product changes, and market movements.' },
      { title: 'Predictive Analytics Dashboards', description: 'Sales forecasting, inventory planning, and demand prediction with confidence intervals and trend explanations.' },
    ],
    useCases: [
      { industry: 'Retail', example: 'Daily AI sales briefing for 50-store chain — regional managers receive personalised summaries at 8 AM every day.' },
      { industry: 'Agriculture', example: 'Snowflake data platform for agri-input distributor tracking 10,000 farmer accounts with AI churn prediction.' },
      { industry: 'Finance', example: 'Monthly financial close reduced from 5 days to 1 day with AI-generated variance analysis and narrative commentary.' },
      { industry: 'Logistics', example: 'Competitor pricing intelligence platform monitoring 200 routes daily, with AI-generated market position summaries.' },
    ],
    benefits: [
      'Reduce time-to-insight from days to minutes with automated AI reporting',
      'Empower non-technical executives with plain-language AI narratives instead of raw dashboards',
      'Leverage GFRD\'s 8+ years of Snowflake expertise combined with Claude AI intelligence',
      'Proactive anomaly alerts before KPI deviations become business problems',
    ],
  },
  {
    slug: 'sector-specific-ai-products',
    name: 'Sector-Specific AI Products',
    category: 'Claude AI Services',
    categoryColor: 'from-violet-600 to-purple-600',
    tagline: 'Vertical AI solutions built for India\'s highest-growth sectors — AgriTech, HealthTech, LegalTech, and more.',
    overview:
      'We build purpose-built AI products for India\'s most dynamic sectors. Each product is designed from the ground up for its industry context — integrating relevant data sources, using the right Claude model tier, and optimised for Indian languages, regulations, and workflows. From soil advisory chatbots to GST compliance assistants, our vertical AI products deliver immediate, measurable value.',
    features: [
      { title: 'AgriTech AI Suite', description: 'Soil & crop advisory chatbot, pest detection from field photos, and weather-based farm alerts in regional languages.' },
      { title: 'HealthTech Solutions', description: 'Patient record summarisation, appointment triage bot with calendar integration, and medical report analysis.' },
      { title: 'LegalTech for SMEs', description: 'Contract review and risk flagging using Claude Opus 4.6 reasoning — affordable legal AI for small businesses.' },
      { title: 'EdTech Personalisation', description: 'Adaptive tutoring assistant with extended thinking for STEM subjects — personalised to each student\'s learning pace.' },
      { title: 'RetailTech Intelligence', description: 'Multilingual product description generator, customer review analysis, and AI-powered inventory recommendations.' },
      { title: 'FinTech Compliance Assistant', description: 'GST, TDS, and compliance document assistant — extract, validate, and file-ready output for CAs and finance teams.' },
    ],
    useCases: [
      { industry: 'AgriTech', example: 'Crop advisory chatbot in Hindi and Marathi advising 10,000 farmers — pest photo analysis responding in under 5 seconds.' },
      { industry: 'HealthTech', example: 'Patient triage bot for 200-bed hospital reducing front desk load by 60% and appointment no-shows by 35%.' },
      { industry: 'LegalTech', example: 'SME contract review tool identifying 12 risk clauses in a 40-page agreement in under 2 minutes.' },
      { industry: 'FinTech', example: 'GST return preparation assistant reducing CA\'s per-client filing time from 3 hours to 25 minutes.' },
    ],
    benefits: [
      'Sector-specific AI that understands your industry\'s terminology, regulations, and workflows',
      'Built for India — regional language support, DPDP Act compliance, GST and Aadhaar integration ready',
      'Right model for the right job — Haiku for speed, Sonnet for balance, Opus for complex reasoning',
      'Faster ROI through vertical focus — no generic AI customisation costs',
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getSlugForService(name: string): string {
  return servicesData.find((s) => s.name === name)?.slug ?? '';
}
