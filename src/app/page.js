import CourseBuiltAroundYou from "@/component/CourseBuiltAroundYou/CourseBuiltAroundYou";
import EnglishCourseForm from "@/component/EnglishCourseForm/EnglishCourseForm";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import HeroSection from "@/component/HeroSection/HeroSection";
import PracticeSpeaking from "@/component/PracticeSpeaking/PracticeSpeaking";
import PricingPlans from "@/component/PricingPlans/PricingPlans";
import ReviewsSection from "@/component/ReviewsSection/ReviewsSection";
import ScrollingStatements from "@/component/ScrollingStatements/ScrollingStatements";
import VisitSchools from "@/component/VisitSchools/VisitSchool";
import WhyLearnWithUs from "@/component/whyLearnData/whyLearnData";


export default function Home() {
  return (
    <div>

      <Header></Header>
      <HeroSection></HeroSection>
      <WhyLearnWithUs></WhyLearnWithUs>
    
      <PracticeSpeaking></PracticeSpeaking>
       <CourseBuiltAroundYou></CourseBuiltAroundYou>
       <PricingPlans></PricingPlans>
       <VisitSchools></VisitSchools>
       <ScrollingStatements></ScrollingStatements>
       <ReviewsSection></ReviewsSection>
       <EnglishCourseForm></EnglishCourseForm>
        <Footer></Footer>
    </div>
  );
}
