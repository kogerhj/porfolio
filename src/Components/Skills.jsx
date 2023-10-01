import {skills} from "../data.js";

export default function Skills() {
    return (
        <section>
            <div className="m-auto max-w-4xl w-4/5 bg-light-gray px-10 py-10 rounded">
                <h2 className="mx-auto text-center text-4xl pb-10">Experience & Technologies</h2>
                <h3 className="font-medium text-2xl italic mb-4">Microsoft Corporation (May 2022 - Present)</h3>
                <p>
                    <b>Tools: C#, Git, Visual Studio, Azure Resource Manager (ARM) templates, Azure DevOps,
                    Azure CLI, Azure PowerShell, and various Microsoft internal tools.
                    </b>
                    <br />
                    I actively participate in daily stand-ups and embrace Agile development
                    methodologies within the Azure DevOps tool suite. My responsibilities at
                    Microsoft can largely be categorized under infrastructure engineering and
                    livesite incident response.
                </p>
                <br />
                <p>
                    Infrastructure engineering constitutes most of my development work, which has
                    focused on the development of infrastructure-as-code (IaC) to enable one-touch
                    deployments to Azure Cloud. This work has included creating IaC for new
                    services, as well as reverse engineering infrastructure for existing production
                    services. This has improved the reliability of our services by ensuring that all
                    deployments are consistent, repeatable, and well documented -- with the added
                    benefit of reducing the time required to deploy existing services to new
                    environments. I am a big believer in developing and maintaining IaC from the
                    very beginning of a project, and ensuring that new services are deployed in a
                    consistent and repeatable manner from the very beginning of their life.
                </p>
                <br />
                <p>
                    Apart from my usual development duties, I work closely with cross-functional
                    teams to handle critical incidents and coordinate resolution efforts. As a member
                    of the on-call rotation team, I regularly triage and mitigate livesite incidents.
                    Additionally, I have developed robust alert and monitoring systems to improve
                    livesite incident tracking and response time.
                </p>
                <br />
                <h3 className="font-medium text-2xl italic mb-4">Precision Systems Inc. (Jan 2022 - May 2022)</h3>
                <p>
                    <b>Tools: C/C++, Qt, CMake, Git, Bitbucket, Jira, Confluence, and Visual Studio.</b>
                    <br />
                    I actively participated in daily stand-ups and embraced Agile development
                    methodologies using the Atlassian tool suite. During my time at Precise Systems
                    I developed, tested, and maintained simulation software for the United States Navy.
                </p>
                <br />
                <h3 className="font-medium text-2xl italic mb-4">Georgia Tech Research Institute (Mar 2020 - Jan 2022)</h3>
                <p>
                    <b>Tools: C/C++, Python, LaTeX, CMake, Git, Bitbucket, Jira, Confluence,
                        Visual Studio, and Cameo. Libraries: GLFW (C++), PyLaTeX (Python),
                        Matplotlib (Python). </b>
                    <br />
                    I actively participated in regular stand-ups and embraced Agile development
                    methodologies using the Atlassian tool suite. I worked on a large number of
                    different projects that included developing and maintaining a visualization tool
                    for a LiDAR simulation, implementing a document generation tool for use with
                    model-based systems engineering (MBSE) software, and developing a low-fidelity
                    radar simulation. Additionally, I played a support role for research in the
                    application of Reinforcement Learning for the purpose of Rotorcraft Obstacle
                    Avoidance in a Simulated Environment (ROSE).
                </p>
                <br />
                <h3 className="font-medium text-2xl italic mb-4">Dynetics Inc. (May 2018 - Mar 2020)</h3>
                <p>
                    <b>
                        Tools: C/C++, Linux (CentOS), GCC, Vim, Git, Gitlab, Bash, Python, CMake,
                        Jenkins, and SQLite. Libraries: Boost (C++), Eigen (C++),
                        nlohmann's JSON (C++), and Matplotlip (Python).
                    </b>
                    <br />
                    I actively participated in regular stand-ups and embraced Agile development
                    methodologies -- primarily using Gitlab. The majority of my time at Dynetics
                    was spent supporting the acquisition process for the Lower Tier Air and Missile
                    Defense Sensor (LTAMDS) program. The work required developing a medium to
                    high-fidelity radar simulation capable of modeling a variety of significantly
                    different radar designs from the potential vendors. I was responsible for
                    designing, implementing, and owning major components of the simulation.
                    Such components included an entity management system, coordinate transform
                    utilities, the tracker system, multidimensional interpolation capabilities,
                    and a system to integrate entities into a distributed simulation environment.
                    I worked closely with a multidisciplinary team to gather requirements and to
                    rapidly iterate on the design and implementation of the simulation.
                    In addition to my simulation work, I developed and maintained a number of
                    analysis tools in support of the radar analysts on my team.
                </p>
            </div>
        </section>
    )
}