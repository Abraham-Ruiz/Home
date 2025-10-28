class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(135deg, var(--secondary-500) 0%, var(--primary-500) 100%);
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
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
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
          .social-links {
            justify-content: center;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/"><i data-feather="home"></i> Home</a></li>
              <li><a href="projects.html"><i data-feather="file-text"></i> Writeups</a></li>
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
          <div class="footer-section">
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
          <p>&copy; ${new Date().getFullYear()} FlagFrenzy. All rights reserved.</p>
        </div>
      </footer>
    `;
    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);
