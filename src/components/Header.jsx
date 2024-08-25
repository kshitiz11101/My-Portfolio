import React from "react";
import Aos from "aos";
import logo from "../../public/images/Logo.jpg"
const Header = () => {
  Aos.init({
    once: true,
  });

  return (
    <>
      <section className="flex gap-20 flex-col xl:flex-row md:flex-row my-28 justify-around items-center">
        <div className="flex flex-col gap-5 mx-20 xl:mx-0">
          <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="200" className="flex gap-3">
            <p className="text-sm font-light text-cinder-light dark:text-white tracking-widest font-inter">
              MY NAME IS
            </p>
          </div>
          <h1 data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" className="text-cinder-dark-mode text-5xl font-bold font-pjs xl:text-6xl">
            Kshitiz Sharma.
          </h1>
          <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="600" className="text-md w-80 xl:w-96 leading-8 font-inter">
           A Full Stack Developer,A DSA Learner and an Open Source Enthusiast
          </p>
          <div  className="flex items-center gap-5">
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
        </div>
        <div className="xl:w-96" data-aos="flip-right" data-aos-duration="800" data-aos-delay="900">
          <img className="rounded-3xl " src={logo} alt="Picture" />
        </div>
      </section>
    </>
  );
};
export default Header;
