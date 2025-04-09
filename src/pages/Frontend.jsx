import { useEffect, useState } from 'react';

const checklistData = {
    "Pre-steps": [
      {
        title: "Set up a private GitHub repository",
        description: "Create a private repo to manage source code and collaborate securely.",
        example: "Create a GitHub repo and add teammates with appropriate permissions."
      },
      {
        title: "Decide and finalize project structure",
        description: "Organize folders for components, assets, utilities, etc., for scalability and clarity.",
        example: "Structure folders like /components, /pages, /assets, /utils."
      },
      {
        title: "Choose frontend framework, libraries, and packages",
        description: "Select appropriate tools based on project needs and performance.",
        example: "Use React + Tailwind CSS + React Router for a responsive SPA."
      },
      {
        title: "Plan for SEO best practices",
        description: "Ensure your frontend is optimized for search engines.",
        example: "Add title, meta tags, structured data using JSON-LD."
      },
      {
        title: "Implement input validation and sanitization",
        description: "Protect against bad or harmful inputs from users.",
        example: "Validate email format and sanitize to remove <script> tags."
      },
      {
        title: "Plan security measures for common frontend vulnerabilities",
        description: "Prevent common attacks like XSS and CSRF with best practices.",
        example: "Use escape functions and include CSRF tokens in forms."
      }
    ],
  
    "Ongoing-steps": [
      {
        title: "Write clean and maintainable code",
        description: "Use readable variable names, consistent formatting, and comments when necessary.",
        example: "Follow naming conventions and avoid deeply nested logic."
      },
      {
        title: "Develop reusable components",
        description: "Break down UI into modular components to increase reusability and maintainability.",
        example: "Create a Button component used across pages."
      },
      {
        title: "Optimize performance",
        description: "Speed up load time by compressing assets and using lazy loading.",
        example: "Minify JS/CSS, use lazy loading for images, and load scripts asynchronously."
      },
      {
        title: "Test and debug continuously",
        description: "Check functionality during development using tools and manual testing.",
        example: "Use Chrome DevTools and console logs for debugging."
      },
      {
        title: "Ensure accessibility compliance",
        description: "Make the site usable for all users including those with disabilities.",
        example: "Use ARIA labels, proper semantic HTML, and keyboard navigation."
      }
    ],
  
    "Post-steps": [
      {
        title: "Ensure cross-browser compatibility",
        description: "Test your site across different browsers and fix layout or feature issues.",
        example: "Use feature detection (e.g., Modernizr) to handle unsupported features."
      }
    ],
  
    "SEO Considerations": [
      {
        title: "Add essential meta tags",
        description: "Include title, meta description, keywords, and social meta tags.",
        example: "Add Open Graph tags for Facebook and Twitter card tags for Twitter."
      },
      {
        title: "Implement structured data",
        description: "Use schema markup to help search engines understand your content.",
        example: "Use JSON-LD for blogs, services, or FAQs. Validate with Google Rich Results Test."
      },
      {
        title: "Use semantic HTML",
        description: "Structure your HTML meaningfully with tags like <article> and <section>.",
        example: "Use one <h1> per page, followed by <h2>, <h3>, etc."
      },
      {
        title: "Set canonical tags",
        description: "Prevent duplicate content issues by indicating the preferred URL for each page.",
        example: "<link rel='canonical' href='https://example.com/blog/post-1'>"
      },
      {
        title: "Add alt attributes and ARIA roles",
        description: "Make images accessible and ensure screen readers can understand the layout.",
        example: "Add `alt='Team working'` to <img> tags and use aria-labels for navigation."
      },
      {
        title: "Design responsive, mobile-first layout",
        description: "Ensure the layout adapts to all screen sizes starting from mobile devices.",
        example: "Use Flexbox or CSS Grid and media queries for mobile-first responsiveness."
      },
      {
        title: "Use lazy loading for images and videos",
        description: "Defer loading of offscreen images and videos to improve performance.",
        example: "<img loading='lazy' src='...' alt='...'>"
      },
      {
        title: "Create SEO-friendly internal linking",
        description: "Use descriptive, keyword-rich anchor texts for internal links.",
        example: "<a href='/services/web-design'>Web Design Services</a>"
      },
      {
        title: "Keep schema data updated",
        description: "Update structured data whenever relevant content changes.",
        example: "Update FAQ schema if questions or answers change."
      },
      {
        title: "Run SEO audits regularly",
        description: "Use tools like Lighthouse or PageSpeed Insights to identify issues and optimize.",
        example: "Fix slow loading, large LCP, or high CLS scores."
      },
      {
        title: "Install and use SEO and accessibility dev tools",
        description: "Use browser extensions and testing tools to catch issues early.",
        example: "Use Lighthouse, axe DevTools, and WAVE for testing."
      }
    ]
  };  

export default function Frontend() {
  const [checked, setChecked] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('frontendChecklist');
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('frontendChecklist', JSON.stringify(checked));
    alert("Checklist saved!");
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset the checklist?")) {
      setChecked({});
      localStorage.removeItem('frontendChecklist');
    }
  };

  const toggleCheck = (section, item) => {
    const key = `${section}-${item.title}`;
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">Frontend Team Checklist</h1>

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
