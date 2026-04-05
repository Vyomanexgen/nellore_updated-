import AdsColumn, { tourismPageAds } from '../components/AdsColumn';
import { Landmark, History, Star, MapPin, Feather, Utensils, Heart, Quote, Calendar, Award, BookOpen } from 'lucide-react';
import { Badge } from '../components/ui/badge';

const NelloreHistoryPage = () => {
  const timeline = [
    {
      year: '3rd Century BC',
      title: 'Mauryan Roots',
      description: 'The region is mentioned in Ashoka\'s inscriptions, marking its early importance as a cultural and trade center.',
    },
    {
      year: '1250-1300 AD',
      title: 'The Era of Poets',
      description: 'Tikkana Somayaji, the legendary Telugu poet, lived in Nellore while translating the Mahabharata into Telugu.',
    },
    {
      year: '14th-16th Century',
      title: 'Vijayanagara Glory',
      description: 'Under Krishnadevaraya, Nellore saw a golden age of temple construction and regional prosperity.',
    },
    {
      year: '1700s',
      title: 'Royal Handlooms',
      description: 'The Venkatagiri weaving tradition (Kali Mili) was formalized under the patronage of the Velugoti Dynasty.',
    },
    {
      year: '1952',
      title: 'Modern Andhra Birth',
      description: 'Potti Sreeramulu sacrifice in Nellore becomes the catalyst for the linguistic reorganization of Indian states.',
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-serif">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <main className="flex-1 min-w-0 py-12">
            
            {/* Master Hero Section */}
            <div className="relative rounded-[2.5rem] overflow-hidden mb-20 h-[450px] shadow-2xl border-4 border-white">
              <div 
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1621252179027-94459d278660?w=1200&h=600&fit=crop")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/95 via-[#1A0F0A]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
                <Badge className="w-fit bg-[#C5A059] text-white hover:bg-[#C5A059] mb-4 px-6 py-2 uppercase tracking-[0.25em] text-[10px] font-sans border-none shadow-lg">
                  Official Heritage Page
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
                  Nellore: <br /> <span className="text-[#C5A059]">The Eternal City</span>
                </h1>
                <p className="text-[#F3E5AB]/90 max-w-2xl text-lg md:text-2xl font-sans leading-relaxed italic border-l-4 border-[#C5A059] pl-6 py-2">
                  "From the translation of the Mahabharata to the birth of a state, explore the soul of Andhra Pradesh."
                </p>
              </div>
            </div>

            {/* Narrative Section 1: The Silk of Kings (Venkatagiri) */}
            <section className="mb-32">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
                  <div className="flex items-center gap-3 text-[#C5A059] font-sans font-bold uppercase tracking-[0.2em] text-xs">
                    < Award className="w-5 h-5 shadow-sm" />
                    GI Tagged Heritage (2011)
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] leading-tight">The Royal <br /> Venkatagiri Weave</h2>
                  <p className="text-[#5D4037] text-xl leading-relaxed font-sans opacity-95">
                    Originally known as <span className="font-bold text-[#2C1810]">"Kali Mili"</span>, these sarees were woven exclusively for the Velugoti rulers. In 2011, they were awarded the <span className="underline decoration-[#C5A059] decoration-2">Geographical Indication (GI) tag</span> for their unique Jamdani style and fine cotton quality.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-[#E5E7EB] shadow-sm">
                      <Star className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                      <span className="text-sm font-sans font-semibold text-[#2C1810]">Velugoti Legacy</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-[#E5E7EB] shadow-sm">
                      <Star className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                      <span className="text-sm font-sans font-semibold text-[#2C1810]">Fine Zari Motifs</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <div className="relative group">
                    <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#C5A059] rounded-[2rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-500" />
                    <img 
                      src="https://images.unsplash.com/photo-1610030469668-9366df65e8a6?w=800&h=600&fit=crop" 
                      alt="Detailed texture of an authentic Venkatagiri Zari border" 
                      className="rounded-[2rem] shadow-2xl w-full h-[450px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Narrative Section 2: Literary Soul (Tikkana Somayaji) */}
            <section className="mb-32">
              <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-[#E5E7EB] relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#FAF9F6] rounded-full" />
                <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                   <div className="lg:w-1/3">
                      <div className="w-full aspect-[3/4] bg-[#2C1810] rounded-2xl flex items-center justify-center p-8 text-center text-white italic">
                         <div className="space-y-6">
                            <BookOpen className="w-16 h-16 text-[#C5A059] mx-auto" />
                            <p className="text-xl">"Kavi-Brahma"</p>
                            <div className="h-px w-12 bg-[#C5A059] mx-auto" />
                            <p className="text-sm opacity-80">Nellore's greatest literary giant who unified the Telugu heartland through poetry.</p>
                         </div>
                      </div>
                   </div>
                   <div className="lg:w-2/3 space-y-6">
                      <div className="text-[#C5A059] font-sans font-bold uppercase tracking-widest text-xs">The Poet's Pen</div>
                      <h2 className="text-3xl md:text-5xl font-bold text-[#2C1810]">Tikkana Somayaji & The Mahabharata</h2>
                      <p className="text-[#5D4037] text-lg font-sans leading-relaxed">
                        In the 13th century, Nellore served as the sanctuary for <span className="font-bold underline decoration-[#C5A059]">Tikkana Somayaji</span>. It was here that he translated 15 of the 18 books of the <span className="italic">Andhra Mahabharatam</span>, creating a literary bridge that defines Telugu identity even today.
                      </p>
                      <ul className="space-y-3 font-sans text-[#6B7280]">
                        <li className="flex gap-3">
                          <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                          <span>Translated 15 Parvas of Mahabharata in Nellore.</span>
                        </li>
                        <li className="flex gap-3">
                          <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                          <span>Established the linguistic foundation of modern Telugu literature.</span>
                        </li>
                      </ul>
                   </div>
                </div>
              </div>
            </section>

            {/* Narrative Section 3: The Immortal Being (Potti Sreeramulu) */}
            <section className="mb-32">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                 <div className="lg:w-1/2">
                   <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                     <img 
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop" 
                        alt="Tribute to freedom and sacrifice in India" 
                        className="w-full h-[500px] object-cover grayscale brightness-75 transition duration-700 hover:grayscale-0"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                        <Quote className="w-10 h-10 text-[#C5A059] mb-4" />
                        <p className="text-white text-xl italic font-sans mb-2">"My life is my message."</p>
                        <p className="text-[#F3E5AB] text-sm uppercase tracking-widest">The Immortal Fast</p>
                     </div>
                   </div>
                 </div>
                 <div className="lg:w-1/2 space-y-8">
                   <div className="flex items-center gap-3 text-[#C5A059] font-sans font-bold uppercase tracking-[0.2em] text-xs">
                     <Heart className="w-5 h-5 fill-[#C5A059]" />
                     Father of Andhra Pradesh
                   </div>
                   <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810]">Amarajeevi: The Spirit of Potti Sreeramulu</h2>
                   <p className="text-[#5D4037] text-xl font-sans leading-relaxed">
                     In 1952, <span className="font-bold underline decoration-[#C5A059]">Potti Sreeramulu</span> undertook a historic 58-day fast in Nellore district (now named after him). His ultimate sacrifice forced the government to create India's first linguistic state, birthing the identity of millions.
                   </p>
                   <div className="bg-[#E6F1FB] p-6 rounded-2xl border border-[#1A6FD4]/10">
                     <div className="flex gap-4">
                        <MapPin className="shrink-0 w-6 h-6 text-[#C5A059]" />
                        <p className="text-sm font-sans text-[#2C1810]">Visit the <strong>Potti Sriramulu Memorial</strong> in Nellore City, a sacred site where his legacy is preserved for future generations.</p>
                     </div>
                   </div>
                 </div>
              </div>
            </section>

            {/* Narrative Section 4: Sacred Architecture */}
            <section className="mb-32">
                <div className="text-center mb-16">
                   <div className="inline-flex items-center gap-2 text-[#C5A059] font-sans font-bold uppercase tracking-widest text-xs mb-4">
                      <Landmark className="w-4 h-4" />
                      The Spiritual Lifeline
                   </div>
                   <h2 className="text-4xl font-bold text-[#2C1810]">The Temple that Faces the Penna</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E5E7EB]">
                   <div className="p-10 space-y-6">
                      <h3 className="text-2xl font-bold text-[#2C1810]">Sri Talpagiri Ranganathaswamy</h3>
                      <p className="text-[#6B7280] leading-relaxed font-sans">
                        Resting on the banks of the Penna River, this 600-year-old Dravidian masterpiece is famous for its <span className="font-bold text-[#2C1810]">West-facing deity</span>. Unlike most Hindu temples that face East, Lord Ranganatha here gazes toward the river, symbolizing his grace flowing over the lands of Nellore.
                      </p>
                      <div className="flex gap-6 pt-4">
                         <div className="text-center">
                            <p className="text-[#C5A059] font-bold text-2xl">70ft</p>
                            <p className="text-[10px] uppercase text-[#9CA3AF]">Galigopuram</p>
                         </div>
                         <div className="w-px h-10 bg-[#E5E7EB]" />
                         <div className="text-center">
                            <p className="text-[#C5A059] font-bold text-2xl">7th c.</p>
                            <p className="text-[10px] uppercase text-[#9CA3AF]">Foundation</p>
                         </div>
                      </div>
                   </div>
                   <div className="h-[400px]">
                      <img 
                        src="https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?w=800&h=800&fit=crop" 
                        alt="Ornate Dravidian Temple Galigopuram" 
                        className="w-full h-full object-cover"
                      />
                   </div>
                </div>
            </section>

            {/* Final Vertical History Timeline */}
            <section className="bg-white rounded-3xl p-10 md:p-20 shadow-2xl border border-[#E5E7EB]">
               <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold text-[#2C1810] mb-4">The Sands of Chronology</h2>
                 <p className="text-[#C5A059] font-sans uppercase tracking-[0.4em] text-xs font-bold">Nellore Historical Lineage</p>
               </div>
               
               <div className="relative max-w-4xl mx-auto font-sans">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-[#C5A059]/20" />
                  
                  <div className="space-y-20">
                    {timeline.map((event, idx) => (
                      <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-[#C5A059] rounded-full z-20 shadow-md" />
                        
                        <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                          <div className="inline-block bg-[#FAF9F6] text-[#C5A059] font-bold px-4 py-1 rounded-md border border-[#C5A059]/20 mb-3 text-sm">
                            {event.year}
                          </div>
                          <h3 className="font-bold text-[#2C1810] text-2xl mb-2">{event.title}</h3>
                          <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">{event.description}</p>
                        </div>
                        <div className="hidden md:block w-1/2" />
                      </div>
                    ))}
                  </div>
               </div>
            </section>

          </main>

          {/* Right Ads Column */}
          <div className="py-12">
            <AdsColumn ads={tourismPageAds} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NelloreHistoryPage;