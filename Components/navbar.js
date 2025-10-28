class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%);
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
        <a href="/" class="logo">
          <i data-feather="flag"></i>
          FlagFrenzy
        </a>
        <ul class="nav-links">
          <li><a href="/" class="active"><i data-feather="home"></i> Home</a></li>
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

    // Theme toggle functionality
    const themeToggle = this.shadowRoot.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
          html.classList.remove('dark');
          localStorage.setItem('theme', 'light');
          themeToggle.innerHTML = '<i data-feather="sun"></i>';
        } else {
          html.classList.add('dark');
          localStorage.setItem('theme', 'dark');
          themeToggle.innerHTML = '<i data-feather="moon"></i>';
        }
        feather.replace();
      });

      // Check for saved theme preference
      if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeToggle.innerHTML = '<i data-feather="moon"></i>';
      } else {
        document.documentElement.classList.remove('dark');
        themeToggle.innerHTML = '<i data-feather="sun"></i>';
      }
    }

    feather.replace();
  }
}

customElements.define('custom-navbar', CustomNavbar);
