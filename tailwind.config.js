/**
 * Magyar IPTV Pro — Tailwind build config
 *
 * Le site est statique : le CSS est compilé une fois et commité dans
 * assets/tailwind.css. Il n'y a pas d'étape de build au déploiement.
 *
 * Pour régénérer après avoir ajouté des classes dans le HTML :
 *   tailwindcss -c tailwind.config.js -i src/input.css -o assets/tailwind.css --minify
 *
 * Le binaire standalone (sans Node) se récupère ici :
 *   https://github.com/tailwindlabs/tailwindcss/releases  (tailwindcss-macos-arm64)
 */
module.exports = {
  content: ['./*.html', './en/*.html'],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#020617',
        'card-bg': '#0f172a',
        'card-border': '#1e293b',
        'cyan-accent': '#06b6d4',
        'blue-accent': '#3b82f6',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
