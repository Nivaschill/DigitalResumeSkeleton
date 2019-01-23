import avatar from './images/Nivas.jpg';

const ResumeData = {
  myName: 'SRINIVAS CHILUKURI',
  
  avatar: avatar,

  tabLabels: ['Skills','Experience','Education'],
  
  profileSummary: `A highly motivated, organized and competent software engineer with keen interest in practical applications and information systems, seeking an opportunity to fully utilize on technical and analytical skills. A self-starter, quick learner and possess strong communication skills with customer service experience.`,
  
  buttonList: [
    {
      label: 'Github',
      link: 'https://github.com/Nivaschill'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/srinivas-chilukuri46/'
    },
    {
      label: 'CodePen',
      link: 'https://codepen.io/nivaschill/'
    }
  ],

  skillsList: [
    'HTML', 
    'CSS',
    'JavaScript',
    'ReactJS',
    'jQuery',
    'NodeJS',
    'Yarn',
    'PHP',
    'MySQL',
    'SQL',
    'Scrum',
    'Networking',
    'Windows/Linux OS',
    'WordPress',
    'Atom',
    'VS Code',
    'Chrome console',

  ],

  experienceList: [
    {
      company: 'Self Paced Projects (2018)',
      projects: [
        {
          id: 1,
          value: 'Digital Resume - Created a simple digital resume that can be used to showcase the skills, experiences and also education details using React, NodeJs, npm, yarn, json, Github repository, Visual Studio Code.'
        },
        {
          id: 2,
          value: `Digital Analog Watch - Created a working analog clock using JavaScript, CSS and HTML. Used objects and methods to get the current time, used variables to hold information, used methods to break that time into hours, minutes and seconds. Operators are used to translate that information into degrees on a circle and DOM element properties to position the arms correctly. `
        },
        {
          id: 3,
          value: `Number Guessing Game - Built an application that chooses a random number between 1 to 100, then challenges the player to guess the number in 10 turns. The game will end once the player guesses correctly, or once they run out of turns. `
        }
      ]
    },
    {
      company: 'Retail Sales Associate - Morath Ltd, Dublin, Ireland (2016-2018)',
      projects: [
        {
          id: 1,
          value: `Accurately described product features and benefits to customers, maintained high visual merchandising standards, resolved customers complaints in a timely manner, worked as an admin and installed and configured software, hardware and networks, monitored system performance, troubleshooting issues and ensured security and efficiency of IT infrastructure.`
        },
      ]
    }, 
    {
      company: 'Front-End Web Developer - Streamax Softech Pvt Ltd., Vizag, India (2013 - 2016)',
      projects: [
        {
          id: 1,
          value: `Quick2Recharge - an online recharge portal and reporting system for recharge data. it is an E-Commerce product integrated with payment gateway which facilitates bill pay to all Tele-communications.`
        },
        {
          id: 2,
          value: `Cattle Insurance System - an online web portal and reporting system for AP state government which provides the insurance service to the cattle. The cattle farmer can buy, renew and claim the insurance.   `
        },
        {
          id: 3,
          value: `Bio-Metric Payroll Managament (Azito Power Plant) - Azito is a power plant in West Africa, Cote 'd Ivory, which consist of 9 departments. The employee of the azito will register in the software and in biometric machine with finger, face and ID. The software restricts the user to particular department, synchronies with the hardware to get the logs of the registered users.`
        },
      ] // end projects array
    } // end project object
  ], // end experienceList array

  educationList : [
    {
      schoolName: 'University of Wales Trinity Saint David',
      schoolLocation: 'Dublin, Ireland.',
      major: 'Major : General',
      degree: 'Qualification : MBA',
      graduationYear: 'Graduated : 2018'
   },
   {
         schoolName:'Vardhaman College of Engineering',
         schoolLocation: 'Hyderabad, India.',
         major: 'Major : Computer Science',
         degree: 'Qualification : M.Tech',
         graduationYear: 'Graduated : 2013'
   },
   {
         schoolName:'Jawaharlal Nehru Technological University',
         schoolLocation: 'Hyderabad, India.',
         major: 'Major : Computer Science',
         degree: 'Qualification : B.Tech',
         graduationYear: 'Graduated : 2011'
  },
  ]// end of education list 
} // end ResumeData

export default ResumeData;