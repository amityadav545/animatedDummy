import CardSlider from "./components/CardSlider";
import ChooseUs from "./components/ChooseUs";
import Container from "./components/Container";
import Domain from "./components/Domain";
import HomeSection from "./components/HomeSection";
import Impact from "./components/Impact";
import Particals from "./components/Particals";

export default function Home() {
  return (
    <main className="min-h-[100vh] ">
      <Container className="pt-[100px] ">

        <Particals />
        <HomeSection />
        <Domain />
        <hr />
        <Impact />

        <ChooseUs />
        <CardSlider />
        <hr class=" border-gray-600 sm:mx-auto dark:border-gray-700 " />
      </Container>


    </main>
  )
}
