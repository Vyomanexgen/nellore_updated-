export interface Device {
  id: string;
  name: string;
  width: number;
  height: number;
  category: 'Apple' | 'Android' | 'Desktop' | 'Custom';
  type: 'mobile' | 'tablet' | 'desktop';
}

export const devices: Device[] = [
  // Apple iPhones
  { id: 'iphone-16', name: 'iPhone 16', width: 393, height: 852, category: 'Apple', type: 'mobile' },
  { id: 'iphone-16-pro', name: 'iPhone 16 Pro', width: 402, height: 874, category: 'Apple', type: 'mobile' },
  { id: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max', width: 440, height: 956, category: 'Apple', type: 'mobile' },
  { id: 'iphone-16-plus', name: 'iPhone 16 Plus', width: 430, height: 932, category: 'Apple', type: 'mobile' },
  { id: 'iphone-se', name: 'iPhone SE', width: 320, height: 568, category: 'Apple', type: 'mobile' },
  { id: 'iphone-15', name: 'iPhone 15', width: 393, height: 852, category: 'Apple', type: 'mobile' },
  { id: 'iphone-15-pro', name: 'iPhone 15 Pro', width: 393, height: 852, category: 'Apple', type: 'mobile' },
  { id: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max', width: 430, height: 932, category: 'Apple', type: 'mobile' },
  { id: 'iphone-15-plus', name: 'iPhone 15 Plus', width: 430, height: 932, category: 'Apple', type: 'mobile' },
  { id: 'iphone-14', name: 'iPhone 14', width: 390, height: 844, category: 'Apple', type: 'mobile' },
  { id: 'iphone-14-pro', name: 'iPhone 14 Pro', width: 393, height: 852, category: 'Apple', type: 'mobile' },
  { id: 'iphone-14-pro-max', name: 'iPhone 14 Pro Max', width: 430, height: 932, category: 'Apple', type: 'mobile' },
  { id: 'iphone-14-plus', name: 'iPhone 14 Plus', width: 428, height: 926, category: 'Apple', type: 'mobile' },
  { id: 'iphone-13', name: 'iPhone 13', width: 390, height: 844, category: 'Apple', type: 'mobile' },
  { id: 'iphone-13-pro', name: 'iPhone 13 Pro', width: 390, height: 844, category: 'Apple', type: 'mobile' },
  { id: 'iphone-13-pro-max', name: 'iPhone 13 Pro Max', width: 428, height: 926, category: 'Apple', type: 'mobile' },
  { id: 'iphone-13-mini', name: 'iPhone 13 Mini', width: 375, height: 812, category: 'Apple', type: 'mobile' },
  { id: 'iphone-12', name: 'iPhone 12', width: 390, height: 844, category: 'Apple', type: 'mobile' },
  { id: 'iphone-12-pro', name: 'iPhone 12 Pro', width: 390, height: 844, category: 'Apple', type: 'mobile' },
  { id: 'iphone-12-pro-max', name: 'iPhone 12 Pro Max', width: 428, height: 926, category: 'Apple', type: 'mobile' },
  { id: 'iphone-12-mini', name: 'iPhone 12 Mini', width: 375, height: 812, category: 'Apple', type: 'mobile' },
  { id: 'iphone-11', name: 'iPhone 11', width: 414, height: 896, category: 'Apple', type: 'mobile' },
  { id: 'iphone-11-pro', name: 'iPhone 11 Pro', width: 375, height: 812, category: 'Apple', type: 'mobile' },
  { id: 'iphone-11-pro-max', name: 'iPhone 11 Pro Max', width: 414, height: 896, category: 'Apple', type: 'mobile' },
  { id: 'iphone-x-xs', name: 'iPhone X / XS', width: 375, height: 812, category: 'Apple', type: 'mobile' },
  { id: 'iphone-xs-max', name: 'iPhone XS Max', width: 414, height: 896, category: 'Apple', type: 'mobile' },
  { id: 'iphone-xr', name: 'iPhone XR', width: 414, height: 896, category: 'Apple', type: 'mobile' },
  { id: 'iphone-8', name: 'iPhone 8', width: 375, height: 667, category: 'Apple', type: 'mobile' },
  { id: 'iphone-8-plus', name: 'iPhone 8 Plus', width: 414, height: 736, category: 'Apple', type: 'mobile' },
  
  // Apple iPads
  { id: 'ipad-mini', name: 'iPad Mini', width: 768, height: 1024, category: 'Apple', type: 'tablet' },
  { id: 'ipad', name: 'iPad', width: 820, height: 1180, category: 'Apple', type: 'tablet' },
  { id: 'ipad-air', name: 'iPad Air', width: 820, height: 1180, category: 'Apple', type: 'tablet' },
  { id: 'ipad-pro-11', name: 'iPad Pro 11', width: 834, height: 1194, category: 'Apple', type: 'tablet' },
  { id: 'ipad-pro-12-9', name: 'iPad Pro 12.9', width: 1024, height: 1366, category: 'Apple', type: 'desktop' },
  
  // Android
  { id: 'android-compact', name: 'Android Compact', width: 412, height: 917, category: 'Android', type: 'mobile' },
  { id: 'android-medium', name: 'Android Medium', width: 700, height: 840, category: 'Android', type: 'tablet' },
  
  // Desktop
  { id: 'desktop', name: 'Desktop', width: 1280, height: 0, category: 'Desktop', type: 'desktop' },
];
