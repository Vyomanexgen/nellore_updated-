import AdsColumn, { tourismPageAds } from '../components/AdsColumn';

const NelloreHistoryPage = () => {
  const periods = [
    {
      id: '1',
      title: 'Ancient Period',
      subtitle: 'Ikshvaku dynasty, Buddhist sites',
      content: [
        'The ancient period of Nellore is marked by the rule of the Ikshvaku dynasty, who were great patrons of Buddhism. During this era, the region flourished as an important center for Buddhist learning and culture.',
        'Archaeological excavations have revealed numerous Buddhist stupas, viharas, and other religious structures that stand as testament to the region\'s rich Buddhist heritage. The Ikshvakus established trade routes and promoted art and architecture.',
        'Ancient inscriptions found in the district provide valuable insights into the social, economic, and religious life of the people during this period. The region was known for its agricultural prosperity and maritime trade.',
      ],
    },
    {
      id: '2',
      title: 'Medieval Period',
      subtitle: 'Eastern Chalukyas, Vijayanagara rule',
      content: [
        'The medieval period saw Nellore under the rule of the Eastern Chalukyas, who brought significant administrative and cultural developments to the region. The Chalukyas were great builders and patrons of arts.',
        'Later, the powerful Vijayanagara Empire extended its control over Nellore, ushering in an era of prosperity and architectural grandeur. Magnificent temples and fortifications were constructed during this golden age.',
        'The region became an important military and administrative center for the Vijayanagara rulers. Trade and commerce flourished, connecting Nellore to distant lands through both land and sea routes.',
      ],
    },
    {
      id: '3',
      title: 'Modern Period',
      subtitle: 'British era, freedom movement',
      content: [
        'The modern period began with the arrival of European traders, eventually leading to British colonial rule. Nellore became an important administrative district under the British Raj.',
        'During the freedom movement, Nellore played a significant role in India\'s struggle for independence. Many freedom fighters from the region participated actively in the national movement and various uprisings against colonial rule.',
        'Post-independence, Nellore has emerged as a major district in Andhra Pradesh, witnessing rapid urbanization and economic development while preserving its rich cultural heritage and traditions.',
      ],
    },
  ];

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <main className="flex-1 min-w-0 py-10">
            <div className="mb-8">
              <h1 className="text-[22px] font-semibold text-[#111827] mb-2">History of Nellore</h1>
              <p className="text-[13px] text-[#6B7280]">Ancient heritage and cultural legacy</p>
            </div>

            {/* Historical Periods */}
            <div className="space-y-10">
              {periods.map((period) => (
                <section key={period.id}>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#111827] mb-1">{period.title}</h2>
                    <p className="text-[13px] text-[#6B7280]">{period.subtitle}</p>
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="w-full h-[240px] bg-[#E5E7EB] rounded-lg mb-5 flex items-center justify-center">
                    <div className="text-[#9CA3AF] text-6xl">🏛️</div>
                  </div>
                  
                  {/* Content Paragraphs */}
                  <div className="space-y-4">
                    {period.content.map((paragraph, idx) => (
                      <p key={idx} className="text-[13px] text-[#374151] leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </main>

          {/* Right Ads Column */}
          <AdsColumn ads={tourismPageAds} />
        </div>
      </div>
    </div>
  );
};

export default NelloreHistoryPage;