(function(){
  const now = new Date().toISOString();
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Mei Wong",
        "jobTitle": "Software Developer",
        "url": "https://u22n.github.io/Mei-portfolio-project",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "url": "https://u22n.github.io/Mei-portfolio-project",
        "name": "Mei Wong — Demo Portfolio",
        "author": { "@type": "Person", "name": "Mei Wong" }
      },
      {
        "@type": "WebPage",
        "url": "https://u22n.github.io/Mei-portfolio-project",
        "name": "Mei Wong — Demo Portfolio",
        "datePublished": now,
        "dateModified": now,
        "author": { "@type": "Person", "name": "Mei Wong" },
        "publisher": { "@type": "Organization", "name": "Mei Wong", "logo": { "@type": "ImageObject", "url": "https://u22n.github.io/Mei-portfolio-project/assets/images/favicon.svg" } }
      }
    ]
  };
  const s = document.createElement('script');
  s.type = 'application/ld+json';
  s.text = JSON.stringify(ld, null, 2);
  document.head.appendChild(s);
})();
