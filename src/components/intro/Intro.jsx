import './intro.css'

export default function Intro() {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-leftWrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Roshini Dias</h1>
                <div className="i-title">
                    <div className="i-titleWrapper">
                        <div className="i-titleItem">
                            Web Developer
                        </div>
                        <div className="i-titleItem">
                            UI/UX Designer
                        </div>
                        <div className="i-titleItem">
                            Pencil Artist
                        </div>
                        <div className="i-titleItem">
                            Mobile Photographer
                        </div>
                    </div>
                </div>
                <p className="i-desc" align="justify">
                    I'm a frontend web developer and UI/UX designer 
                    with a passion for creating seamless digital experiences. 
                    When I'm not crafting code or perfecting interfaces, 
                    you'll find me expressing my creativity through pencil drawings. 
                    Explore my work, and let's connect to bring your ideas to life.
                    </p>

                <button className="downloadCv">Download CV</button>

            </div>
             
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src="/assets/p1.png" alt="" className="i-img" />
        </div>
    </div>
  )
}


