"use client";

import { useForm } from "react-hook-form";
import contact from "../../data/images/contact.jpg";
import contactMobile from "../../data/images/contact-mobile.avif";
import useScreenSize from "../../hooks/useScreenSize";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    const newSubject = data.Subject;
    const newBody = `Name: ${data.Name}%0D%0AEmail: ${data.Email}%0D%0AMobile: ${data.Mobile}%0D%0AMessage: ${data.Message}`;
    // Redirect to Gmail compose page
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=spandan2405@gmail.com&su=${encodeURIComponent(
      newSubject
    )}&body=${newBody}`;
  };

  const screenSize = useScreenSize();
  //   console.log(screenSize);
  return (
    <section id="Contact">
      <div
        className="w-full h-auto bg-gray-700 bg-blend-overlay relative"
        style={{
          backgroundImage: `url(${
            screenSize.width < 768 ? contactMobile : contact
          })`,
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-4 py-16 text-white">
          <h1 className="text-4xl md:text-6xl font-semibold text-center mb-6">
            Get In Touch
          </h1>
          <div className="w-32 h-0.5 bg-cyan-400 mx-auto mb-12"></div>

          <div className="relative max-w-8xl justify-center flex">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 w-full md:w-[500px]"
              autoComplete="off"
            >
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-cyan-400 md:text-lg text-md">Name</label>
                <input
                  type="text"
                  {...register("Name", {
                    required: "Name is required",
                    minLength: 3,
                  })}
                  className={`p-2 bg-transparent border-b-2 md:border-b-4 ${
                    errors.Name ? "border-red-500" : "border-cyan-400"
                  } focus:outline-none`}
                />
                {errors.Name && (
                  <span className="text-red-400 text-sm">
                    {errors.Name.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-cyan-400 md:text-lg text-md">
                  Email
                </label>
                <input
                  type="email"
                  {...register("Email", {
                    required: "Email is required",
                    pattern: /^\S+@\S+$/i,
                  })}
                  className={`p-2 bg-transparent border-b-2 md:border-b-4 ${
                    errors.Email ? "border-red-500" : "border-cyan-400"
                  } focus:outline-none`}
                />
                {errors.Email && (
                  <span className="text-red-400 text-sm">
                    {errors.Email.message}
                  </span>
                )}
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col">
                <label className="text-cyan-400 md:text-lg text-md">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  {...register("Mobile", {
                    maxLength: 10,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers allowed",
                    },
                  })}
                  className={`p-2 bg-transparent border-b-2 md:border-b-4 ${
                    errors.Mobile ? "border-red-500" : "border-cyan-400"
                  } focus:outline-none`}
                />
                {errors.Mobile && (
                  <span className="text-red-400 text-sm">
                    {errors.Mobile.message}
                  </span>
                )}
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label className="text-cyan-400 md:text-lg text-md">
                  Subject
                </label>
                <input
                  type="text"
                  {...register("Subject", {
                    required: "Subject is required",
                    maxLength: 50,
                  })}
                  className={`p-2 bg-transparent border-b-2 md:border-b-4 ${
                    errors.Subject ? "border-red-500" : "border-cyan-400"
                  } focus:outline-none`}
                />
                {errors.Subject && (
                  <span className="text-red-400 text-sm">
                    {errors.Subject.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-cyan-400 md:text-lg text-md">
                  Message
                </label>
                <textarea
                  {...register("Message", { required: "Message is required" })}
                  className={`p-2 bg-transparent border-b-2 md:border-b-4 ${
                    errors.Message ? "border-red-500" : "border-cyan-400"
                  } focus:outline-none`}
                ></textarea>
                {errors.Message && (
                  <span className="text-red-400 text-sm">
                    {errors.Message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  className="border border-cyan-400 text-cyan-400 px-4 py-1 md:px-6 md:py-2 md:text-md hover:bg-cyan-400 hover:text-white transition duration-300 ease-in-out text-sm"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          <footer className="w-full text-white px-6 md:px-24 mt-12">
            <div className="text-center items-center space-y-4 justify-center md:flex md:justify-between">
              <h3 className="text-md md:text-lg">© Spandan Gupta 2025</h3>
              <div className="flex justify-center space-x-4 md:space-x-8">
                <button className="hover:transition duration-500 ease-in-out hover:-translate-y-2">
                  <a
                    href="https://www.linkedin.com/in/spandangupta2003/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn className="text-xl md:text-2xl" />
                  </a>
                </button>
                <button className="hover:transition duration-500 ease-in-out hover:-translate-y-2">
                  <a
                    href="mailto:spandan2405@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiMail className="text-xl md:text-2xl" />
                  </a>
                </button>
                <button className="hover:transition duration-500 ease-in-out hover:-translate-y-2">
                  <a
                    href="https://instagram.com/Spandan2405"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiInstagram className="text-xl md:text-2xl" />
                  </a>
                </button>
                <button className="hover:transition duration-500 ease-in-out hover:-translate-y-2">
                  <a
                    href="https://github.com/Spandan2405"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub className="text-xl md:text-2xl" />
                  </a>
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Contact;
