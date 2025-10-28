class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* All your styles go here... */
        /* ...styles... */
      </style>
      <nav>
        <a href="index.html" class="logo">
          <i data-feather="terminal"></i> Abraham Ruiz
        </a>
        <ul class="nav-links">
          <li><a href="index.html"><i data-feather="home"></i> Home</a></li>
          <li><a href="projects.html"><i data-feather="file-text"></i> Writeups</a></li>
          <li><a href="about.html"><i data-feather="user"></i> About</a></li>
          <li>
            <button class="theme-toggle" id="themeToggle">
              <i data-feather="moon"></i>
            </button>
          </li>
        </ul>
      </nav>
    `;

    // --- FIX 3: SHADOW DOM ICON REPLACEMENT ---
    
    // Helper function to render icons inside the Shadow DOM
    const renderIcons = () => {
      this.shadowRoot.querySelectorAll('[data-feather]').forEach(iconElement => {
        const iconName = iconElement.getAttribute('data-feather');
        if (feather.icons[iconName]) {
          // Get the SVG string and set it as the icon's HTML
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
      const themeToggle = this.shadowRoot.getElementById('themeToggle');
      if (themeToggle) {
        const iconName = theme === 'dark' ? 'moon' : 'sun';
        // Just replace the innerHTML, no need for feather.replace()
        themeToggle.innerHTML = feather.icons[iconName].toSvg({
          'stroke-width': 2,
           width: 20,
           height: 20
        });
      }
    };

    // Theme toggle functionality
    const themeToggle = this.shadowRoot.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
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
        updateThemeIcon(newTheme); // Update the icon
      });

      // Check for saved theme preference
      const currentTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        updateThemeIcon('dark');
      } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcon('light');
      }
    }

    // Initial icon render for all icons in the component
    renderIcons(); 
    
    // Manually set the correct theme icon on first load
    // (This overrides the default 'moon' set in the HTML)
    const initialTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    updateThemeIcon(initialTheme);
  }
}

customElements.define('custom-navbar', CustomNavbar);
