import ContactLauncher from "./ContactLauncher";

const contacts = [
  {
    id: 1,
    name: "Mail",
    top: "MAIL",
    bottom: "",
    icon: "📧",
    value: "anbazhaganguru@gmail.com",
    action: "mailto:anbazhaganguru@gmail.com",
  },
  {
    id: 2,
    name: "GitHub",
    top: "GIT",
    bottom: "HUB",
    icon: "🐙",
    value: "github.com/anbazhaganguru",
    action: "https://github.com/anbazhaganguru",
  },
  {
    id: 3,
    name: "LinkedIn",
    top: "LINK",
    bottom: "EDIN",
    icon: "💼",
    value: "linkedin.com",
    action: "#",
  },
  {
    id: 4,
    name: "Instagram",
    top: "INSTA",
    bottom: "GRAM",
    icon: "📸",
    value: "@_psychx____",
    action: "https://instagram.com/_psychx____",
  },
  {
    id: 5,
    name: "Resume",
    top: "RESUME",
    bottom: "PDF",
    icon: "📄",
    value: "Download Resume",
    action: "#",
  },
  {
  id: 6,
  name: "Naukri",
  top: "NAUKRI",
  bottom: "",
  icon: "💼",
  value: "Naukri Profile",
  action: "YOUR_NAUKRI_PROFILE_LINK",
}
];

function ContactGrid() {
  return (
    <ContactLauncher
      contacts={contacts}
    />
  );
}

export default ContactGrid;