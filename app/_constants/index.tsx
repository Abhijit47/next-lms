import { SVGProps } from "react";

import {
  AcademicCapIcon,
  BeakerIcon,
  BookOpenIcon,
  ChartBarSquareIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  HeartIcon,
  InboxIcon,
  LightBulbIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];

export const features = [
  {
    name: "Interactive Courses",
    description:
      "Engage with interactive courses that include videos, quizzes, and hands-on projects.",
    icon: HeartIcon,
  },
  {
    name: "Progress Tracking",
    description:
      "Monitor your learning progress with detailed analytics and reports.",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Certification",
    description:
      "Earn certificates upon course completion to showcase your achievements.",
    icon: AcademicCapIcon,
  },
  {
    name: "Community Support",
    description:
      "Join a community of learners and get support from peers and instructors.",
    icon: UsersIcon,
  },
  {
    name: "Mobile Access",
    description:
      "Learn on the go with our mobile-friendly platform accessible from any device.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Personalized Learning",
    description:
      "Receive personalized course recommendations based on your interests and goals.",
    icon: LightBulbIcon,
  },
  {
    name: "Resource Library",
    description:
      "Access a vast library of resources including articles, e-books, and tutorials.",
    icon: BookOpenIcon,
  },
  {
    name: "Live Sessions",
    description:
      "Participate in live sessions and webinars hosted by industry experts.",
    icon: ComputerDesktopIcon,
  },
];

export const metrics = [
  {
    id: 1,
    stat: "8K+",
    emphasis: "Companies",
    rest: "use our platform to train their employees.",
  },
  {
    id: 2,
    stat: "50K+",
    emphasis: "Courses",
    rest: "available across various subjects and skills.",
  },
  {
    id: 3,
    stat: "1M+",
    emphasis: "Learners",
    rest: "have enhanced their skills with our LMS.",
  },
  {
    id: 4,
    stat: "95%",
    emphasis: "Satisfaction Rate",
    rest: "among our users for the quality of our courses.",
  },
];

