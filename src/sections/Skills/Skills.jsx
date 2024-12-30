import styles from './SkillsStyles.module.css';
import html from '../../assets/Skill Icons/html.png';
import css from '../../assets/Skill Icons/css.png';
import javascript from '../../assets/Skill Icons/javascript.png';
import python from '../../assets/Skill Icons/python.png';
import node from '../../assets/Skill Icons/node.png';
import react from '../../assets/Skill Icons/react.png';
import next from '../../assets/Skill Icons/nextjs.png';
import redux from '../../assets/Skill Icons/redux.png';
import vue from '../../assets/Skill Icons/vue.png';
import tailwind from '../../assets/Skill Icons/tailwind.png';
import git from '../../assets/Skill Icons/git.png';
import flask from '../../assets/Skill Icons/flask.png';
import mysql from '../../assets/Skill Icons/mysql.png';
import django from '../../assets/Skill Icons/django.png';
import bootstrap from '../../assets/Skill Icons/bootstrap.png';
import SkillList from '../../common/SkillList';

function Skills() {

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={html} skill="HTML" />
        <SkillList src={css} skill="CSS" />
        <SkillList src={javascript} skill="JavaScript" />
        <SkillList src={python} skill="Python" />
        <SkillList src={node} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={react} skill="React" />
        <SkillList src={next} skill="Next" />
        <SkillList src={redux} skill="Redux" />
        <SkillList src={vue} skill="Vue" />
        <SkillList src={tailwind} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={git} skill="Git" />
        <SkillList src={flask} skill="Flask" />
        <SkillList src={mysql} skill="MySQL" />
        <SkillList src={django} skill="Django" />
        <SkillList src={bootstrap} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
