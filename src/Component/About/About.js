import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'

export default function About() {
  return (
    <>
      <div className='about-page'>
        <Container>
          <p className="about-head pt-5">We are ShopKart</p>
          <p className='about-subhead'>Providing you with the most delightful shopping experience.</p>
          <Row className='about-head-desc justify-content-between mt-5'>
            <Col xs={7} lg = {7} xl = {5} >
              <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjEvMDUvMDUvMDUvNTUvNTMvNDAyZDVhOTEtZTMwMy00MTc0LTkyMTAtN2Q3YmQxMDM4ZmI1L0dyb3VwIDRAMngucG5nIl1d/9695760c59b32b16/Group%204%402x.png?name=Group+4%402x"
                alt="head_img"
                className='about-head-img'
              />
            </Col>
            <Col xs={12} lg = {12} xl = {6} className = "about-head-details">
              <p>At ShopKart, we want to solve the biggest problem in mobile: everyone is guessing.Publishers need to know what apps to build, how to monetize them, and where to price them. <br /><br /><br />
                Advertisers and brands need to identify their target users, and determine where to allocate resources in order to reach them most effectively. Investors need to know which apps and genres are growing the quickest, and where users are really spending their time (and money).<br /><br /><br />
                In business, we need data to make informed decisions. Apptopia provides the most actionable mobile app insights in the industry. We aim to make this data available to as many people as possible.
              </p>
            </Col>
          </Row>
        </Container>
        <img src="https://d39afr5wio5j08.cloudfront.net/assets-p/about/about-hero-bg-d6d968d4a566bfa7ee99d9f21fad58987f6f40648d220c804d3bc333d23c6b1f.svg"
          alt="wave_img"
          className='wave-img'
        />
      </div>

      <Container>
        <p className="about-head">Meet Our <span className='leader'>LeaderShip</span></p>
        <Row className='justify-content-center mt-5'>
          <Col className='person-1 me-3' xs={6} md = {4} lg = {3}>
            <Row className='person-details'>
              <Col>
                <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjIvMDYvMDYvMTYvMjAvMjIvNjExOGY5YjktZjc1My00M2NmLWFmMTEtYjA4OTcxNzI0Y2RkL0pLIEhlYWRzaG90MiBjb3B5LmpwZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/7ccc6a3e41a1648a/JK%20Headshot2%20copy.jpeg?name=JK+Headshot2+copy"
                  alt="person_img"
                  className='person-img'
                />
              </Col>
              <Col className='perosn-details mt-4'>
                <p className='per-name'>Gourab Mukherjee</p>
                <p className='per-desgn pb-2'>CO-Founder & CEO</p>
                <p className='pt-2 per-details'>Leads the daily operations at Apptopia,<br /> including product development and global sales. Jonathan is passionate about people, sports, and really efficient processes.</p>
              </Col>
            </Row>
          </Col>

          <Col className='person-2 me-3' xs={6} md = {4} lg = {3}>
            <Row className='person-details'>
              <Col>
                <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTIvMjAvMTEvMDkvMjIvMzhhNTcwNGEtYjcwZi00NmI5LThmNzUtYjkyODFkN2NjNzdkL3NlZ2VfYi1oZWFkc2hvdEAyeC5wbmciXV0/9d6e8f11e20a9352/sege_b-headshot%402x.png?name=sege+b-headshot%402x"
                  alt="person_img"
                  className='person-img'
                />
              </Col>
              <Col className='perosn-details mt-4'>
                <p className='per-name'>John Walker</p>
                <p className='per-desgn pb-2'>Chief Technology Officer</p>
                <p className='pt-2 per-details'>Fearlessly leads our engineering team and is responsible for Apptopia’s underlying technology. His focus is on data acquisition, with a passion for backend architecture and infrastructure.</p>
              </Col>
            </Row>
          </Col>

          <Col className='person-3' xs={6} md = {4} lg = {3}>
            <Row className='person-details'>
              <Col>
                <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjEvMDcvMjYvMTMvMDQvMTAvNWM4MDRjMDUtOGI2My00NTYzLTg4OTctYTY4ZGM4MjIwNzQ2L3RzYW50b3MuanBlZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/0d577100ce8e6610/tsantos.jpeg?name=tsantos"
                  alt="person_img"
                  className='person-img'
                />
              </Col>
              <Col className='perosn-details mt-4'>
                <p className='per-name'>Brian Potter</p>
                <p className='per-desgn pb-2'>Chief Product Officer</p>
                <p className='pt-2 per-details'>Oversees all stages of Apptopia's product lifecycle. Strategic thinker with a passion for building teams and creating elegant solutions to complex problems.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Meet Our Team Section */}
      <div className='team mt-5'>
        <Container>
          <p className='team-head'>Meet Our <span className='leader'>Team</span></p>
          <div className='hiring'>
            We're Hiring!
          </div>

          <Row className='team-sec mt-5' xs={1} md = {2} lg = {3} xl = {4}>
            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjEvMTEvMTIvMTUvMTEvNTIvZDE5MWNlMjctNmRiNy00NTYzLTk4ZjUtY2Q1MjExZDAwZGI1L3ZhbmlraW4uanBnIl0sWyJwIiwiZW5jb2RlIiwianBlZyIsIi1xdWFsaXR5IDg1Il1d/968bf9f72b46eb8b/vanikin.jpeg?name=vanikin"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>John Cena</p>
                  <p className='team-desgn'>Data Engineer</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTEvMjUvMTAvMTcvNDIvMTdhYjFhYTYtZWU3NC00YjNmLWE4YjQtYzViNjM3NTg1NTY1L2ltZy1hZGFtQDJ4LmpwZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/58430cb07958ef21/img-adam%402x.jpeg?name=img-adam%402x"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Harry Morris</p>
                  <p className='team-desgn'>Customer Success Manager</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjAvMDEvMDMvMDYvNDIvNTIvNGZiOWFlNDktNGQ5ZS00YTIyLTliYzQtNTFkYzI4OTA0NDY1L2phbm5hLXNxdWFyZS1pbWFnZS5qcGciXSxbInAiLCJlbmNvZGUiLCJqcGVnIiwiLXF1YWxpdHkgODUiXV0/c3850d9671d18ded/janna-square-image.jpeg?name=janna-square-image"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Daisy Moren</p>
                  <p className='team-desgn'>Senior Data Engineer</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTIvMjMvMTkvMzQvNDAvNzI4ZmRkZTItOTYzNy00MDI1LWEzNDUtMmIwMzYzMDM2NWE0L2Nvbm5vcl9lLmpwZWciXSxbInAiLCJlbmNvZGUiLCJqcGVnIiwiLXF1YWxpdHkgODUiXV0/1ad8ae4f3e2cfa35/connor_e.jpeg?name=connor+e"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Chris Loren</p>
                  <p className='team-desgn'>Infurstructure Engineer</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjEvMDYvMTUvMTYvNTIvMjUvYTkwNjc4ZTItY2M1NC00MjIyLThmZjEtZTFlZTVmY2IyZmU4L2x0aW1vZmllaWV2YS5qcGciXSxbInAiLCJlbmNvZGUiLCJqcGVnIiwiLXF1YWxpdHkgODUiXV0/3ba5352bccc046d6/ltimofieieva.jpeg?name=ltimofieieva"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Tess Suchoff</p>
                  <p className='team-desgn'>Director of Strategic Data Partnerships</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjIvMDYvMDMvMTQvMTgvMjMvYzEyOTU5MzYtMWIzMS00M2QzLWI0NjAtMDM5NTA3ODM0NmI5L3ZzaHVsaWVwb3YuanBlZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/3197ebf947807264/vshuliepov.jpeg?name=vshuliepov"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Rodion Shylo</p>
                  <p className='team-desgn'>R&D Staff Engineer</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjEvMDMvMjQvMTAvMjgvMjMvZGFiNDFkMzEtZjcyMC00NDA1LWI5MDEtYmEwZjU3ODk5MzEwL3Z0c2l1cmEuanBnIl0sWyJwIiwiZW5jb2RlIiwianBlZyIsIi1xdWFsaXR5IDg1Il1d/41076fa0e7a96586/vtsiura.jpeg?name=vtsiura"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Timur Zagorsky</p>
                  <p className='team-desgn'>Staff Data Engineer</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTIvMjMvMTkvMzgvNDEvYzQwYjQ3YmMtZDUxZC00NzU3LTk2MWYtMmI1MDVlYmZhOTlhL21pdGNoX3QuanBlZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/373a2de10d66183a/mitch_t.jpeg?name=mitch+t"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Vitalii Skakun</p>
                  <p className='team-desgn'>Director of Infrastructure Engineering</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjIvMDEvMzEvMTMvMDMvNTQvMTM2ZjVlNDQtY2MwMC00YjljLTkyNjItOWU0NzUyOWZjNmQxL21zaWx2aWEuanBlZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/9fed9e31489e3b5d/msilvia.jpeg?name=msilvia"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Nicole Pettit</p>
                  <p className='team-desgn'>Senior Manager of Talent Development</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjAvMDEvMDIvMTYvNDEvNTQvMDhiMDUyZTktMDdmNy00YzcyLWI0MWQtMjAyNTRiMjA3ODE4L25teWNoa2EuanBlZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/9d22d44909869c69/nmychka.jpeg?name=nmychka"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Mark Menery</p>
                  <p className='team-desgn'>Senior Director of Revenue Growth</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTEvMjUvMTAvMTcvNDEvOTczMjhjNzEtODQ4Zi00OGEzLThlZDUtZDhmYmIzYTA0N2Y3L2RlbmlzLXZlbGljaHVrQDJ4LmpwZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/e205c74167725327/denis-velichuk%402x.jpeg?name=denis-velichuk%402x"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Denis Velichuk</p>
                  <p className='team-desgn'>Senior Front End Engineer</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTIvMjMvMTkvMzYvMjAvNGQ1MTM4MDAtYTc4ZS00MzFlLTg1MDItM2MxODcyZDdiYzc4L2JlbmRvbl96LmpwZWciXSxbInAiLCJlbmNvZGUiLCJqcGVnIiwiLXF1YWxpdHkgODUiXV0/7ca96006d29f7eb7/bendon_z.jpeg?name=bendon+z"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Rodion Shylo</p>
                  <p className='team-desgn'>Accountant</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Data, Deals and Projects Section */}
      <Container>
        <p className='project-head mt-3'>Data, Deals, and <span className='leader'>Projects</span></p>
        <div className='project-container'>
          <div className='img-1'>
            <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjAvMDIvMjcvMTgvNDQvMzkvODA5ZThiMzItZWYxOS00ODY0LWE0N2UtNjdmYWExNTA1MzU5L0lNR18xQDJ4LmpwZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/414a13eaf0486d96/IMG_1%402x.jpeg?name=IMG+1%402x"
              alt="img_1"
              className='project-img'
            />
          </div>

          <div className='img-2'>
            <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjAvMDIvMjcvMTgvNDUvMDQvMmVhN2FiNmMtNzMwNy00MWVhLTg4ZDktYzQwZjhlNGM4MGU0L0lNR18yQDJ4LmpwZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/06fc16248e0157ed/IMG_2%402x.jpeg?name=IMG+2%402x"
              alt="img_1"
              className='project-img'
            />
          </div>

          <div className='img-3'>
            <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjAvMDIvMjcvMTgvNDQvMzkvODA5ZThiMzItZWYxOS00ODY0LWE0N2UtNjdmYWExNTA1MzU5L0lNR18xQDJ4LmpwZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/414a13eaf0486d96/IMG_1%402x.jpeg?name=IMG+1%402x"
              alt="img_1"
              className='project-img'
            />
          </div>

          <div className='img-4'>
            <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjAvMDIvMjcvMTgvNDUvNDUvMDQ3Y2Q1MjMtNzZmZS00N2YwLWI3OTYtMTE2NzEyYWI3YzU5L0lNR180QDJ4LmpwZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/c81dab462709b35d/IMG_4%402x.jpeg?name=IMG+4%402x"
              alt="img_1"
              className='project-img'
            />
          </div>

          <div className='img-5'>
            <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjAvMDIvMjcvMTgvNDYvMDYvNzJlNzBiZDEtNGFlMi00OTRhLWEwNTItYzdmMjk3YzgwNWFjL0lNR181QDJ4LmpwZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/3327bb37a4750984/IMG_5%402x.jpeg?name=IMG+5%402x"
              alt="img_1"
              className='project-img'
            />
          </div>

          <div className='img-6'>
            <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjAvMDIvMjcvMTgvNDYvMjUvMWZkN2U5OGEtN2ViZC00NzgzLWFkMzQtNWQzZGY4Y2VkNmUyL0lNR182QDJ4LmpwZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/d037e1ae0a6cb12d/IMG_6%402x.jpeg?name=IMG+6%402x"
              alt="img_1"
              className='project-img'
            />
          </div>

          <div className='img-7'>
            <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjAvMDIvMjcvMTgvNDYvNDEvYmQ4MzI4YzAtNDg3OC00YzUwLThlNmQtOWIwOTBmMDRkZjU2L0lNR183QDJ4LmpwZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/ec67fa3628323673/IMG_7%402x.jpeg?name=IMG+7%402x"
              alt="img_1"
              className='project-img'
            />
          </div>
        </div>
      </Container>

      {/* Meet Our Investers */}
      <div className='team mt-5'>
        <Container>
          <p className='team-head'>Meet Our <span className='leader'>Investors</span></p>
          <Row className='team-sec mt-5' xs={1} md = {3}>
            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMjEvMDgvMDYvMTAvMjYvMDkvM2IzNzYwNjctYjkzNi00Y2ZjLWJhNzItNzQwYTM5YzEyYzg1L0ZyYW1lIDEucG5nIl1d/cd87c8b56c5da242/Frame%201.png?name=Frame+1"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>ABS Capital Partners</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTIvMjAvMTIvNTkvMzMvMTY0MWUyNWEtYjZkZC00Mjc0LThkZDktZjAxYWE0ZDFmZGQ1L3NvdW5kLWxvZ28tcm91bmRAMngucG5nIl1d/82a3b079a024711c/sound-logo-round%402x.png?name=sound-logo-round%402x"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Sound Ventures</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTIvMjAvMTIvNTkvMzMvYmYzYTYxZDUtNGEzNy00ZTQ0LWE3NzYtMjViODNlNjMxODJhL2Jsb3Nzb20tbG9nby1yb3VuZEAyeC5wbmciXV0/bd3611fe87880044/blossom-logo-round%402x.png?name=blossom-logo-round%402x"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Blossom Street Ventures</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTIvMjAvMTIvNTgvNDcvOGI3OWJlNmUtZjY4My00ZDIyLWE5N2EtZDBlZWFkZDcxYTI0L25ld2Z1bmQtbG9nby1yb3VuZC5wbmciXV0/f74ac37f6f24e20d/newfund-logo-round.png?name=newfund-logo-round"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Newfund Capital</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTIvMjYvMTgvMDEvMTYvMDU1YTkyZjItMmYzOC00YjQ0LThiZWMtZTcyMTNlZmExYzM3L21hcmtfY3ViYW4tbG9nby1yb3VuZEAyeC5wbmciXV0/949409e79ff91f5b/mark_cuban-logo-round%402x.png?name=mark+cuban-logo-round%402x"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Mark Cuban Companies</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className='team-info'>
                <Col className='img-cen'>
                  <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTIvMjAvMTIvNTkvMzMvYjc1ZTIwMDUtMGNiOC00Y2IzLTgwYzktZmYzMTI1NzI1ZTNkL3RlbGVncmFwaF9oaWxsLWxvZ28tcm91bmRAMngucG5nIl1d/faae133969c12035/telegraph_hill-logo-round%402x.png?name=telegraph+hill-logo-round%402x"
                    alt="team_img"
                    className='team-img'
                  />
                </Col>
                <Col className='team-details'>
                  <p className='team-name mt-3'>Telegraph Hill Capital</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <p className='loca-head'>Our <span className='leader'>Locations</span></p>
        <Row className='justify-content-evenly pb-5 loc-con'>
          <Col xs = {12} lg = {4} className = "ps-4">
            <Row className='hq'>
              <Col xs = {4} lg = {6}>
                <img src="https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTIvMjAvMTMvMDQvMzIvYTdlZjRiZmItMGZlNS00NzI5LWJlNDEtZmM1MjIxYzJkYzYxL2hxLWJ1aWxkaW5nQDJ4LnBuZyJdXQ/036793073aef6198/hq-building%402x.png?name=hq-building%402x"
                  alt="loc_img"
                  className='loc-img'
                />
              </Col>
              <Col className='loc-sec'>
                <p className='loc-name-1'>HQ Saltlake</p>
                <p className='loc-details-1'>
                  FD Block, Sector III, Bidhannagar, Kolkata
                  <br/>
                  855-APPTOPIA
                  <br/>
                  700003
                </p>
              </Col>
            </Row>
          </Col>
          
          <Col xs = {12} lg = {4} >
            <Row className='extra-loc'>
              <Col xs = {2} lg = {2}>
                <img src = "https://d1nuzn6tpp7gri.cloudfront.net/public/pictures/W1siZiIsIjIwMTkvMTIvMjAvMTMvMDQvMzIvNmExOGEyZmQtNjE5NS00MTdmLTkyNmMtYjVkNGYyOTcwMjJjL2xvY2F0aW9uLXBpbkAyeC5wbmciXV0/ab0f4c7499cf96c4/location-pin%402x.png?name=location-pin%402x" 
                  alt = "loc_img"
                  className='loc-img-1'
                />
              </Col>
              <Col>
                <p className='loc-name-2'>Dumdum</p>
                <p className='loc-details-2'>59, Tripura Enclave, Circular Road</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
