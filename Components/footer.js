class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* I've replaced your CSS variables with the
          actual hex codes for reliability. 
        */
        footer {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
          color: white;
          padding: 2rem;
          text-align: center;
          margin-top: auto;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .footer-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 0.5rem;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        .footer-section a {
          color: white;
          text-decoration: none;
          transition: opacity 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-section a:hover {
          opacity: 0.8;
        }
        .copyright {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.875rem;
        }
        .social-links {
          /* Changed from 'center' to 'left' to match other
            sections, but kept 'center' for mobile.
          */
          display: flex;
          justify-content: left;
          gap: 1rem;
          margin-top: 1rem; /* This was in your original, but not used */
        }
        .social-links a {
          color: white;
          transition: transform 0.2s;
        }
        .social-links a:hover {
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          /* This centers the social links on mobile */
          .footer-section.connect .social-links {
            justify-content: center;
          }
        }
      </style>
      
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="index.html"><i data-feather="home/"></i> Home</a></li>
              <li><a href="writeups.html"><i data-feather="file-text"></i> Writeups</a></li>
              <li><a href="about.html"><i data-feather="user"></i> About</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="#"><i data-feather="globe"></i> Web Exploitation</a></li>
              <li><a href="#"><i data-feather="lock"></i> Cryptography</a></li>
              <li><a href="#"><i data-feather="code"></i> Reverse Engineering</a></li>
            </ul>
          </div>
          <div class="footer-section connect">
            <h3>Connect</h3>
            <div class="social-links">
              <a href="#" aria-label="GitHub"><i data-feather="github"></i></a>
              <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
              <a href="#" aria-label="Email"><i data-feather="mail"></i></a>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; ${new Date().getFullYear()} Abraham Ruiz | Cyber Log. All rights reserved.</p>
        </div>
      </footer>
    `;

    // --- FIX 2: ICON RENDERING FOR SHADOW DOM ---
    
    // Helper function to render Feather icons
    const renderIcons = () => {
      this.shadowRoot.querySelectorAll('[data-feather]').forEach(iconElement => {
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

    // We must wait a tiny bit for the feather.js script to be ready
    setTimeout(renderIcons, 50);

  }
}

customElements.define('custom-footer', CustomFooter);
