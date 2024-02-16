export interface BusinessItem {
  id: number;
  title: string;
}

export interface HelpItem {
  id: number;
  title: string;
}
interface TitleItem {
  id: number;
  title: string;
}

export interface HelpBlock {
  id: number;
  name: string;
  titleArr: TitleItem[];
  title: string;
}
