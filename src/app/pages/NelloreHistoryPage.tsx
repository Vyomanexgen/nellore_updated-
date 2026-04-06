// import AdsColumn, { tourismPageAds } from '../components/AdsColumn';
// import { MapPin, Landmark } from 'lucide-react';
// import { Badge } from '../components/ui/badge';

// const NelloreHistoryPage = () => {

//   const timeline = [
//     {
//       year: '3rd Century BC',
//       title: 'Mauryan Influence',
//       description: 'Nellore region was part of the Mauryan Empire and Ashoka’s inscriptions mention its importance.'
//     },
//     {
//       year: '13th Century',
//       title: 'Tikkana Era',
//       description: 'Tikkana Somayaji translated major parts of the Mahabharata in Nellore.'
//     },
//     {
//       year: '1700s',
//       title: 'Venkatagiri Weaving',
//       description: 'Venkatagiri sarees were developed under royal patronage for queens and elites.'
//     },
//     {
//       year: '1952',
//       title: 'Andhra State Movement',
//       description: 'Potti Sreeramulu’s sacrifice led to the formation of Andhra State.'
//     }
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto px-4 flex gap-8">

//         {/* MAIN CONTENT */}
//         <main className="flex-1 py-10">

//           {/* HERO SECTION */}
//           <div className="relative h-[400px] rounded-2xl overflow-hidden mb-16 shadow-md">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Nellore_city_view.jpg"
//               alt="Nellore City"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
//               <Badge className="bg-blue-600 text-white w-fit mb-3">
//                 Andhra Pradesh Tourism
//               </Badge>

//               <h1 className="text-4xl md:text-5xl text-white font-bold">
//                 Nellore
//               </h1>

//               <p className="text-white/90 mt-2 max-w-xl">
//                 A historic coastal city on the banks of the Penna River, known for temples, culture, and heritage.
//               </p>
//             </div>
//           </div>

//           {/* VENKATAGIRI SAREE */}
//           <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Venkatagiri_saree.jpg"
//               alt="Venkatagiri Saree"
//               className="rounded-xl shadow-md"
//             />

//             <div>
//               <h2 className="text-3xl font-bold mb-4">Venkatagiri Sarees</h2>
//               <p className="text-gray-600 leading-relaxed">
//                 Venkatagiri sarees originated under royal patronage and were woven for queens and aristocrats. :contentReference[oaicite:0]{index=0}  
//                 They are known for fine cotton texture and elegant zari work.
//               </p>
//             </div>
//           </section>

//           <hr className="my-12" />

//           {/* TIKKANA */}
//           <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Tikkana Somayaji</h2>
//               <p className="text-gray-600 leading-relaxed">
//                 Tikkana, one of the greatest Telugu poets, translated a major portion of the Mahabharata in Nellore, shaping Telugu literature.
//               </p>
//             </div>

//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tikkana_statue.jpg"
//               alt="Tikkana Statue"
//               className="rounded-xl shadow-md"
//             />
//           </section>

//           <hr className="my-12" />

//           {/* POTTI SREERAMULU */}
//           <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Potti_Sreeramulu.jpg"
//               alt="Potti Sreeramulu"
//               className="rounded-xl shadow-md"
//             />

//             <div>
//               <h2 className="text-3xl font-bold mb-4">Potti Sreeramulu</h2>
//               <p className="text-gray-600 leading-relaxed">
//                 Potti Sreeramulu’s 58-day fast led to the formation of Andhra State, marking a turning point in Indian history. :contentReference[oaicite:1]{index=1}
//               </p>
//             </div>
//           </section>

//           <hr className="my-12" />

//           {/* TEMPLE */}
//           <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">
//                 Talpagiri Ranganathaswamy Temple
//               </h2>
//               <p className="text-gray-600 leading-relaxed">
//                 Located on the banks of the Penna River, this ancient temple is one of the most important spiritual landmarks in Nellore. :contentReference[oaicite:2]{index=2}
//               </p>

//               <div className="flex items-center gap-2 mt-4 text-blue-600">
//                 <MapPin size={18} />
//                 Nellore, Andhra Pradesh
//               </div>
//             </div>

//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Talpagiri_Ranganathaswamy_Temple.jpg"
//               alt="Temple"
//               className="rounded-xl shadow-md"
//             />
//           </section>

//           <hr className="my-12" />

//           {/* TIMELINE */}
//           <section>
//             <h2 className="text-3xl font-bold mb-8 text-center">
//               Nellore History Timeline
//             </h2>

//             <ul className="space-y-6">
//               {timeline.map((event, index) => (
//                 <li key={index} className="border-l-4 border-blue-600 pl-4">
//                   <p className="font-bold">{event.year}</p>
//                   <p className="text-lg">{event.title}</p>
//                   <p className="text-gray-600">{event.description}</p>
//                 </li>
//               ))}
//             </ul>
//           </section>

//         </main>

//         {/* ADS COLUMN */}
//         <div className="hidden lg:block py-10">
//           <AdsColumn ads={tourismPageAds} />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default NelloreHistoryPage;

