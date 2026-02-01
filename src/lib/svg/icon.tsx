import {
  GitHubIcon,
  ExternalIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/lib/svg/index";

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case "GITHUB":
      return <GitHubIcon />;
    case "LINKEDIN":
      return <LinkedInIcon />;
    case "TWITTER":
      return <TwitterIcon />;
    default:
      return <ExternalIcon />;
  }
};

export default Icon;
