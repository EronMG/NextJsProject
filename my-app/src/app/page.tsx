import Steps from '@/components/5Steps/Steps';
import Base from '@/components/Base/Base';
import Business from '@/components/Business/Business';
import Course from '@/components/Course/Course';
import Create from '@/components/Create/Create';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Help from '@/components/Help/Help';
import II from '@/components/II/II';
import Links from '@/components/Links/Links';
import MainScreen from '@/components/MainScreen/MainScreen';
import NextBot from '@/components/NextBot/NextBot';
import Tryit from '@/components/Tryit/Tryit';
import Payments from '@/components/payments/Payments';

export default function Home() {
  return (
    <div>
      <Header />
      <MainScreen />
      <Business />
      <Create />
      <NextBot />
      <Course />
      <Help />
      <Tryit />
      <Links />
      <Base />
      <II />
      <Steps />
      <Payments />
      <Footer />
    </div>
  );
}
