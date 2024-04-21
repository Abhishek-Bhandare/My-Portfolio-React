import ncs from "../images/experience/NCS-logo.png";
import bbi from "../images/experience/BBI.png";

function experienceOBJ(id, title, description, image) {
  return {
    id,
    title,
    description,
    image,
  };
}

const EXPERIENCES = [
  experienceOBJ(
    1,
    "NCSI Technologies Pvt Ltd (May'2022 - Present)",
    <>
    -Developing user interfaces using React.js & it's ecosystem (React-Router, Redux, etc).<br/>-Utilizing Spring5 and SpringBoot with MySQL database for efficient server-side development and RESTful APIs.<br/> -Collaborating with Design and Backend teams to implement UI/UX designs.<br/> -Utilized Git for version control in team projects, ensuring efficient collaboration and code management & managed project repositories on GitHub, facilitating code reviews and issue tracking.<br/> -Keeping up-to-date with the latest React.js trends, techniques, and best practices.
    </>,
    ncs
  ),
  experienceOBJ(
    2,
    "Blackbuck Insight Pvt Ltd (Nov'2021 - May'2022)",
    <>
    -Underwent a rigorous training program focused on Java and frontend development, gaining hands-on experience in building web applications from concept to deployment.<br/> -Developed foundational skills in Java programming, HTML, CSS,and JavaScript, enabling the creation of interactive and userfriendly web interfaces.<br/> -Utilized ES6 features in JavaScript projects to enhance readability and maintainability. Assisted in the implementation of frontend solutions using React.js frameworks, contributing to the enhancement of application aesthetics and user experiences.
    </>,
    bbi
  ),
  // experienceOBJ(
  //   3,
  //   "HTML, CSS & JavaSript - Certification Course for Beginners",
  //   "https://www.udemy.com/certificate/UC-2ffe2509-d8ba-44bb-ab73-7a6f920c39d4/",
  //   "Udemy is an online learning platform where users can access a wide range of courses covering various topics, from programming and business to personal development and hobbies. I completed a HTML, CSS & JavaScript course on Udemy, leveraging their comprehensive online learning platform to enhance my skills in web development.",
  //   frontEnd
  // ),
  // experienceOBJ(
  //   4,
  //   "Oracle Certified Associate - Java SE 8 Programmer",
  //   "https://drive.google.com/file/d/1oxVJ0Rht_PP_UJZgZvj9GMC5o3erDO4y/view?usp=sharing",
  //   "I successfully completed the Java SE 8 Programmer certification course on Udemy, solidifying my expertise in Java programming and enhancing my career prospects.",
  //   java
  // )
];
export default EXPERIENCES;
// {
//     id:1,
//     title:"NAMASTE REACT",
//     url:"https://courses.namastedev.com/learn/certificate/8482819-142240",
//     description:'Namaste Dev is an online platform to learn FrontEnd Development related course. So I join for learn React JS Developer Course(Namaste React). Now I finished ReactJS Course with valid cerification authorized by AkshaySaini(founder of Namaste Dev).',
//     image:certificate

// }
// {
//     id:2,
//     title:"Frontend Developer (React)",
//     url:"https://www.hackerrank.com/certificates/9f42c0c57901",
//     description:'HackerRank is the market-leading coding test and interview solution for hiring developers. Start hiring at the pace of innovation!.I Passed the HackerRank Role Certification Exam for Front-End Developer Role',
//     certificate
// }
