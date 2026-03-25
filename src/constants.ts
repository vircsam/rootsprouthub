import { Blog, Project, Event, Partner, Book, Video } from './types';
import blog1 from './assets/blogs/1.png';
import blog2 from './assets/blogs/2.png';
import blog3 from './assets/blogs/3.png';
import blog4 from './assets/blogs/4.png';
import blog5 from './assets/blogs/5.png';
import blog6 from './assets/blogs/6.png';
import blog7 from './assets/blogs/7.png';
import blog8 from './assets/blogs/8.png';
import nginxBookCover from './assets/books/book.jpg';
import project1 from './assets/projects/1.png';
import project2 from './assets/projects/2.png';
import project3 from './assets/projects/3.png';
import project4 from './assets/projects/4.png';
import project5 from './assets/projects/5.png';
import project6 from './assets/projects/6.png';
import project7 from './assets/projects/7.png';
import project8 from './assets/projects/8.png';
import project9 from './assets/projects/9.png';
import partner1 from './assets/partners/1.png';
import partner2 from './assets/partners/2.png';
import partner3 from './assets/partners/3.png';
import partner4 from './assets/partners/4.png';
import partner5 from './assets/partners/5.png';
import partner6 from './assets/partners/6.png';
import partner7 from './assets/partners/7.png';
import partner8 from './assets/partners/8.png';
import partner9 from './assets/partners/9.png';
import partner10 from './assets/partners/10.png';
import event1 from './assets/events/1.png';
import event2 from './assets/events/2.png';
import event3 from './assets/events/3.png';
import event4 from './assets/events/4.png';
import event5 from './assets/events/5.png';
import event6 from './assets/events/6.png';
import event7 from './assets/events/7.png';
import event8 from './assets/events/8.png';
import event9 from './assets/events/9.png';
import video1 from './assets/videos/1.png';
import video2 from './assets/videos/2.png';
import video3 from './assets/videos/3.png';
import video4 from './assets/videos/4.png';
import video5 from './assets/videos/5.png';
import video6 from './assets/videos/6.png';
import video7 from './assets/videos/7.png';
import video8 from './assets/videos/8.png';
import video9 from './assets/videos/9.png';

