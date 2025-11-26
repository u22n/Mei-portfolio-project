# Mei Wong — Demo Portfolio

A modern, responsive portfolio built with **Bootstrap 5.3** and vanilla JavaScript. Features a dark/light theme toggle, smooth animations, interactive modals, and a polished design that showcases a developer's work and skills.

**[Live Demo](https://u22n.github.io/Mei-portfolio-project/)**

## Overview

This is a fully-functional demo portfolio site designed to be clean, accessible, and easy to customize. It demonstrates modern web development practices including semantic HTML5, responsive design, client-side state management, and modular JavaScript architecture.

## Key Features

### 🎨 **Theme Toggle**
Switch between light and dark modes. Your preference is saved to `localStorage`, so the site remembers your choice on the next visit. The theme respects system preferences on first load.

### 📱 **Responsive Design**
Built on Bootstrap 5.3, the layout adapts fluidly from mobile phones to large desktop screens. All interactive elements maintain usability across devices.

### ✨ **Smooth Animations**
- Hero section has staggered fade-in animations on page load
- Brand mark (navbar logo) animates with a subtle entrance effect
- Navigation links highlight smoothly as you scroll through sections

### 🌙 **Dark Mode**
The dark theme includes:
- Custom color variables for light and dark schemes
- Adjusted contrast ratios for accessibility (WCAG AA compliant)
- Smooth transitions between themes

### 📄 **Resume Generator**
Click "Preview Resume" in the navbar to open a modal with a formatted resume. Use the "Download PDF" button to generate a PDF on-the-fly using **jsPDF**—no backend required.

### 📋 **Portfolio Showcase**
Display your work with a clean card layout. Each project includes:
- High-quality images (optimized `.webp` format)
- Project title and description
- Easy to edit directly in the HTML

### 💬 **Contact & Subscribe Forms**
Includes both a contact form and a newsletter subscription modal. (Forms are non-functional by default—integrate with your backend/service as needed.)

### 📋 **Copy to Clipboard**
In the resume modal, click "Copy" next to email/phone to copy to your clipboard. Bootstrap tooltips provide visual feedback.

### 🔍 **Structured Data (JSON-LD)**
Includes structured data markup for search engines:
- `Person` schema (name, image, social profiles)
- `WebSite` schema (site name, URL)
- `WebPage` schema (published/modified dates)

### 🎯 **Sticky Navbar**
The navbar shrinks and changes styling as you scroll down, keeping navigation always accessible.

### 📡 **SEO & Social Sharing**
- Open Graph (og:*) and Twitter Card meta tags for rich previews on social platforms
- Canonical URL to avoid duplicate content issues
- Article publication/modification timestamps
- Theme color and favicon configuration

## Project Structure

```
├── index.html                 # Main page (single-page layout)
├── assets/
│   ├── css/
│   │   └── style.css         # Custom styles, theme variables, animations
│   └── images/
│       ├── favicon.svg        # Site icon
│       ├── og-image.svg       # Open Graph image (for social previews)
│       ├── og-image.png       # PNG version of OG image
│       ├── mei-wong.webp      # Profile photo
│       ├── wags-and-walks.webp
│       ├── we-wellness.webp
│       ├── math-wiz.webp
│       └── bmi-calculator.webp
├── scripts/
│   ├── js/
│   │   ├── theme-toggle/index.js      # Dark/light mode logic
│   │   ├── nav-observer/index.js      # Active link highlighting
│   │   ├── brand-entrance/index.js    # Logo animation on load
│   │   ├── resume-pdf/index.js        # PDF generation with jsPDF
│   │   ├── copy-feedback/index.js     # Clipboard utilities
│   │   ├── sticky-navbar/index.js     # Navbar scroll behavior
│   │   └── schema/index.js            # JSON-LD injection
│   ├── create_og_image.py  # Python script to generate OG PNG (optional)
│   └── generate_og.py      # Legacy generator (removed)
└── README.md               # This file
```

## Getting Started

### Prerequisites
- Any modern web browser
- A text editor to customize the content

### Quick Start

1. **Clone the repo:**
   ```bash
   git clone https://github.com/u22n/Mei-portfolio-project.git
   cd Mei-portfolio-project
   ```

2. **Open in your browser:**
   - Simply open `index.html` in your browser, or
   - Use a local server: `python -m http.server 8000` then visit `http://localhost:8000`

3. **Customize:**
   - Replace placeholder text with your own name, bio, and projects
   - Update project images in `assets/images/`
   - Modify colors in `assets/css/style.css` (CSS variables at the top)
   - Add your own portfolio projects in the portfolio section

### Deployment

The site is deployed on **GitHub Pages** at: https://u22n.github.io/Mei-portfolio-project/

To deploy your own version:
1. Fork this repository
2. Rename it to `<your-username>.github.io` (if deploying as a user site) or keep the current name
3. Update `index.html` with your content
4. Push to the `main` branch
5. GitHub Pages automatically builds and deploys

For more details, see [GitHub Pages documentation](https://pages.github.com/).

## Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Custom properties (variables), flexbox, grid, animations
- **Bootstrap 5.3** — Responsive grid, components, utilities
- **JavaScript (Vanilla)** — No frameworks; modular, maintainable code
  - `localStorage` for theme persistence
  - `IntersectionObserver` for scroll-based nav highlighting
  - `Fetch API` compatible (for future integrations)
- **jsPDF** — Client-side PDF generation for resume download
- **Google Fonts** — DM Serif Display, Poppins typography

## Customization Guide

### Change Colors
Edit `assets/css/style.css`:
```css
:root {
  --egg-blue: #cfeef6;      /* Light background */
  --heading: #111827;        /* Light heading color */
  --accent: #2b6cb0;         /* Primary accent (blue) */
  --text: #0f1724;           /* Light text color */
}

:root.dark {
  --egg-blue: #071427;       /* Dark background */
  --heading: #e6f3f7;        /* Dark heading color */
  --accent: #1d6d8a;         /* Dark accent */
  --text: #9fb7c1;           /* Dark text color */
}
```

### Update Hero Section
Edit the `<header id="hero">` block in `index.html` with your own copy.

### Add/Edit Portfolio Projects
Modify the cards in the `<section id="portfolio">` block. Each project is a Bootstrap card with an image, title, and description.

### Change Resume Content
Edit the `<div class="resume-preview">` section in the resume modal. The PDF generator reads from this HTML and converts it to PDF.

### Customize Social Media Links
Update the JSON-LD schema in `scripts/js/schema/index.js` to include your actual social profiles.

## Performance Notes

- Images are optimized as `.webp` for fast loading
- CSS is inline and minimal (~261 lines)
- JavaScript is modular and lazy-loaded
- No external dependencies (Bootstrap via CDN, jsPDF via CDN)
- Achieves high Lighthouse scores for performance and accessibility

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5 elements (`<nav>`, `<main>`, `<header>`, `<footer>`)
- ARIA labels and roles where appropriate
- Sufficient color contrast (WCAG AA)
- Keyboard-navigable forms and interactive elements
- Responsive text sizing

## Future Enhancements

Potential additions:
- Backend integration for contact form (e.g., Formspree, Netlify Forms)
- Blog section with Markdown support
- Animation library (e.g., AOS for scroll animations)
- Analytics integration (Google Analytics, Plausible)
- CMS integration for easier content updates

## Contributing

This is a demo project, but feel free to:
- Fork and customize for your own portfolio
- Submit issues or feature requests
- Use as a template for learning modern web dev practices

## License

This project is open source and available under the MIT License.

## Questions?

Feel free to open an issue or reach out. Happy building! 🚀
