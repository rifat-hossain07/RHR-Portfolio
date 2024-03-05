import { useState } from "react";
import Title from "./Shared/Title";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Study = () => {
  const [showEdu, setShowEdu] = useState(true);
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <Title title="Study" />
      </div>
      <div className="flex justify-center items-center text-lg md:text-2xl">
        <p
          className={
            showEdu
              ? "link link-hover text-red-400 underline"
              : "link link-hover"
          }
          onClick={() => setShowEdu(true)}
        >
          Education
        </p>
        <div className="divider lg:divider-horizontal">|</div>
        <p
          className={
            !showEdu
              ? "link link-hover text-red-400 underline"
              : "link link-hover"
          }
          onClick={() => setShowEdu(false)}
        >
          Certificates
        </p>
      </div>
      {showEdu ? (
        <>
          <div>
            <div className="flex justify-center">
              <div className=" md:w-4/5 mx-auto border rounded-xl border-red-400 my-5 text-center p-2 text-xl md:text-2xl font-medium">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Computer Science and Technology (C.S.T)
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <img
                          className="w-28 md:w-40 "
                          src="https://i.ibb.co/LkccRFs/cqupt.jpg"
                          alt=""
                        />
                        <div className="text-center text-sm md:text-xl md:w-2/3">
                          <p>
                            <span className="font-bold">Institution:- </span>
                            <span className="font-normal">
                              Chongqing University of Posts and
                              Telecommunications (CQUPT)
                            </span>
                          </p>
                          <p>
                            <span className="font-bold">Location:- </span>
                            <span className="font-normal">
                              Chongqing, China
                            </span>
                          </p>
                          <p>
                            <span className="font-bold">Duration:- </span>
                            <span className="font-normal">
                              03/2018 - 09/2022
                            </span>
                          </p>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Higher School Certificate (H.S.C)
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <img
                          className="w-28 md:w-40 "
                          src="https://i.ibb.co/r4KZfCn/ndc.png"
                          alt=""
                        />
                        <div className="text-center text-sm md:text-xl ">
                          <p>
                            <span className="font-bold">Institution:- </span>
                            <span className="font-normal">
                              Notre Dame College(NDC)
                            </span>
                          </p>
                          <p>
                            <span className="font-bold">Location:- </span>
                            <span className="font-normal">
                              Dhaka, Bangladesh
                            </span>
                          </p>
                          <p>
                            <span className="font-bold">Duration:- </span>
                            <span className="font-normal">
                              06/2014 - 06/2016
                            </span>
                          </p>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Secondary School Certificate (S.S.C)
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <img
                          className="w-28 md:w-40 "
                          src="https://i.ibb.co/syGyrdw/ssc.png"
                          alt=""
                        />
                        <div className="text-center text-sm md:text-xl ">
                          <p>
                            <span className="font-bold">Institution:- </span>
                            <span className="font-normal">
                              Satarkul School and College
                            </span>
                          </p>
                          <p>
                            <span className="font-bold">Location:- </span>
                            <span className="font-normal">
                              Dhaka, Bangladesh
                            </span>
                          </p>
                          <p>
                            <span className="font-bold">Duration:- </span>
                            <span className="font-normal">
                              01/2002 - 03/2014
                            </span>
                          </p>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="flex justify-center">
              <div className="  md:w-4/5 mx-auto border rounded-xl border-red-400 my-5 text-center p-2 text-xl md:text-2xl font-medium ">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Black Belt Certificate
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <img
                          className="w-40 md:w-60 "
                          src="https://i.ibb.co/RN9d6B3/1706695836302.jpg"
                          alt=""
                        />
                        <div className="text-center text-sm md:text-xl ">
                          <p>
                            <span className="font-bold">Institution:- </span>
                            <span className="font-normal">
                              Programming Hero
                            </span>
                          </p>
                          <p>
                            <span className="font-bold">Location:- </span>
                            <span className="font-normal">
                              Dhaka, Bangladesh
                            </span>
                          </p>
                          <p>
                            <span className="font-bold">Batch:- </span>
                            <span className="font-normal">8th batch</span>
                          </p>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Complete Web Development Course
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <img
                          className="w-40 md:w-60"
                          src="https://i.ibb.co/Tcr5wBf/certificate.png"
                          alt=""
                        />
                        <div className="text-center text-sm md:text-xl ">
                          <p>
                            <span className="font-bold">Institution:- </span>
                            <span className="font-normal">
                              Programming Hero
                            </span>
                          </p>
                          <p>
                            <span className="font-bold">Location:- </span>
                            <span className="font-normal">
                              Dhaka, Bangladesh
                            </span>
                          </p>
                          <p>
                            <span className="font-bold">Batch:- </span>
                            <span className="font-normal">8th batch</span>
                          </p>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Communication Foundation (2018)
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <img
                          className="w-40 md:w-60"
                          src="https://i.ibb.co/6yz6Nx1/communication-certificate.png"
                          alt=""
                        />
                        <div className="text-center text-sm md:text-xl ">
                          <p>
                            <span className="font-bold">Institution:- </span>
                            <span className="font-normal">Linked In</span>
                          </p>
                          <p>
                            <span className="font-bold">Date:- </span>
                            <span className="font-normal">28 Jan 2024</span>
                          </p>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Study;
