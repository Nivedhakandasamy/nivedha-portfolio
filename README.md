# Nivedha K — Portfolio

A modern, responsive, ATS-friendly single-page portfolio built with React + Vite.

## Resume-grounded content

The portfolio uses the supplied resume as its source. It includes:
- B.E. Computer Science Engineering — Kongu Engineering College — CGPA 7.57
- HSC 92.63% and SSLC 94.40%
- Farmer App
- Anonymous Message App
- Book Recommendation
- Java, C, JavaScript, HTML, React.js, CSS, SQL, MongoDB, Node.js
- Figma, Git, GitHub
- MongoDB Associate Developer
- Foundations of UX Design (Google)
- Women Entrepreneurship workshop
- CSI and EPRC memberships
- Generative AI paper presentation, CSI Coding Event and Neo Codeathon achievements

The resume does not list a formal company employment role, so the Experience section intentionally presents project/design experience rather than inventing an employer.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy

### Vercel
1. Push the folder to GitHub.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

### Netlify
1. Push to GitHub and import the repository into Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy.

### GitHub Pages
Install the Pages deployment action or use a Pages workflow that runs `npm ci`, `npm run build`, and publishes `dist/`.
For a project-site URL such as `username.github.io/repository`, configure Vite's `base` in `vite.config.js` to `'/repository/'` before deployment.

## Important personalization

- Replace the project GitHub placeholders with the actual repository URLs for each project.
- Add live demo URLs where available.
- If you later have professional experience, replace the project-experience timeline with employer, role, dates and measurable impact.
- Consider moving the contact form from `mailto:` to Formspree, Netlify Forms, or a small backend API for reliable submissions.
- Add a custom domain and a real Open Graph image before sharing the portfolio widely.
