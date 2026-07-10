# Mandala Blend — Analytics & Monitoring Integration Guide

This guide explains how to set up Google Analytics 4 (GA4) and Microsoft Clarity for the Mandala Blend website and how to verify that everything works after deployment.

---

## 1. Setup Google Analytics 4 (GA4)

GA4 tracks anonymous page views, screen transitions, and custom user engagement events (such as card clicks and WhatsApp checkout triggers).

### Step-by-Step Setup:
1. Go to the [Google Analytics Admin Console](https://analytics.google.com/).
2. Click **Create** ➔ **Property**.
3. Name your property `Mandala Blend` and choose your timezone and currency (INR).
4. For industry/business size, choose appropriate metrics (e.g. *Home & Garden* / *Small Business*).
5. For business objectives, select **Examine user behavior** or **Get baseline reports**.
6. Set up a **Web Data Stream**:
   * **Website URL:** `https://themandalablend.in` (or your staging/production domain).
   * **Stream Name:** `Mandala Blend Web Stream`.
   * Enable **Enhanced measurement** (checks scrolls, exits, site search, and video views).
7. Under **Web Stream Details**, look for the **Measurement ID** (formatted like `G-XXXXXXXXXX`).
8. Copy this ID and update your production environment variables:
   ```env
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

---

## 2. Setup Microsoft Clarity

Microsoft Clarity provides visual heatmaps and session recordings to help understand where users face friction.

### Step-by-Step Setup:
1. Go to the [Microsoft Clarity Dashboard](https://clarity.microsoft.com/).
2. Click **New Project**.
3. Name your project `Mandala Blend` and enter the website URL (`https://themandalablend.in`).
4. Select **Add Clarity code manually** or look for the integration setup instruction.
5. In the Javascript code snippet page, locate your **Clarity Project ID**. It is the last alphanumeric string in the snippet (e.g. `clarity.ms/tag/` followed by your ID).
6. Copy this ID and update your production environment variables:
   ```env
   VITE_CLARITY_PROJECT_ID=xxxxxxxxxx
   ```

---

## 3. Configure Environment Variables

Create a file named `.env` in the root folder of your workspace (or set these inside your hosting dashboard like Netlify or Vercel settings):

```env
# Search Engine Verification
VITE_GOOGLE_SITE_VERIFICATION=google_verification_code_here
VITE_BING_SITE_VERIFICATION=bing_verification_code_here

# Analytics & Performance Tracking
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_CLARITY_PROJECT_ID=xxxxxxxxxx
```

*Note: Analytics scripts are loaded asynchronously and fail gracefully. If any ID is left empty or omitted, that specific service is automatically disabled without causing any console warnings or browser runtime exceptions.*

---

## 4. How to Verify Analytics Post-Deployment

After pushing your updates and rebuilding the site:

### For Google Analytics:
1. Open the website in your browser.
2. In another tab, open Google Analytics ➔ **Reports** ➔ **Real-time**.
3. You should see a pin on the map representing your location, showing active visitors and incoming events like `page_view`.
4. Try clicking a product card or a contact link. The custom event should reflect in the Real-time events list as `product_card_click` or `contact_whatsapp_click`.

### For Microsoft Clarity:
1. Open the website and browse some pages.
2. Open Microsoft Clarity Dashboard.
3. Click the **Dashboard** or **Live Recordings** tab. Within 2-5 minutes, you should see your visit session list. Heatmap details will populate once there is initial sample traffic.

---

## 5. Privacy & Data Integrity

The analytics integration is built to be completely privacy-compliant (GDPR and CCPA safe):
* **No PII Collected:** It blocks any extraction of personal names, emails, phone numbers, custom text input, or WhatsApp chat payloads.
* **Anonymous Identifiers Only:** Only standard, anonymous event descriptors (e.g. click counts, image slide indexes) are sent.