export const BLOGS: Blog[] = [
  {
    id: '1',
    title: '🐳 Understand Docker : Architecture, Workflow, and Production Best Practices',
    author: 'Rootsprout Editorial',
    tags: ['Docker', 'DevOps'],
    readTime: '9 min',
    date: '1h ago',
    image: blog1,
    excerpt: 'Docker has fundamentally changed how modern software is built, shipped, and deployed. Whether you’re running a small backend service or a global platform, a strong mental model helps you ship faster and safer.',
    link: 'https://meerthika.medium.com/understand-docker-architecture-workflow-and-production-best-practices-4bfe97aa0f68'
  },
  {
    id: '2',
    title: 'Building a Frame-based Custom Transport Protocol in C.',
    author: 'Rootsprout Editorial',
    tags: ['Networking', 'C'],
    readTime: '11 min',
    date: 'Nov 10, 2025',
    image: blog2,
    excerpt: 'Data transfer is one of the core foundations of communication systems — and at the heart of it lies the protocol: a set of rules that make reliable delivery possible.',
    link: 'https://meerthika.medium.com/building-a-frame-based-custom-transport-protocol-in-c-2c9fbd404428'
  },
  {
    id: '3',
    title: 'BIOS Firmware: How it works with CMOS, MBR, VBR & Bootloader',
    author: 'Rootsprout Editorial',
    tags: ['Systems', 'Boot'],
    readTime: '10 min',
    date: 'Sep 24, 2025',
    image: blog3,
    excerpt: 'The first thing you see after turning on your laptop is the welcome screen of your operating system. But before this screen appears, a chain of low-level components brings your machine to life.',
    link: 'https://medium.com/@meerthika/bios-firmware-how-it-works-with-cmos-mbr-vbr-bootloader-2b2f00ffacac'
  },
  {
    id: '4',
    title: 'Building a Shell in C: Understanding Fork, Pipes, and File Descriptors',
    author: 'Rootsprout Editorial',
    tags: ['Unix', 'C'],
    readTime: '12 min',
    date: 'Sep 7, 2025',
    image: blog4,
    excerpt: 'Have you ever wondered how a shell like bash works under the hood? Let’s break it down step by step and see how a shell executes commands using fork(), pipes, and file descriptors.',
    link: 'https://medium.com/@meerthika/building-a-shell-in-c-understanding-fork-pipes-and-file-descriptors-fc030ca7549d'
  },
  {
    id: '5',
    title: 'Data Link Layer: Manipulating LANs with ARP, STP, VLANs & Trunking.',
    author: 'Rootsprout Editorial',
    tags: ['Networking', 'Infra'],
    readTime: '10 min',
    date: 'Sep 3, 2025',
    image: blog5,
    excerpt: 'When you connect your laptop to Wi-Fi, plug into an Ethernet port, or ping a server — there’s a whole world of protocols working behind the scenes.',
    link: 'https://medium.com/@meerthika/data-link-layer-manipulating-lans-with-arp-stp-vlans-trunking-e440bb23148b'
  },
  {
    id: '6',
    title: 'Deep Dive into Docker: From CLI to Container',
    author: 'Rootsprout Editorial',
    tags: ['Docker', 'Containers'],
    readTime: '9 min',
    date: 'Aug 27, 2025',
    image: blog6,
    excerpt: 'Docker is often praised for its simplicity — just run docker run <image> and your container springs to life. But beneath this seemingly simple interface lies a deeper execution pipeline.',
    link: 'https://medium.com/@meerthika/deep-dive-into-docker-from-cli-to-container-b0bfad06723e'
  },
  {
    id: '7',
    title: 'Program as Poetry: Understanding the Von Neumann Architecture',
    author: 'Rootsprout Editorial',
    tags: ['Architecture', 'CS'],
    readTime: '7 min',
    date: 'Aug 24, 2025',
    image: blog7,
    excerpt: 'Programming has often been compared to poetry. A well-written program isn’t just instructions for a computer — it’s a piece of work that reveals structure and intent.',
    link: 'https://medium.com/@meerthika/program-as-poetry-understanding-the-von-neumann-architecture-a865a8ac0a14'
  },
  {
    id: '8',
    title: 'Go-Scheduler: Understanding Why Goroutines Are So Lightweight',
    author: 'Rootsprout Editorial',
    tags: ['Go', 'Runtime'],
    readTime: '8 min',
    date: 'Jul 3, 2025',
    image: blog8,
    excerpt: 'Goroutines in Go are famously lightweight — far more so than OS threads or traditional language-level threads like those in Java or C++.',
    link: 'https://medium.com/@meerthika/go-scheduler-understanding-why-goroutines-are-so-lightweight-63c75d497104'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Kira-Kafka',
    description: 'A lightweight, educational distributed log system in C. Mimics the core of Apache Kafka — topics, partitions, brokers, disk-backed logs, zero-copy reads, memory-mapped I/O, log compression, and thread-to-core mapping.',
    language: 'C',
    difficulty: 'Advanced',
    trending: true,
    image: project1,
    link: 'https://github.com/ROOT-SPROUT/Kira-Kafka'
  },
  {
    id: '2',
    name: 'Ge-Git',
    description: 'Git implementation in C. Supports blob, tree, and commit objects, replicating Git’s internal object storage system.',
    language: 'C',
    difficulty: 'Intermediate',
    trending: false,
    image: project2,
    link: 'https://github.com/ROOT-SPROUT/Ge-Git'
  },
  {
    id: '3',
    name: 'Cow-Compiler',
    description: 'A compiler in C for a minimalistic language called CowLang. Compiles CowLang into LLVM IR.',
    language: 'C',
    difficulty: 'Advanced',
    trending: false,
    image: project3,
    link: 'https://github.com/ROOT-SPROUT/Cow-Compiler'
  },
  {
    id: '4',
    name: 'autoNormDB',
    description: 'A SQL database engine built from scratch. Focuses on core database fundamentals and learning how databases work internally.',
    language: 'C',
    difficulty: 'Advanced',
    trending: true,
    image: project4,
    link: 'https://github.com/ROOT-SPROUT/AutoNormDB'
  },
  {
    id: '5',
    name: 'Exsh',
    description: 'A Unix-like shell in C. Implements command parsing, pipes, redirection, and process management using fork() and execvp().',
    language: 'C',
    difficulty: 'Intermediate',
    trending: false,
    image: project5,
    link: 'https://github.com/RootSprout/Exsh'
  },
  {
    id: '6',
    name: 'CTP',
    description: 'A Serial Datalink Transport Protocol with termios and socat. Simulates reliable serial communication over virtual or real serial ports, with frame creation, CRC error detection, and ACK based retransmission.',
    language: 'C',
    difficulty: 'Advanced',
    trending: false,
    image: project6,
    link: 'https://github.com/RootSprout/CTP'
  },
  {
    id: '7',
    name: 'CineBrew',
    description: 'Custom programming language & VM built from scratch. Includes a compiler, stack-based virtual machine, and minimal runtime to demonstrate how languages work under the hood.',
    language: 'C',
    difficulty: 'Advanced',
    trending: true,
    image: project7,
    link: 'https://github.com/RootSprout/CineBrew'
  },
  {
    id: '8',
    name: 'YapFormer',
    description: 'A transformer implementation with modern optimizations. ~56M parameters, trained for 15,000 steps on TinyStories (~4.5 hours), producing high-quality short stories with limited compute.',
    language: 'Python',
    difficulty: 'Advanced',
    trending: true,
    image: project8,
    link: 'https://github.com/RootSprout/yapformer-from-scratch'
  },
  {
    id: '9',
    name: 'COPYCAT',
    description: 'A simple reimplementation of the Unix cp command in C. Focuses on low-level file operations with read/write syscalls. Learning project only; not a replacement for cp.',
    language: 'C',
    difficulty: 'Beginner',
    trending: false,
    image: project9,
    link: 'https://github.com/RootSprout/CopyCat'
  }
];

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'OA TECHFEST 2026 — Building a First Principle Open Source Project from Scratch',
    type: 'Conference',
    date: 'March 22, 2026',
    location: 'Dr. APJ Abdul Kalam Auditorium, JIPMER',
    description: 'Featured session by Meerthika SR on first‑principles open‑source building.',
    time: 'Time TBA',
    image: event1
  },
  {
    id: '2',
    title: 'Building a First Principle Open-Source Project',
    type: 'Conference',
    date: 'Date TBA',
    location: 'SheBuilds Code and Connect 3.0',
    description: 'A foundational approach to open source: clarity, problem decomposition, and durable solutions.',
    time: 'Time TBA',
    image: event2
  },
  {
    id: '3',
    title: 'Building a First Principle FOSS Community',
    type: 'Talk',
    date: 'December 20, 2025',
    location: 'DCI (Dot Com Infoway), Anna Nagar, Madurai',
    description: 'Rebuilding systems from scratch to understand production‑grade tools and open‑source growth.',
    time: '10:00 AM – 1:00 PM',
    image: event3
  },
  {
    id: '4',
    title: 'Google DevFest Bangalore — Experience Recap',
    type: 'Recap',
    date: 'Date TBA',
    location: 'Bangalore, India',
    description: 'An electrifying community experience and meaningful developer interactions.',
    time: 'Time TBA',
    image: event4
  },
  {
    id: '5',
    title: 'Build From Scratch — Season I Hackathon',
    type: 'Hackathon',
    date: 'December 25, 2025 (Submission Deadline)',
    location: 'Online',
    description: 'Create any system from scratch and submit your GitHub repo + 5‑minute video.',
    time: 'Registration closes Dec 10',
    link: 'https://lnkd.in/g_AcWbKr',
    image: event5
  },
  {
    id: '6',
    title: 'RootSprout × CYBRIAN Collaboration',
    type: 'Collaboration',
    date: 'Date TBA',
    location: 'India',
    description: 'A future‑ready pact to connect students with founders, engineers, and real‑world practice.',
    time: 'Announcement',
    image: event6
  },
  {
    id: '7',
    title: 'From Scratch to Sorcery — Codesapiens Tech Session',
    type: 'Talk',
    date: 'October 11, 2025',
    location: 'MAKO IT Lab',
    description: 'How building from zero makes you a sorcerer — practical, creative systems thinking.',
    time: '09:00 AM – 02:00 PM',
    image: event7
  },
  {
    id: '8',
    title: 'Building Systems from Scratch — ThoughtWorks Session',
    type: 'Talk',
    date: 'August 23, 2025',
    location: 'ThoughtWorks, Tharamani',
    description: 'A deep dive into fundamentals, design, and the power of rethinking basics.',
    time: '10:00 AM – 2:00 PM',
    image: event8
  },
  {
    id: '9',
    title: 'Kreativ 26 — Featured Speaker',
    type: 'Conference',
    date: 'Date TBA',
    location: 'Location TBA',
    description: 'Meerthika SR featured speaker session.',
    time: 'Time TBA',
    image: event9
  }
];

