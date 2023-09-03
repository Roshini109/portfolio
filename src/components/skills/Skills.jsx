import './skills.css'
import {DataObject, KeyboardArrowDown, Code, Draw} from '@mui/icons-material'

export default function Skills() {
  return (
    <div className="skill">
        <div className="sContainer">
            <h1 className="sTitle">Skills</h1>
            <div className="sDesc">My technical Level</div>
        </div>

        <div className="sWrapper">
            <div className="swLeft">
                <div className="swUp">
                    <div className="upLeft">
                        <DataObject fontSize='large' className="ulIcon" />

                        <div className="upCenter">
                        <span className="cTitle">Frontend Developer</span>
                        {/* <div className="cDesc">faghjss</div> */}

                    </div>
                    </div>
                    
                    <div className="upRight">
                        <KeyboardArrowDown className="ulIcon" fontSize='large'/>
                    </div>
                </div>
                <div className="swDown">
                    <div className="skillData">
                        <div className="skillTitle">
                            <h3 className="skillName">HTML</h3>
                            <span className="skillNumber">90%</span>
                        </div>
                        <div className="skillBar">
                            <span className="skillPerceBar skills_html"></span>
                        </div>
                    </div>

                    <div className="skillData">
                        <div className="skillTitle">
                            <h3 className="skillName">CSS</h3>
                            <span className="skillNumber">80%</span>
                        </div>
                        <div className="skillBar">
                            <span className="skillPerceBar skills_css"></span>
                        </div>
                    </div>

                    <div className="skillData">
                        <div className="skillTitle">
                            <h3 className="skillName">React</h3>
                            <span className="skillNumber">60%</span>
                        </div>
                        <div className="skillBar">
                            <span className="skillPerceBar skills_react"></span>
                        </div>
                    </div>

                    <div className="skillData">
                        <div className="skillTitle">
                            <h3 className="skillName">JavaScript</h3>
                            <span className="skillNumber">70%</span>
                        </div>
                        <div className="skillBar">
                            <span className="skillPerceBar skills_js"></span>
                        </div>
                    </div>

                </div>
            </div>
            

            <div className="swLeft">
                <div className="swUp">
                    <div className="upLeft">
                        <Code fontSize='large' className="ulIcon" />

                        <div className="upCenter">
                        <span className="cTitle">Backend Developer</span>
                        {/* <div className="cDesc">faghjss</div> */}

                    </div>
                    </div>
                    
                    <div className="upRight">
                        <KeyboardArrowDown className="ulIcon" fontSize='large'/>
                    </div>
                </div>
                <div className="swDown">
                    <div className="skillData">
                        <div className="skillTitle">
                            <h3 className="skillName">SQL</h3>
                            <span className="skillNumber">90%</span>
                        </div>
                        <div className="skillBar">
                            <span className="skillPerceBar skills_sql"></span>
                        </div>
                    </div>

                    <div className="skillData">
                        <div className="skillTitle">
                            <h3 className="skillName">Java</h3>
                            <span className="skillNumber">60%</span>
                        </div>
                        <div className="skillBar">
                            <span className="skillPerceBar skills_java"></span>
                        </div>
                    </div>

                    
                    <div className="skillData">
                        <div className="skillTitle">
                            <h3 className="skillName">Node Js</h3>
                            <span className="skillNumber">25%</span>
                        </div>
                        <div className="skillBar">
                            <span className="skillPerceBar skills_node"></span>
                        </div>
                    </div>

                    <div className="skillData">
                        <div className="skillTitle">
                            <h3 className="skillName">PHP</h3>
                            <span className="skillNumber">20%</span>
                        </div>
                        <div className="skillBar">
                            <span className="skillPerceBar skills_php"></span>
                        </div>
                    </div>


                    <div className="skillData">
                        <div className="skillTitle">
                            <h3 className="skillName">Express Js</h3>
                            <span className="skillNumber">30%</span>
                        </div>
                        <div className="skillBar">
                            <span className="skillPerceBar skills_ex"></span>
                        </div>
                    </div>

                </div>
            </div>



            <div className="swLeft">
                <div className="swUp">
                    <div className="upLeft">
                        <Draw fontSize='large' className="ulIcon" />

                        <div className="upCenter">
                        <span className="cTitle">Designer</span>
                        {/* <div className="cDesc">faghjss</div> */}

                    </div>
                    </div>
                    
                    <div className="upRight">
                        <KeyboardArrowDown className="ulIcon" fontSize='large'/>
                    </div>
                </div>
                <div className="swDown">
                    <div className="skillData">
                        <div className="skillTitle">
                            <h3 className="skillName">Figma</h3>
                            <span className="skillNumber">80%</span>
                        </div>
                        <div className="skillBar">
                            <span className="skillPerceBar skills_fg"></span>
                        </div>
                    </div>

                    <div className="skillData">
                        <div className="skillTitle">
                            <h3 className="skillName">Photoshop</h3>
                            <span className="skillNumber">40%</span>
                        </div>
                        <div className="skillBar">
                            <span className="skillPerceBar skills_ps"></span>
                        </div>
                    </div>

                    <div className="skillData">
                        <div className="skillTitle">
                            <h3 className="skillName">Illustrator</h3>
                            <span className="skillNumber">40%</span>
                        </div>
                        <div className="skillBar">
                            <span className="skillPerceBar skills_is"></span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}
