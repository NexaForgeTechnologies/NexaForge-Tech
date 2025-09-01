import WorkCards from "../components/WorkCards";
import VerticalCont from "../components/VerticalCont";
import HorizontalCont from "../components/HorizontalCont";
export default function WorkCont() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(200px,_auto)] mt-10 mb-30">

      <VerticalCont
        img={'/work-1.png'}
        icon={'/store-icon.png'}
        title={'Ecommerce'}
        para={'Leverage technology to elevate your business. Expand or revamp your online presence to reach a wider audience. Employ dedicated web developers with diverse expertise in crafting eCommerce solutions tailored for both B2B and B2C ventures.'}
      />

      <WorkCards
        img={"/work-2.png"}
        title={'FinTech'} 
        icon={'fintect.png'}
        />

      <WorkCards
        img={"/education.png"}
        title={'Education'} 
        icon={"edu.png"}
        />

      <HorizontalCont
        img={"/healthcare.png"}
        title={'Healthcare'}
        icon={'health.png'}
        para={'With extensive expertise in healthcare technology, we are a trusted provider of secure, innovative, and efficient healthcare software solutions. Our focus is on enhancing patient care, improving operational workflows, and ensuring data security.'}
      />

      <WorkCards
        img={"/food.png"}
        title={'Food & Groceries'} 
        icon={"food-icon.png"}
        />

      <WorkCards
        img={"/tourism.png"}
        title={'Travel & Tourism'} 
        icon={'tourism-icon.png'}/>

      <VerticalCont
        img={'/smart.png'}
        icon={'/codeing.png'}
        title={'Smart Contract Development'}
        para={'Nexaforge Technologies offers comprehensive smart contract development services, leveraging our expertise to create secure, reliable, and automated smart contracts on the blockchain, tailored to meet your business needs.'}
      />

      <WorkCards
        img={"/ondemand.png"}
        title={'On-Demand Services'} 
        icon={'demand.png'}/>

      <WorkCards
        img={"/game.png"}
        title={'Game Development'} 
        icon={'game-icon.png'}
        />
    </section>
  );
}
