import BusinessCardHeader from "./BusinessCardHeader";
import BusinessCardContent from "./BusinessCardContent";
import Footer from "./Footer";

const BusinessCard = () => {
  return (
    <div className="business-card">
      <BusinessCardHeader />
      <BusinessCardContent />
      <Footer />
    </div>
  );
};

export default BusinessCard;
