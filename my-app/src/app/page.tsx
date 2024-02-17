import Business from "@/components/Business/Business";
import Course from "@/components/Course/Course";
import Create from "@/components/Create/Create";
import Header from "@/components/Header/Header";
import Help from "@/components/Help/Help";
import Links from "@/components/Links/Links";
import MainScreen from "@/components/MainScreen/MainScreen";
import NextBot from "@/components/NextBot/NextBot";
import Tryit from "@/components/Tryit/Tryit";

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
    </div>
  );
}
