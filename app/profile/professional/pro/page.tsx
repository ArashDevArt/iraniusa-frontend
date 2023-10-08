import Navigation from "@/components/Profile/Professional/Pro/Navigation";
import {AboutMe,Experinces} from "@/components/Profile/Professional/Free/index";
import Educations from "@/components/Profile/Professional/Pro/Educations";
import Gallery from "@/components/Profile/Professional/Pro/Gallery";
import Social from "@/components/Profile/Professional/Pro/Social";
import Cover from "@/components/Profile/general/Cover";
import UserTitle from "@/components/Profile/general/UserTitle";
import React from "react";
import OverlayMenu from "@/components/Layout/OverlayMenu";
import Company from "@/components/Profile/Professional/Pro/Companies";
import Job from "@/components/Profile/Professional/Pro/Job";
import Avatar from "@/components/Profile/general/Avatar";
import HardSkills from "@/components/Profile/Professional/Pro/HardSkills";
import Project from "@/components/Profile/Professional/Pro/Project";
import Blog from "@/components/Profile/Professional/Pro/Blog";

const page = () => {
  return (
    <section>
      <OverlayMenu />
      <div className="w-full relative">
        <Cover background={"/images/profile/Cover.png"} />
      </div>
      <div className="w-full container flex relative -top-[100px] left-0 p-10 mb-40 lg:mb-9">
        <Avatar background={"/images/profile/Prof.png"} Contact={true} />
        <UserTitle
          fullname={"Amin gholami"}
          jobtitle={"Product designer"}
          city={"Product designer"}
          isPro={true}
          blogLevel={"Active"}
          follower={"11.2 k"}
          following={"23"}
        />
      </div>
      <div className="w-full h-1 border-t border-white-shade-4"></div>
      <section className="flex lg:container">
        <Navigation />
        <section className="lg:border-l lg:border-white-shade-4 lg:pl-6">
        <AboutMe title={"Product designer with 10 years of  experience"} aboutexprnce={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} about={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} cover={"/images/profile/round.png"} exp={"+10"} city={"Los Angelas"} img={"/images/profile/cart.png"} img2={"/images/profile/card.png"} />
        <Experinces exprince={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} />
          <Company />
          <Job jobabout={"     Digital product designers work in a delicate space that straddles the line between programmer and artist, embracing aspects of both realms . How do I become a digital product designer?  Becoming a digital product designer typically requires a strong portfolio or track record as a developer."} jobcover={"/images/profile/desk.png"} />
          <HardSkills />
          <Project softskillabout={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} />
          <Educations courseabout={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} educationabout={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} />
          <Gallery />
          <Blog desc={"is simply dummy text of the printing and typesetting industry. LoremIpsum"} />
          <Social  email={"unreal@outlook.com"} call={"(603) 555-0123"} web={"byjason.com"} />
        </section>
      </section>
    </section>
  );
};

export default page;
