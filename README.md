# EPM Wealth Website

Premium React + Vite website for EPM Wealth, built around the provided homepage content sheet. The project includes a video-led homepage, wealth solution pages, financial literacy page, EPM Alliance page, login, contact, and footer/social contact flows.

## Project Status

The requested homepage structure has been completed and cleaned up:

- Hero video section with EPM Wealth messaging
- Navigation matching the required labels
- Stats section with AUM, team experience, clients served, and global locations
- "Wealth Is More Than Just Money" content section
- Financial decisions / services feature cards
- Vault insights and article cards
- Journey driven by results timeline
- Core values section
- Client testimonials
- Footer with office address, contact links, social links, and WhatsApp action
- SIP calculator removed as requested in the task sheet

## Tech Stack

- React 19
- Vite
- React Router
- GSAP / ScrollTrigger
- Framer Motion
- React Icons / Lucide React
- Three.js dependencies are available for 3D features

## Folder Structure

```txt
wealth-EPM/
  public/
    videos/
      hero-video.mp4
      hero-poster.jpg
  src/
    assets/
    components/
      about/
      contact/
      entrepreneurial/
      financial/
      footer/
      home/
      login/
      missvission/
      navbar/
      solutions/
    App.jsx
    main.jsx
```

## Available Routes

```txt
/                                      Home
/about                                 The Firm
/solutions/wealth-creation             Building Wealth
/solutions/wealth-protection           Shielding Wealth
/solutions/wealth-management           Stewarding Wealth
/solutions/portfolio-consultant        Portfolio Consultation
/financialliteracy/seminar-webinar     Seminar & Webinar
/entrepreneurial-initiative            The EPM Alliance
/login                                 Login
/contact                               Contact Us
```

## Installation

Install dependencies:

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Open:

```txt
http://127.0.0.1:5173
```

If Vite starts on another port, use the URL shown in the terminal.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Lint

Run ESLint:

```bash
npm run lint
```

Current verification:

```txt
npm run lint   passes
npm run build  passes
```

## Recent Completion Notes

- Removed unused SIP calculator logic from the homepage.
- Fixed the hero poster path to use `public/videos/hero-poster.jpg`.
- Updated the desktop nav label to `The EPM Alliance`.
- Updated homepage stats formatting to `150 Cr.+`, `Total Asset Under Management`, and `30+ Years`.
- Cleaned unused imports, refs, and duplicate JSX attributes so lint passes.

## Important Files

```txt
src/components/home/Home.jsx
src/components/home/Home.css
src/components/navbar/Navbar.jsx
src/components/footer/Footer.jsx
src/components/about/About.jsx
src/components/contact/Contact.jsx
```

## Notes

This is a frontend project. Some images are loaded from external URLs, so a live internet connection may be needed for all remote images to appear during local testing.
