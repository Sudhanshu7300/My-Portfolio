//links
import Link from "next/link";

//icons
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinBoxLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <a
        href="https://www.linkedin.com/in/sudhanshu-sharma-657aa5207/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </a>
      <a
        href="https://github.com/Sudhanshu7300"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </a>
    </div>
  );
};

export default Socials;
