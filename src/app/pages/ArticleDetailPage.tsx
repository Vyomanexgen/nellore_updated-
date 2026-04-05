import { useParams, Link } from 'react-router';
import AdsColumn, { newsPageAds } from '../components/AdsColumn';
import { Clock, Heart, Share2, User, ArrowLeft, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const ArticleDetailPage = () => {
  const { id } = useParams();

  const article = {
    id: id || '1',
    title: 'Nellore Smart City Project: A Game Changer for Infrastructure Development',
    image: 'https://images.unsplash.com/photo-1633702738734-443da2c18f3c?w=1200&h=600&fit=crop',
    author: 'Rajesh Kumar',
    date: 'April 3, 2026',
    time: '2 hours ago',
    category: 'Infrastructure',
    likes: 234,
    shares: 45,
    content: `
      <p>The Nellore Smart City project has entered its crucial implementation phase, marking a significant milestone in the city's transformation journey. This ambitious initiative promises to revolutionize urban infrastructure and improve the quality of life for residents.</p>

      <h2>Key Highlights of the Project</h2>
      <p>The Smart City project encompasses various development sectors including transportation, healthcare, education, and digital infrastructure. With an allocated budget of ₹2,000 crores, the project aims to modernize Nellore's urban landscape.</p>

      <h3>Transportation Infrastructure</h3>
      <p>One of the primary focuses is on enhancing the city's transportation network. This includes the development of new road networks, intelligent traffic management systems, and improved public transportation facilities.</p>

      <h3>Digital Infrastructure</h3>
      <p>The project places significant emphasis on building robust digital infrastructure. This includes free public WiFi in key areas, smart street lighting, and digital governance platforms for seamless citizen services.</p>

      <h2>Impact on Local Economy</h2>
      <p>Experts predict that the Smart City project will create thousands of job opportunities and attract significant private investments. Local businesses are expected to benefit from improved infrastructure and increased economic activity.</p>

      <p>The project is being implemented in phases, with the first phase expected to be completed by the end of 2026. Residents have expressed optimism about the transformation and the positive changes it will bring to their daily lives.</p>
    `,
  };

  const relatedArticles = [
    { id: '2', title: 'New IT Hub Development Announced', time: '5 hours ago' },
    { id: '3', title: 'Healthcare Infrastructure Expansion', time: '8 hours ago' },
    { id: '4', title: 'Education Sector Gets Major Boost', time: '1 day ago' },
  ];

  const tags = ['Smart City', 'Infrastructure', 'Development', 'Nellore', 'Urban Planning'];

  return (
    <div className="max-w-[1280px] mx-auto px-5 py-10">
      <div className="flex flex-col lg:flex-row gap-5">
        <main className="flex-1 min-w-0" style={{ maxWidth: '960px' }}>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[#1A6FD4] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          {/* Hero Image */}
          <div
            className="w-full h-96 bg-cover bg-center rounded-lg mb-6"
            style={{ backgroundImage: `url(${article.image})` }}
          />

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl font-bold text-[#111827] mb-4">{article.title}</h1>
            
            <div className="flex items-center gap-6 text-sm text-[#6B7280] mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.time}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pb-6 border-b border-[#E5E7EB]">
              <button className="flex items-center gap-2 text-[#6B7280] hover:text-[#EF4444] transition">
                <Heart className="w-5 h-5" />
                <span>{article.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-[#6B7280] hover:text-[#1A6FD4] transition">
                <Share2 className="w-5 h-5" />
                <span>{article.shares}</span>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              lineHeight: '1.8',
              fontSize: '16px',
              color: '#111827',
            }}
          />

          {/* Tags */}
          <div className="mb-12">
            <h3 className="font-semibold text-[#111827] mb-3 flex items-center gap-2">
              <Tag className="w-5 h-5" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#E6F1FB] text-[#1A6FD4] text-sm rounded-full hover:bg-[#1A6FD4] hover:text-white transition cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Share */}
          <div className="bg-[#F5F7FA] rounded-lg p-6 mb-12">
            <h3 className="font-semibold text-[#111827] mb-4">Share this article</h3>
            <div className="flex gap-3">
              <Button variant="outline">Facebook</Button>
              <Button variant="outline">Twitter</Button>
              <Button variant="outline">WhatsApp</Button>
              <Button variant="outline">Copy Link</Button>
            </div>
          </div>

          {/* Related Articles */}
          <div>
            <h3 className="font-semibold text-[#111827] mb-4">Related Articles</h3>
            <div className="space-y-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  to={`/news/${related.id}`}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#E5E7EB] hover:border-[#1A6FD4] transition"
                >
                  <span className="text-[#111827] font-medium">{related.title}</span>
                  <span className="text-sm text-[#6B7280]">{related.time}</span>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <AdsColumn ads={newsPageAds} />
      </div>
    </div>
  );
};

export default ArticleDetailPage;