import page from "../images/projects/page.png"
import contact from "../images/projects/contact.png"
import dicegame from "../images/projects/dicegame.png"
import foodzone from "../images/projects/foodzone.png"
import todo from "../images/projects/todo.png"
import { FaOpencart } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaDiceFive } from "react-icons/fa6";
import { IoIosRestaurant } from "react-icons/io";
import { MdFormatListBulletedAdd } from "react-icons/md";


export const stacks = ["React", "CSS", "Convert Figma into UI"];

export const projects = [
  {
    title: "Nike Shoes UI",
    id: 1,
    image: page,
    techStack: stacks,
    brand: FaOpencart,
    overView:
      "Transformed Figma design into a dynamic Nike shoe shopping web page using React and CSS. Seamlessly blending aesthetics with functionality, this project showcases my skills in front-end development and attention to detail.",
    webUrl: "https://abhishek-bhandare.github.io/ShoesWebUi/",
    gitHubCode: "https://github.com/Abhishek-Bhandare/ShoesWebUi",
  },
  {
    title: "Contact Us",
    id: 2,
    image: contact,
    techStack: [...stacks, "React-Hooks"],
    brand: IoCall,
    overView:
      "Crafted a polished contact form UI using React, CSS, and Figma design, incorporating React hooks for enhanced functionality. This project demonstrates my ability to seamlessly translate design concepts into interactive web elements while leveraging modern development techniques.",
    webUrl: "https://abhishek-bhandare.github.io/contactPage/",
    gitHubCode: "https://github.com/Abhishek-Bhandare/contactPage",
  },
  {
    title: "Dice Game",
    id: 3,
    image: dicegame,
    techStack: [...stacks, "Styled Components","React-Hooks"],
    brand: FaDiceFive,
    overView:
      "Developed a dice game using React, leveraging React hooks for state management and styled components for modular styling. Implemented game logic for dice rolling and scoring, creating an interactive user experience. Ensured responsiveness and code quality through thorough testing and debugging.",
    webUrl: "https://abhishek-bhandare.github.io/diceGame/",
    gitHubCode: "https://github.com/Abhishek-Bhandare/diceGame",
  },

  {
    title: "Food Zone",
    id: 4,
    image: foodzone,
    techStack: [...stacks, "Styled Components","React-Hooks"],
    brand: IoIosRestaurant,
    overView:
      "Designed and developed a responsive food zone website using React and Styled Components, incorporating API data fetching and React hooks for dynamic content display and state management, and implemented search functionality for enhanced user experience.",
    webUrl: "https://github.com/Abhishek-Bhandare/food_zone",
    gitHubCode: "https://github.com/Abhishek-Bhandare/food_zone",
  },
  {
    title: "TO-DO App",
    id: 5,
    image: todo,
    techStack: [...stacks, "React-Hooks"],
    brand: MdFormatListBulletedAdd,
    overView:
      "Developed a robust ToDo list application using React, React Hooks, and CSS, allowing users to effortlessly manage tasks with features such as adding, updating, and deleting tasks. Implemented intuitive user interactions and a clean design for seamless task management experience.",
    webUrl: "https://abhishek-bhandare.github.io/todo/",
    gitHubCode: "https://github.com/Abhishek-Bhandare/todo",
  }
];