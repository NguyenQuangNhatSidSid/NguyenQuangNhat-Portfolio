
function SkillList({src,skill}) {
  return (
    <span>
    <img src={src} alt="IconCheckMark" />
    <p>{skill}</p>
    </span>

  );
}

export default SkillList;
