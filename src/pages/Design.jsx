import { useEffect, useState } from 'react';

const checklistData = {
  "Pre-steps": [
    {
      title: "Identify the business nature",
      description: "Understand what the business does and what its website needs to accomplish.",
      example: "A law firm's site may prioritize trust-building content, while an online store focuses on product display."
    },
    {
      title: "Get the client’s clear requirements",
      description: "Discuss and document the client’s goals, features, and expectations for the site.",
      example: "Does the client need a contact form, blog section, or a booking system?"
    },
    {
      title: "Identify the target audience",
      description: "Understand who the users are and what they expect from the website.",
      example: "A youth-oriented fashion brand may prefer bold, trendy visuals and mobile-first design."
    },
    {
      title: "Research competitors and industry trends",
      description: "Analyze other websites in the same space for best practices and innovation opportunities.",
      example: "Study how competitors highlight their services and make your design stand out while staying relevant."
    },
    {
      title: "Collect references from the client and do visual research",
      description: "Get design inspiration from the client and explore sites with similar themes.",
      example: "Pinterest boards, Behance links, or competitor websites."
    },
    {
      title: "Create wireframes",
      description: "Sketch the basic layout to visualize how elements will be arranged on the pages.",
      example: "Use Figma or paper sketches to draw the homepage with header, hero section, and footer."
    },
    {
      title: "Plan website architecture and navigation",
      description: "Structure the pages logically so users can find what they need with ease.",
      example: "A clear top nav with links to Home, About, Services, Blog, and Contact."
    },
    {
      title: "Choose color schemes, typography, and branding elements",
      description: "Ensure all visuals align with the brand’s identity and are used consistently.",
      example: "Use brand colors and a consistent heading font across all pages."
    },
    {
      title: "Build design prototypes with accessibility in mind",
      description: "Create interactive mockups and ensure the design follows accessibility standards (like WCAG).",
      example: "Use proper color contrast, alt text for images, and keyboard-friendly navigation."
    }
  ],
  "Ongoing-steps": [
    {
      title: "Implement responsive design",
      description: "Make sure the design adapts smoothly to desktops, tablets, and mobile screens.",
      example: "Use CSS media queries to change layout based on screen size."
    },
    {
      title: "Optimize UI/UX for intuitive navigation",
      description: "Ensure users can navigate easily and perform key actions without confusion.",
      example: "Highlight active links and use clear call-to-action buttons."
    },
    {
      title: "Ensure consistency in design elements",
      description: "Standardize UI components like fonts, buttons, icons, and spacing across pages.",
      example: "Use a design system or component library to keep elements consistent."
    },
    {
      title: "Test across multiple devices and screen sizes",
      description: "Regularly check how the site looks and works on different devices and browsers.",
      example: "Test using Chrome DevTools, BrowserStack, or physical devices."
    }
  ],
  "Post-steps": [
    {
      title: "Conduct user testing & gather feedback",
      description: "Let users interact with the site and note their feedback to make improvements.",
      example: "Ask testers to complete tasks like finding a service or submitting a form, and observe any pain points."
    }
  ],
  "SEO Considerations": [
    {
      title: "Ensure accessible and readable design",
      description: "Design with good color contrast and font sizes to support accessibility and improve SEO.",
      example: "Use readable fonts, appropriate heading hierarchy, and high-contrast text for visibility."
    }
  ]
};


export default function Design() {
  const [checked, setChecked] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('designChecklist');
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('designChecklist', JSON.stringify(checked));
    alert("Checklist saved!");
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset the checklist?")) {
      setChecked({});
      localStorage.removeItem('designChecklist');
    }
  };

  const toggleCheck = (section, item) => {
    const key = `${section}-${item.title}`;
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">Design Team Checklist</h1>

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
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
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
