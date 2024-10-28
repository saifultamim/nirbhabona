
// import Client from "@/components/Client/Client";
// import Download from "@/components/Download/Download";
// import Features from "@/components/Features/Features";
// import Home from "@/components/Home/Home";
// import Interface from "@/components/Interface/Interface";
// import PricingPlan from "@/components/PricingPlan/PricingPlan";
// import Question from "@/components/Question/Question";
// import Seller from "@/components/Seller/Seller";
// import Achivement from "@/app/(home)/_comp/Achivement";

import Achivement from "./_comp/Achivement/Achivement";
import AddressMap from "./_comp/AddressMap/AddressMap";
import Client from "./_comp/Client/Client";
import Download from "./_comp/Download/Download";
import Features from "./_comp/Features/Features";
import Home from "./_comp/Home/Home";
import Interface from "./_comp/Interface/Interface";
import PricingPlan from "./_comp/PricingPlan/PricingPlan";
import Question from "./_comp/Question/Question";
import Seller from "./_comp/Seller/Seller";


export default function page() {
  return (
    <div className='z-20'>
    <div className=' bg-colour pt-12'> 
    <section id="home" className="  py-24  w-9/12 mx-auto ">
        <div className='   rounded-3xl'>
        <Home></Home>
        </div>
      </section>
    </div>

      <section id="achievement" className="pt-28 lg:pt-24 w-9/12 mx-auto ">
       <Achivement></Achivement>
      </section>
    
      <section id="customer" className="pt-24 w-9/12 mx-auto">
        <Client></Client>
      </section>

      <section id="seller" className="pt-24 w-9/12 mx-auto">
       <Seller></Seller>
      </section>

      <section id="features" className="pt-32 w-9/12 mx-auto">
       <Features></Features>
      </section>

      <section id="interface" className="pt-32 w-9/12 mx-auto">
      <Interface></Interface>
      </section>

      <section id="pricingPlan" className="pt-32 w-9/12 mx-auto">
      <PricingPlan></PricingPlan>
      </section>
      <section id="faq" className=" pt-28 lg:pt-32 w-9/12 mx-auto">
      <Question></Question>
      </section>

      <section id="download" className=" pt-24 w-9/12 mx-auto">
      <Download></Download>
      </section>

      <section id="downloasadf" className=" mb-16 w-9/12 mx-auto">
     <AddressMap></AddressMap> 
      </section>
    </div>
  );
}
