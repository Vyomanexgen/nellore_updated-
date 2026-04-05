import { Link } from 'react-router';
import AdsColumn, { newsPageAds } from '../components/AdsColumn';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { injectAds } from '../../utils/adInjector';
import { InlineAdCard } from '../components/InlineAdCard';
import { Clock, Heart, Share2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useState, useEffect } from 'react';

const NewsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const featuredArticles = [
    {
      id: '1',
      title: 'Nellore Smart City Project: A Game Changer for Infrastructure Development',
      image: 'https://images.unsplash.com/photo-1771945032095-a69c43555f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      excerpt:
        'The ambitious Smart City project in Nellore is set to transform the urban landscape with cutting-edge technology and sustainable infrastructure...',
      author: 'Rajesh Kumar',
      time: '2 hours ago',
      likes: 234,
    },
    {
      id: '2',
      title: 'New Metro Rail Project Announced for Nellore',
      image: 'https://images.unsplash.com/photo-1643123645046-05f9800654b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      excerpt:
        'The state government has approved a new metro rail project connecting Nellore to neighboring cities, promising faster commutes and economic growth...',
      author: 'Priya Sharma',
      time: '4 hours ago',
      likes: 189,
    },
    {
      id: '3',
      title: 'Tech Innovation Hub Opens in Nellore Industrial Park',
      image: 'https://images.unsplash.com/photo-1646153976497-14925728ff47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      excerpt:
        'A state-of-the-art technology innovation hub has been inaugurated at the Nellore Industrial Park, attracting IT companies and startups...',
      author: 'Srinivas Rao',
      time: '6 hours ago',
      likes: 203,
    },
    {
      id: '4',
      title: 'Nellore Tourism Sees Record Growth in 2026',
      image: 'https://images.unsplash.com/photo-1600100397608-f010f423b971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      excerpt:
        'Tourism in Nellore has reached new heights with increased footfall at heritage sites, beaches, and cultural centers, boosting the local economy...',
      author: 'Venkat Reddy',
      time: '8 hours ago',
      likes: 156,
    },
    {
      id: '5',
      title: 'Annual Cultural Festival Attracts Thousands in Nellore',
      image: 'https://images.unsplash.com/photo-1774798909993-eecdf8de4472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      excerpt:
        'The annual cultural festival in Nellore showcased vibrant performances, traditional art, and local cuisine, drawing visitors from across the state...',
      author: 'Lakshmi Devi',
      time: '10 hours ago',
      likes: 178,
    },
  ];

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  const newsArticles = [
    {
      id: '2',
      title: 'New Shopping Complex Opens at City Center',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop',
      time: '3 hours ago',
      category: 'Business',
    },
    {
      id: '3',
      title: 'Nellore Tourism Department Launches Heritage App',
      image: 'https://images.unsplash.com/photo-1687674280833-16d188bb3e42?w=400&h=300&fit=crop',
      time: '5 hours ago',
      category: 'Tourism',
    },
    {
      id: '4',
      title: 'District Sports Meet Concludes with Record Participation',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
      time: '7 hours ago',
      category: 'Sports',
    },
    {
      id: '5',
      title: 'Government Announces New Welfare Scheme for Farmers',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
      time: '8 hours ago',
      category: 'Government',
    },
    {
      id: '6',
      title: 'IT Hub Development in Progress at Industrial Park',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      time: '10 hours ago',
      category: 'Technology',
    },
    {
      id: '7',
      title: 'Annual Food Festival Attracts Thousands of Visitors',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
      time: '12 hours ago',
      category: 'Events',
    },
  ];

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <main className="flex-1 min-w-0 py-10">
            {/* Page Heading */}
            <h1 className="text-[22px] font-semibold text-[#111827] mb-8">News</h1>

            {/* Featured Article Slideshow */}
            <section className="mb-12 relative">
              <div className="relative">
                <Link
                  to={`/news/${featuredArticles[currentSlide].id}`}
                  className="block bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition group"
                >
                  <div className="relative h-96 bg-cover bg-center">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                      style={{ 
                        backgroundImage: `url(${featuredArticles[currentSlide].image})`,
                        opacity: 1
                      }}
                    />
                    
                    {/* Left Arrow - Inside Image */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        prevSlide();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                    >
                      <ChevronLeft className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </button>
                    
                    {/* Right Arrow - Inside Image */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        nextSlide();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                    >
                      <ChevronRight className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </button>
                    
                    {/* Slide Indicator Dots - Inside Image */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {featuredArticles.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            goToSlide(index);
                          }}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            currentSlide === index
                              ? 'bg-white'
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-[#1A6FD4] mb-3 transition">
                      {featuredArticles[currentSlide].title}
                    </h2>
                    <p className="text-[#6B7280] mb-4">{featuredArticles[currentSlide].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                        <span>By {featuredArticles[currentSlide].author}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredArticles[currentSlide].time}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-1 text-[#6B7280] hover:text-[#EF4444] transition">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{featuredArticles[currentSlide].likes}</span>
                        </button>
                        <button className="flex items-center gap-1 text-[#6B7280] hover:text-[#1A6FD4] transition">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            {/* All News Articles */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {injectAds(newsArticles, newsPageAds, 'news', isMobile).map((item: any, idx: number) => {
                  if (item.type === 'ad') {
                    return <InlineAdCard key={`ad-${idx}`} ad={item.data} variant={item.variant} />;
                  }
                  const article = item.data;
                  return (
                    <Link
                      key={article.id}
                      to={`/news/${article.id}`}
                      className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition group"
                    >
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${article.image})` }}
                      />
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-[#1A6FD4] bg-[#E6F1FB] px-2 py-1 rounded">
                            {article.category}
                          </span>
                          <span className="text-xs text-[#6B7280] flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.time}
                          </span>
                        </div>
                        <h3 className="font-semibold text-[#111827] group-hover:text-[#1A6FD4] transition line-clamp-2">
                          {article.title}
                        </h3>
                        <div className="mt-3 text-sm text-[#1A6FD4] flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Articles */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#111827] mb-6">Articles</h2>
              <div className="space-y-5">
                {[
                  {
                    id: 'a1',
                    title: 'The Evolution of Nellore: From Heritage to Modernity',
                    author: 'Dr. Lakshmi Narayana',
                    date: 'April 1, 2026',
                    description: 'An in-depth look at how Nellore has transformed over the decades while preserving its rich cultural heritage and traditions.',
                  },
                  {
                    id: 'a2',
                    title: 'Economic Growth and Development in Coastal Andhra',
                    author: 'Venkata Ramana',
                    date: 'March 28, 2026',
                    description: 'Analyzing the factors contributing to the rapid economic growth in Nellore and surrounding coastal regions.',
                  },
                  {
                    id: 'a3',
                    title: 'Preserving Traditional Crafts: The Nellore Story',
                    author: 'Sowmya Reddy',
                    date: 'March 25, 2026',
                    description: 'How local artisans are keeping traditional crafts alive while adapting to modern market demands.',
                  },
                ].map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-lg border border-[#E5E7EB] p-5 shadow-sm hover:shadow-md hover:border-[#1A6FD4] transition"
                  >
                    <h3 className="font-semibold text-[#111827] mb-2">{article.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-[#6B7280] mb-3">
                      <span>By {article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <p className="text-sm text-[#6B7280] mb-4">{article.description}</p>
                    <Button size="sm" variant="outline" className="border-[#1A6FD4] text-[#1A6FD4] hover:bg-[#E6F1FB]">
                      Read More
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            {/* Load More Button */}
            <div className="text-center">
              <Button className="bg-[#1A6FD4] hover:bg-[#185FA5] px-8">
                More News
              </Button>
            </div>
          </main>

          {/* Right Ads Column */}
          <div className="">
            <AdsColumn ads={newsPageAds} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;