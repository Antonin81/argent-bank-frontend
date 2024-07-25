import bankTree from "../../../assets/bank-tree.jpeg";
import iconChat from "../../../assets/icon-chat.png";
import iconMoney from "../../../assets/icon-money.png";
import iconSecurity from "../../../assets/icon-security.png";
import FeatureItem from "../../components/FeatureItem/FeatureItem";

function LandingPage() {
  const FEATURES = [
    {
      img: iconChat,
      alt: "Chat icon",
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      img: iconMoney,
      alt: "Chat icon",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      img: iconSecurity,
      alt: "Chat icon",
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <main>
      <div className="hero">
        <img src={bankTree} alt="" />
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p>Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {FEATURES.map((feature) => (
          <FeatureItem data={feature} key={feature.title} />
        ))}
      </section>
    </main>
  );
}

export default LandingPage;
