import React from "react";
import ProfilePic from './images/Josh Lutz_DC.jpg'
import DownloadButton from './images/DownloadButton.png'
import ResumeDownload from './docs/Josh Lutz 2023 Resume.pdf'


function About(props) {
  return (
    <div className="main-section" id="resume">
      <h2>Resum&#233;<br></br>
        <img className="about-me-img" src={ProfilePic} alt="User Profile Pic of the Portfolio"/>
        <a href={ResumeDownload} download id="download-hyperlink">
          <div id="download">
            <div id="download-text">Download</div>  
              <img className="download-button" src={DownloadButton} alt="Download Button"/>          
          </div>
        </a>        
      </h2>
        <div class="resume-section" id="experience">
          <div class="resume-section-content">
            <div class="resume-header">EXPERIENCE</div>
            <div class="employer">
              <div>
                <h3>Lockheed Martin
                <p>Recipient of Various Formal Recognitions Including 6 Monetary Awards</p>
                <p>Clearance: Top Secret</p>
                </h3>
                <div class="resume-card">
                  <div class="resume-title">Manager of Special Tools & Projects, Washington D.C.<span id="resume-date">September 2022 - Present</span></div>
                  <p>Refined leadership skills by managing a team focused on automation, data management, and user experience</p>
                  <ul>
                    <li>Oversaw progress of special projects by implementation of Kanban boards, user stories, and acceptance criteria</li>
                    <li>Led a team to develop, code, test, and deploy an Alteryx-Tableau database to enhance the executive business decision process</li>
                  </ul>                  
                </div>
                <div class="resume-card">
                  <div class="resume-title">Independent Cost Evaluation Staff Analyst, Washington D.C.<span id="resume-date">March 2021 - September 2022</span></div>
                  <p>Expanded analytical thinking with an emphasis on statistical theory and regression analysis</p>
                  <ul>
                    <li>Developed, coded, and tested a program to analyze inputs to determine proposal delegation derived from dynamic algorithms</li>
                    <li>Utilized data modeling and regression to inform a confidence factor on program cost and performance</li>
                  </ul>                  
                </div>
                <div class="resume-card">
                  <div class="resume-title">Senior Program Finance Analyst, Washington D.C.<span id="resume-date">July 2019 - March 2021</span></div>
                  <p>Cultivated a thorough knowledge of earned value and the efficient allocation of resources necessary for successful program performance</p>
                  <ul>
                    <li>Incorporated linear regression techniques in calculating outlooks and long range plans for increased forecasting accuracy</li>
                    <li>Introduced automated tools, processes, and checkpoints to ensure accuracy and compliance, saving hourly and direct costs</li>
                  </ul>                  
                </div>
                <div class="resume-card">
                  <div class="resume-title">Corporate Contracts, Bethesda, MD<span id="resume-date">January 2017 - July 2019</span></div>
                  <p>Heightened sense of business acumen through managing contractual risk and formulating data analytics for Program Assessment & Evaluation</p>
                  <ul>
                    <li>Developed, coded, and tested an Access-SQL database regarding independent cost metrics and presented the resulting analytics to the CFO and the Corporation’s leadership team</li>
                    <li>Engaged in multiple levels of the Corporation’s business pursuits, reviews, and approvals maximizing return on invested capital</li>
                  </ul>                  
                </div>
                <div class="resume-card">
                  <div class="resume-title">Government Finance, Lakeland, FL<span id="resume-date">January 2016 - January 2017</span></div>
                  <p>Fostered a deeper understanding of the allocation of costs as it relates to the disclosure statement and government regulations</p>
                  <ul>
                    <li>Performed in-depth analysis in support of government negotiations regarding unallowable premiums and Incurred Cost Claims</li>
                    <li>Designated by leadership to partake in a tiger team to analyze and rectify post-implementation issues with Concur</li>
                  </ul>                  
                </div>
                <div class="resume-card">
                  <div class="resume-title">Accounts Receivable Management, Columbus, OH<span id="resume-date">September 2012 - January 2016</span></div>
                  <p>Developed business acumen by using financial analytical skills to identify process inefficiencies and form procedures to improve upon them</p>
                  <ul>
                    <li>Held positions of increasing rank by accurately forecasting, modeling, and reconciling receivables</li>
                    <li>Coded automated checkpoints to identify discrepancies between databases and source systems to relieve current resources</li>
                  </ul>                  
                </div>
              </div>
            </div>
          </div>
          <div class="resume-section-content">
            <div class="resume-header">EDUCATION</div>
            <div class="employer">
              <div class="resume-card">
                <div class="resume-title">Ohio State Full Stack Developer Bootcamp<span id="resume-date">October 2022 - April 2023</span></div>
                <ul>
                  <li>Full Stack Development Certificate Presented by Trilogy</li>
                </ul>
              </div>
              <div class="resume-card">
                <div class="resume-title">Ohio University, Athens, OH<span id="resume-date">August 2018 - August 2020</span></div>
                <ul>
                  <li>Masters in Business Administration: Business Analytics, GPA: 4.0</li>
                </ul>
              </div>
              <div class="resume-card">
                <div class="resume-title">The Ohio State University, Fisher College of Business, Columbus, OH<span id="resume-date">September 2007 - August 2011</span></div>
                <ul>
                  <li>Dual Major in Bachelor of Science in Business Administration: Finance and International Business</li>
                  <li>Delta Sigma Pi Professional Business Fraternity</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="resume-section-content">
            <div class="resume-header">ADDITIONAL LEADERSHIP EXPERIENCE</div>
            <div class="employer">
              <div class="resume-card">
                <div class="resume-title">Finance Leadership Development Program (FLDP)<span id="resume-date">January 2015 - December 2017</span></div>
                <ul>
                  <li>Created Full Spectrum Leadership Workshops that are utilized to teach and foster a leadership culture within the organization</li>
                </ul>
              </div>
              <div class="resume-card">
                <div class="resume-title">Quest4Leadership Training by The Partnership for Excellence<span id="resume-date">February 2014 - May 2014</span></div>
                <ul>
                  <li>Completed leadership coursework developed and taught by CEO and former Automobile Executive Margot Hoffman, PhD</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="resume-section-content">
            <div class="resume-header">SKILLS, TECHNOLOGIES, & INTERESTS</div>
                <ul>
                  <li>Proficient in Full Stack Development including HTML, CSS, JavaScript, React, MERN, jQuery, MySQL, APIs, Node, OOP, MVC, and Express</li>
                  <li>Experienced in Data Analytics and Data Management including Python, SQL, Tableau, Alteryx, R, and Microsoft Access</li>
                  <li>Skilled in Excel, Excel’s Power Query, VBA, and Microsoft Office</li>
                  <li>Involved in local food drive charity and volunteer initiative MENU (Mission: Engage. Nourish. Unite.)</li>
                </ul>
          </div>
        </div>
    </div>
  )
}

export default About;