import { createContext } from "react";

const userContext = createContext({
  name: "Abhishek.Dev",
  role: "Front-End Web Developer",
  location: "Pune, MH, India",
  mail: "abhishekbhandare1@gmail.com",
  mobileNo : "+91 8087073272",
  gitHubProfile: "https://github.com/Abhishek-Bhandare",
  linkedInProfile: "https://www.linkedin.com/in/abhishek-bhandare-601296275/",
  instagram : "https://www.instagram.com/abhishek.bhandare_24/"
});

export default userContext;