export const PARTNERS: Partner[] = [
  { id: '1', name: 'SheBuilds code & connect', logo: partner1 },
  { id: '2', name: 'FOSS United Madurai', logo: partner2 },
  { id: '3', name: 'SRM Institute of Science and Technology, Ramapuram', logo: partner3 },
  { id: '4', name: 'SPEC NITH', logo: partner4 },
  { id: '5', name: 'GDG KSRCE, KSR College Of Engineering', logo: partner5 },
  { id: '6', name: 'Data Science Club - Panimalar,Chennai', logo: partner6 },
  { id: '7', name: 'CYBRIAN', logo: partner7 },
  { id: '8', name: 'PEC Hacks', logo: partner8 },
  { id: '9', name: 'CodeSapiens - the Student Community of Coders', logo: partner9 },
  { id: '10', name: 'Kreativ 26', logo: partner10 }
];

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'INSIDE NGINX',
    subtitle: 'High Performance Web Server Through Source Code',
    author: 'Meerthika Rajendran',
    description: 'A deep, systems-level tour of NGINX internals—threads, events, and architecture—through hands-on source code exploration.',
    coverImage: nginxBookCover,
    tags: ['Systems', 'Web'],
    price: 'from $2.99',
    formats: [
      { label: 'Kindle', price: 'from $2.99' },
      { label: 'Paperback', price: '$14.00' },
      { label: 'Other New', price: 'from $14.00' }
    ],
    buyLink: 'https://a.co/d/072Yh5hD',
    rating: 4.9
  }
];

