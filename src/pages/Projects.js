import React from "react";
import Project from "../components/Project";

const Projects = () => {
  return (
    <>
      <h4> What I've Done </h4>
      <div className="Projects">
        <Project
          title="HuxPay"
          desc="A Website For Airtime, Data Purchase And Bills Payment"
          tags={new Array("Backend", "API")}
          url="https://huxpay.com"
          imgname="huxpay"
        />

        <Project
          title="Bitmasta"
          desc="A Website For Crypto Exchange, Purchase and Sales"
          tags={new Array("Backend", "API")}
          url="https://bitmasta.io"
          imgname="bitmasta"
        />

        <Project
          title="PlatiniumXP Wallet"
          desc="A Spin To Win Website, With It's Own Spin Currency"
          tags={new Array("Frontend", "Backend", "API")}
          url="https://platiniumxpwallet.com"
          imgname="platinium"
        />

        <Project
          title="GannyArts"
          desc="A Website To Showcase A Designer's Works"
          tags={new Array("Frontend")}
          url="https://gannyarts.com"
          imgname="gannyarts"
        />

        <Project
          title="Learner's Crib"
          desc="A Website For Sharing Learning Resources And Materials"
          tags={new Array("Frontend", "Backend")}
          url="https://learnerscrib.platiniumxpwallet.com"
          imgname="learnerscrib"
        />

        <Project
          title="Dummy Website"
          desc="A Website To Showcase My Skills And Design"
          tags={new Array("Frontend")}
          url="https://nabdummy4.netlify.app"
          imgname="dummy4"
        />
      </div>
    </>
  );
};

export default Projects;
