import { useMemo, useState, useEffect } from 'react';

// ==========================================
// TEMPORARY LOCALSTORAGE MOCK FOR FIREBASE
// ==========================================
// This structure simulates a server response.
// Replace `localStorage` calls with Firebase Firestore reads in the future.

export interface GenericHomeItem {
  id: string;
  title: string;
  image?: string;
  description?: string; // Standard subtitle / description
  meta1?: string; // Mapped to Salary, Date, Company, Match
  meta2?: string; // Mapped to Location, Type, Category, Score
  meta3?: string; // Mapped to release, Time, Status
}

export interface SectionData {
  isVisible: boolean;
  items: GenericHomeItem[];
}

export interface AdminHomePageData {
  featuredNews: SectionData;
  latestJobs: SectionData;
  featuredEvents: SectionData;
  trendingNews: SectionData;
  sports: SectionData;
  sportsForecast: SectionData;
  famousFood: SectionData;
  results: SectionData;
  movies: SectionData;
}

// Static Fallback Mocks (These act as the base layer)
const fallbackMockData: AdminHomePageData = {
  featuredNews: {
    isVisible: true,
    items: [
      { id: 'fn1', title: 'Nellore Smart City Project Progressing Rapidly', image: 'https://images.unsplash.com/photo-1633702738734-443da2c18f3c?w=800&h=500&fit=crop', meta1: 'Infrastructure', meta2: '2 hours ago' },
      { id: 'fn2', title: 'APPSC Group 2 Notification Released for 500 Posts', image: 'https://images.unsplash.com/photo-1722684768315-11fc753354f6?w=800&h=500&fit=crop', meta1: 'Jobs', meta2: '4 hours ago' },
      { id: 'fn3', title: 'Annual Cultural Festival to Begin Next Week', image: 'https://images.unsplash.com/photo-1774798909993-eecdf8de4472?w=800&h=500&fit=crop', meta1: 'Events', meta2: '6 hours ago' },
    ]
  },
  latestJobs: {
    isVisible: true,
    items: [
      { id: 'lj1', title: 'Software Engineer', meta1: 'Tech Solutions Pvt Ltd', meta2: 'Nellore', meta3: 'Private', description: '₹4-6 LPA' },
      { id: 'lj2', title: 'Junior Assistant', meta1: 'Nellore Municipal Corporation', meta2: 'Nellore', meta3: 'Government', description: '₹20,000-30,000' },
      { id: 'lj3', title: 'Marketing Executive', meta1: 'Retail Mart', meta2: 'Nellore', meta3: 'Private', description: '₹3-4 LPA' },
    ]
  },
  featuredEvents: {
    isVisible: true,
    items: [
      { id: 'fe1', title: 'Nellore Food Festival 2025', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop', meta1: 'April 15-17, 2026', meta2: 'Nellore Stadium' },
      { id: 'fe2', title: 'Heritage Walk Tour', image: 'https://images.unsplash.com/photo-1687674280833-16d188bb3e42?w=400&h=300&fit=crop', meta1: 'April 20, 2026', meta2: 'Old City' },
      { id: 'fe3', title: 'Job Fair 2026', image: 'https://images.unsplash.com/photo-1762504351153-58a41cd486dd?w=400&h=300&fit=crop', meta1: 'April 25, 2026', meta2: 'Convention Center' },
    ]
  },
  trendingNews: {
    isVisible: true,
    items: [
      { id: 'tn1', title: 'New Metro Rail Project Announced for Nellore' },
      { id: 'tn2', title: 'District Collector Launches Digital Services Portal' },
      { id: 'tn3', title: 'Nellore Ranks Among Top Smart Cities in India' },
      { id: 'tn4', title: 'Annual Budget Allocation Increased by 25%' },
      { id: 'tn5', title: 'Infrastructure Development Projects Fast-Tracked' },
    ]
  },
  sports: {
    isVisible: true,
    items: [
      { id: 'sp1', title: 'Cricket', description: 'Nellore vs Guntur', meta1: '145/3 (20 overs)' },
      { id: 'sp2', title: 'Football', description: 'District League Final', meta1: 'Today 5:00 PM' },
      { id: 'sp3', title: 'Badminton', description: 'State Championship', meta1: 'Semi-Finals' },
    ]
  },
  sportsForecast: {
    isVisible: true,
    items: [
      { id: 'sf1', title: 'IPL 2026 - Nellore Franchise', description: 'Nellore Warriors vs Chennai Super Kings', meta1: 'Nellore Cricket Stadium', meta2: 'April 15, 2026', meta3: '7:30 PM IST' }
    ]
  },
  famousFood: {
    isVisible: true,
    items: [
      { id: 'ff1', title: 'Nellore Chepala Pulusu', description: 'Sri Venkateswara Hotel' },
      { id: 'ff2', title: 'Kaja Sweet', description: 'Famous Sweets Corner' },
      { id: 'ff3', title: 'Ulava Charu', description: 'Traditional Kitchen' },
    ]
  },
  results: {
    isVisible: true,
    items: [
      { id: 'r1', title: 'SSC 10th Class', description: 'AP Board', meta1: 'Published' },
      { id: 'r2', title: 'Intermediate Results', description: 'Board of Intermediate', meta1: 'Published' },
      { id: 'r3', title: 'EAMCET 2026', description: 'JNTU', meta1: 'Declared' },
    ]
  },
  movies: {
    isVisible: true,
    items: [
      { id: 'm1', title: 'Nellore Veerudu', description: 'Action', meta1: 'April 10, 2026' },
      { id: 'm2', title: 'Penna Paatalu', description: 'Drama', meta1: 'April 15, 2026' },
      { id: 'm3', title: 'Coastal Dreams', description: 'Romance', meta1: 'April 20, 2026' },
    ]
  }
};

const STORAGE_KEY = 'admin_homepage_data';

export const useHomePageData = () => {
  const [adminData, setAdminData] = useState<Partial<AdminHomePageData> | null>(null);

  // Load from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setAdminData(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse admin data', e);
    }
  }, []);

  // Memoized merging logic
  const mergedData = useMemo(() => {
    const mergeSection = (sectionKey: keyof AdminHomePageData) => {
      const fallback = fallbackMockData[sectionKey];
      const adminOverride = adminData?.[sectionKey];

      // Safe Visibility Fallback (cannot mute all)
      let isVisible = adminOverride?.isVisible ?? fallback.isVisible;
      
      // Fallback Ordering: Take admin items first. Then pad with static items up to the limit natively expected
      let finalItems: GenericHomeItem[] = [];
      const adminItems = adminOverride?.items || [];
      const fallbackItems = fallback.items || [];
      
      finalItems = [...adminItems];
      let limit = fallbackItems.length; // e.g. 3 for most, 5 for trending news

      // Fill remaining slots
      if (finalItems.length < limit) {
        const remainingSlots = limit - finalItems.length;
        // Grab the trailing items from fallback to prevent breaking UI
        const defaultPadding = fallbackItems.slice(fallbackItems.length - remainingSlots);
        finalItems = [...finalItems, ...defaultPadding];
      }

      // Constrain max size (Prevent UI Breakage)
      finalItems = finalItems.slice(0, limit);

      return {
        isVisible,
        items: finalItems
      };
    };

    const finalData = {
      featuredNews: mergeSection('featuredNews'),
      latestJobs: mergeSection('latestJobs'),
      featuredEvents: mergeSection('featuredEvents'),
      trendingNews: mergeSection('trendingNews'),
      sports: mergeSection('sports'),
      sportsForecast: mergeSection('sportsForecast'),
      famousFood: mergeSection('famousFood'),
      results: mergeSection('results'),
      movies: mergeSection('movies'),
    };

    // Safeguard: Prevent all components from being hidden
    const allHidden = Object.values(finalData).every(section => !section.isVisible);
    if (allHidden) {
      Object.keys(finalData).forEach(key => {
        finalData[key as keyof AdminHomePageData].isVisible = true;
      });
    }

    return finalData;
  }, [adminData]);

  // Provide a controlled way to save overrides
  const saveAdminData = (updatedData: Partial<AdminHomePageData>) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    setAdminData(updatedData);
  };

  return { data: mergedData, saveAdminData, originalConfig: adminData };
};
