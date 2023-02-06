import "./App.css";

function App() {
  // https://schema.org/Article
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Structured data for you",
    description: "This is an article that demonstrates structured data.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/JSON-LD.svg",
    datePublished: new Date("2021-09-04T09:25:01.340Z").toISOString(),
    author: {
      "@type": "Person",
      name: "John Reilly",
      url: "https://twitter.com/johnny_reilly",
    },
  };

  return (
    <div className="App">
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>

      <h1>{articleStructuredData.headline}</h1>
      <h3>
        by{" "}
        <a href={articleStructuredData.author.url}>
          {articleStructuredData.author.name}
        </a>{" "}
        on {articleStructuredData.datePublished}
      </h3>

      <img
        style={{ width: "5em" }}
        alt="https://json-ld.org/ - Website content released under a Creative Commons CC0 Public Domain Dedication except where an alternate is specified., CC0, via Wikimedia Commons"
        src={articleStructuredData.image}
      />

      <p>{articleStructuredData.description}</p>

      <p>Take a look at the source of this page and find the JSON-LD!</p>
    </div>
  );
}

export default App;
