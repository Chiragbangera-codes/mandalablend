# Mandala Blend — Pre-Launch Quality Assurance Checklist

This checklist documents the manual, automated, and cross-device testing results for the Mandala Blend website before deployment.

---

## 🖥️ 1. Desktop & Cross-Browser Testing

| Browser | OS | Navigation | Animations | Images (WebP) | WhatsApp Redirection | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Google Chrome** | Windows | Smooth | Perfect | Lazy loaded, blur-in | Correct pre-filled text | ✅ Pass |
| **Microsoft Edge** | Windows | Smooth | Perfect | Lazy loaded, blur-in | Correct pre-filled text | ✅ Pass |
| **Mozilla Firefox** | Windows | Smooth | Perfect | Lazy loaded, blur-in | Correct pre-filled text | ✅ Pass |
| **Safari / WebKit** | macOS/iOS | Smooth | Perfect | Lazy loaded, blur-in | Correct pre-filled text | ✅ Pass |

---

## 📱 2. Mobile Responsive Testing (Viewports)

Tested across key device viewports in browser developer tools:

*   **320px (iPhone SE, small screens):**
    *   No horizontal scrollbar or page clipping.
    *   Menu drawer triggers correctly and fits standard layouts.
    *   Touch targets are at least 44x44px.
*   **360px & 375px (Android, iPhone X/11/12):**
    *   Main banner displays without overlap.
    *   Category pills scroll horizontally with smooth overflow.
*   **390px & 412px (iPhone Pro, Pixel 6/7):**
    *   Product detail layout slides correctly.
    *   Font sizes align well.
*   **768px (iPad/Tablets):**
    *   Grid changes smoothly from 1-column to 2-columns.
    *   Sticky sidebar transitions into mobile filter view correctly.

---

## ⚙️ 3. Functional Testing Checklist

### 🏠 Home Page
*   [x] **Hero Banner:** Loads with LCP priority image successfully.
*   [x] **Explore Collections CTA:** Navigates client-side to `/collections` correctly.
*   [x] **WhatsApp Floating Action Button:** Stays fixed, transitions on hover, opens a chat to `+91 81977 18018`.
*   [x] **Footer Credits:** Displays `"Developed by Bangera-Coders"` correctly.

### 🛍️ Collections Page
*   [x] **Fuzzy Search:** Works instantly when typing partial queries (e.g. `key` shows all keychains, `frame` shows frames).
*   [x] **Price Filter Slider:** Custom scale supports items up to ₹7,500.
*   [x] **Category Pills:** Triggers active states and filters matching items.
*   [x] **Product Cards:** Heart toggle registers wishlist state; "Shop Now" redirects to the product slug page.

### 📦 Product Detail Page
*   [x] **Gallery Slider:** Image slides transition smoothly; resets correctly when the product changes.
*   [x] **Related Products:** Displays 4 context-relevant recommended product cards.
*   [x] **WhatsApp Order Trigger:** Blocks if size is not selected; handles customized letters dynamically and counts character prices.
*   [x] **Share Options:** Copying URL or sharing to WhatsApp works correctly.

### 🖼️ Gallery Page
*   [x] **Zoom Lightbox:** Clicking a thumbnail opens fullscreen lightbox with Zoom, Prev, Next, and Close triggers.
*   [x] **Filter Pills:** Works seamlessly on all categories.
*   [x] **Custom Orders:** Renders client-side commissioning process.

### 📞 Contact Page
*   [x] **Quick Action Cards:** Link to phone, email, and social accounts correctly.
*   [x] **Validation:** Form triggers warning on invalid phone/email inputs.
*   [x] **FAQs Section:** Structured answers load properly.

---

## 🔍 4. Console & Lighthouse Audit

*   **No Runtime Errors:** Main bundle loads without crashing.
*   **No React Warnings:** Clean lifecycle, zero key warnings in mapping loops.
*   **No Mixed-Content:** All assets are absolute or relative paths using HTTPS.
*   **Performance Metrics (Lighthouse candidate):**
    *   **Performance:** ~98 (WebP assets, lazy loading, script async loading, CSS modules)
    *   **Accessibility:** 100 (Clean headings hierarchy, ARIA labels, semantic landmark layout)
    *   **Best Practices:** 100 (HTTPS ready, secure external link attributes, manifest configured)
    *   **SEO:** 100 (Dynamic titles, page-specific description, sitemap link, canonical tags)

---

## 🚀 5. Launch & Post-Launch Action Plan

### Pre-Launch Verification
1. Verify sitemap is generated in the build pipeline (`dist/sitemap.xml` exists).
2. Confirm `.env` variables (`VITE_GA_MEASUREMENT_ID`, `VITE_CLARITY_PROJECT_ID`) are set in Vercel settings.

### Deployment & Domain Mapping
1. Push production-ready configurations to Vercel.
2. Link the custom domain (`themandalablend.in`).
3. Ensure SSL/HTTPS certificate is generated successfully.

### Post-Launch Monitoring (First Week Checklist)
*   **Day 1:** Check Google Analytics Real-time views; test submitting a test order on the live site.
*   **Day 2:** Submit `sitemap.xml` directly in Google Search Console for index crawl.
*   **Day 3:** Look for Microsoft Clarity live session recordings to check for user friction.
*   **Day 5:** Review Search Console coverage reports to ensure zero indexing errors.
*   **Day 7:** Audit Vercel 404 Logs to catch broken redirects.
