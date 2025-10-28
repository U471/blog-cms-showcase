import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { SEOConfig } from "./SEOConfig";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((r) => r.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <HelmetPage />
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes location={location}>
            <Route path="/" element={<Home blogs={blogs} />} />
            <Route path="/blogs" element={<BlogList blogs={blogs} />} />
            <Route path="/blog/:id" element={<BlogDetail blogs={blogs} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

function HelmetPage() {
  return (
    <>
      <title>{SEOConfig.defaultTitle}</title>
      <meta name="description" content={SEOConfig.defaultDescription} />
      <meta name="keywords" content={SEOConfig.defaultKeywords} />
      <meta property="og:title" content={SEOConfig.defaultTitle} />
      <meta property="og:description" content={SEOConfig.defaultDescription} />
      <meta property="og:image" content={SEOConfig.defaultImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEOConfig.siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SEOConfig.defaultTitle} />
      <meta name="twitter:description" content={SEOConfig.defaultDescription} />
      <meta name="twitter:image" content={SEOConfig.defaultImage} />
      <link rel="canonical" href={SEOConfig.siteUrl} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SEOConfig.siteName,
          url: SEOConfig.siteUrl,
          author: {
            "@type": "Person",
            name: SEOConfig.author,
          },
        })}
      </script>
    </>
  );
}
