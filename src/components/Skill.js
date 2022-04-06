const Skill = ({ name, progress }) => {
  return (
    <div className="SkillBlock">
      <div className="Skill">
        <div className="outerSkillCircle"></div>
        <div className="innerSkillCircle" style={{ width: progress }}></div>
        <div className="SkillText">
          <p className="textProgress"> {progress} </p>
          <p className="textDivider"></p>
          <p className="textName"> {name} </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
