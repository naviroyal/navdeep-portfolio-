import React from "react";
import navi from "../../assets/images/navi-1.jpg";
import "./styles.scss";
import { Box } from "@mui/material";
import { Contact } from "../Contact/Contact";
import { info } from "../../assets/info/info";
import SocialIcon from "./SocialIcon";
import { EmojiBullet } from "./EmojiBullet";

export const Home = () => {
  return (
    <div id="home">
      <Box
        component={"main"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"calc(100vh - 175px)"}
      >
        <Box
          alt={"image of developer"}
          style={{
            background: info.gradient,
            objectFit: "cover",
          }}
          className="img--navi"
          component={"img"}
          src={navi}
          width={{ xs: "35vh", md: "50vh" }}
          height={{ xs: "35vh", md: "50vh" }}
          borderRadius={"50%"}
          p={"0.75rem"}
          mb={{ xs: "1rem", sm: 0 }}
          mr={{ xs: 0, md: "2rem" }}
        />
        <Box
          style={{
            borderRadius: "1rem",
            background: "#e7e7e7",
            boxShadow: "0 0 10px 0 rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            padding: "1rem 2rem",
            transition: "all 0.3s ease",
            width: "60vh",
            height: "40vh",
          }}
        >
          <h1>
            Hi, I'm{" "}
            <span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Navdeep Singh
            </span>
            <span className="hand">🤚</span>
          </h1>
          <h2>I'm Full Stack Developer.</h2>
          <Box component={"ul"} p={"0.8rem"}>
            {info.miniBio.map((bio, index) => (
              <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
            ))}
          </Box>
          <Box
            display={"flex"}
            gap={"1.5rem"}
            color={"black"}
            justifyContent={"center"}
            fontSize={{ xs: "2rem", md: "2.5rem" }}
          >
            <SocialIcon />
          </Box>
        </Box>
      </Box>
    </div>
  );
};
