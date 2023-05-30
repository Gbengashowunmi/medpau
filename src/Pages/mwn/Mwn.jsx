import { FaPhone } from "react-icons/fa";
import HeadFoot from "../../component/HeadFoot";
import PageHead from "../../component/pageHead/PageHead";
import "./mwn.scss";
import ChooseUsCard from "../../component/chooseUsCard/ChooseUsCard";

export default function Mwn() {
  return (
    <HeadFoot pageTitle="MGTP" description="medpau Graduate Trainee Program">
      <PageHead
        heading="Medpau Women Network"
        image="/images/breadcrumb-image-1.jpg"
        capsHead="MWN"
      />
      <aside className="what-about-us">
        <div className="img">
          <source type="image/webp" srcSet="image.webp" />
          {/* <img src="/images/mwn.jpeg" alt="about-us" /> */}
        </div>
        <div className="details">
          <h4 className="light-blue-bg-text">MEDPAU WOMEN NETWORK (MWN) </h4>
          <h2>Mentoring Program</h2>
          <h4>INTRODUCTION</h4>
          <p>
            The Medpau Women Network <br /> A network created to connect and
            unite women in healthcare and other workspaces aimed at promoting
            growth and professionalism. <br /> The Medpau Women's Network's
            focus is to build up women especially in the healthcare workspace to
            promote a proactive career life. In doing so, it solidifies a
            supportive community a safe space for women to achieve success in
            their professional endeavors.
          </p>
          {/* <p>
            Do you know what all female high achievers' women have in common?
            Someone who helped them see themselves in ways they may not
            otherwise see in themselves, someone who held their hands and helped
            them unleash their inner strength, someone who pushed them to grow
            and guided them through it. MWN Mentoring Program is designed to
            empower women and help them build skills needed to get ahead in
            their career and rise to leadership positions. It models young women
            in the healthcare industry into high performers, high achievers and
            agents of change.
          </p> */}

          {/* <ul
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <li>Happy with Staff</li>
            <li>Quality of Care Services</li>
            <li>Intervention Success</li>
            <li>Client Satisfaction</li>
            <li>Patient Experience</li>
          </ul> */}
          {/* <p className="blue-text">Do you have any question?</p> */}
          {/* <h4>
            <a href="tel:+2349085323596">
              <FaPhone /> <span>+234908 532 3596</span>
            </a>
          </h4> */}
        </div>
      </aside>

      <section className="choose-us">
        <h3 className="light-blue-bg-text">About MWN</h3>
        <p className="heading">
          We constantly evolve in the way we meet the needs of our customers,
          always asking questions and discovering better ways to satisfy them.
          More so, our solutions are custom made, tailored to meet needs
          individually.
        </p>
        <div className="choose-us-wrapper">
          <ChooseUsCard
            title="Solutions Not Just Products"
            details="We offer custom made solutions in form of products, services and options to affordable healthcare. We support our customers and help them helps them thrive and rise above the challenges confronting healthcare businesses."
            image="images/medical-solution.jpg"
          />
          <ChooseUsCard
            title="We Really Care About You"
            details="We listen to and understand your needs and ensure we offer you what is best for you in the most cost-effective way and without compromising on quality. Knowing that a healthy society will translate to better economy and quality of lifee"
            image="images/med-care.jpeg"
          />
          <ChooseUsCard
            title="Investments In Relationship
"
            details="We understand the importance of business relationships in achieving success, which is why we build and maintain lasting relationships with our customers, and partners. By supporting them in every possible way, we grow together."
            image="images/images.jpg"
          />
          <ChooseUsCard
            title="Expert Dedicated Team
"
            details="Our people are our strongest asset. Over the years we have built a dedicated team of highly responsive Engineers and Customer Service Personnels that provides unmatched after-sales support to our customers with utmost professionalism."
            image="images/images (1).jpg"
          />
        </div>
      </section>
    </HeadFoot>
  );
}
