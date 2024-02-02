import SkillText from "./Shared/SkillText";
import Title from "./Shared/Title";

const Skills = () => {
  return (
    <div id="skill">
      <Title title="Skills" />
      <div className="flex flex-wrap justify-center gap-5 md:gap-10 my-10 mx-5">
        <div>
          <img
            className="w-26 md:32  lg:w-40"
            src="https://skillicons.dev/icons?i=js"
          />
          <SkillText text="Java Script" />
        </div>
        <div>
          <img
            className="w-26 md:32  lg:w-40"
            src="https://skillicons.dev/icons?i=tailwind"
          />
          <SkillText text="Tailwind" />
        </div>
        <div>
          <img
            className="w-26 md:32  lg:w-40"
            src="https://skillicons.dev/icons?i=react"
          />
          <SkillText text="React JS" />
        </div>
        <div>
          <img
            className="w-26 md:32  lg:w-40"
            src="https://skillicons.dev/icons?i=express"
          />
          <SkillText text="Express JS" />
        </div>
        <div>
          <img
            className="w-26 md:32  lg:w-40"
            src="https://skillicons.dev/icons?i=nodejs"
          />
          <SkillText text="Node JS" />
        </div>
        <div>
          <img
            className="w-26 md:32  lg:w-40"
            src="https://skillicons.dev/icons?i=mongodb"
          />
          <SkillText text="Mongo DB" />
        </div>
        <div>
          <img
            className="w-26 md:32  lg:w-40"
            src="https://skillicons.dev/icons?i=bootstrap"
          />
          <SkillText text="Bootstrap" />
        </div>
        <div>
          <img
            className="w-26 md:32  lg:w-40"
            src="https://skillicons.dev/icons?i=materialui"
          />
          <SkillText text="Material UI" />
        </div>
        <div>
          <img
            className="w-26 md:32  lg:w-40"
            src="https://skillicons.dev/icons?i=nextjs"
          />
          <SkillText text="Next JS" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
