import react from "../images/certificates/Reactjs-1.png";
import frontEnd from "../images/certificates/HTML,CSS,JS-1.png";
import java from "../images/certificates/OCJA Certification-1.png";
import cdac from "../images/certificates/CDAC Certificate-1.png";


function certificateObj(id, title, url, description, image) {
  return {
    id,
    title,
    url,
    description,
    image,
  };
}

const CERTIFICATES = [
  certificateObj(
    1,
    "Centre for Development of Advanced Computing - CDAC",
    "https://drive.google.com/file/d/1Fm9Fl4YUzBhJC4QO0JAwEeJ6cDAme-Tw/view?usp=sharing",
    "CDAC, the Centre for Development of Advanced Computing, is an Indian government agency that specializes in research and development in advanced computing technologies. They offer various training programs and certifications to enhance skills in these domains, contributing to the growth of the technology sector in India and beyond.",
    cdac
  ),
  certificateObj(
    2,
    "The Complete ReactJS Course - Udemy",
    "https://www.udemy.com/certificate/UC-25164774-5e6f-47f2-8479-7f2a0bc454d6/",
    "Udemy is an online learning platform where users can access a wide range of courses covering various topics, from programming and business to personal development and hobbies. I completed a React certification course on Udemy, leveraging their comprehensive online learning platform to enhance my skills in web development.",
    react
  ),
  certificateObj(
    3,
    "HTML, CSS & JavaSript - Certification Course for Beginners",
    "https://www.udemy.com/certificate/UC-2ffe2509-d8ba-44bb-ab73-7a6f920c39d4/",
    "Udemy is an online learning platform where users can access a wide range of courses covering various topics, from programming and business to personal development and hobbies. I completed a HTML, CSS & JavaScript course on Udemy, leveraging their comprehensive online learning platform to enhance my skills in web development.",
    frontEnd
  ),
  certificateObj(
    4,
    "Oracle Certified Associate - Java SE 8 Programmer",
    "https://drive.google.com/file/d/1oxVJ0Rht_PP_UJZgZvj9GMC5o3erDO4y/view?usp=sharing",
    "I successfully completed the Java SE 8 Programmer certification course on Udemy, solidifying my expertise in Java programming and enhancing my career prospects.",
    java
  )
];
export default CERTIFICATES;
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