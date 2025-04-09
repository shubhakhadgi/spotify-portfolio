import { useEffect, useState } from 'react';

const checklistData = {
    "Pre-steps": [
      {
        title: "Keyword Strategy",
        description: "Research and identify high-intent and long-tail keywords to optimize content for search engines.",
        example: "Identify keywords like 'best web design services' and 'affordable SEO agency' for a design agency website.",
      },
      {
        title: "Competitor Keyword Gap Analysis",
        description: "Analyze competitor websites to discover keyword opportunities you're missing.",
        example: "Use SEMrush to identify high-ranking keywords competitors are targeting, but you're not."
      },
      {
        title: "Content Planning",
        description: "Plan blog topics and other content based on keyword trends and SEO opportunities.",
        example: "If 'web design trends 2025' is a trending keyword, plan a blog post around it."
      },
      {
        title: "Social Media & Off-Page SEO",
        description: "Create a strategy for sharing content on social media and building backlinks.",
        example: "Share blog posts on Twitter, LinkedIn, and Pinterest to increase visibility and drive traffic."
      }
    ],
    "Ongoing-steps": [
      {
        title: "Monitor Keyword Rankings",
        description: "Track keyword rankings weekly with tools like Ahrefs, SEMrush, or Google Search Console.",
        example: "Track the ranking of 'best digital marketing agency' for the site every week to measure SEO progress."
      },
      {
        title: "Google Search Console Monitoring",
        description: "Monitor indexing issues, mobile usability, and page performance using Google Search Console.",
        example: "Check if any pages have mobile usability issues or aren’t indexed correctly."
      },
      {
        title: "Content Publishing & Optimization",
        description: "Publish content and optimize headings, images, links, and SEO scores using CMS tools like WordPress.",
        example: "Optimize your blog posts' headings for better SEO using Yoast or Rank Math plugin."
      },
      {
        title: "Build Backlinks",
        description: "Reach out to blogs, press releases, and influencers for backlink-building campaigns.",
        example: "Contact industry blogs to feature your content and link back to your website."
      },
      {
        title: "Review Analytics & User Behavior",
        description: "Monitor user behavior on the site like bounce rates, session duration, and exit pages.",
        example: "If users are bouncing from a specific page, analyze and optimize it for better engagement."
      },
      {
        title: "GTM/GA Tracking",
        description: "Set up conversion tracking and event tracking like form submissions and button clicks using Google Tag Manager and Google Analytics.",
        example: "Track the number of users who fill out a contact form or click a call-to-action button."
      }
    ],
    "Post-steps": [
      {
        title: "Content Revamp Cycle",
        description: "Regularly update and refresh old blog posts and repurpose content quarterly.",
        example: "Update your blog post about 'web design trends 2025' to keep it relevant and accurate."
      },
      {
        title: "Update Sitemap on Content Changes",
        description: "Submit the updated sitemap to Google Search Console after making content changes.",
        example: "After adding a new blog post or page, update your sitemap and submit it to Google Search Console."
      }
    ]
  };
  
export default function Marketing() {
  const [checked, setChecked] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('marketingChecklist');
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('marketingChecklist', JSON.stringify(checked));
    alert("Checklist saved!");
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset the checklist?")) {
      setChecked({});
      localStorage.removeItem('marketingChecklist');
    }
  };

  const toggleCheck = (section, item) => {
    const key = `${section}-${item.title}`;
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">Marketing Team Checklist</h1>

      {Object.entries(checklistData).map(([section, items]) => (
        <div key={section} className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{section}</h2>
          <ul className="space-y-3 pl-4 border-l-4 border-blue-200">
            {items.map((item, index) => {
              const key = `${section}-${item.title}`;
              return (
                <li key={index} className="flex gap-4 mb-4">
                  <input
                    type="checkbox"
                    id={key}
                    checked={checked[key] || false}
                    onChange={() => toggleCheck(section, item)}
                    className="mt-1 w-6 h-6 text-blue-600"
                  />

                  <div className="flex-1">
                    <label htmlFor={key} className="text-base font-semibold text-gray-800">
                      {item.title}
                    </label>
                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                    {item.example && (
                      <div className="mt-2 p-2 bg-gray-100 rounded text-gray-800 text-sm">
                        <strong>Example: </strong>{item.example}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div className="flex gap-4 mt-10">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Checklist
        </button>
        <button
          onClick={handleReset}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Reset Checklist
        </button>
      </div>
    </div>
  );
}
