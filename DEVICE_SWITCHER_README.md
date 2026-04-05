# Nellore.IN - Device Resolution Switcher

## Overview
A comprehensive mobile-responsive device resolution switcher for the Nellore.in portal that allows testing the application on all major iPhone, iPad, and Android device sizes.

## Features

### ✅ Device Switcher Toolbar
- **Location**: Fixed bottom-right corner (floating)
- **Collapsed State**: Blue circular button with phone icon
- **Expanded State**: Dark toolbar with full device list
- **Z-Index**: 9999 (always on top)

### ✅ Supported Devices

#### Apple iPhones (30 models)
- iPhone 16 Series (4 models)
- iPhone 15 Series (4 models)
- iPhone 14 Series (4 models)
- iPhone 13 Series (4 models)
- iPhone 12 Series (4 models)
- iPhone 11 Series (3 models)
- iPhone X/XS Series (4 models)
- iPhone 8 Series (2 models)
- iPhone SE (1 model)

#### Apple iPads (5 models)
- iPad Mini (768×1024)
- iPad (820×1180)
- iPad Air (820×1180)
- iPad Pro 11" (834×1194)
- iPad Pro 12.9" (1024×1366)

#### Android Devices
- Android Compact (412×917)
- Android Medium (700×840)

#### Desktop
- Desktop mode (full width, no device frame)

#### Custom Size
- User-defined width × height input

### ✅ Orientation Toggle
- **Portrait Mode**: Default orientation
- **Landscape Mode**: Swaps width and height values
- Only available for mobile/tablet devices (not desktop)

### ✅ Category Filtering
- **All**: Shows all devices grouped by category
- **Apple**: Shows only Apple devices
- **Android**: Shows only Android devices
- **Custom**: Shows custom size input form

