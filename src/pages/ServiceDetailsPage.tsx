import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  Code2, Cloud, Database, Shield, Globe, Cpu, Server, Network,
  Smartphone, LineChart, Users, Headphones, CheckCircle, ArrowRight,
  MessageSquare, Briefcase, Building, Star, PlusCircle, MinusCircle
} from 'lucide-react';

const services = {
  'custom-software': {
    icon: <Code2 className="w-12 h-12" />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your unique business requirements.',
    detailedDescription: `
      At Optrya Technologies, we specialize in developing custom software solutions that are specifically designed to address your unique business challenges and requirements. Unlike off-the-shelf software, our custom solutions are built from the ground up with your specific workflows, processes, and goals in mind.

      Our team of experienced developers, designers, and project managers work closely with you throughout the development process to ensure that the final product not only meets but exceeds your expectations. We focus on creating intuitive, scalable, and secure software that drives efficiency, productivity, and growth for your business.

      Whether you need a complex enterprise application, a customer-facing web portal, or a specialized internal tool, our custom software development services deliver solutions that provide a competitive edge in today's digital landscape.
    `,
    features: [
      'Custom Application Development',
      'Enterprise Software Solutions',
      'Legacy System Modernization',
      'API Development & Integration',
      'Quality Assurance & Testing',
      'Maintenance & Support',
    ],
    benefits: [
      'Increased Efficiency',
      'Competitive Advantage',
      'Scalable Solutions',
      'Enhanced Security',
      'Better User Experience',
    ],
    process: [
      'Requirements Analysis',
      'Design & Architecture',
      'Development',
      'Testing & QA',
      'Deployment',
      'Maintenance',
    ],
    technologies: [
      'React/Angular/Vue',
      'Node.js/Python/Java',
      'AWS/Azure/GCP',
      'Docker/Kubernetes',
      'MongoDB/PostgreSQL',
    ],
    useCases: [
      {
        title: 'Healthcare Patient Management System',
        description: 'Developed a comprehensive patient management system for a leading healthcare provider, streamlining appointment scheduling, medical record management, and billing processes.',
        results: 'Reduced administrative workload by 40% and improved patient satisfaction scores by 35%.'
      },
      {
        title: 'Financial Services Trading Platform',
        description: 'Built a high-performance trading platform for a financial services firm, enabling real-time data analysis and automated trading strategies.',
        results: 'Increased trading efficiency by 60% and reduced transaction costs by 25%.'
      },
      {
        title: 'Manufacturing Inventory Management',
        description: 'Created a custom inventory management system for a manufacturing company, integrating with IoT sensors for real-time tracking and automated reordering.',
        results: 'Reduced inventory costs by 30% and eliminated stockouts completely.'
      }
    ],

    faqs: [
      {
        question: "How long does it typically take to develop a custom software solution?",
        answer: "The timeline for custom software development varies depending on the complexity and scope of the project. Simple applications may take 3-4 months, while complex enterprise solutions can take 6-12 months or more. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
      },
      {
        question: "How do you ensure the security of custom software?",
        answer: "Security is integrated throughout our development process. We implement industry best practices for secure coding, conduct regular security audits and penetration testing, and incorporate multiple layers of security measures including encryption, secure authentication, and access controls tailored to your specific needs."
      },
      {
        question: "Can you integrate custom software with our existing systems?",
        answer: "Yes, we specialize in creating seamless integrations between new custom software and existing systems. Our developers are experienced in working with various APIs, databases, and legacy systems to ensure smooth data flow and functionality across your entire technology ecosystem."
      },
      {
        question: "What happens after the software is deployed?",
        answer: "We offer comprehensive post-deployment support and maintenance services to ensure your software continues to perform optimally. This includes bug fixes, security updates, performance optimization, and feature enhancements as your business needs evolve."
      }
    ],
    relatedServices: ['cloud-solutions', 'web-development', 'cybersecurity'],
    color: 'from-blue-500 to-blue-600',
  },
  'cloud-solutions': {
    icon: <Cloud className="w-12 h-12" />,
    title: 'Cloud Solutions',
    description: 'Comprehensive cloud services for modern business needs.',
    detailedDescription: `
      Optrya Technologies offers end-to-end cloud solutions that help businesses leverage the power of cloud computing to drive innovation, reduce costs, and improve operational efficiency. Our cloud experts work with you to design, implement, and manage cloud environments that align with your business objectives and technical requirements.

      We provide a full spectrum of cloud services, from initial assessment and strategy development to migration, optimization, and ongoing management. Whether you're looking to move your existing infrastructure to the cloud, build cloud-native applications, or optimize your current cloud environment, our team has the expertise to help you achieve your goals.

      Our cloud solutions are designed to be secure, scalable, and cost-effective, enabling your business to stay agile and competitive in today's rapidly evolving digital landscape. We work with leading cloud providers including AWS, Microsoft Azure, and Google Cloud Platform to deliver the best possible solutions for your specific needs.
    `,
    features: [
      'Cloud Migration',
      'Cloud Infrastructure Setup',
      'Cloud Security',
      'Cost Optimization',
      'Performance Monitoring',
      '24/7 Support',
    ],
    benefits: [
      'Reduced Costs',
      'Improved Scalability',
      'Enhanced Security',
      'Better Reliability',
      'Global Accessibility',
    ],
    process: [
      'Assessment',
      'Planning',
      'Migration',
      'Optimization',
      'Monitoring',
      'Support',
    ],
    technologies: [
      'AWS Services',
      'Microsoft Azure',
      'Google Cloud Platform',
      'Kubernetes',
      'Docker',
    ],
    useCases: [
      {
        title: 'E-commerce Platform Migration',
        description: 'Migrated a high-traffic e-commerce platform from on-premises infrastructure to AWS, implementing auto-scaling and load balancing to handle seasonal traffic spikes.',
        results: 'Achieved 99.99% uptime, 40% reduction in infrastructure costs, and 60% faster page load times.'
      },
      {
        title: 'Hybrid Cloud Solution for Financial Institution',
        description: 'Designed and implemented a hybrid cloud architecture for a financial services company, balancing security requirements with the need for scalability and innovation.',
        results: 'Maintained compliance with industry regulations while reducing time-to-market for new services by 50%.'
      },
      {
        title: 'Cloud-Native Application Development',
        description: 'Developed a cloud-native application for a logistics company using microservices architecture and containerization.',
        results: 'Enabled continuous deployment with zero downtime updates and reduced development cycles from months to weeks.'
      }
    ],

    faqs: [
      {
        question: "How do you ensure security in cloud environments?",
        answer: "We implement a comprehensive security framework that includes identity and access management, network security, encryption, compliance monitoring, and regular security assessments. Our approach follows industry best practices and compliance requirements specific to your industry."
      },
      {
        question: "What is your approach to cloud migration?",
        answer: "Our cloud migration approach follows a proven methodology: assessment of existing infrastructure, developing a migration strategy, planning and prioritizing workloads, executing the migration with minimal disruption, and post-migration optimization. We tailor this approach to your specific business needs and technical environment."
      },
      {
        question: "How do you help optimize cloud costs?",
        answer: "We employ several strategies for cloud cost optimization, including right-sizing resources, implementing auto-scaling, utilizing reserved instances, identifying and removing unused resources, and continuous monitoring and analysis of usage patterns to recommend cost-saving opportunities."
      },
      {
        question: "Can you support multi-cloud or hybrid cloud environments?",
        answer: "Yes, we have extensive experience designing and managing multi-cloud and hybrid cloud environments. We help businesses leverage the strengths of different cloud providers and integrate on-premises infrastructure with cloud services to create a cohesive and efficient IT ecosystem."
      }
    ],
    relatedServices: ['custom-software', 'cybersecurity', 'data-analytics'],
    color: 'from-cyan-500 to-cyan-600',
  },
  'data-analytics': {
    icon: <Database className="w-12 h-12" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights that drive business growth and innovation.',
    detailedDescription: `
      In today's data-driven world, the ability to extract meaningful insights from your data is a critical competitive advantage. Optrya Technologies offers comprehensive data analytics services that help businesses harness the full potential of their data to make informed decisions, identify opportunities, and solve complex problems.

      Our team of data scientists, analysts, and engineers combines technical expertise with business acumen to deliver analytics solutions that address your specific challenges and objectives. From data collection and processing to advanced analytics and visualization, we provide end-to-end services that turn raw data into valuable business intelligence.

      We work with organizations of all sizes across various industries to implement data analytics solutions that drive measurable business outcomes. Whether you're looking to optimize operations, enhance customer experiences, or develop new products and services, our data analytics capabilities can help you achieve your goals.
    `,
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Predictive Analytics',
      'Big Data Processing',
      'Machine Learning Integration',
      'Real-time Analytics',
    ],
    benefits: [
      'Data-Driven Decision Making',
      'Identify Market Trends',
      'Optimize Business Processes',
      'Increase Revenue',
      'Reduce Operational Costs',
    ],
    process: [
      'Data Collection',
      'Data Cleaning',
      'Data Analysis',
      'Insight Generation',
      'Implementation',
      'Monitoring',
    ],
    technologies: [
      'Python/R',
      'Tableau/Power BI',
      'Hadoop/Spark',
      'TensorFlow/PyTorch',
      'SQL/NoSQL',
    ],
    useCases: [
      {
        title: 'Retail Customer Analytics',
        description: 'Implemented a comprehensive customer analytics solution for a retail chain, integrating data from multiple sources to create a 360-degree view of customer behavior and preferences.',
        results: 'Increased customer retention by 25% and boosted average order value by 18% through personalized marketing campaigns.'
      },
      {
        title: 'Manufacturing Predictive Maintenance',
        description: 'Developed a predictive maintenance system for a manufacturing company using IoT sensor data and machine learning algorithms to forecast equipment failures before they occur.',
        results: 'Reduced unplanned downtime by 35% and maintenance costs by 20%, while extending equipment lifespan.'
      },
      {
        title: 'Healthcare Outcome Prediction',
        description: 'Created a predictive analytics model for a healthcare provider to identify patients at high risk for readmission, enabling proactive intervention strategies.',
        results: 'Decreased readmission rates by 28% and improved patient outcomes while reducing healthcare costs.'
      }
    ],

    faqs: [
      {
        question: "How do you ensure data privacy and compliance in your analytics solutions?",
        answer: "We implement robust data governance frameworks that adhere to relevant regulations such as GDPR, HIPAA, and CCPA. Our approach includes data anonymization, encryption, access controls, and transparent data handling practices. We work closely with your legal and compliance teams to ensure all analytics activities meet your specific regulatory requirements."
      },
      {
        question: "What types of data can you work with?",
        answer: "We have experience working with virtually all types of data, including structured data (databases, spreadsheets), unstructured data (text, images, videos), semi-structured data (JSON, XML), time-series data, geospatial data, and streaming data. Our team selects the appropriate tools and methodologies based on your specific data types and business objectives."
      },
      {
        question: "How quickly can we expect to see results from data analytics initiatives?",
        answer: "The timeline for realizing value from data analytics varies depending on the complexity of the project and the state of your existing data infrastructure. Some insights can be generated within weeks, while more complex predictive models may take several months to develop and validate. We typically establish quick wins early in the process while building toward more sophisticated analytics capabilities."
      },
      {
        question: "Do we need to have a data science team to work with you?",
        answer: "No, you don't need an in-house data science team. We can provide end-to-end analytics services, from data collection and preparation to analysis and visualization. However, if you do have data scientists or analysts on your team, we're happy to collaborate with them and provide specialized expertise as needed."
      }
    ],
    relatedServices: ['ai-machine-learning', 'cloud-solutions', 'custom-software'],
    color: 'from-purple-500 to-purple-600',
  },
  'cybersecurity': {
    icon: <Shield className="w-12 h-12" />,
    title: 'Cybersecurity',
    description: 'Protect your business with advanced security solutions and threat prevention strategies.',
    detailedDescription: `
      In today's digital landscape, cybersecurity is not just an IT concern but a critical business imperative. Optrya Technologies provides comprehensive cybersecurity solutions designed to protect your organization's most valuable assets from evolving threats.

      Our approach to cybersecurity is proactive and holistic, addressing all aspects of your security posture from network infrastructure and endpoints to applications and user behavior. We implement multi-layered security strategies that combine advanced technologies, industry best practices, and continuous monitoring to detect, prevent, and respond to security threats.

      Whether you need to strengthen your existing security measures, achieve compliance with industry regulations, or develop a comprehensive security program from the ground up, our team of security experts will work closely with you to implement solutions that meet your specific requirements and risk profile.
    `,
    features: [
      'Network Security',
      'Endpoint Protection',
      'Vulnerability Assessment',
      'Penetration Testing',
      'Security Audits',
      'Incident Response',
    ],
    benefits: [
      'Protect Sensitive Data',
      'Prevent Security Breaches',
      'Maintain Customer Trust',
      'Regulatory Compliance',
      'Business Continuity',
    ],
    process: [
      'Assessment',
      'Planning',
      'Implementation',
      'Testing',
      'Monitoring',
      'Improvement',
    ],
    technologies: [
      'Firewall Solutions',
      'Encryption Tools',
      'SIEM Systems',
      'Antivirus Software',
      'VPN Technologies',
    ],
    useCases: [
      {
        title: 'Financial Services Security Overhaul',
        description: 'Implemented a comprehensive security solution for a financial services company, including advanced threat protection, data encryption, and compliance monitoring.',
        results: 'Achieved 100% compliance with industry regulations, reduced security incidents by 75%, and protected sensitive customer financial data.'
      },
      {
        title: 'Healthcare Data Protection',
        description: 'Designed and implemented a multi-layered security system for a healthcare provider to protect patient data and ensure HIPAA compliance.',
        results: 'Eliminated data breaches, achieved full HIPAA compliance, and established secure access controls for all patient information systems.'
      },
      {
        title: 'Manufacturing Security Monitoring',
        description: 'Deployed a 24/7 security monitoring solution for a manufacturing company with multiple facilities and complex OT/IT environments.',
        results: 'Detected and prevented multiple attempted breaches, reduced incident response time by 60%, and protected intellectual property from theft.'
      }
    ],
    faqs: [
      {
        question: "How do I know if my business needs cybersecurity services?",
        answer: "Every business that uses digital systems, stores sensitive data, or connects to the internet needs cybersecurity protection. The level of protection required depends on factors such as your industry, regulatory requirements, the sensitivity of your data, and your risk tolerance. We recommend a security assessment to evaluate your current security posture and identify specific needs."
      },
      {
        question: "What are the most common cybersecurity threats businesses face today?",
        answer: "The threat landscape is constantly evolving, but common threats include ransomware, phishing attacks, data breaches, insider threats, supply chain attacks, and DDoS attacks. The specific threats your business faces depend on your industry, size, and the type of data you handle. Our security assessments help identify the threats most relevant to your organization."
      },
      {
        question: "How do you help with regulatory compliance?",
        answer: "We have extensive experience with various regulatory frameworks including GDPR, HIPAA, PCI DSS, SOC 2, and industry-specific regulations. Our approach includes gap analysis, implementation of required security controls, documentation of policies and procedures, employee training, and ongoing compliance monitoring. We work closely with your compliance team to ensure all requirements are met."
      },
      {
        question: "What should we do if we experience a security breach?",
        answer: "If you suspect a breach, contact us immediately. Our incident response team will help contain the breach, investigate the cause, remediate vulnerabilities, and restore normal operations. We also assist with required notifications to affected parties and regulatory authorities, and provide recommendations to prevent similar incidents in the future."
      }
    ],
    relatedServices: ['network-solutions', 'cloud-solutions', 'it-infrastructure'],
    color: 'from-red-500 to-red-600',
  },
  'web-development': {
    icon: <Globe className="w-12 h-12" />,
    title: 'Web Development',
    description: 'Create engaging, responsive websites and applications that elevate your brand online.',
    features: [
      'Responsive Web Design',
      'E-commerce Solutions',
      'Content Management Systems',
      'Progressive Web Apps',
      'API Development',
      'SEO Optimization',
    ],
    benefits: [
      'Enhanced User Experience',
      'Increased Conversion Rates',
      'Mobile Compatibility',
      'Improved Brand Presence',
      'Scalable Solutions',
    ],
    process: [
      'Discovery',
      'Planning',
      'Design',
      'Development',
      'Testing',
      'Deployment',
    ],
    technologies: [
      'HTML/CSS/JavaScript',
      'React/Angular/Vue',
      'Node.js/PHP',
      'WordPress/Shopify',
      'AWS/Netlify',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  'ai-machine-learning': {
    icon: <Cpu className="w-12 h-12" />,
    title: 'AI & Machine Learning',
    description: 'Harness the power of intelligent automation to unlock new opportunities and efficiencies.',
    features: [
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Modeling',
      'Recommendation Systems',
      'Automated Decision Making',
      'Intelligent Automation',
    ],
    benefits: [
      'Process Automation',
      'Enhanced Customer Experience',
      'Predictive Insights',
      'Reduced Operational Costs',
      'Competitive Advantage',
    ],
    process: [
      'Data Collection',
      'Model Selection',
      'Training',
      'Validation',
      'Deployment',
      'Monitoring',
    ],
    technologies: [
      'TensorFlow/PyTorch',
      'Python/R',
      'OpenAI/Hugging Face',
      'AWS AI Services',
      'Google Cloud AI',
    ],
    color: 'from-green-500 to-green-600',
  },
  'it-infrastructure': {
    icon: <Server className="w-12 h-12" />,
    title: 'IT Infrastructure',
    description: 'Build and maintain robust IT infrastructure that scales with your business needs.',
    detailedDescription: `
      Optrya Technologies provides comprehensive IT infrastructure solutions designed to create a solid foundation for your business operations. Our team of experienced infrastructure specialists designs, implements, and manages robust IT environments that align with your business objectives and technical requirements.

      We take a holistic approach to infrastructure management, considering all aspects of your technology ecosystem including servers, storage, networking, virtualization, and cloud integration. Our solutions are built to be scalable, secure, and reliable, ensuring that your IT infrastructure can grow and adapt as your business evolves.

      Whether you're looking to optimize your existing infrastructure, migrate to a new environment, or build a hybrid solution, our team has the expertise to deliver results that improve performance, enhance security, and reduce operational costs.
    `,
    features: [
      'Network Design',
      'Server Management',
      'Virtualization',
      'Backup Solutions',
      'Disaster Recovery',
      'Infrastructure Monitoring',
    ],
    benefits: [
      'Improved Reliability',
      'Scalable Architecture',
      'Reduced Downtime',
      'Enhanced Performance',
      'Cost Optimization',
    ],
    process: [
      'Assessment',
      'Design',
      'Implementation',
      'Testing',
      'Deployment',
      'Maintenance',
    ],
    technologies: [
      'VMware/Hyper-V',
      'Windows/Linux Servers',
      'Storage Solutions',
      'Backup Systems',
      'Monitoring Tools',
    ],
    useCases: [
      {
        title: 'Enterprise Infrastructure Modernization',
        description: 'Redesigned and implemented a modern infrastructure solution for a growing enterprise, replacing legacy systems with scalable, virtualized architecture.',
        results: 'Reduced infrastructure costs by 35% while improving system performance by 60% and eliminating unplanned downtime.'
      },
      {
        title: 'Disaster Recovery Implementation',
        description: 'Developed and implemented a comprehensive disaster recovery solution for a financial services firm, ensuring business continuity in case of system failures.',
        results: 'Achieved 99.99% uptime and reduced recovery time objective (RTO) from days to hours.'
      },
      {
        title: 'Hybrid Infrastructure Design',
        description: 'Created a hybrid infrastructure solution combining on-premises systems with cloud services for a manufacturing company.',
        results: 'Provided 40% more computing capacity while maintaining existing security protocols and reducing overall IT costs by 25%.'
      }
    ],
    faqs: [
      {
        question: "How can we determine if our current IT infrastructure needs upgrading?",
        answer: "We offer comprehensive infrastructure assessments that evaluate your current systems against industry best practices, performance benchmarks, and your business requirements. Key indicators that suggest an upgrade is needed include frequent downtime, slow performance, security vulnerabilities, difficulty scaling to meet demand, and high maintenance costs."
      },
      {
        question: "What is your approach to infrastructure security?",
        answer: "We implement a defense-in-depth security strategy that includes multiple layers of protection. This typically involves network security (firewalls, intrusion detection/prevention), endpoint security, access controls, encryption, regular security updates, and continuous monitoring. We also conduct regular security assessments to identify and address potential vulnerabilities."
      },
      {
        question: "How do you ensure minimal disruption during infrastructure upgrades?",
        answer: "Our approach includes detailed planning, thorough testing in staging environments, implementing changes during off-peak hours, having comprehensive rollback plans, and providing clear communication throughout the process. We often use phased implementation strategies to minimize risk and disruption to your business operations."
      },
      {
        question: "Can you support both on-premises and cloud infrastructure?",
        answer: "Yes, we have extensive experience designing, implementing, and managing both on-premises and cloud infrastructure, as well as hybrid solutions that combine both approaches. We help businesses determine the optimal infrastructure strategy based on their specific requirements for performance, security, compliance, and cost."
      }
    ],
    relatedServices: ['cloud-solutions', 'cybersecurity', 'network-solutions'],
    color: 'from-green-500 to-green-600',
  },
  'network-solutions': {
    icon: <Network className="w-12 h-12" />,
    title: 'Network Solutions',
    description: 'Design and implement secure, high-performance networks for your organization.',
    detailedDescription: `
      Optrya Technologies delivers comprehensive network solutions that form the backbone of your IT infrastructure. Our network specialists design, implement, and manage secure, high-performance networks that meet the unique requirements of your business.

      We take a strategic approach to network design, considering factors such as performance requirements, security needs, scalability, and budget constraints. Our solutions incorporate the latest networking technologies and best practices to ensure optimal performance, reliability, and security.

      From local area networks (LANs) and wide area networks (WANs) to wireless networks and software-defined networking (SDN), we provide end-to-end solutions that connect your people, devices, and applications seamlessly and securely.
    `,
    features: [
      'Network Security',
      'VPN Setup',
      'WiFi Solutions',
      'Load Balancing',
      'Network Monitoring',
      'Bandwidth Optimization',
    ],
    benefits: [
      'Enhanced Connectivity',
      'Improved Security',
      'Optimized Performance',
      'Reliable Communication',
      'Scalable Architecture',
    ],
    process: [
      'Network Assessment',
      'Design',
      'Implementation',
      'Testing',
      'Deployment',
      'Monitoring',
    ],
    technologies: [
      'Cisco/Juniper',
      'Firewall Solutions',
      'SD-WAN',
      'VPN Technologies',
      'Network Monitoring Tools',
    ],
    useCases: [
      {
        title: 'Enterprise Network Redesign',
        description: 'Redesigned and implemented a new network architecture for a multi-location enterprise, improving connectivity, security, and performance.',
        results: 'Increased network throughput by 200%, reduced latency by 40%, and eliminated security vulnerabilities.'
      },
      {
        title: 'Secure Remote Access Solution',
        description: 'Implemented a comprehensive VPN solution for a professional services firm, enabling secure remote work capabilities for all employees.',
        results: 'Enabled 100% of employees to work remotely with secure access to all company resources while maintaining compliance requirements.'
      },
      {
        title: 'Wireless Network Deployment',
        description: 'Designed and deployed a high-density wireless network for a large educational institution with multiple buildings and thousands of concurrent users.',
        results: 'Provided reliable connectivity for over 5,000 concurrent users with 99.99% uptime and consistent performance across all campus locations.'
      }
    ],
    faqs: [
      {
        question: "How often should we update our network infrastructure?",
        answer: "Network infrastructure typically has a lifecycle of 5-7 years, but this can vary based on your business needs, growth, and the emergence of new technologies. We recommend regular network assessments (at least annually) to evaluate performance, security, and alignment with business requirements. These assessments help identify when upgrades or replacements are necessary."
      },
      {
        question: "What are the signs that our network needs an upgrade?",
        answer: "Key indicators include slow network performance, frequent outages or connectivity issues, security vulnerabilities, difficulty supporting new applications or services, increasing maintenance costs, and lack of scalability to meet growing business needs. If your network equipment is approaching end-of-life or end-of-support from the manufacturer, that's also a clear sign an upgrade is needed."
      },
      {
        question: "How do you approach network security?",
        answer: "We implement a layered security approach that includes perimeter security (firewalls, intrusion prevention), network segmentation, access controls, encryption, continuous monitoring, and regular security assessments. Our security solutions are designed to protect against both external threats and internal vulnerabilities while maintaining compliance with relevant regulations."
      },
      {
        question: "Can you support remote and hybrid work environments?",
        answer: "Yes, we specialize in designing network solutions that enable secure, reliable remote and hybrid work. This includes implementing secure VPN access, SD-WAN solutions for optimized connectivity, cloud-based security services, and unified communications platforms that work seamlessly regardless of employee location."
      }
    ],
    relatedServices: ['it-infrastructure', 'cybersecurity', 'cloud-solutions'],
    color: 'from-yellow-500 to-yellow-600',
  },
  'mobile-development': {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Mobile Development',
    description: 'Create engaging mobile experiences with our native and cross-platform development services.',
    detailedDescription: `
      Optrya Technologies delivers cutting-edge mobile application development services that help businesses connect with their customers on the devices they use most. Our mobile development team creates intuitive, high-performance applications for iOS, Android, and cross-platform environments.

      We understand that successful mobile applications require more than just technical expertise. That's why our approach combines technical excellence with user-centered design principles to create mobile experiences that are not only functional but also engaging and intuitive for users.

      Whether you need a consumer-facing app to engage with your customers, an enterprise application to streamline internal processes, or a mobile extension of your existing web platform, our team has the expertise to deliver solutions that meet your specific business objectives.
    `,
    features: [
      'iOS/Android Apps',
      'React Native',
      'Flutter',
      'Mobile UI/UX',
      'App Store Optimization',
      'Mobile Testing',
    ],
    benefits: [
      'Increased User Engagement',
      'Expanded Market Reach',
      'Enhanced Brand Presence',
      'Improved Customer Experience',
      'New Revenue Streams',
    ],
    process: [
      'Requirements Analysis',
      'UI/UX Design',
      'Development',
      'Testing',
      'Deployment',
      'Maintenance',
    ],
    technologies: [
      'Swift/Objective-C',
      'Kotlin/Java',
      'React Native',
      'Flutter',
      'Firebase',
    ],
    useCases: [
      {
        title: 'E-commerce Mobile App',
        description: 'Developed a feature-rich e-commerce mobile application for a retail client, including product browsing, secure checkout, and personalized recommendations.',
        results: 'Increased mobile sales by 45%, improved customer engagement, and reduced cart abandonment rates by 30%.'
      },
      {
        title: 'Field Service Management App',
        description: 'Created a mobile solution for field service technicians, enabling real-time job assignments, customer information access, and digital documentation.',
        results: 'Reduced administrative time by 60%, improved first-time fix rates by 25%, and enhanced customer satisfaction scores.'
      },
      {
        title: 'Healthcare Patient Portal',
        description: 'Developed a secure mobile patient portal for a healthcare provider, allowing patients to schedule appointments, access medical records, and communicate with providers.',
        results: 'Reduced appointment no-shows by 35%, decreased call center volume by 40%, and improved patient satisfaction ratings.'
      }
    ],
    faqs: [
      {
        question: "Should we develop a native app or a cross-platform app?",
        answer: "This depends on your specific requirements, budget, and timeline. Native apps (iOS/Android) offer the best performance, access to all platform features, and optimal user experience. Cross-platform solutions (React Native, Flutter) provide cost efficiency, faster development, and easier maintenance across platforms. We'll help you evaluate the trade-offs based on your specific needs."
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer: "Development timelines vary based on complexity, features, and platforms. A simple app might take 2-3 months, while complex applications can take 6+ months. We follow an agile development approach, allowing for early releases of core functionality followed by iterative improvements based on user feedback."
      },
      {
        question: "How do you ensure the security of mobile applications?",
        answer: "We implement multiple security measures including secure authentication, data encryption, secure API communication, code obfuscation, and regular security testing. We also follow platform-specific security best practices and stay current with the latest security threats and mitigations specific to mobile environments."
      },
      {
        question: "What happens after the app is launched?",
        answer: "We provide ongoing maintenance and support services to ensure your app continues to function optimally. This includes bug fixes, compatibility updates for new OS versions, performance optimization, and feature enhancements. We also offer analytics integration to help you understand user behavior and make data-driven improvements."
      }
    ],
    relatedServices: ['custom-software', 'web-development', 'cloud-solutions'],
    color: 'from-orange-500 to-orange-600',
  },
  'business-intelligence': {
    icon: <LineChart className="w-12 h-12" />,
    title: 'Business Intelligence',
    description: 'Make data-driven decisions with our BI tools and analytics solutions.',
    detailedDescription: `
      Optrya Technologies provides comprehensive Business Intelligence (BI) solutions that transform your raw data into actionable insights. Our BI services help organizations make informed decisions, identify trends, and gain a competitive edge through data-driven strategies.

      We take a holistic approach to business intelligence, starting with understanding your business objectives and data sources, then designing and implementing solutions that deliver meaningful insights through intuitive dashboards and reports. Our solutions integrate data from multiple sources, creating a unified view of your business performance.

      Whether you're looking to improve operational efficiency, enhance customer understanding, or identify new market opportunities, our BI solutions provide the insights you need to make strategic decisions with confidence.
    `,
    features: [
      'Data Warehousing',
      'Reporting',
      'KPI Tracking',
      'Analytics',
      'Dashboard Development',
      'Data Visualization',
    ],
    benefits: [
      'Informed Decision Making',
      'Performance Monitoring',
      'Trend Identification',
      'Competitive Analysis',
      'Operational Efficiency',
    ],
    process: [
      'Data Assessment',
      'Requirements Gathering',
      'Data Modeling',
      'Implementation',
      'Testing',
      'Training',
    ],
    technologies: [
      'Power BI',
      'Tableau',
      'SQL Server',
      'Oracle',
      'Data Warehousing Tools',
    ],
    useCases: [
      {
        title: 'Retail Sales Analytics',
        description: 'Implemented a comprehensive BI solution for a retail chain, integrating data from multiple stores, online sales, and inventory systems.',
        results: 'Increased inventory turnover by 20%, reduced stockouts by 35%, and improved targeted marketing ROI by 40%.'
      },
      {
        title: 'Manufacturing Performance Dashboards',
        description: 'Developed real-time performance dashboards for a manufacturing company, providing visibility into production metrics, quality control, and supply chain.',
        results: 'Reduced production downtime by 15%, improved quality metrics by 25%, and optimized supply chain costs by 18%.'
      },
      {
        title: 'Financial Services Customer Analytics',
        description: 'Created a customer analytics platform for a financial services firm, enabling deeper understanding of customer behavior, preferences, and lifetime value.',
        results: 'Increased cross-selling success by 30%, improved customer retention by 25%, and enabled more precise customer segmentation for targeted offerings.'
      }
    ],
    faqs: [
      {
        question: "How can Business Intelligence benefit my organization?",
        answer: "Business Intelligence provides numerous benefits including improved decision-making through data-driven insights, increased operational efficiency by identifying bottlenecks and optimization opportunities, enhanced customer understanding through behavior analysis, better financial planning with accurate forecasting, and competitive advantage through market trend identification. The specific benefits for your organization depend on your industry, goals, and current data maturity."
      },
      {
        question: "What data sources can be integrated into a BI solution?",
        answer: "Modern BI solutions can integrate data from virtually any source, including ERP and CRM systems, databases, spreadsheets, web analytics, social media, IoT devices, and third-party applications. Our approach focuses on identifying the most valuable data sources for your specific business objectives and creating a unified data model that provides meaningful insights."
      },
      {
        question: "How long does it take to implement a BI solution?",
        answer: "Implementation timelines vary based on the complexity of your data environment, the number of data sources, and your specific requirements. A basic implementation might take 4-8 weeks, while more complex enterprise solutions can take 3-6 months. We often use a phased approach, delivering initial value quickly and then expanding the solution over time."
      },
      {
        question: "Do we need specialized staff to maintain our BI solution?",
        answer: "Modern BI tools are designed to be user-friendly, allowing business users to create reports and analyze data with minimal technical expertise. However, for more complex data environments, some technical support may be beneficial. We provide comprehensive training for your team and can offer ongoing support services to ensure you get maximum value from your BI investment."
      }
    ],
    relatedServices: ['data-analytics', 'custom-software', 'cloud-solutions'],
    color: 'from-indigo-500 to-indigo-600',
  },
  'it-consulting': {
    icon: <Users className="w-12 h-12" />,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to help you navigate digital transformation.',
    detailedDescription: `
      Optrya Technologies provides expert IT consulting services to help organizations align their technology strategies with business objectives. Our consultants bring deep industry knowledge and technical expertise to help you navigate the complexities of digital transformation and technology adoption.

      We take a collaborative approach to IT consulting, working closely with your team to understand your business challenges, goals, and constraints. Based on this understanding, we develop tailored strategies and roadmaps that leverage technology to drive business value, improve operational efficiency, and create competitive advantage.

      Whether you're planning a major digital transformation initiative, evaluating new technologies, optimizing your IT operations, or addressing specific technology challenges, our consulting team provides the guidance and expertise you need to make informed decisions and achieve successful outcomes.
    `,
    features: [
      'Digital Strategy',
      'Process Optimization',
      'Tech Assessment',
      'Roadmapping',
      'Vendor Selection',
      'IT Governance',
    ],
    benefits: [
      'Strategic Alignment',
      'Cost Optimization',
      'Risk Mitigation',
      'Innovation Enablement',
      'Competitive Advantage',
    ],
    process: [
      'Discovery',
      'Assessment',
      'Strategy Development',
      'Roadmap Creation',
      'Implementation Planning',
      'Ongoing Advisory',
    ],
    technologies: [
      'Enterprise Architecture',
      'Project Management',
      'ITIL Framework',
      'Agile Methodologies',
      'Digital Transformation Tools',
    ],
    useCases: [
      {
        title: 'Digital Transformation Strategy',
        description: 'Developed a comprehensive digital transformation strategy for a mid-sized manufacturing company, including technology roadmap, organizational change management, and implementation planning.',
        results: 'Enabled 30% improvement in operational efficiency, created new digital revenue streams, and positioned the company as an industry innovator.'
      },
      {
        title: 'IT Cost Optimization',
        description: 'Conducted an in-depth assessment of IT spending and operations for a financial services firm, identifying optimization opportunities and developing an implementation plan.',
        results: 'Reduced IT operating costs by 25% while improving service levels and creating capacity for innovation initiatives.'
      },
      {
        title: 'Technology Vendor Selection',
        description: 'Guided a healthcare organization through the process of selecting a new electronic health record (EHR) system, including requirements definition, vendor evaluation, and contract negotiation.',
        results: 'Selected a solution that improved clinical workflows by 40%, enhanced patient care, and provided $2M in annual cost savings compared to the previous system.'
      }
    ],
    faqs: [
      {
        question: "How do IT consulting services differ from implementation services?",
        answer: "IT consulting focuses on strategic guidance, planning, and advisory services to help you make informed technology decisions. This includes assessments, strategy development, roadmapping, and advisory services. Implementation services focus on the actual execution of those plans, including development, configuration, integration, and deployment. While we offer both services, consulting typically precedes implementation to ensure the right solutions are being deployed."
      },
      {
        question: "How do you ensure your recommendations align with our business goals?",
        answer: "Our consulting process begins with a thorough understanding of your business objectives, challenges, and constraints. We conduct stakeholder interviews across different levels and departments to gain multiple perspectives. All our recommendations are explicitly tied to specific business outcomes and include measurable success criteria. We also prioritize recommendations based on business impact and feasibility."
      },
      {
        question: "What industries do you specialize in for IT consulting?",
        answer: "We have deep expertise in several industries including financial services, healthcare, manufacturing, retail, and professional services. Our consultants bring both industry-specific knowledge and cross-industry best practices to provide relevant and innovative recommendations. For specialized industries, we often pair industry experts with technology specialists to ensure comprehensive guidance."
      },
      {
        question: "How do you stay current with rapidly evolving technologies?",
        answer: "Our consultants participate in ongoing professional development, industry conferences, and technology certification programs. We maintain partnerships with leading technology providers to gain early access to new solutions. We also conduct regular internal knowledge sharing and have established a continuous learning culture. This ensures our recommendations incorporate the latest technologies and best practices."
      }
    ],
    relatedServices: ['custom-software', 'cybersecurity', 'cloud-solutions'],
    color: 'from-pink-500 to-pink-600',
  },
  'it-support': {
    icon: <Headphones className="w-12 h-12" />,
    title: '24/7 IT Support',
    description: 'Round-the-clock technical support and maintenance for your IT systems.',
    detailedDescription: `
      Optrya Technologies provides comprehensive 24/7 IT support services designed to keep your technology running smoothly and your business operating efficiently. Our team of experienced support specialists is available around the clock to address technical issues, provide assistance, and ensure your IT systems remain operational.

      We understand that technology issues can arise at any time and can significantly impact your business operations. That's why we offer multi-tiered support options with guaranteed response times, ensuring that critical issues are addressed promptly and effectively.

      Our proactive approach to IT support goes beyond simply fixing problems as they occur. We implement monitoring systems to identify potential issues before they impact your business, perform regular maintenance to prevent problems, and provide ongoing optimization to improve system performance and reliability.
    `,
    features: [
      'Help Desk',
      'Remote Support',
      'System Monitoring',
      'Issue Resolution',
      'Preventive Maintenance',
      'User Training',
    ],
    benefits: [
      'Minimized Downtime',
      'Quick Issue Resolution',
      'Proactive Maintenance',
      'Enhanced Productivity',
      'Peace of Mind',
    ],
    process: [
      'Ticket Creation',
      'Triage',
      'Troubleshooting',
      'Resolution',
      'Documentation',
      'Follow-up',
    ],
    technologies: [
      'Remote Support Tools',
      'Ticketing Systems',
      'Monitoring Solutions',
      'Knowledge Base',
      'Automation Tools',
    ],
    useCases: [
      {
        title: 'Enterprise Help Desk Implementation',
        description: 'Implemented a comprehensive help desk solution for a large enterprise with 1,000+ employees across multiple locations, providing 24/7 support for all IT systems and applications.',
        results: 'Reduced average issue resolution time by 65%, improved user satisfaction scores by 40%, and decreased system downtime by 80%.'
      },
      {
        title: 'Proactive Monitoring Solution',
        description: 'Deployed a proactive monitoring system for a healthcare provider, continuously monitoring critical systems and infrastructure to identify and address potential issues before they impact operations.',
        results: 'Prevented an estimated 30+ potential outages annually, reduced unplanned downtime by 95%, and ensured continuous availability of critical patient care systems.'
      },
      {
        title: 'Remote Workforce Support',
        description: 'Provided comprehensive remote support services for a professional services firm transitioning to a hybrid work model, supporting employees across various locations and home offices.',
        results: 'Enabled seamless transition to hybrid work, maintained 99.9% productivity levels, and resolved 90% of support issues remotely within 30 minutes.'
      }
    ],
    faqs: [
      {
        question: "What types of IT support services do you offer?",
        answer: "We offer a comprehensive range of IT support services including help desk support, remote troubleshooting, on-site support, system monitoring, preventive maintenance, security monitoring, user training, and technology consulting. Our support services can be customized based on your specific needs, from basic help desk support to comprehensive managed IT services."
      },
      {
        question: "What are your support hours and response times?",
        answer: "We provide 24/7/365 support coverage for critical systems and offer flexible support options for non-critical systems. Our response times vary based on issue severity: critical issues (system down) within 15 minutes, high-priority issues within 1 hour, medium-priority issues within 4 hours, and low-priority issues within 8 business hours. We offer Service Level Agreements (SLAs) with guaranteed response times."
      },
      {
        question: "How do you handle support for specialized applications or systems?",
        answer: "We maintain expertise across a wide range of applications and systems. For specialized applications, we develop specific support protocols and knowledge bases. We also work closely with software vendors and can escalate issues directly to them when necessary. For highly specialized systems, we can develop custom support plans that include dedicated specialists familiar with your specific technology environment."
      },
      {
        question: "Can you support remote or hybrid work environments?",
        answer: "Yes, we specialize in supporting distributed work environments. Our remote support tools allow us to troubleshoot and resolve issues regardless of user location. We provide support for VPN connections, remote desktop solutions, collaboration tools, and home office setups. We also offer security solutions specifically designed for remote work environments to ensure your data remains protected."
      }
    ],
    relatedServices: ['it-infrastructure', 'cybersecurity', 'network-solutions'],
    color: 'from-teal-500 to-teal-600',
  }
};

// Define a type for the service object
type ServiceDetails = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  process: string[];
  technologies: string[];
  color: string;
  detailedDescription?: string;
  useCases?: Array<{
    title: string;
    description: string;
    results: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices?: string[];
};

const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams();
  const service = services[id as keyof typeof services] as ServiceDetails;

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Service not found</h1>
          <p className="text-gray-600 mt-2">The requested service does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className={`relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-primary-900`}>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px_16px]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 text-white">
              {service.icon}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
              {service.description}
            </p>
            <Link to="/consultation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-gray-900 rounded-full font-medium flex items-center justify-center mx-auto text-sm sm:text-base"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Detailed Description Section */}
      {service.detailedDescription && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 text-center">
                  About Our {service.title} Services
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  {service.detailedDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph.trim()}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Key Features
                </h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Benefits
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Our Process
                </h2>
                <p className="text-lg text-gray-600">
                  We follow a structured approach to deliver the best results
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {service.process.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-gray-50 rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        {index + 1}
                      </div>
                      <h3 className="font-medium text-gray-900">{step}</h3>
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 transform translate-x-1/2" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Use Cases Section */}
            {service.useCases && (
              <div className="mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                    Success Stories
                  </h2>
                  <p className="text-lg text-gray-600">
                    Real-world examples of how our {service.title} solutions have helped businesses succeed
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {service.useCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                        <p className="text-gray-600 mb-4">{useCase.description}</p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-gray-900">Results:</p>
                          <p className="text-gray-600">{useCase.results}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials Section */}


            {/* FAQ Section */}
            {service.faqs && (
              <div className="mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-gray-600">
                    Common questions about our {service.title} services
                  </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                  {service.faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <div className="p-4 bg-white">
                        <div className="font-medium text-gray-900 mb-2">{faq.question}</div>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Technologies We Use
                </h2>
                <p className="text-lg text-gray-600">
                  We leverage the latest technologies to deliver superior solutions
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {service.technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 text-center"
                  >
                    <span className="text-gray-900 font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Related Services Section */}
            {service.relatedServices && (
              <div className="mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                    Related Services
                  </h2>
                  <p className="text-lg text-gray-600">
                    Explore other services that complement {service.title}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {service.relatedServices.map((relatedServiceId, index) => {
                    const relatedService = services[relatedServiceId as keyof typeof services];
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                        whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                      >
                        <div className={`h-2 bg-gradient-to-r ${relatedService.color}`}></div>
                        <div className="p-6">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                            {relatedService.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedService.title}</h3>
                          <p className="text-gray-600 mb-4">{relatedService.description}</p>
                          <Link
                            to={`/services/${relatedServiceId}`}
                            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8">
              Contact us today to learn how our {service.title} services can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-primary-600 rounded-full font-medium text-sm sm:text-base"
                >
                  Contact Us
                </motion.button>
              </Link>
              <Link to="/consultation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white rounded-full font-medium text-sm sm:text-base"
                >
                  Schedule a Consultation
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsPage;