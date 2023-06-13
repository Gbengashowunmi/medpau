import { FaPhone } from "react-icons/fa";
import HeadFoot from "../../component/HeadFoot";
import PageHead from "../../component/pageHead/PageHead";
import "./mwn.scss";
import ChooseUsCard from "../../component/chooseUsCard/ChooseUsCard";
import TeamMember from "../../component/teamMember/TeamMember";
import TeamMwn from "../../component/teamMember/TeamMwn";
import { Link, NavLink } from "react-router-dom";
import { Button, Modal } from "@mui/material";
import { useState } from "react";

export default function Mwn() {
  // mwp modal
  const [openMwpModal, setOpenMwpModal] = useState(false);
  const handleOpenMwpModal = () => setOpenMwpModal(true);
  const handleCloseMwpModal = () => {
    setOpenMwpModal(false);
    // setShowTerms(false);
  };
  return (
    <HeadFoot
      pageTitle="Medpau Women Network"
      description="Medpau Women Network"
    >
      <PageHead
        heading="Medpau Women Network"
        image="/images/breadcrumb-image-1.jpg"
        capsHead="MWN"
      />
      <aside className="what-about-us">
        <div className="img">
          <source type="image/webp" srcSet="image.webp" />
          <img src="/images/mwn-hero.jpeg" alt="about-us" />
        </div>
        <div className="details">
          <h4 className="light-blue-bg-text">MEDPAU WOMEN NETWORK (MWN) </h4>
          <h4>Mentoring Program</h4>
          <h4 className="light-blue-bg-text">INTRODUCTION</h4>
          <p>
            The Medpau Women Network <br /> A network created to connect and
            unite women in healthcare and other workspaces aimed at promoting
            growth and professionalism. <br /> The Medpau Women's Network's
            focus is to build up women especially in the healthcare workspace to
            promote a proactive career life. In doing so, it solidifies a
            supportive community a safe space for women to achieve success in
            their professional endeavors.
          </p>
          {/* why sign up  */}
          <section className="choose-us">
            <h3 className="light-blue-bg-text">
              Why sign up for MWN Mentoring Program?
            </h3>
            <p className="why_sgn_up">
              The MWN Mentoring program is designed to facilitates professional
              growth at different stages in your career journey, through
              collaborative learning, hands on projects, group discussion,
              peer-to-peer learning, 1-on-1 conversations. <br /> It creates a
              free and safe space where you to ask questions, receive support,
              build confidence, gain new perspectives and deeper insight into
              the Healthcare industry. <br />
              You will engage in group discussions, 1-on-1 as well as
              peer-to-peer learning. You will also engage with leaders from
              Senior and Management positions, benefit from their rich
              experiences and knowledge of the industry. <br /> They will also
              help you navigate your current challenges as well as challenges
              you are likely going to encounter in the future. <br /> You will
              also build strong and lifelong professional relationship, and
              connections. <br /> By the time you finish this program, you will
              be able to clearly define and set your career goals, be guided to
              achieve them, receive and apply constructive feedback necessary to
              achieve those goals. <br />
              You will chart your career path and build new skills needed to
              take on new roles, challenge yourself and rise to higher positions
              in your career.
            </p>
          </section>
        </div>
      </aside>

      <section className="about_mwn">
        <h3 className="light-blue-bg-text">About MWN</h3>

        <div className="choose-us-wrapper">
          <div className="vision_wrapper mwp_vision">
            {/* mission  */}
            <div
              className="vision_mission"
              data-aos="zoom-in"
              data-aos-offset="20"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h3>Our Mission</h3>
              <p>
                Building a community of impact-driven women to help tear down
                barriers and create more opportunities for other women in
                Nigeria and beyond. MWN also strives to ensure inclusivity,
                equity, and fair treatment of women in healthcare.
              </p>
            </div>
            {/* vision  */}
            <div
              className="vision_mission"
              data-aos="zoom-in"
              data-aos-offset="20"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h3>Our Vision</h3>
              <p>
                To create a network of women who are confident, self-reliant and
                resilient leaders in the society and contribute immensely to
                humanitarian growth through empowerment of the people.
              </p>
            </div>

            {/* <img src="/images/about_us.jpg" alt="" /> */}
          </div>

          {/* core values  */}
          <div className="core_values">
            <div className="core_value_head ">
              <h3 className="light-blue-bg-text">Our Core Values</h3>
              <p>
                Our values are that all women, not just in the healthcare
                community alone, become self-sustaining, well respected,
                authentic, and truly empowered. The MWN is committed to
                enhancing women's skills to support their advancement in their
                respective workplace. We are a learning organization as we
                encourage our women to take risks and make mistakes, to learn
                and grow and get better, stronger, and smarter.
              </p>
            </div>
            <div className="values_wrapper">
              <div
                className="core_value"
                data-aos="zoom-in"
                data-aos-offset="20"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h5 className="value_head">Empowerment</h5>
                <img src="/images/empowerment.jpg" alt="" />
                <p>
                  Our goal as a community is to empower women and young girls
                  while also creating inclusive, open and prosperous societies.
                  In doing so, we will ensure to uplift women in a
                  non-competitive environment and provide women a safe and
                  positive space to grow and build skills
                </p>
              </div>
              <div
                className="core_value"
                data-aos="zoom-in"
                data-aos-offset="20"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h5 className="value_head">Integrity</h5>
                <img src="/images/integrity.jpg" alt="" />
                <p>
                  We will never create or communicate in any community that
                  undermines and demeans women we exist to nurture. We make
                  ourselves accountable to the highest integrity by impacting
                  women to bring them to their highest potential and facilitate
                  a long-term positive change in both their professional and
                  personal lives.
                </p>
              </div>

              <div
                className="core_value"
                data-aos="zoom-in"
                data-aos-offset="20"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h5 className="value_head">Resilience</h5>
                <img src="/images/resilience.jpg" alt="" />

                <p>
                  We see the strength and courage of women everyday to push
                  through boundaries and obstacles in a male dominated world and
                  their ability to never give up. While we strive to inspire and
                  encourage them, they in turn inspire us to stay focused and
                  committed to our purpose as a community
                </p>
              </div>
              <div
                className="core_value"
                data-aos="zoom-in"
                data-aos-offset="20"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h5 className="value_head">Leadership Development</h5>
                <img src="/images/leadership.jpg" alt="" />

                <p>
                  Our goal is to provide women with the knowledge of networking
                  and innovative skills to build them up to their maximum
                  potentials. We offer them the know-how, tools, and connections
                  to help them attain professional success. In doing so, we can
                  be certain to develop talents within the network to enhance
                  their skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team members  */}
      <section className="team-wrapper">
        <h4 className="light-blue-bg-text head">Meet The Team</h4>
        <TeamMwn />
      </section>

      <section className="footnote">
        <h5>Would you like to </h5>
        <ul>
          <Link to="/mwn-form">
            <li> Sign up for membership ?</li>
          </Link>
          <li> Become a volunteer ?</li>
          <li onClick={handleOpenMwpModal}> Sign up for mentorship ?</li>
          <li> See Upcoming Events ?</li>
        </ul>

        {/* modal for mwn  */}

        <Modal
          open={openMwpModal}
          onClose={handleCloseMwpModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="healthvest_wrapper">
            {/* //cancel or close modal button  */}
            <div className="cancel" onClick={handleCloseMwpModal}>
              X
            </div>

            {/* modal header  */}
            <>
              <h2 className="light-blue-bg-text">Sign up for mentorship</h2>
              <div className="modal-btns">
                <ul>
                  <NavLink to="/mentee-form">
                    <Button className="appointment-btn">
                      Sign up as a Mentee
                    </Button>
                  </NavLink>
                  <NavLink to="/mentor-form">
                    <Button className="appointment-btn">
                      Sign up as a Mentor
                    </Button>
                  </NavLink>
                </ul>
              </div>
            </>
          </div>
        </Modal>
      </section>
    </HeadFoot>
  );
}