import AdsColumn, { tourismPageAds } from '../components/AdsColumn';
import { useState } from 'react';
import { MapPin, Info, ArrowUpRight, X } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogClose
} from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';
import { ScrollArea } from '../components/ui/scroll-area';
import { Separator } from '../components/ui/separator';

const NellorePage = () => {

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const famousPlaces = [
    {
      name: "Talpagiri Ranganathaswamy Temple",
      img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200",
      desc: "Ancient temple on the banks of Penna River",
      fullHistory: "One of the oldest temples in Nellore, dating back to the 7th-8th century Pallava era. The 7-story Gali Gopuram (wind tower) was added in the 19th century. Legend says the serpent Adisesha took the form of a hill (Talpagiri) for Lord Vishnu during his visit to Earth.",
      facts: [
        { label: "Built In", value: "7th-12th Century" },
        { label: "Architecture", value: "Dravidian" },
        { label: "Significance", value: "Lord Ranganatha Shrine" }
      ],
      tags: ["Heritage", "Spiritual", "River View"]
    },
    {
      name: "Mypadu Beach",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
      desc: "Peaceful coastal beach near Nellore",
      fullHistory: "Located 25km from Nellore city along the Bay of Bengal coast. It is managed by APTDC and is famous for its golden sands and serene atmosphere. It's a popular retreat for sunrises, peaceful beach walks, and small-scale water sports.",
      facts: [
        { label: "Distance", value: "25km from City" },
        { label: "Managed By", value: "APTDC" }
      ],
      tags: ["Nature", "Coastal", "Leisure"]
    },
    {
      name: "Nellapattu Bird Sanctuary",
      img: "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1200",
      desc: "Famous for migratory birds",
      fullHistory: "A vital breeding ground for the spot-billed pelican and other waterbirds. Characterized by Barringtonia swamp forests, it is one of the most important wetland habitats in India, attracting thousands of migratory birds between October and March.",
      facts: [
        { label: "Key Species", value: "Spot-billed Pelican" },
        { label: "Best Season", value: "Oct to March" }
      ],
      tags: ["Ecotourism", "Wildlife"]
    },
    {
      name: "Jonnawada Temple",
      img: "https://images.unsplash.com/photo-1582515073490-dc6c5c94f8c3?q=80&w=1200",
      desc: "Spiritual center for devotees",
      fullHistory: "Established around 1150 AD, this is a rare 'Shiva-Shakti' shrine where Lord Mallikarjuna and Goddess Kamakshi are worshipped together. Legend says that the idol of the Goddess was found in the Penna River by a fisherman and consecrated by Adi Shankaracharya.",
      facts: [
        { label: "Established", value: "1150 AD" },
        { label: "Type", value: "Shakti Peetham" }
      ],
      tags: ["Spiritual", "Pilgrimage"]
    }
  ];

  const famousItems = [
    {
      name: "Venkatagiri Sarees",
      img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1200",
      desc: "Handwoven sarees with royal heritage",
      fullHistory: "Originating in the 1700s under royal patronage, Venkatagiri sarees were woven exclusively for the Velugoti dynasty. They are extremely lightweight and famous for their fine cotton (woven air), intricate Jamdani-style motifs, and gold zari work.",
      facts: [
        { label: "Patronage", value: "Velugoti Dynasty" },
        { label: "Style", value: "Jamdani Handloom" }
      ],
      tags: ["Heritage", "Textile", "Royal"]
    },
    {
      name: "Nellore Chepala Pulusu",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200",
      desc: "Spicy and tangy traditional fish curry",
      fullHistory: "A legendary Andhra dish celebrated for its spicy, tangy flavor. This tamarind-based curry is traditionally slow-cooked in earthen pots. A signature characteristic is that it tastes even better the next day as the spices perfectly infuse with the fish.",
      facts: [
        { label: "Type", value: "Traditional Cuisine" },
        { label: "Signature", value: "Tangy Tamarind Base" }
      ],
      tags: ["Culinary", "Traditional", "Famous Food"]
    },
    {
      name: "Nellore Rice Cultivation",
      img: "https://images.unsplash.com/photo-1598514982901-3eec1c1f8c44?q=80&w=1200",
      desc: "Major agricultural hub of Andhra Pradesh",
      fullHistory: "Known as the 'Rice Bowl of Andhra Pradesh', Nellore's fertile fields fed by the Penna River produce some of the finest rice varieties. Agriculture is the backbone of the region's economy, shaping the local culture and livelihood of thousands.",
      facts: [
        { label: "Key Crop", value: "Fine Rice" },
        { label: "Source", value: "Penna River Basin" }
      ],
      tags: ["Agriculture", "Economic", "Nature"]
    }
  ];

  const handleOpenItem = (item: any) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

      {/* ── Cinematic Hero ── */}
      <div
        style={{
          position: 'relative',
          height: '380px',
          background: '#0F172A',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'slowZoom 14s ease-out forwards',
            opacity: 0.45,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #F8FAFC 0%, rgba(15,23,42,0.6) 50%, rgba(15,23,42,0.3) 100%)' }} />
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px', zIndex: 2 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '16px' }}>
            Andhra Pradesh Heritage
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
            The Timeless Legacy<br />
            <em style={{ fontWeight: 400 }}>of Nellore</em>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(248,250,252,0.65)', fontSize: '15px', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
            Culture, heritage, sacred sites, and the stories that shaped a civilization.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>

          {/* MAIN CONTENT */}
          <main style={{ flex: 1, minWidth: 0, paddingTop: '64px', paddingBottom: '100px' }}>

            {/* FAMOUS PLACES */}
            <section style={{ marginBottom: '80px' }}>
              <div style={{ marginBottom: '36px' }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '10px' }}>Destinations</p>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>Famous Places</h2>
                <div style={{ width: '36px', height: '2px', background: '#C9A34E' }} />
              </div>

              <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '12px' }} className="scrollbar-hide">
                {famousPlaces.map((place, i) => (
                  <div
                    key={i}
                    onClick={() => handleOpenItem(place)}
                    style={{
                      minWidth: '260px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      background: '#fff',
                      border: '1px solid rgba(226,232,240,0.7)',
                      boxShadow: '0 2px 16px rgba(15,23,42,0.05)',
                      cursor: 'pointer',
                      transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out',
                      flexShrink: 0,
                    }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 14px 40px rgba(15,23,42,0.10)'; el.style.borderColor = 'rgba(201,163,78,0.3)'; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 2px 16px rgba(15,23,42,0.05)'; el.style.borderColor = 'rgba(226,232,240,0.7)'; }}
                  >
                    <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                      <img
                        src={place.img}
                        alt={place.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.9s ease-out', display: 'block' }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 60%)' }} />
                    </div>
                    <div style={{ padding: '16px 18px 18px' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>{place.name}</h3>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748B', margin: 0 }}>{place.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAMOUS IN NELLORE */}
            <section style={{ marginBottom: '60px' }}>
              <div style={{ marginBottom: '36px' }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A34E', marginBottom: '10px' }}>Heritage</p>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>Famous in Nellore</h2>
                <div style={{ width: '36px', height: '2px', background: '#C9A34E' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
                {famousItems.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => handleOpenItem(item)}
                    style={{
                      borderRadius: '14px',
                      overflow: 'hidden',
                      background: '#fff',
                      border: '1px solid rgba(226,232,240,0.7)',
                      boxShadow: '0 2px 16px rgba(15,23,42,0.05)',
                      cursor: 'pointer',
                      transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out',
                    }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 14px 40px rgba(15,23,42,0.10)'; el.style.borderColor = 'rgba(201,163,78,0.3)'; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 2px 16px rgba(15,23,42,0.05)'; el.style.borderColor = 'rgba(226,232,240,0.7)'; }}
                  >
                    <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.9s ease-out', display: 'block' }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 55%)' }} />
                    </div>
                    <div style={{ padding: '18px 20px 20px' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{item.name}</h3>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#64748B', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* ADS */}
          <div className="hidden lg:block py-16">
            <AdsColumn ads={tourismPageAds} />
          </div>

        </div>
      </div>

      {/* HISTORY MODAL (DIALOG) — preserved with luxury upgrades */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden border-none bg-white rounded-2xl shadow-2xl">
          {selectedItem && (
            <div className="animate-in fade-in zoom-in duration-300">
              {/* Modal Header Image */}
              <div className="relative h-[280px] md:h-[380px] group/modal overflow-hidden">
                <img
                  src={selectedItem.img}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/modal:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute top-4 right-4 z-50">
                  <DialogClose className="p-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white rounded-full transition-all duration-300 hover:rotate-90 group">
                    <X className="w-5 h-5 group-hover:scale-110" />
                  </DialogClose>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {selectedItem.tags?.map((tag: string, i: number) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: '10px',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#0F172A',
                          background: '#C9A34E',
                          padding: '3px 10px',
                          borderRadius: '2px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <DialogTitle
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: '#fff',
                      lineHeight: 1.2,
                    }}
                  >
                    {selectedItem.name}
                  </DialogTitle>
                </div>
              </div>

              <div className="p-6 md:p-8 text-left">
                {/* Facts Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                  {selectedItem.facts?.map((fact: any, i: number) => (
                    <div
                      key={i}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        background: '#F8FAFC',
                        border: '1px solid rgba(201,163,78,0.15)',
                      }}
                    >
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '4px' }}>
                        {fact.label}
                      </div>
                      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>
                        {fact.value}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="mb-6" />

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Info size={14} color="#C9A34E" />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A34E' }}>History & Legacy</span>
                </div>

                <ScrollArea className="h-[200px] md:h-[250px] pr-4">
                  <DialogDescription
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1rem',
                      fontStyle: 'italic',
                      color: '#64748B',
                      lineHeight: 1.8,
                    }}
                  >
                    "{selectedItem.fullHistory}"
                  </DialogDescription>
                </ScrollArea>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NellorePage;