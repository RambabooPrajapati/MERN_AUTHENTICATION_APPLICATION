import React from "react";

export default function Home() {
  return (
    <>
      <div className="px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold  mb-5 text-slate-600 ">
          Welcome to Rambabu_Web_Tech's MERN Development Hub!
        </h1>
        <h1 className="text-3xl font-bold  mb-6 text-slate-800">
          Building Dynamic, Scalable, and Modern Web Applications
        </h1>
        <hr />
        <h1 className="text-2xl font-bold mt-8 mb-3">About Me</h1>
        <p className="mb-4 text-slate-700 w-full">
          Hello! I'm Rambabu Prajapati, a passionate MERN stack developer with a focus on creating robust, user-friendly web applications. With a blend of creativity and technical expertise, I strive to deliver high-quality solutions tailored to meet your needs.
        </p>
        <p className="text-2xl font-bold mb-3">What I Do</p>
        <ul>
          <li>
            <span className="text-xl font-bold mb-3">
              Full-Stack Development:{" "}
            </span>
            From server to client, I handle the entire development process, ensuring seamless communication and functionality.
          </li>
          <li>
            <span className="text-xl font-bold mb-3">
              MERN Stack Expertise:{" "}
            </span>{" "}
            Proficient in MongoDB, Express.js, React.js, and Node.js, I leverage these technologies to craft interactive and efficient applications.
          </li>
          <li>
            <span className="text-xl font-bold mb-3">
              Custom Web Solutions:{" "}
            </span>
            Whether you need an e-commerce platform, social networking site, or a business dashboard, I specialize in developing custom web solutions to fit your unique requirements.
          </li>
        </ul>

        <p className="text-2xl font-bold mt-5 mb-5">My Services</p>
        <p className="mb-4 text-slate-700">
          <span className="text-lg">1. Web Application Development</span> <br></br> I create responsive, feature-rich web applications using the power of the MERN stack. Let's turn your ideas into reality with sleek, intuitive interfaces and powerful unctionalities.
        </p>
        <p className="mb-4 text-slate-700">
          <span className="text-lg">2. API Development & Integration</span> <br></br> Need to connect your application with third-party services or create a custom API? I develop secure and efficient APIs, ensuring smooth data flow and integration.
        </p>
        <p className="mb-4 text-slate-700">
          <span className="text-lg">3. Performance Optimization</span> <br></br> Speed matters! I optimize applications for performance, making them faster, more efficient, and capable of handling large volumes of traffic without a hitch.
        </p>
        <p className="mb-4 text-slate-700">
          <span className="text-lg">4. Maintenance & Support</span> <br></br> Even after deployment, I provide ongoing maintenance and support services to keep your application running smoothly. Updates, bug fixes, and enhancements are just a message away.
        </p>
        <p className="mb-4 text-red-800 font-bold text-4xl">Note:</p>
        <p className="mb-4 text-slate-700">
          This is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack. It includes authentication features that allow users to sign up, log in, and log out, and provides access
          to protected routes only for authenticated users.
        </p>
        <p className="mb-4 text-slate-700">
          The front-end of the application is built with React and uses React Router for client-side routing. The back-end is built with Node.js and Express, and uses MongoDB as the database. Authentication is implemented using JSON Web Tokens (JWT).
        </p>
        <p className="mb-4 text-slate-700">
          This application is intended as a starting point for building full-stack web applications with authentication using the MERN stack. Feel free to use it as a template for your own projects!
        </p>
      </div>
      <div></div>
    </>
  );
}
