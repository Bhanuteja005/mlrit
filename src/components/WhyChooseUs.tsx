
"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const aiClubContent = [
  {
    title: 'Innovative AI Projects',
    description:
      'Join us in pioneering cutting-edge projects in the field of artificial intelligence. Our club fosters a community of forward-thinkers who are pushing the boundaries of what\'s possible with AI.',
  },
  {
    title: 'Collaboration with Inlustroo Company',
    description:
      'We collaborate with Inlustroo Company to bring the latest AI technologies and insights to our club members. This partnership provides unique opportunities for learning and growth.',
  },
  {
    title: 'Real-World AI Applications',
    description:
      'Our members have harnessed their skills to develop a remarkable robot, showcasing the potential of AI in the real world. Be part of this exciting journey of discovery and advancement.',
  },
  {
    title: 'Embrace the Limitless Possibilities of AI',
    description:
      'At Aim Club, we believe in the limitless possibilities of AI. Join us and embrace the future of technology.',
  },
  {
    title: 'Shape the Future with Us',
    description:
      'Together, we shape the future. Be part of Aim Club and join us in this exciting journey of discovery and advancement in the field of AI.',
  },
];

function WhyChooseUs() {
return (
  <div>
      <StickyScroll content={aiClubContent} />
  </div>
)
}

export default WhyChooseUs