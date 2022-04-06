import Skill from "../components/Skill";

const Skills = () => {
  return (
    <>
      <h4> How Good Am I? </h4>
      <div className="SkillsPage">
        <Skill name="HTML" progress="90%" />
        <Skill name="CSS" progress="80%" />
        <Skill name="JavaScript" progress="65%" />
        <Skill name="jQuery" progress="80%" />
        <Skill name="Vue.js" progress="55%" />
        <Skill name="React Js" progress="45%" />
        <Skill name="PHP" progress="70%" />
        <Skill name="Laravel" progress="45%" />
      </div>
    </>
  );
};

export default Skills;