### ✅ Device Frame Simulation
- **Outer Background**: Grey (#E5E7EB) simulator background
- **Frame Border Radius**: 44px for iPhones, 20px for Android
- **Smooth Transitions**: 0.3s ease animation when switching devices
- **Device Bezel Effects**:
  - Dynamic Island (iPhone 14 Pro+, 15, 16 series)
  - Home bar (iPhone X and newer)
  - Shadow effect for realistic appearance

### ✅ Responsive Breakpoints

#### Mobile (< 768px)
- Single column layout
- Hide left sidebar (accessible via hamburger menu)
- Hide right ads column
- Show full-width ad banner instead
- Hero section: 400px height
- Grids: 3-col → 1-col
- Movie posters: 4-col → 2-col
- Top bar font: 10px
- Weather ticker: compact view

#### Tablet (768px - 1023px)
- Two column layout
- Hide left sidebar
- Show right ads column (220px width)
- Grids: 3-col → 2-col
- Movie posters: 4-col → 3-col

#### Desktop (≥ 1024px)
- Full 3-column layout
- Left sidebar visible (200px)
- Main content (flex: 1)
- Right ads column visible (280px)
- Grids: 3-col
- Movie posters: 4-col

### ✅ Hamburger Menu (Mobile Only)
- **Trigger**: Shows on screens < 768px
- **Drawer Width**: 80% (max 300px)
- **Animation**: Slide from left with overlay
- **Contents**:
  - Logo + close button
  - Search bar
  - All navigation links
  - Login/Register buttons
  - Language toggle (EN/TE)
- **Active State**: Blue text + 3px left border

### ✅ Features Working on All Sizes
- ✅ Live clock (updates every second)
- ✅ Weather ticker (rotates every 3 seconds)
- ✅ News slideshow (auto-advances, arrows, dots)
- ✅ Jobs → external link redirect
- ✅ Update detail pages
- ✅ Results detail tables (horizontal scroll on mobile)
- ✅ Movies hub (responsive grid)
- ✅ Back buttons (44px tap target on mobile)
- ✅ All section "View All" links

## Components

### DeviceFrame
**Location**: `/src/app/components/DeviceSwitcher/DeviceFrame.tsx`

Wraps the entire application and provides:
- Device viewport simulation
- Smooth resize transitions
- Optional device bezel decoration
- Desktop mode (no frame)

### DeviceSwitcher
**Location**: `/src/app/components/DeviceSwitcher/DeviceSwitcher.tsx`

Floating toolbar that provides:
- Device selection
- Category filtering
- Orientation toggle
- Custom size input
- Expand/collapse functionality

### HamburgerMenu
**Location**: `/src/app/components/HamburgerMenu.tsx`

Mobile navigation drawer:
- Slide-out from left
- Full navigation links
- Search functionality
- Login/Register actions

### Device Data
**Location**: `/src/app/components/DeviceSwitcher/devices.ts`

Contains complete list of all supported devices with:
- Device ID
- Display name
- Width × Height
- Category (Apple/Android/Desktop/Custom)
- Type (mobile/tablet/desktop)

## Usage

### App Integration
The DeviceFrame wrapper is added in `/src/app/App.tsx`:

```tsx
import { DeviceFrame } from './components/DeviceSwitcher/DeviceFrame';

export default function App() {
  return (
    <DeviceFrame>
      <RouterProvider router={router} />
    </DeviceFrame>
  );
}
```

### Switching Devices
1. Click the floating blue button in bottom-right corner
2. Select a category tab (All, Apple, Android, Custom)
3. Click any device from the list
4. The app instantly resizes to that device's dimensions
5. Use orientation toggle for landscape view

### Custom Size
1. Open device switcher
2. Click "Custom" tab
3. Enter width and height values
4. Click "Apply"
5. App resizes to custom dimensions

### Returning to Desktop
1. Open device switcher
2. Click "All" or "Desktop" tab
3. Select "Desktop" from the list
4. App returns to full-width mode

## CSS Classes

### Responsive Helper Classes
```css
/* Applied to components for responsive behavior */
.ads-column        /* Right ads column - hidden on mobile */
.desktop-nav       /* Desktop navigation - hidden on mobile */
.header-top-bar    /* Top bar with smaller font on mobile */
```

### Responsive Stylesheet
**Location**: `/src/styles/responsive.css`

Contains media query rules for:
- Mobile layout adjustments (< 768px)
- Tablet layout adjustments (768px - 1023px)
- Desktop layout (≥ 1024px)

## Brand Colors (Unchanged)
- Primary Blue: #1A6FD4
- Secondary Blue: #0A4FAF
- Page Background: #F5F7FA
- Card Background: #FFFFFF
- Text Primary: #111827
- Text Secondary: #6B7280

## Implementation Notes

### What Changed
✅ Added DeviceFrame wrapper component
✅ Added DeviceSwitcher floating toolbar
✅ Added HamburgerMenu for mobile navigation
✅ Added responsive.css for mobile breakpoints
✅ Updated Header with responsive classes
✅ Added orientation toggle for landscape mode

### What Did NOT Change
❌ NO changes to UI colors, fonts, card designs
❌ NO changes to content, icons, badges, buttons
❌ NO changes to spacing inside components
❌ NO changes to existing functionality or routing
❌ NO changes to admin pages
❌ NO changes to navbar styling, logo, search bar
❌ NO changes to ads column design (only visibility)

## Technical Details

### State Management
- Selected device: Local state in DeviceFrame
- Orientation: Local state in DeviceFrame
- Menu open/close: Local state in HamburgerMenu

### Animations
- Device resize: CSS transition 0.3s ease
- Hamburger drawer: CSS transition 0.25s ease
- Toolbar expand/collapse: Instant

### Accessibility
- Back buttons: 44×44px tap target on mobile
- Hamburger menu: Proper ARIA labels
- Keyboard navigation: Fully supported

## Browser Support
- Chrome/Edge: ✅ Full support
- Safari: ✅ Full support
- Firefox: ✅ Full support
- Mobile browsers: ✅ Full support

## Future Enhancements (Not Implemented)
- Save preferred device to localStorage
- Share device preview URL
- Screenshot capture of current device view
- More Android device models
- Rotation animation for orientation change
