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
    <div className='flex flex-col items-center overflow-hidden'>
      <div className=' xl:max-w-[1280px] xm:max-w-[1400px] md:max-w-[768px] xx:max-w-[1577px] xb:max-w-[1768px] lg:max-w-[1024px] bb:max-w-[1920px] '>
        <Header />
        <MainScreen />
        <Create id={0} title={''} />
        <NextBot />
        <Course />
        <Help />
        <Tryit />
        <Links />
        <Base />
        <div className='hidden'>
          <II />
        </div>
        <Steps />
        <Payments />
        <Footer />
      </div>
    </div>
  );
}
