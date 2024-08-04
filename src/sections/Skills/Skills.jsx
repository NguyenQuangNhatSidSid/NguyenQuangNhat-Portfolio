import styles from './SkillsStyle.module.css';
import html from "../../assets/icons8-html-64.png";
import CSS from "../../assets/icons8-css-48.png";
import JavaScript from "../../assets/icons8-javascript-48.png";
import React from "../../assets/icons8-react-16.png";
import NodeJs from "../../assets/icons8-nodejs-48.png";
import ASP_NET from "../../assets/icons8-asp-100.png";
import MongoDB from "../../assets/icons8-mongodb-48.png";
import MS_SQL from "../../assets/icons8-microsoft-sql-server-48.png";
import My_SQL from "../../assets/icons8-my-sql-64.png";
import Java from "../../assets/icons8-java-48.png";
import SkillList from '../../common/SkillList';
function Skills() {
  return (<section id='skills' className={styles.container}>
    <h1 className='sectionTitle'>Skills</h1>
    <div className={styles.skillList}>
     <SkillList src={html} skill='HTML' />
     <SkillList src={CSS} skill='CSS' />
     <SkillList src={JavaScript} skill='JavaScript' />
     <SkillList src={React} skill='React' />
    </div>
    <hr />
    <div className={styles.skillList}>
     <SkillList src={NodeJs} skill='NodeJs' />
     <SkillList src={Java} skill='Java' />
     <SkillList src={ASP_NET} skill='ASP.NET' />
    </div>
    <hr />
    <div className={styles.skillList}>
     <SkillList src={MongoDB} skill='MongoDB' />
     <SkillList src={MS_SQL} skill='MS SQL' />
     <SkillList src={My_SQL} skill='MY SQL' />
    </div>
    <hr />
    
    
    </section>);
}

export default Skills;
