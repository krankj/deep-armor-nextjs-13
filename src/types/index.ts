export type TestimonialType = {
  description: string;
  title: string;
};

export type SideNavigationItemType = {
  id: number;
  name: string;

  linkPath: string;
};

export type CommunityEventType = {
  id: number;
  name: string;
  description: string;
  location: string;
  date: string;
  image: any;
};

export interface SecurityEventType extends CommunityEventType {}

export type PressType = {
  id: number;
  name: string;
  description: string;
  date: string;
  link: string;
};
