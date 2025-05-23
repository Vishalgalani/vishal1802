import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="css-15awpur overflow-hidden border-t border-white/20"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-8 sm:py-6 py-4">
        <div className="css-3m0ceo">
          <p className="chakra-text css-9x44go">My Experience</p>
        </div>
        <div className="css-gmuwbf">
          <div className="sm:w-[75%] w-full">
            <div
              aria-label="Progress"
              data-orientation="vertical"
              activestep="0"
              linewidth="3"
              steps="5"
              className="chakra-stepper css-krmqu2"
            >
              <div
                data-status="complete"
                data-orientation="vertical"
                className="chakra-step css-1iuyj96"
              >
                <div
                  data-status="complete"
                  className="chakra-step__indicator css-kq5oaw"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    focusable="false"
                    className="chakra-icon chakra-step__icon css-fms1tt"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="css-1cf2ll3">
                  <h3
                    data-status="complete"
                    className="chakra-step__title css-1hoas8a"
                  >
                    Full stack Developer
                  </h3>
                  <p
                    data-status="complete"
                    className="chakra-step__description css-1cphk1v"
                  >
                    {/* Mar 2024 - Present */}
                  </p>
                  <p
                    data-status="complete"
                    className="chakra-step__description css-17rvvdd mt-2"
                  >
                    PAUL & PAUL LAWYERS
                  </p>
                  <p
                    data-status="complete"
                    className="chakra-step__description css-y9i95k"
                  >
                    Working with one of the most popular JavaScript libraries, React.js, along with Node.js for backend development. I developed a web application and admin panel focused on managing lawyer-related data and services. My responsibilities included building front-end interfaces for creating and scheduling posts, displaying categorized lawyer listings on the dashboard, and developing contact forms for user interaction. On the backend, I implemented APIs for post scheduling, form handling, and integrated email services to allow administrators to receive user inquiries directly. Additionally, I ensured smooth user experience, secure data flow, and efficient communication between the frontend and backend systems.
                  </p>

                  <p
                    data-status="complete"
                    className="chakra-step__description css-17rvvdd mt-6"
                  >
                    ENBIOSIS WEB-APP
                  </p>
                  <p
                    data-status="complete"
                    className="chakra-step__description css-y9i95k"
                  >
                  I worked as a Frontend Developer, maintaining and enhancing the admin panel using React.js. My responsibilities included fixing critical bugs, improving the overall performance, and ensuring a smooth and user-friendly experience for admin users. I developed and integrated new frontend features into the existing codebase, ensuring consistency and high code quality. I also collaborated closely with backend developers to debug API issues and optimize data handling on the frontend.
                  </p>

                  <p
                    data-status="complete"
                    className="chakra-step__description css-17rvvdd mt-6"
                  >
                    Noorah Web-admin
                  </p>
                  <p
                    data-status="complete"
                    className="chakra-step__description css-y9i95k"
                  >
                   I developed the frontend of a web application and admin panel focused on managing lawyer-related data and client interactions. Using React.js, I built user interfaces that allow administrators to create and schedule posts, which are then displayed on the dashboard at the specified time. The dashboard shows categorized lawyer information and invites users to complete a contact form. I focused on building a responsive, user-friendly interface, integrating APIs for data handling, and ensuring smooth navigation and functionality across the application.
                  </p>
                </div>
                <div
                  role="separator"
                  data-orientation="vertical"
                  data-status="complete"
                  className="chakra-step__separator css-4t6ey5"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="css-7setl7">
          <div
            aria-valuemax="100"
            aria-valuemin="0"
            aria-valuenow="100"
            role="progressbar"
            className="css-1g45tic w-full"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
