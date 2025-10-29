class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* This is your original CSS, but with colors hard-coded */
        nav {
          /* I replaced var(--primary-500) with your hex code #3b82f6
             and var(--secondary-500) with #10b981
          */
          background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none; /* Added this for the logo link */
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        a:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .active {
          background: rgba(255, 255, 255, 0.2);
        }
        .theme-toggle {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.2s;
          display: flex;
          align-items: center; /* Added for centering */
        }
        .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          .nav-links {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
          }
          a {
            width: 100%;
            justify-content: center;
          }
        }
      </style>
      
      <nav>
        <a href="index.html" class="logo">
          <i data-feather="terminal"></i>
          Cyber Blog
        </a>
        <ul class="nav-links">
          <li><a href="index.html" id="nav-home"><i data-feather="home"></i> Home</a></li>
          <li><a href="writeups.html" id="nav-projects"><i data-feather="file-text"></i> Writeups</a></li>
          <li><a href="about.html" id="nav-about"><i data-feather="user"></i> About</a></li>
          <li>
            <button class="theme-toggle" id="themeToggle">
            </button>
          </li>
        </ul>
      </nav>
    `;

    // --- JavaScript for Theme Toggle and Icons ---

    const shadow = this.shadowRoot;
    
    // Helper function to render Feather icons inside the Shadow DOM
    const renderIcons = () => {
      shadow.querySelectorAll('[data-feather]').forEach(iconElement => {
        const iconName = iconElement.getAttribute('data-feather');
        // Check if feather.icons exists and has the icon
        if (window.feather && feather.icons[iconName]) {
          // Set innerHTML to the SVG string
          iconElement.innerHTML = feather.icons[iconName].toSvg({
            'stroke-width': 2,
            width: 20,
            height: 20
          });
        }
      });
    };
    
    // Helper function to update the theme icon
    const updateThemeIcon = (theme) => {
      const themeToggle = shadow.getElementById('themeToggle');
      if (themeToggle && window.feather) {
        const iconName = theme === 'dark' ? 'moon' : 'sun';
        themeToggle.innerHTML = feather.icons[iconName].toSvg({
          'stroke-width': 2,
          width: 20,
          height: 20
        });
      }
    };

    // --- Active Page Link Logic ---
    // THIS SECTION IS NOW CORRECT
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'index.html' || currentPage === '') {
      shadow.getElementById('nav-home')?.classList.add('active');
    } else if (currentPage === 'writeups.html' || currentPage === 'ncllogwriteup.html') {
      shadow.getElementById('nav-projects')?.classList.add('active');
    } else if (currentPage === 'about.html') {
      shadow.getElementById('nav-about')?.classList.add('active');
    }

    // --- Theme Toggle Logic ---
    const themeToggle = shadow.getElementById('themeToggle');
    themeToggle?.addEventListener('click', () => {
      const html = document.documentElement;
      let newTheme;
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        newTheme = 'light';
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        newTheme = 'dark';
      }
      updateThemeIcon(newTheme);
    });

    // --- Initial Load ---
    
    // 1. Set initial theme
    const currentTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = (currentTheme === 'dark' || (!currentTheme && prefersDark)) ? 'dark' : 'light';
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // 2. Render all icons
    // We must wait a tiny bit for the feather.js script to be ready
    setTimeout(() => {
      renderIcons();
      updateThemeIcon(initialTheme); // Set the correct theme icon
    }, 50); // 50ms is usually more than enough
  }
}

customElements.define('custom-navbar', CustomNavbar);
