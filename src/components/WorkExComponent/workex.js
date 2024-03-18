export function getEmoji(){
  const emojis = [ "💻", "📱", "🖥️", "⌨️", "🔧", "🔌", "📡", "🔋", "🕹️", "🛠️", "📷",
    "🎥", "🎮", "🎧", "📡", "📠", "🔍", "💾", "💿", "📀", "🖨️", "🖱️", "🖲️", "💽",
    "💿", "📡", "📹", "📺", "🎞️", "📽️", "💡", "💡", "🔬", "🔭", "📡", "🛰️", "🔍",
    "🔬", "🔭"];
    return emojis[Math.floor(Math.random() * (emojis.length))]
}
export const WORK = [
  {
    company: "Freshworks",
    position: "Senior Software Engineer Frontend",
    start: "Oct 2022",
    end: "Present",
    workItems: [
      "Revamped existing Hubspot migration flow from previous API authentication to OAuth based authentication.",
      "Built components like advanced phone number & generic text area with documentation and storybook support.",
      "Developed native infinite scroll with Ember JS and Mutation observers. This component has powered pagination support for multiple features in Freshsales.",
      "Completed a POC for virtual scroll on top of infinite scroll, which was published in Freshworks Engineering Blog - Building infinite scroll with virtual scroll in Ember: A step-by-step guide",
      "Solved various business-critical bugs & other in app optimisations for Data import, Field edit history & customer L2/L4’s",
    ],
  },
  {
    company: "Freshworks",
    position: "Software Engineer Frontend",
    start: "May 2022",
    end: "Oct 2023",
    workItems: [
      "Worked closely with product managers as part of PLG initiative to understand requirements and ship features to production adhering to release time frames, to make Freshsales more self-serviceable to end user.",
      "Implemented a generic solution to integrate third-party app Launchpad that powered app installs & paywalls.",
      "Establish spikes, POC’s to ideate multiple solutions to a problem and come up with most optimal solution.",
      "Owned UI development for Field edit history feature for all modules. Collaborated with backend team for API’s and UX flow. This feature helped customers to watch history of any module records.",
      "Revamped UI for data import and related associations. This has enhanced user experience while data import which is a key feature for Freshsales or any CRM.",
      "Contributed to Account hierarchy feature with pagination & table customisation options. This feature will help user to see a holistic tree view of parent and child accounts",
    ],
  },
  {
    company: "Raja Software Labs",
    position: "Software Engineer",
    start: "June 2021",
    end: "May 2022",
    workItems: [
      "Trained in web development with Ember JS and VCS – Git/Github.",
      "Remodelled existing 10+ API calls and UI changes in client web app as part of GraphQL Migration project.",
      "Collaborate with team to for code reviews and conflict resolutions.",
    ],
  },
  {
    company: "Infosys",
    position: "Systems Engineer",
    start: "Dec 2021",
    end: "June 2022",
    workItems: [
      "Trained in Business Intelligence with Capstone project using MSBI tools and Agile methodology.",
      "Maintained Job scheduling and UAT monitoring through six applications in Data Warehousing & ETL project at Westpac Institutional Bank.",
      "Collaborated in 4+ Control-M pipeline test reruns and led two reruns coordinating with multiple teams.",
    ],
  },
];
