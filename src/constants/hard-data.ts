
import designLogo from '@/assets/design-icon.svg?react';
import itLogo from '@/assets/it-icon.svg?react';
import itLogo2 from '@/assets/it-icon-2.svg?react';
import marketingLogo from '@/assets/marketing-icon.svg?react';
import { ICertificate } from '@/types';

export const EDUCATIONS: ICertificate[] = [
   {
      school: 'Industrial University of Ho Chi Minh City',
      year: 'July - 2024',
      icon: itLogo,
      major: 'Software Engineer',
      content: `
      Currently studying
      `
      // content: 'Pursuing a degree in Information Technology with a specialization in software and website programming at Cao Thang Technical College. Renowned for its excellence in training technical disciplines and information technology, Cao Thang Technical College stands as a distinguished institution for my academic pursuits.'
   },
   {
      school: 'Cao Thang Technical College',
      year: 'August - 2015',
      icon: itLogo2,
      major: 'Bachelor of Information Technology',
      content: `
      • Key Courses: Data Structures,  Web Design, Software Development/Software Engineering, Database Systems.
      <br> • Achievements: Developed a coffee management software, Recreated the game "Tap The Frog" using Unity, Achieved a score of 9.5 for the graduation project.
      `
      // content: 'Pursuing a degree in Information Technology with a specialization in software and website programming at Cao Thang Technical College. Renowned for its excellence in training technical disciplines and information technology, Cao Thang Technical College stands as a distinguished institution for my academic pursuits.'
   },
   {
      school: 'FPT Polytechnic College',
      year: 'June - 2019',
      icon: designLogo,
      major: 'Associate Degree in Graphic Design',
      content: 'To enhance my proficiency as a frontend developer, I undertook supplementary graphic design courses at FPT Polytechnic College, a highly esteemed institution recognized by numerous employers for its exceptional training standards.'
   },
   {
      school: 'PACE institute of management',
      year: 'February - 2020',
      icon: marketingLogo,
      major: 'Chief Marketing Officer',
      content: 'Throughout my professional journey, I earned a promotion to lead the marketing department. To fortify the essential knowledge required for the role, I enrolled in the short-term Chief Marketing Officer training course at PACE Institute of Management, a renowned institution celebrated for its expertise in training high-level personnel.'
   },
]