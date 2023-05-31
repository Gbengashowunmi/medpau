import { FaPhone } from "react-icons/fa";
import HeadFoot from "../../component/HeadFoot";
import PageHead from "../../component/pageHead/PageHead";
import "./mwn.scss";
import ChooseUsCard from "../../component/chooseUsCard/ChooseUsCard";
import TeamMember from "../../component/teamMember/TeamMember";
import TeamMwn from "../../component/teamMember/TeamMwn";

export default function Mwn() {
  const aboutMwn = [
    { head: "Our Vision", body: "" },
    { head: "Our Vision", body: "" },
    { head: "Our Vision", body: "" },
    { head: "Our Vision", body: "" },
    { head: "Our Vision", body: "" },
  ];
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
          <img src="/images/mwn.jpeg" alt="about-us" />
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

      <section className="about_mwn">
        <h3 className="light-blue-bg-text">About MWN</h3>

        <div className="choose-us-wrapper">
          <div className="vision_wrapper mwp_vision">
            <div className="vision_mission">
              <h3>Our Mission</h3>
              <p>
                Building a community of impact-driven women to help tear down
                barriers and create more opportunities for other women in
                Nigeria and beyond. MWN also strives to ensure inclusivity,
                equity, and fair treatment of women in healthcare.
              </p>
            </div>
            <div className="vision_mission">
              <h3>Our Vision</h3>
              <p>
                To create a network of women who are confident, self-reliant and
                resilient leaders in the society and contribute immensely to
                humanitarian growth through empowerment of the people.
              </p>
            </div>
            <div className="vision_mission">
              <h3>OUR CORE VALUES</h3>
              <p>
                ur values are that all women, not just in the healthcare
                community alone, become self-sustaining, well respected,
                authentic, and truly empowered. The MWN is committed to
                enhancing women's skills to support their advancement in their
                respective workplace. We are a learning organization as we
                encourage our women to take risks and make mistakes, to learn
                and grow and get better, stronger, and smarter.
              </p>
            </div>
            <div className="vision_mission">
              <h3>Integrity</h3>
              <p>
                We will never create or communicate in any community that
                undermines and demeans women we exist to nurture. We make
                ourselves accountable to the highest integrity by impacting
                women to bring them to their highest potential and facilitate a
                long-term positive change in both their professional and
                personal lives.
              </p>
            </div>
            <div className="vision_mission">
              <h3>Empowerment</h3>
              <p>
                Our goal as a community is to empower women and young girls
                while also creating inclusive, open and prosperous societies. In
                doing so, we will ensure to uplift women in a non-competitive
                environment and provide women a safe and positive space to grow
                and build skills
              </p>
            </div>
            <div className="vision_mission">
              <h3>Resilience</h3>
              <p>
                We see the strength and courage of women everyday to push
                through boundaries and obstacles in a male dominated world and
                their ability to never give up. While we strive to inspire and
                encourage them, they in turn inspire us to stay focused and
                committed to our purpose as a community
              </p>
            </div>
            <div className="vision_mission">
              <h3>Leadership Development</h3>
              <p>
                Our goal is to provide women with the knowledge of networking
                and innovative skills to build them up to their maximum
                potentials. We offer them the know-how, tools, and connections
                to help them attain professional success. In doing so, we can be
                certain to develop talents within the network to enhance their
                skills
              </p>
            </div>
          </div>

        </div>
      </section>
      <section className="choose-us">
        <h3 className="light-blue-bg-text">
          Why sign up for MWN Mentoring Program?
        </h3>
        <p>
          The MWN Mentoring program is designed to facilitates professional
          growth at different stages in your career journey, through
          collaborative learning, hands on projects, group discussion,
          peer-to-peer learning, 1-on-1 conversations. It creates a free and
          safe space where you to ask questions, receive support, build
          confidence, gain new perspectives and deeper insight into the
          Healthcare industry. You will engage in group discussions, 1-on-1 as
          well as peer-to-peer learning. You will also engage with leaders from
          Senior and Management positions, benefit from their rich experiences
          and knowledge of the industry. They will also help you navigate your
          current challenges as well as challenges you are likely going to
          encounter in the future. You will also build strong and lifelong
          professional relationship, and connections. By the time you finish
          this program, you will be able to clearly define and set your career
          goals, be guided to achieve them, receive and apply constructive
          feedback necessary to achieve those goals. You will chart your career
          path and build new skills needed to take on new roles, challenge
          yourself and rise to higher positions in your career.
        </p>
      </section>
      <section className="team-wrapper">
        <h4 className="light-blue-bg-text head">Meet The Team</h4>
        <TeamMwn />
      </section>

      <section className="footnote">
        <ul>
          <li> Sign up for membership</li>
          <li> Become a volunteer</li>
          <li> Find a local club near you</li>
          <li> Upcoming Events</li>
        </ul>
      </section>
    </HeadFoot>
  );
}
