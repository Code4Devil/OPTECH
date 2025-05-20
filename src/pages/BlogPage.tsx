import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Cloud Computing: Trends to Watch in 2023',
      excerpt: 'Explore the emerging trends in cloud computing that are set to transform businesses in the coming year.',
      content: `
        <p>Cloud computing has become the backbone of digital transformation for businesses across industries. As we move further into 2023, several key trends are emerging that will shape the future of cloud technologies and services.</p>

        <h3>1. Multi-Cloud Strategies Become the Norm</h3>
        <p>Organizations are increasingly adopting multi-cloud approaches to avoid vendor lock-in, optimize costs, and leverage the best services from different providers. This trend is expected to accelerate as cloud management platforms make it easier to operate across multiple environments.</p>

        <h3>2. Edge Computing Integration</h3>
        <p>The integration of edge computing with cloud services is gaining momentum. By processing data closer to where it's generated, businesses can reduce latency, conserve bandwidth, and enable real-time applications. Major cloud providers are expanding their edge computing capabilities to meet this growing demand.</p>

        <h3>3. Serverless Computing Expansion</h3>
        <p>Serverless computing continues to evolve, offering developers the ability to build and run applications without managing infrastructure. This model is becoming more sophisticated, with improved tooling and support for more complex workloads.</p>

        <h3>4. AI and ML as Cloud Services</h3>
        <p>Artificial Intelligence and Machine Learning capabilities are increasingly being offered as cloud services, making these technologies more accessible to organizations of all sizes. Pre-trained models, automated ML tools, and specialized AI hardware in the cloud are democratizing access to these powerful technologies.</p>

        <h3>5. Enhanced Cloud Security</h3>
        <p>As cloud adoption grows, so does the focus on security. Zero Trust architectures, advanced threat protection, and automated compliance tools are becoming standard features of cloud platforms.</p>

        <h3>Conclusion</h3>
        <p>The cloud computing landscape continues to evolve rapidly, offering new opportunities for innovation and efficiency. Organizations that stay informed about these trends and adapt their strategies accordingly will be well-positioned to leverage the full potential of cloud technologies in 2023 and beyond.</p>
      `,
      author: 'Michael Chen',
      date: 'May 15, 2023',
      category: 'Cloud Computing',
      image: '/blog/cloud-computing.svg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Remote Work Environments',
      excerpt: 'Learn essential cybersecurity measures to protect your organization in the era of remote and hybrid work.',
      content: `
        <p>The shift to remote and hybrid work models has expanded the attack surface for organizations, making robust cybersecurity practices more important than ever. This article outlines key strategies to secure your remote work environment.</p>

        <h3>1. Implement Strong Authentication</h3>
        <p>Multi-factor authentication (MFA) should be mandatory for all remote access to company resources. This simple step can prevent the vast majority of account compromise attacks. Consider using authenticator apps or hardware keys rather than SMS-based verification for enhanced security.</p>

        <h3>2. Secure Home Networks</h3>
        <p>Provide guidelines for employees to secure their home networks, including changing default router passwords, enabling WPA3 encryption, and regularly updating firmware. Consider providing corporate VPNs to encrypt all traffic between employee devices and company resources.</p>

        <h3>3. Device Management</h3>
        <p>Implement endpoint management solutions to ensure all devices accessing corporate data meet security standards. This includes keeping operating systems and applications updated, enabling disk encryption, and installing endpoint protection software.</p>

        <h3>4. Data Protection</h3>
        <p>Adopt a data-centric security approach by classifying information and applying appropriate controls. Use encryption for sensitive data, implement data loss prevention tools, and establish clear policies for data handling in remote settings.</p>

        <h3>5. Security Awareness Training</h3>
        <p>Regular training is crucial as remote workers face unique security challenges. Focus on recognizing phishing attempts, safe use of public Wi-Fi, physical security of devices, and proper handling of sensitive information outside the office.</p>

        <h3>6. Incident Response Planning</h3>
        <p>Develop and test incident response procedures specifically for remote work scenarios. Ensure employees know how to report security incidents and what steps to take if they suspect their device has been compromised.</p>

        <h3>Conclusion</h3>
        <p>As remote and hybrid work becomes a permanent feature of the business landscape, organizations must adapt their security strategies accordingly. By implementing these best practices, you can significantly reduce the risk of security breaches while supporting a productive remote workforce.</p>
      `,
      author: 'Sarah Johnson',
      date: 'April 28, 2023',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity.svg',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'How AI is Transforming Software Development',
      excerpt: 'Discover how artificial intelligence is changing the way we build, test, and deploy software applications.',
      content: `
        <p>Artificial Intelligence is revolutionizing software development, automating routine tasks, enhancing developer productivity, and enabling new capabilities. Here's how AI is transforming various aspects of the software development lifecycle.</p>

        <h3>1. Intelligent Code Completion</h3>
        <p>AI-powered code completion tools like GitHub Copilot and TabNine are changing how developers write code. These tools can suggest entire functions or blocks of code based on comments or context, significantly speeding up development and reducing repetitive coding tasks.</p>

        <h3>2. Automated Testing</h3>
        <p>AI is enhancing software testing by automatically generating test cases, identifying potential bugs, and prioritizing tests based on code changes. Machine learning algorithms can analyze patterns in test results to predict where defects are most likely to occur, allowing for more efficient testing processes.</p>

        <h3>3. Intelligent Debugging</h3>
        <p>AI-assisted debugging tools can analyze application logs and runtime behavior to identify the root causes of issues more quickly than traditional methods. Some systems can even suggest potential fixes based on similar problems encountered in the past.</p>

        <h3>4. Code Refactoring and Optimization</h3>
        <p>AI tools can analyze codebases to identify opportunities for refactoring, suggesting improvements to code quality, performance, and maintainability. These tools can detect code smells, potential security vulnerabilities, and performance bottlenecks that might be missed by human reviewers.</p>

        <h3>5. Low-Code/No-Code Development</h3>
        <p>AI is powering the next generation of low-code and no-code platforms, making software development accessible to non-programmers. These platforms use AI to translate natural language requirements into functional applications, democratizing software creation.</p>

        <h3>6. DevOps and Deployment</h3>
        <p>AI is streamlining DevOps processes by predicting deployment issues, optimizing resource allocation, and automating incident response. Machine learning models can analyze deployment patterns to recommend the best times and strategies for releasing new code.</p>

        <h3>Conclusion</h3>
        <p>As AI continues to evolve, its impact on software development will only grow. While AI won't replace human developers, it will transform their roles, allowing them to focus on creative problem-solving and innovation rather than routine coding tasks. Organizations that embrace these AI-powered development tools will gain significant advantages in speed, quality, and cost-effectiveness.</p>
      `,
      author: 'David Rodriguez',
      date: 'March 12, 2023',
      category: 'Artificial Intelligence',
      image: '/blog/ai-development.svg',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'Digital Transformation: A Roadmap for Success',
      excerpt: 'A comprehensive guide to navigating the challenges of digital transformation and achieving meaningful business outcomes.',
      content: `
        <p>Digital transformation has moved beyond buzzword status to become an imperative for business survival and growth. However, many transformation initiatives fail to deliver expected results. This article provides a practical roadmap for successful digital transformation.</p>

        <h3>1. Start with Clear Business Objectives</h3>
        <p>Successful digital transformation begins with well-defined business objectives rather than technology for its own sake. Identify specific problems to solve or opportunities to capture, and establish measurable goals that align with your overall business strategy.</p>

        <h3>2. Secure Leadership Commitment</h3>
        <p>Transformation requires strong, visible leadership support. Executives must champion the initiative, allocate necessary resources, and actively participate in overcoming organizational resistance. Create a dedicated transformation team with the authority to drive change across departmental boundaries.</p>

        <h3>3. Focus on Customer Experience</h3>
        <p>Put customer needs at the center of your transformation efforts. Map customer journeys to identify pain points and opportunities for digital enhancement. Regularly gather feedback and be willing to pivot based on changing customer expectations.</p>

        <h3>4. Build a Digital Culture</h3>
        <p>Technology alone won't drive transformation without corresponding cultural change. Foster a culture that embraces experimentation, tolerates calculated risks, and values continuous learning. Invest in developing digital skills across the organization and recognize those who embody the desired cultural attributes.</p>

        <h3>5. Take an Incremental Approach</h3>
        <p>Rather than attempting a complete overhaul at once, pursue transformation through a series of manageable initiatives. Start with high-impact, lower-risk projects to build momentum and demonstrate value. Use these early wins to secure support for more ambitious efforts.</p>

        <h3>6. Modernize Technology Infrastructure</h3>
        <p>Assess your current technology stack and identify areas that need modernization. Consider adopting cloud services, microservices architecture, and API-first approaches to create a flexible foundation for innovation. Balance building new capabilities with maintaining operational stability.</p>

        <h3>7. Measure and Communicate Progress</h3>
        <p>Establish key performance indicators that track both technical implementation and business outcomes. Regularly communicate progress, celebrate successes, and be transparent about challenges. Use data to inform course corrections and resource allocation decisions.</p>

        <h3>Conclusion</h3>
        <p>Digital transformation is a journey rather than a destination. By following this roadmap and adapting it to your organization's unique context, you can navigate the complexities of transformation and realize sustainable business value from your digital initiatives.</p>
      `,
      author: 'Jennifer Lee',
      date: 'February 8, 2023',
      category: 'Digital Transformation',
      image: '/blog/digital-transformation.svg',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing in IoT Applications',
      excerpt: 'Explore how edge computing is enabling more powerful and responsive IoT solutions across industries.',
      content: `
        <p>Edge computing is transforming the Internet of Things (IoT) landscape by bringing computational power closer to data sources. This paradigm shift is enabling new capabilities and addressing key challenges in IoT implementations.</p>

        <h3>1. Reducing Latency for Real-Time Applications</h3>
        <p>By processing data at or near its source, edge computing dramatically reduces the latency associated with cloud-based processing. This is critical for IoT applications that require real-time responses, such as autonomous vehicles, industrial automation, and remote healthcare monitoring.</p>

        <h3>2. Optimizing Bandwidth Usage</h3>
        <p>Edge computing allows for local processing and filtering of IoT data, sending only relevant information to the cloud. This approach significantly reduces bandwidth requirements and associated costs, making IoT deployments more economically viable at scale.</p>

        <h3>3. Enhancing Privacy and Security</h3>
        <p>Processing sensitive data locally rather than transmitting it to the cloud can enhance privacy and security. Edge computing enables organizations to implement data minimization principles by analyzing raw data at the edge and sending only aggregated insights to central systems.</p>

        <h3>4. Enabling Offline Operation</h3>
        <p>Edge computing allows IoT devices to continue functioning even when cloud connectivity is intermittent or unavailable. This resilience is particularly valuable in remote locations, mobile applications, or critical infrastructure where continuous operation is essential.</p>

        <h3>5. Industry Applications</h3>
        <p>Edge computing is driving innovation across multiple industries:</p>
        <ul>
          <li><strong>Manufacturing:</strong> Real-time monitoring and predictive maintenance of equipment</li>
          <li><strong>Retail:</strong> In-store analytics and personalized shopping experiences</li>
          <li><strong>Healthcare:</strong> Remote patient monitoring with immediate anomaly detection</li>
          <li><strong>Smart Cities:</strong> Traffic management, public safety, and environmental monitoring</li>
          <li><strong>Energy:</strong> Grid optimization and distributed energy resource management</li>
        </ul>

        <h3>6. The Edge-Cloud Continuum</h3>
        <p>Rather than replacing cloud computing, edge computing is creating a continuum where processing occurs at the most appropriate location based on application requirements. This hybrid approach combines the scalability and advanced analytics of the cloud with the responsiveness and efficiency of edge processing.</p>

        <h3>Conclusion</h3>
        <p>As IoT deployments continue to grow in scale and complexity, edge computing will play an increasingly important role in their architecture. Organizations implementing IoT solutions should evaluate where edge computing can add value to their specific use cases and develop strategies that leverage the complementary strengths of edge and cloud processing.</p>
      `,
      author: 'Robert Kim',
      date: 'January 20, 2023',
      category: 'IoT',
      image: '/blog/edge-computing.svg',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {selectedPost ? (
        <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
      ) : (
        <>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  OPTRYA Tech Blog
                </motion.h1>
                <motion.p
                  className="text-xl mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Insights, trends, and expert perspectives on technology and innovation
                </motion.p>
              </div>
            </div>
          </section>

          {/* Blog Filters */}
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  <div className="w-full md:w-64">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => setSelectedPost(post)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="h-48 bg-gray-200 relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
                            <span className="text-white text-lg font-medium">{post.category}</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                              {post.author.charAt(0)}
                            </div>
                            <span className="text-sm font-medium">{post.author}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg shadow-md">
                    <p className="text-gray-600 text-lg">No articles match your current filters. Try adjusting your search criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Subscribe to our newsletter to receive the latest insights and articles
                </p>
                <div className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-3 rounded-md border focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={onBack}
              className="flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Articles
            </button>

            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {post.title}
            </motion.h1>

            <div className="flex items-center text-blue-200 mb-6">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
              <span className="mx-2">•</span>
              <span>{post.category}</span>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium">{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-xl font-medium">{post.category}</span>
                </div>
              </div>

              <div className="p-8">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={onBack}
                className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Back to All Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">You May Also Like</h2>

            {/* This would typically show related articles based on category or tags */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Placeholder for related articles */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="h-40 bg-blue-900 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Related Article</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Related Article Title</h3>
                  <p className="text-gray-600">Brief excerpt from the related article would appear here...</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="h-40 bg-blue-900 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Related Article</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Related Article Title</h3>
                  <p className="text-gray-600">Brief excerpt from the related article would appear here...</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <div className="h-40 bg-blue-900 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Related Article</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Related Article Title</h3>
                  <p className="text-gray-600">Brief excerpt from the related article would appear here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