export const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export const courses = [
  {
    id: crypto.randomUUID(),
    title: "HTML for Beginners",
    description:
      "HTML is the standard markup language for creating Web pages. HTML stands for Hyper Text Markup Language. HTML describes the structure of Web pages using markup. HTML elements are the building blocks of HTML pages. HTML elements are represented by tags. HTML tags label pieces of content such as heading, paragraph, table, and so on. Browsers do not display the HTML tags, but use them to render the content of the page.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is Web page?",
        description:
          "A web page is a document that is suitable for the World Wide Web and web browsers. A web browser displays a web page on a monitor or mobile device. The web page usually means what is visible, but the term may also refer to a computer file, usually written in HTML or comparable markup language. Web browsers coordinate the various web resource elements for the written web page, such as style sheets, scripts, and images, to present the web page.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "What is HTML?",
        description:
          "HTML is the standard markup language for creating Web pages. HTML stands for Hyper Text Markup Language. HTML describes the structure of Web pages using markup. HTML elements are the building blocks of HTML pages. HTML elements are represented by tags. HTML tags label pieces of content such as heading, paragraph, table, and so on. Browsers do not display the HTML tags, but use them to render the content of the page.",
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with HTML",
        description:
          "To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following HTML code into the document: <!DOCTYPE html> <html> <head> <title>Page Title</title> </head> <body> <h1>This is a Heading</h1> <p>This is a paragraph.</p> </body> </html> 3. Save the file with an .html extension (for example, myfirstwebpage.html). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Creating a Web Page",
        description:
          "In this tutorial, you will learn how to create a web page using HTML. HTML is the standard markup language for creating Web pages. HTML stands for Hyper Text Markup Language. HTML describes the structure of Web pages using markup. HTML elements are the building blocks of HTML pages. HTML elements are represented by tags. HTML tags label pieces of content such as heading, paragraph, table, and so on. Browsers do not display the HTML tags, but use them to render the content of the page.",
        duration: "3 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using HTML. HTML is the standard markup language for creating Web pages. HTML stands for Hyper Text Markup Language. HTML describes the structure of Web pages using markup. HTML elements are the building blocks of HTML pages. HTML elements are represented by tags. HTML tags label pieces of content such as heading, paragraph, table, and so on. Browsers do not display the HTML tags, but use them to render the content of the page.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/html.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Phoebe Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "CSS for Beginners",
    description:
      "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced. This CSS tutorial contains hundreds of CSS examples. With our online editor, you can edit the CSS, and click on a button to view the result.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is CSS?",
        description:
          "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced. This CSS tutorial contains hundreds of CSS examples. With our online editor, you can edit the CSS, and click on a button to view the result.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with CSS",
        description:
          "To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following CSS code into the document: body { background-color: lightblue; } h1 { color: white; text-align: center; } p { font-family: verdana; font-size: 20px; } 3. Save the file with an .css extension (for example, myfirststylesheet.css). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).",
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Designing a Web Page with CSS",
        description:
          "In this tutorial, you will learn how to create a web page using CSS. CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced. This CSS tutorial contains hundreds of CSS examples. With our online editor, you can edit the CSS, and click on a button to view the result.",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using CSS. CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced. This CSS tutorial contains hundreds of CSS examples. With our online editor, you can edit the CSS, and click on a button to view the result.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/css.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Holden Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "JavaScript for Beginners",
    description:
      "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. This JavaScript tutorial contains hundreds of JavaScript examples. With our online editor, you can edit the JavaScript, and click on a button to view the result.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is JavaScript?",
        description:
          "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. This JavaScript tutorial contains hundreds of JavaScript examples. With our online editor, you can edit the JavaScript, and click on a button to view the result.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with JavaScript",
        description:
          "To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following JavaScript code into the document: document.getElementById('demo').innerHTML = 'Hello JavaScript'; 3. Save the file with an .js extension (for example, myfirstjavascript.js). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).",
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Programming a Web Page with JavaScript",
        description:
          "In this tutorial, you will learn how to create a web page using JavaScript. JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. This JavaScript tutorial contains hundreds of JavaScript examples. With our online editor, you can edit the JavaScript, and click on a button to view the result.",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using JavaScript. JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. This JavaScript tutorial contains hundreds of JavaScript examples. With our online editor, you can edit the JavaScript, and click on a button to view the result.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/javascript.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Holden Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "React for Beginners",
    description:
      "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is React?",
        description:
          "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with React",
        description:
          "To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following React code into the document: ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root')); 3. Save the file with an .js extension (for example, myfirstreact.js). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).",
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Building a Web Page with React",
        description:
          "In this tutorial, you will learn how to create a web page using React. React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using React. React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/react.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Holden Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Node.js for Beginners",
    description:
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is Node.js?",
        description:
          "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with Node.js",
        description:
          "To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following Node.js code into the document: var http = require('http'); http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/html'}); res.end('Hello World!'); }).listen(8080); 3. Save the file with an .js extension (for example, myfirstnode.js). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).",
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Building a Web Page with Node.js",
        description:
          "In this tutorial, you will learn how to create a web page using Node.js. Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using Node.js. Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/nodejs.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Holden Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Express.js for Beginners",
    description:
      "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is Express.js?",
        description:
          "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with Express.js",
        description:
          "To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following Express.js code into the document: var express = require('express'); var app = express(); app.get('/', function (req, res) { res.send('Hello World!'); }); app.listen(3000, function () { console.log('Example app listening on port 3000!'); }); 3. Save the file with an .js extension (for example, myfirstexpress.js). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).",
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Building a Web Page with Express.js",
        description:
          "In this tutorial, you will learn how to create a web page using Express.js. Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using Express.js. Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/express.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Holden Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "MongoDB for Beginners",
    description:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is MongoDB?",
        description:
          "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with MongoDB",
        description:
          "To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following MongoDB code into the document: var MongoClient = require('mongodb').MongoClient; var url = 'mongodb://localhost:27017/mydb'; MongoClient.connect(url, function(err, db) { if (err) throw err; console.log('Database created!'); db.close(); }); 3. Save the file with an .js extension (for example, myfirstmongodb.js). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).",
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Building a Web Page with MongoDB",
        description:
          "In this tutorial, you will learn how to create a web page using MongoDB. MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using MongoDB. MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/mongodb.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Holden Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "GraphQL for Beginners",
    description:
      "GraphQL is an open-source data query and manipulation language for APIs, and a runtime for executing those queries with your existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is GraphQL?",
        description:
          "GraphQL is an open-source data query and manipulation language for APIs, and a runtime for executing those queries with your existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with GraphQL",
        description:
          "To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following GraphQL code into the document: type Query { hello: String } 3. Save the file with an .graphql extension (for example, myfirstgraphql.graphql). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).",
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Building a Web Page with GraphQL",
        description:
          "In this tutorial, you will learn how to create a web page using GraphQL. GraphQL is an open-source data query and manipulation language for APIs, and a runtime for executing those queries with your existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using GraphQL. GraphQL is an open-source data query and manipulation language for APIs, and a runtime for executing those queries with your existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/graphql.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Holden Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Docker for Beginners",
    description:
      "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their software, libraries, and configuration files.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is Docker?",
        description:
          "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their software, libraries, and configuration files.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with Docker",
        description:
          'To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following Docker code into the document: FROM ubuntu:18.04 RUN apt-get update RUN apt-get install -y nginx CMD ["nginx", "-g", "daemon off;"] 3. Save the file with an .docker extension (for example, myfirstdocker.docker). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).',
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Building a Web Page with Docker",
        description:
          "In this tutorial, you will learn how to create a web page using Docker. Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their software, libraries, and configuration files.",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using Docker. Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their software, libraries, and configuration files.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/docker.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Holden Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Kubernetes for Beginners",
    description:
      "Kubernetes (commonly stylized as K8s) is an open-source container-orchestration system for automating computer application deployment, scaling, and management.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is Kubernetes?",
        description:
          "Kubernetes (commonly stylized as K8s) is an open-source container-orchestration system for automating computer application deployment, scaling, and management.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with Kubernetes",
        description:
          "To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following Kubernetes code into the document: apiVersion: apps/v1 kind: Deployment metadata: name: nginx-deployment spec: replicas: 3 selector: matchLabels: app: nginx template: metadata: labels: app: nginx spec: containers: - name: nginx image: nginx:1.14.2 ports: - containerPort: 80 3. Save the file with an .yaml extension (for example, myfirstkubernetes.yaml). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).",
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Building a Web Page with Kubernetes",
        description:
          "In this tutorial, you will learn how to create a web page using Kubernetes. Kubernetes (commonly stylized as K8s) is an open-source container-orchestration system for automating computer application deployment, scaling, and management.",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using Kubernetes. Kubernetes (commonly stylized as K8s) is an open-source container-orchestration system for automating computer application deployment, scaling, and management.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/kubernetes.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Holden Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "AWS for Beginners",
    description:
      "Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is AWS?",
        description:
          "Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with AWS",
        description:
          "To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following AWS code into the document: ec2 = boto3.resource('ec2') for instance in ec2.instances.all(): print(instance.id, instance.state) 3. Save the file with an .py extension (for example, myfirstaws.py). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).",
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Building a Web Page with AWS",
        description:
          "In this tutorial, you will learn how to create a web page using AWS. Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using AWS. Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/aws.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Holden Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Azure for Beginners",
    description:
      "Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is Azure?",
        description:
          "Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with Azure",
        description:
          "To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following Azure code into the document: from azure.identity import DefaultAzureCredential from azure.mgmt.resource import ResourceManagementClient credential = DefaultAzureCredential() client = ResourceManagementClient(credential, 'your_subscription_id') for item in client.resource_groups.list(): print(item.name) 3. Save the file with an .py extension (for example, myfirstazure.py). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).",
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Building a Web Page with Azure",
        description:
          "In this tutorial, you will learn how to create a web page using Azure. Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using Azure. Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/azure.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Holden Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "GCP for Beginners",
    description:
      "Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.",
    curriculam: [
      {
        id: crypto.randomUUID(),
        title: "What is GCP?",
        description:
          "Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.",
        duration: "30 min",
      },
      {
        id: crypto.randomUUID(),
        title: "Getting Started with GCP",
        description:
          "To create a web page, you need to follow these steps: 1. Create a new text document. 2. Type or copy the following GCP code into the document: from google.cloud import storage storage_client = storage.Client() buckets = list(storage_client.list_buckets()) print(buckets) 3. Save the file with an .py extension (for example, myfirstgcp.py). 4. Open the file in a web browser (such as Internet Explorer, Chrome, Firefox, or Safari).",
        duration: "1 hr",
      },
      {
        id: crypto.randomUUID(),
        title: "Building a Web Page with GCP",
        description:
          "In this tutorial, you will learn how to create a web page using GCP. Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.",
        duration: "2 hrs",
      },
      {
        id: crypto.randomUUID(),
        title: "Knowledge Check",
        description:
          "In this tutorial, you will learn how to create a web page using GCP. Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.",
        duration: "30 min",
      },
    ],
    courseImage: "/assets/svgs/gcp.svg",
    courseCovers: ["/assets/images/courseCover-1.jpg"],
    instructor: {
      name: "Holden Caulfield",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/150?img=57",
      bio: "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.",
    },
  },
];

