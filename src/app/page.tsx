import { Suspense } from "react";
import Image from "next/image";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({
  img,
  link,
  name,
  site,
}: {
  img: string;
  link: string;
  name: string;
  site: string;
}) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
              <Image
                alt="github logo"
                src={
                  site === "github"
                    ? "/github.jpg"
                    : site === "kaggle"
                      ? "/kaggle.png"
                      : site === "x" ?
                      "/x.png"
                      : "/linkedin.png"
                }
                width="15"
                height="11"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

function ChannelPlaceholder() {
  return (
    <div className="group flex w-full opacity-0">
      <a className="flex w-full items-center justify-between rounded border border-transparent bg-transparent px-3 py-4">
        <div className="flex items-center space-x-3">
          <div className="relative h-16 w-16">
            {/* Placeholder for image and icon, no content */}
          </div>
          <p className="font-medium text-transparent">
            {"Placeholder"} {/* Invisible text */}
          </p>
        </div>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-bold">hi, I&apos;m David </h1>
      <br />
      I&apos;m a full-stack software developer, meditator, and Call of Cthulhu
      enthusiast.
      <br />
      <br />
      <Image
        src="/sun.png"
        alt="David with a bike"
        width={250} // Specify your desired width
        height={150} // Specify your desired height
      />
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img="/avatar.jpg"
          link="https://github.com/russedavid"
          name="GitHub"
          site="github"
        />
        <ChannelLink
          img="/withbike.png"
          link="https://www.linkedin.com/in/davidrussellengineer/"
          name="LinkedIn"
          site="linkedin"
        />
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img="/turbo.jpg"
          link="https://twitter.com/davidtherusse"
          name="X"
          site="x"
        />
        <ChannelPlaceholder />
      </div>
      I create functional and well designed web applications using JavaScript,
      TypeScript, React, Node.js, Python and more.
    </div>
  );
}
