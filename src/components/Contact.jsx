import React from "react";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="flex gap-10 flex-col mt-20  md:gap-0  items-center justify-evenl py-10"
      >
        <div data-aos="zoom-in-down" data-aos-duration="800" className="flex flex-col gap-2 items-center">
          <div className="flex gap-3">

           
          </div>
          <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">
            SEND A MESSAGE
          </p>
        </div>

        <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="500" className="flex flex-col gap-5 items-center text-center py-10 px-10 xl:px-72">
          <h1 className="xl:text-[50px] text-[45px] font-pjs font-bold text-cinder-dark dark:text-cinder-dark-mode">Get In Touch</h1>
          <p className="text-lg font-inter text-cinder-white text-center">I&apos;m currently looking any internship opportunities, my inbox is always open. Whether you have a question,
            want to collaborate on a project or just want to say hi,
            I&apos;ll definitely get back to you!
          </p>
          <a href="mailto:kshitizpvt01sharma@gmail.com"><button data-aos="fade-up" data-aos-duration="800" data-aos-delay="700" className="border rounded-md p-3 font-inter text-xl font-bold w-40 text-cinder-dark dark:text-cinder-dark-mode border-cinder-light shadow-xl shadow-gray-300 dark:shadow-black">Say Hello</button></a>
        </div>
      </section>
    </>
  );
};
export default Contact;
