You are updating the NELLORE.IN city information portal design. The existing design uses a 3-column layout: left sidebar (Quick Links + What's New), center content area, and right ads column. Primary blue is #1A6FD4, background is light gray #F4F6F8. Do NOT change any existing UI styling, colors, card styles, fonts, or spacing unless explicitly listed below. Apply only these 8 changes:

---

CHANGE 1 — HOMEPAGE: Auto-scrolling news ticker
Add a horizontal scrolling ticker bar directly below the sticky header on the homepage only. Style: white background, 1px bottom border #E0E4EA, height 36px, padding 0 16px. Left side: a blue pill label "Latest News" (background #1A6FD4, white text, font-size 12px, padding 4px 10px, border-radius 4px). Right side: auto-scrolling marquee text showing 5 rotating news headlines separated by a dot separator "•". Scroll direction: left, continuous loop, speed: 40s animation duration. Text: font-size 13px, color #374151. Headlines: "APPSC Group 2 Notification Released • Nellore Smart City Phase 2 Approved • Annual Cultural Festival Dates Announced • New Government Jobs in District • Nellore Tourism Board Launches New Guide"

---

CHANGE 2 — NAVBAR: Add 3 new items
In the main top navigation bar, add these 3 new items after "Offers": Famous Foods, Nellore History, Movies. Keep existing nav items (Home, News, Jobs, Updates, Events, Results, Sports, Tourism, Offers) in same order and styling. New items use same font, color, and hover style as existing nav items.

---

CHANGE 3 — NEWS PAGE: Single heading only
On the News page, remove the separate section headings "Latest News" and "Recent Updates". Replace with a single top-level heading "News" (font-size 22px, font-weight 600, color #111827). All news articles (previously split under multiple headings) should appear in a unified grid under this single heading. Keep all card styles, badges, timestamps, and like/share buttons unchanged.

---

CHANGE 4 — TOURISM PAGE: Remove hotel cards
On the Tourism page, remove the "Hotel Locations" section and the "Booking Partners" section entirely, including their headings and all associated cards. Keep all other tourism content (famous places, history highlights, images) unchanged.

---

CHANGE 5 — ALL PUBLIC PAGES: Remove left sidebar widgets
On every public page (Home, News, Jobs, Updates, Events, Results, Sports, Tourism, Offers, Famous Foods, Nellore History, Movies), remove the left sidebar column entirely. This includes removing the "Quick Links" widget card and the "What's New" widget card. Do NOT remove the sidebar from Admin pages.

---

CHANGE 6 — ALL PUBLIC PAGES: Expand content area
After removing the left sidebar (Change 5), expand the main center content area to fill the space left behind. The layout now becomes 2-column: content area (flex: 1, max-width fills available space from left edge to start of ads column) + right ads column (fixed 280px width). Content cards, grids, and sections should use the full new wider content width.

---

CHANGE 7 — ALL PUBLIC PAGES: Push ads column to right edge
Move the right-side ads column flush to the right edge of the viewport. No margin or gap between ads column and the browser edge. The ads column remains 280px wide, position sticky top. All ad cards inside retain their existing styling (Sponsored label, image, title, description, CTA button).

---

CHANGE 8 — NEW PAGES: Famous Foods, Nellore History, Movies
Create 3 new pages accessible from the new navbar items:

Page A — Famous Foods:
Header: "Famous Foods of Nellore" with a subtitle "Authentic Telugu cuisine and local delicacies". Show a 3-column card grid. Each card: food image placeholder (height 180px, background #E5E7EB, border-radius 8px), food name (font-weight 600, 15px), short description (13px, color #6B7280), and a "Popular" or "Must Try" badge in top-right of image. Include 6 food items: Nellore Fish Curry, Pulihora, Pesarattu, Gongura Mutton, Paramannam, Punugulu. Remove hotel/booking sections. No sidebar. Include right ads column.

Page B — Nellore History:
Header: "History of Nellore" with subtitle "Ancient heritage and cultural legacy". Content in editorial style: 3 historical period sections, each with a large placeholder image (full width, height 240px, background #E5E7EB) and 2–3 paragraphs of descriptive text beneath. Periods: Ancient Period (Ikshvaku dynasty, Buddhist sites), Medieval Period (Eastern Chalukyas, Vijayanagara rule), Modern Period (British era, freedom movement). No sidebar. Include right ads column.

Page C — Movies:
Header: "Nellore Movies" with subtitle "Local films, Telugu cinema events and screenings". Show a 3-column card grid. Each card: movie poster placeholder (height 200px, background #E5E7EB), movie title (font-weight 600), genre badge, release year (color #6B7280), and a "Watch Trailer" link (color #1A6FD4). Include 6 sample entries. Below grid: a "Upcoming Screenings" section with a 2-column event list (event name, venue, date, time, "Book Ticket" button in blue). No sidebar. Include right ads column.

---

DESIGN CONSTRAINTS (apply to all changes):
- Primary color: #1A6FD4
- Background: #F4F6F8
- Card background: #FFFFFF, border: 1px solid #E5E7EB, border-radius: 8px
- Body font: system-ui, -apple-system, sans-serif
- All new elements must visually match the existing design system
- Header stays sticky, ads column stays sticky
- No changes to Admin pages
- No changes to Jobs, Updates, Events, Results, Sports, Offers pages beyond sidebar removal