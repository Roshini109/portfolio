import './education.css'

export default function Education() {
  return (
    <div className="e">
        <div className="eContainer">
            <h1 className="eTitle">Education</h1>
        </div>
        <div className="eWrapper">
            <div className="eLeft">
                <div className="eTop">
                    <div className="academicYear">2003-2007</div>
                    <div className="academicType">Primary Education</div>
                </div>
                <div className="eStyle">
                    <div className="styleCircle"></div>
                    <hr className="eWrapHr" />
                </div>
                <div className="eBottom">
                    <div className="institute">Swarnapali Girls' College</div>
                    <div className="province">Anuradhapura</div>
                    <p className="eduDesc">I attended primary school, focusing 
                    on my foundational education, which continued until I reached the
                    grade 5 scholarship examination stage.</p>
                </div>
            </div>
            <div className="eCenter">
                <div className="eTop">
                    <div className="academicYear">2008-2016</div>
                    <div className="academicType">Secondary Education</div>
                </div>
                <div className="eStyle">
                    <div className="styleCircle"></div>
                    <hr className="eWrapHr" />
                </div>
                <div className="eBottom">
                <div className="institute">Anuradhapura Central College</div>
                    <div className="province">Anuradhapura</div>
                    <p className="eduDesc">I attended secondary school, where I prepared for 
                    and completed both the Ordinary Level Examination(2013) and 
                    Advanced Level Examination(2016)s. </p>
                </div>
            </div>
            <e className="eRight">
                <div className="eTop">
                    <div className="academicYear">2020-2024</div>
                    <div className="academicType">Higher Education</div>
                </div>
                <div className="eStyle">
                    <div className="styleCircle"></div>
                    <hr className="eWrapHr" />
                </div>
                <div className="eBottom">
                <div className="institute">Sabaragamuwa University of Sri Lanka</div>
                    <div className="province">Belihuloya</div>
                    <p className="eduDesc">Currently, I'm pursuing higher education 
                    at this university, where I am still an undergraduate student,
                    working towards my degree.</p>
                </div>
            </e>
        </div>
    </div>
  )
}
