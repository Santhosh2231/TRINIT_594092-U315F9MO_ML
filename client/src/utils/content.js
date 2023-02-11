import Arhar from "../assets/images/arhar.jpg"
import Bajra from "../assets/images/bajra.jpg"
import Barley from "../assets/images/barley.jpg"
import Copra from "../assets/images/copra.jpg"
import Cotton from "../assets/images/cotton.jpg"
import Gram from "../assets/images/gram.jpg"
import Groundnut from "../assets/images/groundnut.jpg"
import Jowar from "../assets/images/jowar.jpg"
import Jute from "../assets/images/jute.jpg"
import Maize from "../assets/images/maize.jpg"
import Masoor from "../assets/images/masoor.jpg"
import Moong from "../assets/images/moong.jpeg"
import Niger from "../assets/images/niger.jpg"
import Paddy from "../assets/images/paddy.jpg"
import Ragi from "../assets/images/ragi.jpg"
import Rape from "../assets/images/rape.jpg"
import Safflower from "../assets/images/safflower.jpg"
import Sesamum from "../assets/images/sesamum.jpg"
import Soyabean from "../assets/images/soyabean.jpg"
import Sugarcane from "../assets/images/sugarcane.jpg"
import Sunflower from "../assets/images/sunflower.jpg"
import Urad from "../assets/images/urad.jpg"
import Wheat from "../assets/images/wheat.jpg";

import SoilImg from "../assets/icons/soilimg.jpg";
// import Diseaseimg from "../assets/icons/diseaseimg.jpg";
import Priceimg from "../assets/icons/priceimg.jpg";
import Home from "../assets/icons/home.jpg";

import {GrLinkedin} from "react-icons/gr";
import {BsGithub} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";


const content ={
    Crops: [
        {
            name: "Arhar",
            icon: Arhar
        },
        {
            name: "Bajra",
            icon: Bajra
        },
        {
            name: "Barley",
            icon: Barley
        },
        {
            name: "Copra",
            icon: Copra
        },
        {
            name: "Cotton",
            icon: Cotton
        },
        {
            name: "Gram",
            icon: Gram
        },
        {
            name: "Groundnut",
            icon: Groundnut
        },
        {
            name: "Jowar",
            icon: Jowar
        },
        {
            name: "Jute",
            icon: Jute
        },
        {
            name: "Maize",
            icon: Maize
        },
        {
            name: "Masoor",
            icon: Masoor
        },
        {
            name: "Moong",
            icon: Moong
        },
        {
            name: "Niger",
            icon: Niger
        },
        {
            name: "Paddy",
            icon: Paddy
        },
        {
            name: "Ragi",
            icon: Ragi
        },
        {
            name: "Rape",
            icon: Rape
        },
        {
            name: "Safflower",
            icon: Safflower
        },
        {
            name: "Sesamum",
            icon: Sesamum
        },
        {
            name: "Soyabean",
            icon: Soyabean
        },
        {
            name: "Sugarcane",
            icon: Sugarcane
        },
        {
            name: "Sunflower",
            icon: Sunflower
        },
        {
            name: "Urad",
            icon: Urad
        },
        {
            name: "Wheat",
            icon: Wheat
        },        
    ],
    hero: {
        firstName: "AgroTech ",
        LastName: "Revolutionizing Farming with Artificial Intelligence",
        btnArray: ["A Programmer","AI & ML Enthusiast"],
        image: Home,
      },
    about:{
        content: "Myself I am Santhosh. A diligent pre-final Computer Science student at VIT Chennai with an immense passion for AI&ML and MERN. Currently I am SAMSUNG PRISM developer. A passionate programmer, highly motivated and quick learner. I am always curious about things and enjoy learning. I like to solve problems and fix errors. I am a detailed oriented person and I keep my goals and tasks organized."
      },
    aboutus:{
        content: "Artificial intelligence (AI) in farming can potentially revolutionize the way we grow and manage crops. AgroTech an AI Application can be used to optimize various aspects of farming, such as predicting and mitigating crop diseases, optimizing irrigation, and predicting crop prices.",
    },
    Contact: {
        title: "Contact Me",
        subtitle: "Report Inaccuracy or Discuss Projects with me",
        social_media: [
          {
            text: "santhosh.raminedi22@gmail.com",
            icon: GrMail,
            link: "mailto:santhosh.raminedi22@gmail.com",
          },
          {
            text: "santhosh.22.11",
            icon: BsInstagram,
            link: "https://www.instagram.com/santhosh.22.11/",
          },
          {
            text: "raminedisanthosh22",
            icon: GrLinkedin,
            link: "https://www.linkedin.com/in/raminedisanthosh22/"
          },
          {
            text:"Santhosh2231",
            icon: BsGithub,
            link: "https://github.com/Santhosh2231",
          },
          {
            text: "Santhosh Raminedi",
            icon: BsFacebook,
            link: "https://www.facebook.com/santhosh.raminedi",
          }
        ],
    },
    Experience: {
        title: "Goals",
        subtitle: "Our Mission",
        experience_content: [
          {
            org:"Crop Recommendation based on Soil fertility",
            logo:SoilImg, 
            link:"/soilanalysis",
            work: "Agriculture forms a major occupation in countries like India. Hence, achieving good yield in the crops grown by farmers is the major concern. Various environmental factors have a significant impact on the crop yield. One such component that contributes majorly to the crop yield is soil."
          },
          {
            org:"Crop Price Prediction",
            logo: Priceimg,
           link:"/priceforecast",
            work: "Crop price estimation and evaluation are done to take an intelligent decision before farming a specific type of crop. Predicting the price of a crop will help in taking better decisions which results in minimizing the loss and managing the risk of price fluctuations."
          },
          
        ],
      },
}

export default content;