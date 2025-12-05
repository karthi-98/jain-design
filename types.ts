export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'instagram' | 'github';
  url: string;
}
