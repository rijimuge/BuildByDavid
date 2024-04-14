import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function Page() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">my work</h1>
      <p>Making great things that people love using </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="mb-1 text-xl font-medium tracking-tighter">ATX LED</h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Software Developer
      </p>
      <p>
        I started working with <a href="https://atxledinc.com">ATX LED</a> in
        2023. Since then, I&apos;ve shipped hundreds of new features,
        integrations and improvements to the ATX LED home automation hub using
        JavaScript, React, Python and more. The work has ranged from capturing
        serial port DMX data over USB to work on the Alexa skill.
      </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="mb-1 text-xl font-medium tracking-tighter">
        Amazon Web Services
      </h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Software Developer
      </p>
      <ul className="list-disc pl-5">
        <li>
          I started at <a href="https://aws.amazon.com/">AWS</a> as an intern in
          2020.
        </li>
        <li>
          I returned as a full-time software developer in 2021, in the World
          Wide Revenue Operations org.
        </li>
        <li>
          I helped build the SUDS (Sales Unified Data Service), a graphql based
          server meant to provide a single point of access to the entirety of
          the sales and marketing data available at AWS.
        </li>
        <li>
          I built a developer experience for on-boarding data sources to SUDS
          that was intuitive and pain free.
        </li>
        <li>
          SUDS received a mandate to on-board all first-party software teams in
          WWRO
        </li>
      </ul>
    </div>
  );
}
