import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                <div>
                    <p>
                        Hello. ScAI welcomes applications from strongly motivated
                        students who want to pursue their Ph.D. in the areas of
                        both core AI and applied AI. Please check our research
                        and faculty pages for understanding various ongoing
                        research at ScAI. 
                    </p>
                    <p>
                        All engineering students irrespective of their
                        Bachelors/Masters discipline are welcome to join a Ph.D.
                        in ScAI. For more information, please refer to the{" "}
                        <a
                            href="/pdf/ScAI-PhD.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            2021-22 Semester 1 shortlisting criteria
                        </a>
                        . The criteria may change semester to semester, but
                        gives a broad idea of expectations.
                    </p>
                    <p>
                        Once shortlisted, ScAI will assess a student’s
                        preparedness for a PhD by a test that will include
                        probability, statistics, optimisation, linear algebra,
                        data structures, basics of AI, ML and data science, and
                        programming skills. These areas are the pre-requisites
                        for being a successful student at ScAI. If selected in
                        the test, an interview will be conducted to assess this
                        further and also fit with current advisors.
                    </p>
                    <p>
                        After being admitted to ScAI, the PhD coursework will
                        include courses in AI, Machine Learning, Data Science,
                        and mathematical foundations. The students may also be
                        asked to take specific courses needed for a student’s
                        thesis. Students who join the Ph.D. program with a
                        master's degree will have to complete a minimum of 6
                        credits, and students who join the Ph.D. program without
                        a master's degree will have to complete 20 credits.
                        These courses could be from course buckets such as
                        mathematics, learning, data science, and applications.
                        If a student has any further queries, please write to{" "}
                        <a href="mailto:office@scai.iitd.ac.in">
                            office[AT]scai.iitd.ac.in
                        </a>{" "}
                        for any clarification.
                    </p>
                     <h2>Admissions New Update</h2>
                    <p>The test and interviews for M.Tech/MSR/Ph.D. admissions will be conducted online. The exact date will be announced on very short notice. 
                    Please keep checking the website and your email.
                    </p>

                     <p>The syllabus of the test:
                         <ul>
                            <li>Basic maths (Linear Algebra, Probability, and Statistics)</li>
                            <li>Aptitude</li>
                            <li>Basics of AI/ML</li>
                            <li>Programming and Data structure.</li>
                          </ul>
                    </p>
                    <p>Ph.D. Shortlisting Criteria : {" "}<a href="/pdf/PhD_Shortlisting_Criteria_Summer_2022.pdf" target="_blank" rel="noopener noreferrer" >click here</a>
                    </p>
                    <p>M.Tech/MSR Shortlisting Criteria : {" "}<a href="/pdf/MSR_MTech_Shortlisting_Criteria_2022.pdf" target="_blank" rel="noopener noreferrer" >click here</a>
                    </p>
                    <p>
                        <a
                            href="https://ecampus.iitd.ac.in/PGADM/login"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link for Admissions
                        </a>
                    </p>
                    <p><strong>New: Provisional list of selected candidates for MSR and PhD program in Summer 2022-23 : {" "}<a href="/pdf/Final_list_MSR_PhD_Summer_2022.pdf" target="_blank" rel="noopener noreferrer" >click here</a></strong>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Data;
