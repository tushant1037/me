import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship at Serv Platform <span>2020</span>
                        </h2>
                        <p>
                          I have done an internship in Serv Platform Company. I
                          worked on Backend Part of mobile application which
                          include firestore, firebase authentication, firebase
                          cloud functions, Rest API using firebase cloud
                          functions, Node JS, Typescript, Javascript as well as
                          Integrating apis like Microsoft azure content
                          moderation, creating zappier app, Tookan API for
                          product delivery service.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship at TIEC <span>2019</span>
                        </h2>
                        <p>
                          I have done an internship under my college's Technical
                          Innovation and Entrepreneurship Cell. I have builded
                          IOT Based project which include Hardware as well as
                          Software. The project title was Live ECG monitoring. I
                          used ESP8266, NodeMCU for micro-controller fro
                          integration of hardware and builded software using
                          HTML, CSS, Javascript.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Undergraduation at SGGS <span> 2017-2021</span>
                        </h2>
                        <p>
                          I am pursuing my under-graduation studies with major
                          in Computer science and engineering. I Participated in
                          many Hackathons and did lot of small as well as large
                          projects.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Primary and Higher Education <span>2005-2017</span>
                        </h2>
                        <p>
                          I Completed my primary education at gandhi vidhyalay
                          parbhani. and then I cracked exam of JNV Entrance
                          Test, MTSE and got admission in JNV Parbhani. I have
                          completed my secondary education at Jawahar Navoday
                          Vidhyalay (JNV) Parbhani. I Completed my higher
                          secondary education at Bharti college Parbhani.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
