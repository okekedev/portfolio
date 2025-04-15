export default function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sundai",
          "url": "https://your-domain.com",
          "logo": "https://your-domain.com/logos 512.png",
          "description": "A company focused on bridging the gap between technology, processes, and people.",
          "founder": {
            "@type": "Person",
            "name": "Christian Okeke"
          },
          "sameAs": [
            "https://github.com/okekedev",
            "https://www.linkedin.com/in/christianokeke/"
          ],
          "knowsAbout": [
            "Healthcare IT",
            "Cybersecurity",
            "Cloud Infrastructure",
            "App Development"
          ],
          "offers": {
            "@type": "Service",
            "name": "Consulting Services",
            "description": "Expert guidance in healthcare IT, cybersecurity, and cloud infrastructure."
          }
        })
      }}
    />
  );
}
