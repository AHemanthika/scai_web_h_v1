import useScript from "../../utils/useScript";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardPlain from "../NewsCard/NewsCardPlain";
import Slide from "./Slide";

const ClipSlider = () => {
    useScript("/js/clip_slider.js");
    return (
        <div className="slider">
            <div className="slider__slides">
                <Slide
                    active
                    heading="Welcome!"
                    subText=""
                    // subText="Greetings, AI Enthusiast!"
                    // backImg="/bg-land.jpg"
                    backImg="/land-temp.jpg"
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "30vh",
                            right: "10vw",
                        }}
                    >
                        <NewsCardPlain
                            // category="Establishment"
                            category=" "
                            title="IIT Delhi establishes School of AI"
                            link="https://home.iitd.ac.in/news-ai.php"
                            description={
                                <span
                                    style={{
                                        color: "#303030",
                                        fontSize: "1.05rem",
                                    }}
                                >
                                    Indian Institute of Technology (IIT) Delhi
                                    has established an independent 'School of
                                    Artificial Intelligence (ScAI)' on its
                                    campus. The School of Artificial
                                    Intelligence (ScAI) aims to cement IIT
                                    Delhi’s leadership position in India and
                                    considerably improve its global standing.
                                </span>
                            }
                        />
                    </div>
                </Slide>
                <Slide
                    // heading="Establishment Articles"
                    heading="News Articles on ScAI's Launch"
                    subText=""
                    // subText="Some news articles upon establishment."
                    backImg="/DJ_Pic.jpg"
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "20vh",
                            right: "10vw",
                        }}
                    >
                        <NewsCard
                            image="https://static.toiimg.com/thumb/msid-77902892,imgsize-201060,width-300,height-200,resizemode-4/77902892.jpg"
                            title="IIT-Delhi launches AI school, to begin course from January"
                            link="https://timesofindia.indiatimes.com/city/delhi/iit-delhi-launches-ai-school-to-begin-course-from-january/articleshow/77902846.cms"
                            category="The Times of India"
                            description={
                                <span style={{ color: "#303030" }}>
                                    IIT-Delhi announced the establishment of
                                    School of Artificial Intelligence on its
                                    campus. The school will begin its PhD
                                    programme in January.
                                </span>
                            }
                        />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            top: "20vh",
                            right: "35vw",
                        }}
                    >
                        <NewsCardPlain
                            title="आईआईटी दिल्ली में स्कूल ऑफ आर्टिफिशियल इंटेलीजेंस शुरू, बहुविषयक विभाग मिलकर करेंगे काम"
                            link="https://www.amarujala.com/education/school-of-artificial-intelligence-starts-at-iit-delhi"
                            category="अमर उजाला"
                            description={
                                <span style={{ color: "#303030" }}>
                                    देश का पहला पीएचडी आर्टिफिशियल इंटेलीजेंस
                                    (एआई) बैच आईआईटी दिल्ली में 2021 सत्र में
                                    शुरू होगा। आईआईटी दिल्ली कैंपस में देश का
                                    पहला स्कूल ऑफ आर्टिफिशियल इंटेलीजेंस बनकर
                                    तैयार हो गया है। जल्द ही एआई एमटेक प्रोग्राम
                                    भी शुरू किया जाएगा। आईआईटी दिल्ली के
                                    डायरेक्टर प्रो. वी रामगोपाल राव ने बुधवार को
                                    कहा कि प्रधानमंत्री नरेंद्र मोदी के
                                    दिशा-निर्देश के तहत स्कूल ऑफ आर्टिफिशियल
                                    इंटेलीजेंस तैयार हो गया।
                                </span>
                            }
                        />
                    </div>
                </Slide>
                <Slide
                    heading="Plans for ScAI (in Hindi)"
                    // subText="Video looks cool, isn't it?"
                    subText=""
                    backImg="/bg3.jpg"
                >
                    <div
                        className="embed-responsive embed-responsive-16by9"
                        style={{
                            position: "absolute",
                            top: "30vh",
                            right: "11vw",
                            height: "349px",
                            width: "620px",
                        }}
                    >
                        <iframe
                            className="embed-responsive-item hide_iframe"
                            src="https://www.youtube.com/embed/ghV9bi_oPxk?autoplay=0"
                            allowFullScreen
                        />
                    </div>
                </Slide>
                <Slide
                    heading="Announcements!"
                    subText="Please read carefully!"
                    backImg="/bg2.jpg"
                    prev
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "25vh",
                            right: "10vw",
                        }}
                    >
                        <NewsCardPlain
                            // category="Establishment"
                            category="Announcement"
                            title=" "
                            // link="https://home.iitd.ac.in/news-ai.php"
                            description={
                                <span
                                    style={{
                                        fontSize: "1.3rem",
                                        color: "black",
                                    }}
                                >
                                    1. ScAI welcomes applications from strongly
                                    motivated students who want to pursue their
                                    Ph.D. in the areas of both core AI and
                                    applied AI.
                                    <br />
                                    <a
                                        href="https://ecampus.iitd.ac.in/PGADM/login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Link for Admissions
                                    </a>
                                    <br />
                                    <br />
                                    2. ScAI welcomes applications for post
                                    doctoral and faculty positions in the areas
                                    of both core AI and applied AI. For details
                                    please contact{" "}
                                    <a href="mailto:hodscai@admin.iitd.ac.in">
                                        hodscai@admin.iitd.ac.in
                                    </a>
                                    <br />
                                    <a
                                        href="https://home.iitd.ac.in/jobs-iitd/index.php"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Link for Post
                                    </a>
                                </span>
                            }
                        />
                    </div>
                </Slide>
            </div>
            <div className="slider__control">
                <div className="slider__control-line"></div>
                <div className="slider__control-line"></div>
            </div>
            <div className="slider__control slider__control--right m--right">
                <div className="slider__control-line"></div>
                <div className="slider__control-line"></div>
            </div>
        </div>
    );
};

export default ClipSlider;