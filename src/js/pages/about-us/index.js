// Libraries
import React from 'react'
import { connect } from 'react-redux'
import { Link, Element } from 'react-scroll'
import {Button} from 'reactstrap'
import store from '../../store'

@connect((store) => {
    return {
      s1_title          : store.about.s1_title,
      s1_button         : store.about.s1_button,
      s2_title          : store.about.s2_title,
      s2_1              : store.about.s2_1,
      s2_2              : store.about.s2_2,
      s2_3              : store.about.s2_3,
      s2_4              : store.about.s2_4,
      s2_5              : store.about.s2_5,
      s3_1_title        : store.about.s3_1_title,
      s3_1_content      : store.about.s3_1_content,   
      s3_2_title        : store.about.s3_2_title,
      s3_2_content_1    : store.about.s3_2_content_1,
      s3_2_content_2    : store.about.s3_2_content_2,
      s3_2_content_3    : store.about.s3_2_content_3,
      s3_2_content_4    : store.about.s3_2_content_4,
      s4_title          : store.about.s4_title,
      s4_1              : store.about.s4_1,
      s4_2              : store.about.s4_2,
      s4_3              : store.about.s4_3,
      s4_4              : store.about.s4_4,
      s5                : store.about.s5,
    };
})

class About extends React.Component {
      constructor(props){
            super(props);
      }

      render(){

            let { s1_title, s1_button, s2_title, s2_1, s2_2, s2_3, s2_4, s2_5, s3_1_title, s3_1_content, s3_2_title, s3_2_content_1, s3_2_content_2, s3_2_content_3, s3_2_content_4, s4_title, s4_1, s4_2, s4_3, s4_4, s5} = this.props;

            return (
                  <div id='about-us'>
                        <div id='section-one'>
                              <div class='content'>   
                                    <h1 class='title'>{ s1_title }</h1>
                                    <Link to="to" spy={true} smooth={true} offset={50} duration={1000} class='green-default'>
                                         <Button class='green-default'>{ s1_button }</Button>
                                    </Link>
                              </div>
                        </div>  
                        <Element name = 'to' >
                              <div id='section-two'>
                                    <div class='content'>
                                          <h2 class='title'>{ s2_title }</h2>
                                          <p>{ s2_1 }</p>   
                                          <p>{ s2_2 }</p>         
                                          <p>{ s2_3 }</p>   
                                          <p>{ s2_4 }</p>   
                                          <p>{ s2_5 }</p>   
                                    </div>
                              </div>
                        </Element>   
                        <div id='section-three'>
                              <div class='content'>
                                    <h2 class='title'>{ s3_1_title }</h2>
                                    <p class='vision'>{ s3_1_content }</p>
                                    <h2 class='title mission'>{ s3_2_title }</h2>
                                    <p>{ s3_2_content_1 }</p>
                                    <p>{ s3_2_content_2 }</p>
                                    <p>{ s3_2_content_3 }</p>
                                    <p>{ s3_2_content_4 }</p>
                              </div>
                        </div>   
                        <div id='section-four'>
                              <div class='content'>
                                    <h2 class='title'>{ s4_title }</h2>
                                    <div class='row'>
                                          <div class='col-md-6 col-lg-3'>
                                                <div class='round-wrapper baswara'></div>
                                                <h4>Baswara Pramudita</h4>
                                                <h5>{ s4_1 }</h5>
                                          </div>
                                          <div class='col-md-6 col-lg-3'>
                                                <div class='round-wrapper agus'></div>
                                                <h4>Agus Nusantoro</h4>
                                                <h5>{ s4_2 }</h5>
                                          </div>
                                          <div class='col-md-6 col-lg-3'>
                                                <div class='round-wrapper bambang'></div>
                                                <h4>Bambang Pramusinto</h4>
                                                <h5>{ s4_3 }</h5>
                                          </div>
                                          <div class='col-md-6 col-lg-3'>
                                                <div class='round-wrapper sutrisna'></div>
                                                <h4>Sutrisna</h4>
                                                <h5>{ s4_4 }</h5>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div id='section-five'>
                              <div class='content'>
                                    <h2 class='title'>"{ s5 }"</h2>
                              </div>
                        </div>
                  </div>
            )
      }
}

export default About;



