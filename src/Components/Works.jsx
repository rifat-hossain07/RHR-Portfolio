import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "./Shared/Title";

const Works = () => {
  const [showExp, setShowExp] = useState(true);
  return (
    <div>
      <div data-aos="fade-down" data-aos-duration="1500">
        <Title title="Works" />
      </div>
      <div className="flex justify-center items-center text-xl md:text-2xl">
        <p
          className={
            showExp
              ? "link link-hover text-red-400 underline"
              : "link link-hover"
          }
          onClick={() => setShowExp(true)}
        >
          Projects
        </p>
        <div className="divider lg:divider-horizontal">|</div>
        <p
          className={
            !showExp
              ? "link link-hover text-red-400 underline"
              : "link link-hover"
          }
          onClick={() => setShowExp(false)}
        >
          Experience
        </p>
      </div>
      {showExp ? (
        <>
          <div className=" ">
            <Carousel
              className="py-5 "
              infiniteLoop={true}
              showThumbs={false}
              swipeable={true}
              autoPlay={true}
              stopOnHover={true}
            >
              {/* Project-Vibe-It */}
              <div>
                <div className="hero  ">
                  <div className="hero-content text-left  flex-col lg:flex-row">
                    <img
                      src="https://i.ibb.co/2hdz0x5/vibe.png"
                      alt="Vibe-it"
                      className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className="mx-5">
                      <h1 className="text-xl md:text-2xl font-bold">
                        💼Vibe-IT
                      </h1>
                      <div className="py-6">
                        This is a full-stack Software Company website.
                        <p className="font-bold"> features:-</p>
                        <ul className="list-disc ml-5">
                          <li>
                            A complete web application that is role-based, fully
                            encrypted, and has route protection to effectively
                            manage a software company.
                          </li>
                          <li>
                            The website offers many features such as role-based
                            dashboards, dynamic tables, search and sorting
                            functionality also, fire functions, and the ability
                            to modify an employees role only for admin user.
                          </li>
                          <li>
                            Integrated stripe payment method to pay employee
                            salary and image hosting server of ImgBB.
                          </li>
                        </ul>
                        <p>
                          <span className="font-bold">Technology:-</span>{" "}
                          MongoDB, ReactJS, ExpressJS, NodeJS (MERN),The
                          implementation of this technology for this project
                          took 10 days.
                        </p>
                        <div>
                          <span className="font-bold">Live Link:-</span>
                          <a
                            className="link link-hover"
                            href="https://vibe-it.web.app/"
                          >
                            Vibe-It.com
                          </a>{" "}
                        </div>
                        <div>
                          <span className="font-bold">Code Link:-</span>
                          <a
                            className="link link-hover"
                            href="https://github.com/rifat-hossain07/Vibe-IT-Web"
                          >
                            Vibe-It.github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* project-2 */}
              <div>
                <div className="hero   ">
                  <div className="hero-content text-left  flex-col lg:flex-row">
                    <img
                      src="https://i.ibb.co/sVrc1mP/rhr-hotel.png"
                      alt="RHR-Hotel"
                      className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className="mx-5">
                      <h1 className="text-xl md:text-2xl font-bold">
                        🏨 RHR-Hotel
                      </h1>
                      <div className="py-6">
                        This is a full-stack Hotel Management website.
                        <p className="font-bold"> features:-</p>
                        <ul className="list-disc ml-5">
                          <li>
                            Only available seat rooms are displayed to guests;
                            if every seat is reserved, no room will be available
                            for reservation.
                          </li>
                          <li>
                            Reservations made by guests cannot be canceled on
                            the day before the check-in date.
                          </li>
                          <li>
                            Only authorized guests are able to modify their
                            scheduled check-in date, Used JWT token in the
                            cookies for authentication.
                          </li>
                        </ul>
                        <p>
                          <span className="font-bold">Technology:-</span>{" "}
                          MongoDB, ReactJS, ExpressJS, NodeJS (MERN), The
                          implementation of this technology for this project
                          took 8 days.
                        </p>
                        <div>
                          <span className="font-bold">Live Link:-</span>
                          <a
                            className="link link-hover"
                            href="https://rhr-hote-2.surge.sh/"
                          >
                            RHR-Hotel.com
                          </a>{" "}
                        </div>
                        <div>
                          <span className="font-bold">Code Link:-</span>
                          <a
                            className="link link-hover"
                            href="https://github.com/rifat-hossain07/RHR-Hotel-Web"
                          >
                            RHR-Hotel.github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* porject-3 */}
              <div>
                <div className="hero   ">
                  <div className="hero-content text-left  flex-col lg:flex-row">
                    <img
                      src="https://i.ibb.co/n0sG7gJ/rhr-tech.png"
                      alt="RHR-Tech"
                      className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className="mx-5">
                      <h1 className="text-xl md:text-2xl font-bold">
                        🛒RHR-Tech
                      </h1>
                      <div className="py-6">
                        This is a full-stack Tech selling shop website.
                        <p className="font-bold"> features:-</p>
                        <ul className="list-disc ml-5">
                          <li>
                            This website is secured; visitors cannot make any
                            changes without logging in.
                          </li>
                          <li>
                            This website features a mood toggle button that
                            allows users to switch between a dark and light
                            theme with a single click.
                          </li>
                          <li>
                            By selecting the brand name and photo separately
                            from the homepage, visitors can view particular
                            brand products.
                          </li>
                        </ul>
                        <p>
                          <span className="font-bold">Technology:-</span>{" "}
                          MongoDB, ReactJS, ExpressJS, NodeJS (MERN), The
                          implementation of this technology for this project
                          took 6 days.
                        </p>
                        <div>
                          <span className="font-bold">Live Link:-</span>
                          <a
                            className="link link-hover"
                            href="https://rhr-tech.web.app/"
                          >
                            RHR-Tech.com
                          </a>{" "}
                        </div>
                        <div>
                          <span className="font-bold">Code Link:-</span>
                          <a
                            className="link link-hover"
                            href="https://github.com/rifat-hossain07/RHR-Tech-Web"
                          >
                            RHR-Tech.github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </>
      ) : (
        <>
          <div className="w-2/3 mx-auto text-center space-y-10 my-10">
            <div>
              <p className="text-xl md:text-2xl font-bold">
                {" "}
                Technical Support Engineer
              </p>
              <p>
                Worked as a Tech Supporting Engineer to ensure client
                satisfaction and report several bugs of web based softwares.
              </p>
              <p>
                <span className="font-bold">Company Name:- </span>
                Smart Software Limited
              </p>
              <p>
                <span className="font-bold">Location:- </span>Dhaka, Bangladesh
              </p>
              <p>
                <span className="font-bold">Duration:- </span>1 year (06/2022 -
                06/2023)
              </p>
            </div>
            <div className="">
              <p className="text-xl md:text-2xl font-bold">
                {" "}
                University Project
              </p>
              <p>
                It was a automatic heat measure and alert web software. We
                worked as a team. My role was on the database creation and
                maintain,also the font-end design on the project.
              </p>
              <p>
                <span className="font-bold">Location:- </span>chongqing, China
              </p>
              <p>
                <span className="font-bold">Duration:- </span>6 months (06/2021
                - 01/2022)
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Works;
