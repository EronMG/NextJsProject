export interface BusinessItem {
  id: number;
  title: string;
}

export interface HelpItem {
  id: number;
  title: string;
}

export interface StepsItem {
  id: number;
  count: string;
  name: string;
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

export interface PaymentsBlock {
  id: number;
  name: string;
  title: string;
  titleArr: TitleItem[];
  spanArr: TitleItem[];
  cost: number;
  deleteCost: number;
}

export interface ExampleItem {
  id: number;
  title: string;
  subtitle: string;
  img: string;
}
