import Head from "next/head";
import React from "react";

import styles from "./work/work.module.scss";
import Spacer from "../components/Spacer.js";

export default function Home() {
  return (
    <main>
      <Head>
        <title key="title">About</title>
      </Head>
      <div className={styles.project}>
        <div className={styles.title}>
          <h1>About</h1>
          <i></i>
        </div>
        <div className={styles.right}>
          <p>
            B. 2000 — Guangdong, CHN. Cultivated in Silicon Valley, CA.
            <br />
            <br />
            I'm a designer exploring various applications of multimodal
            interaction. Currently, I'm an undergraduate at Carnegie Mellon
            pursuing a{" "}
            <a
              target="blank"
              href="https://www.design.cmu.edu/content/bachelor-design"
            >
              Bachelor of Design
            </a>{" "}
            with additional minors in Human-Computer Interaction and Intelligent
            Environments.
            <br />
            <br />
            Previously ~ UX Design Intern @ Elevation Church
            <br />
            Currently ~ Interaction Design Intern @ Apple
            <br />
            Soon ~{" "}
            <a
              target="blank"
              href="https://www.nasa.gov/feature/former-intern-uses-nasa-knowledge-to-lead-robotic-moon-rover"
            >
              Iris Rover @ CMU x Astrobotics
            </a>
          </p>
        </div>
        <Spacer />
        <div className={styles.col1}>
          <h4>Exploring —</h4>
          <a target="blank" href="https://www.youtube.com/watch?v=l3yHLikvjPU">
            Mini apartments
          </a>
          <br />
          <a
            target="blank"
            href="https://www.youtube.com/watch?v=hsFefdPhL3w&t=19s"
          >
            Essentialism
          </a>
        </div>
        <div className={styles.col2}>
          <h4>Reading —</h4>
          <a
            target="blank"
            href="https://www.amazon.com/Ruthless-Elimination-Hurry-Emotionally-Spiritually/dp/0525653090"
          >
            The Ruthless Elimination of Hurry
          </a>
          <br />
          <a
            target="blank"
            href="https://www.amazon.com/Feck-Perfuction-Dangerous-Ideas-Business/dp/1452166366"
          >
            Feck Perfuction
          </a>
          <br />
          <a
            target="blank"
            href="https://www.amazon.com/Metaphors-We-Live-George-Lakoff/dp/0226468011/ref=sr_1_2?crid=126LZHE11LM5Y&dchild=1&keywords=metaphors+we+live+by&qid=1592536926&s=books&sprefix=metaphors+we+live+by%2Cstripbooks%2C200&sr=1-2"
          >
            Metaphors We Live By
          </a>
        </div>
        <div className={styles.col3}>
          <h4>Building —</h4>
          <a target="blank" href="https://www.covaid.co">
            Covaid.co
          </a>
          <br />
          <a target="blank" href="https://www.tedxcmu.org/">
            TEDxCMU
          </a>
        </div>
        <Spacer />

        <img src="/static/about/portrait.jpg"></img>
      </div>
    </main>
  );
}
