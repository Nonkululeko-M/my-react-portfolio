import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Navbar = () => {
  useEffect(() => {
    // Function to open the menu
    function openMenu() {
      const openBtns = document.querySelectorAll(".open");
      openBtns.forEach((e) => {
        e.addEventListener("click", () => {
          document.body.classList.add("menu-expanded");
        });
      });
    }
    
    // Function to close the menu
    function closeMenu() {
      const closeBtns = document.querySelectorAll(".close");
      closeBtns.forEach((e) => {
        e.addEventListener("click", () => {
          document.body.classList.remove("menu-expanded");
        });
      });
    }
    
    // ScrollReveal configuration
    ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    }).reveal(
      `#home, 
      #home img, 
      #about, 
      #about header, 
      #about p,
      #about img,
      #projects,
      #projects header,
      #projects .card,
      #knowledge,
      #knowledge header,
      #knowledge .card,
      #contact,
      #contact header`
    );

    // Call the openMenu and closeMenu functions
    openMenu();
    closeMenu();

    // Toggle for light mode
    const toggle = document.getElementById("toggle");
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("light-mode");
    });
  }, []); // Empty dependency array to run once after component is mounted

  return (
    <nav id="navigation">
      <div className="wrapper">
        <a className="logo close" href="#home"> NM</a>

        <div className="menu">
          <ul>
            <li>
              <a id="aboutNav" className="close" href="#about">About</a>
            </li>
            <li>
              <a id="skillsNav" className="close" href="#knowledge">Skills</a>
            </li>
            <li>
              <a id="projectsNav" className="close" href="#projects">Projects</a>
            </li>
            <li>
              <a id="testimonialsNav" className="close" href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a id="contactNav" className="close" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <ul className="social-links">
          <li>
            <a href="https://www.instagram.com/nonkululekonancy/" title="Instagram" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1.99997H7C4.23858 1.99997 2 4.23855 2 6.99997V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V6.99997C22 4.23855 19.7614 1.99997 17 1.99997Z" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5721C7.96011 11.7214 8.09377 10.8715 8.48125 10.1247C8.86872 9.3779 9.48185 8.77232 10.2334 8.39414C10.985 8.01596 11.8365 7.88325 12.6672 8.01693C13.4978 8.15061 14.2652 8.5428 14.8602 9.13774C15.4551 9.73267 15.8473 10.5001 15.981 11.3308L15.9997 11.3701Z" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 6.5H17.51" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/Nonkululeko-M?tab=repositories" title="Github" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="rgba(255,255,255,1)" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nonkululeko-mzalwana-1a8248271/" title="LinkedIn" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" fill="rgba(255,255,255,1)" />
              </svg>
            </a>
          </li>
        </ul>
        
        <button aria-expanded="false" aria-label="Abrir menu" className="open-menu open">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20H30" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 12H30" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 28L30 28" stroke="#00856F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button aria-expanded="true" aria-label="Fechar menu" className="close-menu close">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 10L10 30M10 10L30 30" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