export const VIDEOS: Video[] = [
  {
    id: '1',
    title: 'How Big Tech Replicates Data: 15 Must-Know Replication Patterns for System Design!',
    description: '210 views',
    duration: '23:16',
    date: '3 months ago',
    link: 'https://www.youtube.com/watch?v=dIEZL1czWno&pp=0gcJCdgKAYcqIYzv',
    image: video1
  },
  {
    id: '2',
    title: 'Emulating a Real Data Link Layer in C — My Custom Transport Protocol | With ACKs, CRC & Termios.',
    description: '430 views',
    duration: '13:52',
    date: '4 months ago',
    link: 'https://www.youtube.com/watch?v=nR4-rRIGhPo&pp=0gcJCdgKAYcqIYzv',
    image: video2
  },
  {
    id: '3',
    title: 'Why malloc Isn’t Just One Heap - Internals explained arenas, bins, chunks with GDB.',
    description: '1.4K views',
    duration: '16:38',
    date: '5 months ago',
    link: 'https://www.youtube.com/watch?v=FvPBALJCwaY',
    image: video3
  },
  {
    id: '4',
    title: 'Recreating Bash in C - Build a Custom Unix Shell (Exsh) | Command Execution, Pipes & Redirection',
    description: '1.4K views',
    duration: '14:09',
    date: '6 months ago',
    link: 'https://www.youtube.com/watch?v=XTmLq8g1f2s',
    image: video4
  },
  {
    id: '5',
    title: 'Inside Docker VM: Understanding Virtual Networks, Bridges, Unix Sockets and Linux Namespaces!',
    description: '184 views',
    duration: '32:16',
    date: '6 months ago',
    link: 'https://www.youtube.com/watch?v=XzkM6TowN6M',
    image: video5
  },
  {
    id: '6',
    title: 'Build Your Own Git in C — No Libraries, Just Code | Object Storage System Overview',
    description: '1.7K views',
    duration: '14:26',
    date: '8 months ago',
    link: 'https://www.youtube.com/watch?v=UYIeZvgNiVg',
    image: video6
  },
  {
    id: '7',
    title: 'Kafka, But Written in C | Full OS-Level Log System from Scratch',
    description: '7.2K views',
    duration: '20:23',
    date: '8 months ago',
    link: 'https://www.youtube.com/watch?v=cBqGHt1ALgo',
    image: video7
  },
  {
    id: '8',
    title: 'Kafka + Go: Build Real-Time Systems & Understand Kafka',
    description: '814 views',
    duration: '38:57',
    date: '9 months ago',
    link: 'https://www.youtube.com/watch?v=iWYcqz-z0cM',
    image: video8
  },
  {
    id: '9',
    title: 'From Zero to Compiler: Writing One in C | Overview for Beginners',
    description: '1.8K views',
    duration: '22:05',
    date: '9 months ago',
    link: 'https://www.youtube.com/watch?v=4GiyRme1qqo',
    image: video9
  }
];
