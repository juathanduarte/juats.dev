import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export type SocialIconName = "github" | "linkedin" | "email" | string;

export function getSocialIcon(iconName: SocialIconName, className: string) {
  switch (iconName) {
    case "github":
      return <FaGithub className={className} />;
    case "linkedin":
      return <FaLinkedin className={className} />;
    case "email":
      return <FaEnvelope className={className} />;
    default:
      return <div className={`${className} bg-gray-400 rounded-full`} />;
  }
}
