import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="flex flex-col items-center gap-2 py-2 bg-grey dark:bg-gray-900">
          <div className="flex items-center gap-5">
          <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="800" href="https://github.com/kshitiz11101" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="1100" href="https://www.linkedin.com/in/kshitiz-sharma11101/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </a>
            <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="900" href="https://twitter.com/kshitiz24451721" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter fa-xl"></i>
            </a>
            <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="1200" href="https://www.instagram.com/_kshitiz__sharma/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay="700" className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <i className="text-2xl fa-regular fa-envelope"></i>
              <div className="flex flex-col">
                <a
                  href="mailto:kshitizpvt01sharma@gmail.com"
                  className="font-inter text-cinder-light dark:text-grey font-normal text-sm"
                >
                  kshitizpvt01sharma@gmail.com
                </a>
              </div>
            </div>
          </div>
          <p data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay="800" className="text-cinder-light dark:text-white font-medium font-inter tracking-widest">
            © 2024 Kshitiz Sharma
          </p>
        </section>
      </footer>
    </>
  );
};
export default Footer;
