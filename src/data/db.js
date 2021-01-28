import BloodDonationCover from "../images/bloodDonationCover.png";
import BloodDonationCode from "../images/bloodDonationCode.png";
import Trip4meCover from "../images/trip4meCover.png";
import Trip4meCode from "../images/trip4meCode.png";
import QuarantineCover from "../images/quarantineCover.png";
import QuarantineCode from "../images/quarantineCode.png";
import ZombieCover from "../images/zombieCover.png";
import ZombieCode from "../images/zombieCode.png";

const DB = {
    projects: [
        {
            title: "Blood Donation",
            description: "Blood Donation is a project about people who want to donate blood and Hospital/Clinics in need of it. Hospitals can publish their blood donation request to the website. Donators can interact informing the hospital if they are going using their own dashboard, also they can see last and next time to donate. Donors can book an appointment to donate blood.",
            id: 1,
            imageBottom: BloodDonationCode,
            imageTop: BloodDonationCover,
            githubLink: "https://github.com/susanmiss/blood-donation-finder",
            technologiesUsed: ['MongoDB', 'Express', 'React', 'Node.js', 'Nodemailer', 'Bootstrap', 'AppointmentApp']
        },
        {
            title: "Trip4Me",
            description: "Trip4me is a project about my own trips. I wanted to create a website from scratch using MERN technology. I have an admin area where is possible to create, delete, and update a post with images.",
            id: 2,
            imageBottom: Trip4meCode,
            imageTop: Trip4meCover,
            githubLink: "https://github.com/susanmiss/trip4me",
            technologiesUsed: ['MongoDB', 'Express', 'React', 'Node.js', 'Bootstrap']
        },
        {
            title: "Zombie Movies",
            description: "Zombie Movies is a project where you can see a list of zombie movies (my favourites). At the search bar, you can search by actor's name or movie's name - you don't need to be a zombie to search! I created that project in order to learn more about fetching APIs, express and requests.",
            id: 3,
            imageBottom: ZombieCode,
            imageTop: ZombieCover,
            githubLink: "https://github.com/susanmiss/zombie-movies",
            technologiesUsed: ['Express', 'EJS - as engine template', 'External API integration']
        },
        {
            title: "Quarantine Thoughts",
            description: "Quarantine Thoughts is a simple blog where we can share our thoughts during this quarantine times. I wanted to create a blog from scratch using MERN technology. CRUD functionality.",
            id: 4,
            imageBottom: QuarantineCode,
            imageTop: QuarantineCover,
            githubLink: "https://github.com/susanmiss/quarantine-thoughts",
            technologiesUsed: ['React', 'Node.js', 'MongoDB', 'Node,js', 'Bootstrap']
        },
    ]
}

export default DB;