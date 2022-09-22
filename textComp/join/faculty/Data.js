import styles from "./Data.module.css";

const Data = () => {
    return (
        <>
            <div className={styles.main}>
                Yardi ScAI invites faculty applications in all areas of artificial
                intelligence, where AI is interpreted broadly to include all of
                traditional AI, machine learning and data science. Subareas of
                interest include (but are not limited to):
                <ul>
                    <li>
                        <strong>Mathematical Foundations of AI</strong>{" "}
                        (optimization for ML, Markov chains, random walks and
                        Martingales, matrix and tensor factorization for AI,
                        learning theory, etc.),{" "}
                    </li>
                    <li>
                        <strong>Machine Learning</strong> (deep learning,
                        reinforcement learning, probabilistic models, green ML,
                        neuro-symbolic ML, quantum ML, etc.),
                    </li>
                    <li>
                        <strong>Data Science</strong> (data mining, graph
                        mining, data streams, information retrieval, etc.),
                    </li>
                    <li>
                        <strong>Traditional AI</strong> (search, constraints,
                        knowledge representation and reasoning, game theory,
                        multi-agent systems, planning, reasoning under
                        uncertainty, etc.),
                    </li>
                    <li>
                        <strong>Applied AI</strong> (natural language processing
                        and text mining, computational biology, computer vision,
                        speech processing, robotics, physical AI, knowledge
                        graphs, humans and AI, cognitive systems, neuroscience,
                        IoT and sensor networks, AI on the edge, cloud-based AI,
                        etc.),
                    </li>
                    <li>
                        <strong>Ethics of AI</strong> (fairness, bias,
                        accountability, transparency, explainability, safety,
                        privacy, trustworthiness, etc.),
                    </li>
                    <li>
                        <strong>Applications of AI to domain areas</strong>{" "}
                        (healthcare, material science, education, energy,
                        atmospheric science, bioinformatics, communication,
                        agriculture, transportation, e-commerce, finance,
                        crowdsourcing, unmanned vehicles and aerospace, industry
                        4.0, intelligent and sustainable buildings and
                        infrastructure, hardware, social impact, other emergent
                        applications of AI).
                    </li>
                </ul>
                Yardi ScAI strongly encourages applicants with demonstrated
                track-record of working at the intersection of an application
                area and the AI fields.{" "}
                <p>
                    If you are interested in applying to Yardi ScAI but have specific
                    questions about life at IITD, work-life balance in India,
                    opportunities for growth/success at Yardi ScAI, please feel free
                    to reach out the head of Yardi ScAI at{" "}
                    <a href="mailto:hodscai@admin.iitd.ac.in">
                        hodscai[AT]admin.iitd.ac.in
                    </a>
                </p>
                <p>
                    <a
                        href="https://home.iitd.ac.in/jobs-iitd/index.php"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Link for Post
                    </a>
                </p>
            </div>
        </>
    );
};

export default Data;
