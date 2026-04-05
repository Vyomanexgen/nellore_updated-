import { useState, useEffect } from 'react';
import { Plus, Trash2, Save, Eye, EyeOff, LayoutTemplate } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { useHomePageData, AdminHomePageData, GenericHomeItem, SectionData } from '../../../hooks/useHomePageData';

type SectionKey = keyof AdminHomePageData;

const SECTION_LIMITS: Record<SectionKey, number> = {
  featuredNews: 3,
  latestJobs: 3,
  featuredEvents: 3,
  trendingNews: 5,
  sports: 3,
  sportsForecast: 1,
  famousFood: 3,
  results: 3,
  movies: 3,
};

const SECTION_TITLES: Record<SectionKey, string> = {
  featuredNews: "Featured News",
  latestJobs: "Latest Jobs",
  featuredEvents: "Featured Events",
  trendingNews: "Trending News",
  sports: "Sports Updates",
  sportsForecast: "Sports Forecast Highlight",
  famousFood: "Famous Food Locations",
  results: "Academic Results",
  movies: "Upcoming Movies",
};

const HomePageManager = () => {
  const { originalConfig, saveAdminData } = useHomePageData();
  const [config, setConfig] = useState<Partial<AdminHomePageData>>({});

  useEffect(() => {
    if (originalConfig) {
      setConfig(originalConfig);
    }
  }, [originalConfig]);

  const handleSave = () => {
    saveAdminData(config);
    alert('Home Page Configuration Saved! (Note: Data stored locally to emulate a database)');
  };

  const getSection = (key: SectionKey): SectionData => {
    return config[key] || { isVisible: true, items: [] };
  };

  const toggleVisibility = (key: SectionKey) => {
    const section = getSection(key);
    setConfig({ ...config, [key]: { ...section, isVisible: !section.isVisible } });
  };

  const addItem = (key: SectionKey) => {
    const section = getSection(key);
    if (section.items.length >= SECTION_LIMITS[key]) return;
    
    const newItem: GenericHomeItem = {
      id: `custom-${Date.now()}`,
      title: 'New Item',
      image: '',
      description: '',
      meta1: '',
      meta2: '',
      meta3: ''
    };
    
    setConfig({
      ...config,
      [key]: { ...section, items: [...section.items, newItem] }
    });
  };

  const updateItem = (key: SectionKey, itemIndex: number, field: keyof GenericHomeItem, value: string) => {
    const section = getSection(key);
    const updatedItems = [...section.items];
    updatedItems[itemIndex] = { ...updatedItems[itemIndex], [field]: value };
    
    setConfig({
      ...config,
      [key]: { ...section, items: updatedItems }
    });
  };

  const removeItem = (key: SectionKey, itemIndex: number) => {
    const section = getSection(key);
    const updatedItems = section.items.filter((_, idx) => idx !== itemIndex);
    
    setConfig({
      ...config,
      [key]: { ...section, items: updatedItems }
    });
  };

  return (
    <div className="pb-24">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#111827]">Home Page Manager</h2>
          <p className="text-[#6B7280]">Structure your homepage layout and configure custom content dynamically.</p>
        </div>
        <Button onClick={handleSave} className="bg-[#10B981] hover:bg-[#059669]">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="space-y-8">
        {(Object.keys(SECTION_LIMITS) as SectionKey[]).map((key) => {
          const section = getSection(key);
          const limit = SECTION_LIMITS[key];
          const isAtLimit = section.items.length >= limit;

          return (
            <div key={key} className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
              <div className="bg-[#F9FAFB] border-b border-[#E5E7EB] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <LayoutTemplate className="text-[#1A6FD4] w-5 h-5" />
                  <h3 className="font-bold text-[#111827]">{SECTION_TITLES[key]}</h3>
                  <span className="text-xs bg-[#E5E7EB] text-[#4B5563] px-2 py-0.5 rounded-full font-medium">
                    Max {limit} items
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => toggleVisibility(key)}
                    className={section.isVisible ? "text-[#10B981]" : "text-[#6B7280]"}
                  >
                    {section.isVisible ? (
                      <><Eye className="w-4 h-4 mr-2" /> Visible</>
                    ) : (
                      <><EyeOff className="w-4 h-4 mr-2" /> Hidden</>
                    )}
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => addItem(key)} 
                    disabled={isAtLimit}
                    className="bg-[#1A6FD4] hover:bg-[#185FA5]"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add 
                  </Button>
                </div>
              </div>

              <div className="p-4 space-y-4">
                {section.items.length === 0 ? (
                  <div className="text-center py-6 text-[#9CA3AF] text-sm italic">
                    Using system default fallback data. Add custom items to override.
                  </div>
                ) : (
                  section.items.map((item, idx) => (
                    <div key={item.id} className="border border-[#E5E7EB] rounded-lg p-4 relative group">
                      <button 
                        onClick={() => removeItem(key, idx)}
                        className="absolute -top-3 -right-3 bg-red-100 text-red-600 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition shadow-sm"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div>
                            <label className="text-xs font-semibold text-[#6B7280] uppercase">Title</label>
                            <Input 
                              value={item.title} 
                              onChange={(e) => updateItem(key, idx, 'title', e.target.value)}
                              placeholder="E.g., Featured Event Name"
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-[#6B7280] uppercase">Subtitle / Description</label>
                            <Input 
                              value={item.description || ''} 
                              onChange={(e) => updateItem(key, idx, 'description', e.target.value)}
                              placeholder="E.g., Event details or short pitch"
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-[#6B7280] uppercase">Meta Tags (Location, Time, Salary)</label>
                            <div className="flex gap-2 mt-1">
                              <Input 
                                value={item.meta1 || ''} 
                                onChange={(e) => updateItem(key, idx, 'meta1', e.target.value)}
                                placeholder="Info 1"
                              />
                              <Input 
                                value={item.meta2 || ''} 
                                onChange={(e) => updateItem(key, idx, 'meta2', e.target.value)}
                                placeholder="Info 2"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Image Preview Area */}
                        <div>
                          <label className="text-xs font-semibold text-[#6B7280] uppercase flex justify-between">
                            <span>Image URL</span>
                            {item.image && <a href={item.image} target="_blank" className="text-[#1A6FD4] hover:underline">Preview Link</a>}
                          </label>
                          <Input 
                            value={item.image || ''} 
                            onChange={(e) => updateItem(key, idx, 'image', e.target.value)}
                            placeholder="https://images.unsplash.com/photo-..."
                            className="mt-1 mb-3"
                          />
                          <div className="h-32 rounded-lg border border-dashed border-[#D1D5DB] bg-[#F9FAFB] flex items-center justify-center overflow-hidden">
                            {item.image ? (
                              <img src={item.image} alt="Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x300?text=Broken+Link")} />
                            ) : (
                              <span className="text-xs text-[#9CA3AF]">No image provided</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                
                {section.items.length > 0 && !isAtLimit && (
                  <div className="text-center py-2 text-xs text-[#10B981] bg-[#ECFDF5] rounded">
                    Remaining slots will be gracefully filled by system standard items.
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageManager;
