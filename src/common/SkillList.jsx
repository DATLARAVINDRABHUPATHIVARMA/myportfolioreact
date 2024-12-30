function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      <h4>{skill}</h4>
    </span>
  );
}

export default SkillList;
