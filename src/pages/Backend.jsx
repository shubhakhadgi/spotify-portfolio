import { useEffect, useState } from 'react';

const checklistData = {
    "Pre-steps": [
      {
        title: "Set up the environment",
        description: "Install Laravel via Composer and configure the .env file (Database, APP_URL, MAIL settings). Set up services like MySQL or Redis if applicable.",
        example: "Example: Install Laravel with 'composer create-project --prefer-dist laravel/laravel projectName'. Configure database settings in .env."
      },
      {
        title: "Define project structure",
        description: "Follow Laravel's MVC architecture. Organize custom services, repositories, or job classes logically. Group routes efficiently in web.php, api.php, and using Route Groups.",
        example: "Example: Group API routes in api.php, web routes in web.php, and organize services in app/Services."
      },
      {
        title: "Security considerations",
        description: "Enable CSRF protection in forms, use Laravel’s input validation rules for form requests, sanitize user input to guard against XSS attacks, and implement password hashing using Hash::make().",
        example: "Example: Use @csrf in form submissions and Hash::make() to securely hash passwords."
      },
      {
        title: "Database and migrations",
        description: "Plan database schema and relationships (e.g., one-to-one, one-to-many). Create and run migrations using 'php artisan migrate'. Define model relationships in Eloquent.",
        example: "Example: Use 'php artisan make:migration create_users_table' and define relationships like hasOne or belongsTo in Eloquent models."
      },
      {
        title: "API planning (if applicable)",
        description: "Set up API routes in api.php, implement middleware for authentication and authorization (e.g., auth:sanctum), return standardized JSON responses, and document API endpoints.",
        example: "Example: Define API routes in api.php and use Sanctum for authentication middleware."
      }
    ],
  
    "Ongoing-steps": [
      {
        title: "Write clean, maintainable code",
        description: "Follow PSR-4 coding standards and Laravel’s best practices. Use Eloquent ORM for database operations and modular code (e.g., Service Classes, Jobs, Events). Optimize queries with eager loading and indexing.",
        example: "Example: Write clean, reusable code with Eloquent, and optimize queries with eager loading (e.g., 'User::with('posts')->get()')."
      },
      {
        title: "Implement authentication and authorization",
        description: "Use Laravel’s auth scaffolding (Sanctum or Passport) for authentication. Define user roles and permissions. Restrict route access based on user roles using Gate or middleware.",
        example: "Example: Use 'Auth::user()->can('edit-posts')' in controllers to check if the user has permission."
      },
      {
        title: "Optimize performance",
        description: "Cache frequently accessed data (e.g., cache(), Redis). Optimize database queries by using pagination, query caching, and indexing.",
        example: "Example: Cache product data with 'Cache::remember()' or use Redis for storing session data."
      },
      {
        title: "Test and debug continuously",
        description: "Write Unit and Feature tests using 'php artisan test'. Debug with Laravel’s built-in logging (Log::info()). Handle exceptions gracefully with custom error pages (404, 500).",
        example: "Example: Use 'php artisan make:test PostTest' to write feature tests for your posts."
      }
    ],
  
    "Post-steps": [
      {
        title: "Database seeding and backup",
        description: "Seed the database with test data using 'php artisan db:seed' and ensure regular database backups are scheduled.",
        example: "Example: Use 'php artisan db:seed --class=UserSeeder' to seed user data."
      },
      {
        title: "Optimize application for production",
        description: "Set 'APP_ENV=production' and 'APP_DEBUG=false' in the .env file. Run optimization commands like 'php artisan config:cache', 'php artisan route:cache', and 'php artisan view:cache'.",
        example: "Example: Run 'php artisan optimize' to cache configuration, routes, and views."
      },
      {
        title: "Cross-browser compatibility & API testing",
        description: "Test APIs using tools like Postman. Verify frontend-backend integration works across multiple browsers and devices.",
        example: "Example: Test API responses in Postman and ensure compatibility with various browsers."
      }
    ],
  
    "Deployment and Post-Deployment Steps": [
      {
        title: "Deploy to server",
        description: "Set up the server (e.g., Nginx/Apache), deploy the Laravel app, and ensure correct file permissions for storage and bootstrap/cache. Install SSL certificates for HTTPS.",
        example: "Example: Set file permissions using 'chmod -R 775 storage bootstrap/cache' and install SSL certificates."
      },
      {
        title: "Post-deployment monitoring",
        description: "Monitor logs and errors using tools like Laravel Sentry. Regularly track performance (e.g., memory usage, query execution time). Address any performance bottlenecks.",
        example: "Example: Use Sentry for error tracking and monitor query performance with Laravel Telescope."
      }
    ],
  
    "SEO Considerations": [
      {
        title: "Ensure SEO-friendly URLs",
        description: "Create clean, readable URLs without query parameters (e.g., '/services/web-design' instead of '/index.php?id=12').",
        example: "Example: Set up routes with resource controllers like '/services' to get clean, SEO-friendly URLs."
      },
      {
        title: "Redirects handling",
        description: "Set up 301 redirects for old or broken links to ensure that users and search engines are directed to the correct pages.",
        example: "Example: Use 'Route::redirect('/old-url', '/new-url');' to set up redirects."
      },
      {
        title: "Canonical URLs",
        description: "Implement canonical tags to avoid duplicate content issues and improve SEO.",
        example: "Example: Add <link rel='canonical' href='https://example.com/page'> to the <head> section."
      },
      {
        title: "Sitemap generation",
        description: "Automatically generate an XML sitemap, which should be updated when new content is added.",
        example: "Example: Use packages like 'spatie/laravel-sitemap' to generate and manage sitemaps."
      },
      {
        title: "Robots.txt configuration",
        description: "Configure robots.txt to allow or disallow indexing of certain pages and block admin or test environments.",
        example: "Example: Add 'Disallow: /admin' to robots.txt to prevent search engines from indexing admin pages."
      },
      {
        title: "SSL & security",
        description: "Ensure HTTPS is enforced and fix any mixed content warnings to improve security and SEO.",
        example: "Example: Force HTTPS by adding 'Redirect permanent / https://yourdomain.com' to Nginx or Apache config."
      },
      {
        title: "Structured data API support",
        description: "Allow dynamic injection of schema markup (e.g., JSON-LD for blogs, products) from the backend to enhance SEO.",
        example: "Example: Return structured data from API endpoints to include rich snippets for blogs or products."
      },
      {
        title: "Speed & performance optimization",
        description: "Use caching (e.g., Redis or Laravel Cache) and optimize database queries to reduce TTFB (Time To First Byte).",
        example: "Example: Cache expensive queries or data that doesn’t change frequently."
      }
    ]
  };
  
export default function Backend() {
  const [checked, setChecked] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('backendChecklist');
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('backendChecklist', JSON.stringify(checked));
    alert("Checklist saved!");
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset the checklist?")) {
      setChecked({});
      localStorage.removeItem('backendChecklist');
    }
  };

  const toggleCheck = (section, item) => {
    const key = `${section}-${item.title}`;
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">Backend Team Checklist</h1>

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
