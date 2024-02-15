import Business from '@/components/Business/Business';
import Course from '@/components/Course/Course';
import Create from '@/components/Create/Create';
import Header from '@/components/Header/Header';
import NextBot from '@/components/NextBot/NextBot';

export default function Home() {
  return (
    <div>
      <Header />
      <Business />
      <Create />
      <NextBot />
      <Course />
    </div>
  );
}
