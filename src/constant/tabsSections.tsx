import { SectionFour } from '../components/Sections/SectionFour';
import { SectionOne } from '../components/Sections/SectionOne';
import { SectionTwo } from '../components/Sections/SectionTwo';
import { SectionThree } from '../components/Sections/SectioneThree';
import { ITabsSection } from '../types/interfaces';

export const tabsSections: ITabsSection[] = [
  {
    label: 'About',
    content: <SectionOne />,
  },
  {
    label: 'Skills',
    content: <SectionTwo />,
  },
  {
    label: 'Education',
    content: <SectionThree />,
  },
  {
    label: 'Experience',
    content: <SectionFour />,
  },
  // {
  //   label: 'Portfolio',
  //   content: <div>5</div>,
  // },
];
