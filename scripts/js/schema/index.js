(function(){
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
      }
    ]
  };
  const s = document.createElement('script');
  s.type = 'application/ld+json';
  s.text = JSON.stringify(ld, null, 2);
  document.head.appendChild(s);
})();