export const testimonials = [
  {
    id: crypto.randomUUID(),
    name: "Stella Rivera",
    role: "UI DEVELOPER",
    image: "https://i.pravatar.cc/150?img=11",
    message:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: crypto.randomUUID(),
    name: "Valwood Pkwy",
    role: "DESIGNER",
    image: "https://i.pravatar.cc/150?img=12",
    message:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: crypto.randomUUID(),
    name: "Frank Walters",
    role: "UI DEVELOPER",
    image: "https://i.pravatar.cc/150?img=13",
    message:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: crypto.randomUUID(),
    name: "Ross Simmons",
    role: "DESIGNER",
    image: "https://i.pravatar.cc/150?img=14",
    message:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: crypto.randomUUID(),
    name: "Janice Roberts",
    role: "UI DEVELOPER",
    image: "https://i.pravatar.cc/150?img=15",
    message:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: crypto.randomUUID(),
    name: "Alex Gutierrez",
    role: "DESIGNER",
    image: "https://i.pravatar.cc/150?img=16",
    message:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: crypto.randomUUID(),
    name: "Valerie Wells",
    role: "UI DEVELOPER",
    image: "https://i.pravatar.cc/150?img=17",
    message:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: crypto.randomUUID(),
    name: "Ana Wilson",
    role: "DESIGNER",
    image: "https://i.pravatar.cc/150?img=18",
    message:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: crypto.randomUUID(),
    name: "Eddie Ross",
    role: "UI DEVELOPER",
    image: "https://i.pravatar.cc/150?img=19",
    message:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: crypto.randomUUID(),
    name: "Dale Byrd",
    role: "DESIGNER",
    image: "https://i.pravatar.cc/150?img=20",
    message:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
];

export const learningSteps = [
  {
    id: crypto.randomUUID(),
    stepName: "lesson",
    stepDescription:
      "A lesson is a unit of instruction or a single class on a particular subject. It is a period of time during which students are taught about a particular topic or subject.",
    icon: BeakerIcon,
  },
  {
    id: crypto.randomUUID(),
    stepName: "study",
    stepDescription:
      "Study is the process of learning or acquiring knowledge about a particular subject. It is the act of reading, memorizing, or practicing in order to gain a better understanding of a topic.",
    icon: BookOpenIcon,
  },
  {
    id: crypto.randomUUID(),
    stepName: "knowledge",
    stepDescription:
      "Knowledge is the information and skills acquired through experience or education. It is the theoretical or practical understanding of a subject.",
    icon: LightBulbIcon,
  },
  {
    id: crypto.randomUUID(),
    stepName: "experience",
    stepDescription:
      "Experience is the knowledge or skill acquired through practical exposure to a subject. It is the process of gaining knowledge or skill through direct observation or participation.",
    icon: SparklesIcon,
  },
  {
    id: crypto.randomUUID(),
    stepName: "skills",
    stepDescription:
      "Skills are the abilities or proficiencies acquired through training or practice. They are the expertise or talent in a particular area.",
    icon: AcademicCapIcon,
  },
];

// console.log(JSON.stringify(courses, null, 2));
