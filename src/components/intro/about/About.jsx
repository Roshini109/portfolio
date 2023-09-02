import './about.css'

export default function About() {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="/assets/po1.jpg" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">gfhftrrs msjjsydt mssdhdsuj sks sgstd gdaesg agsrrdh shsh
            jdudj dbdbdb shtka</p>
            <p className="a-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Repellendus adipisci, nostrum eaque architecto maiores nihil incidunt blanditiis 
            maxime! Voluptatum velit quia explicabo 
            facere maxime ut? Minima illum aliquam magni eos.</p>
            <div className="a-award">
                <img src="/assets/award1.jpg" alt="" className="a-awardImg" />
                <div className="a-awardTxt">
                    <h4 className="a-awardTitle">International Design Awards 2023</h4>
                    <p className="a-awardDesc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Omnis sint ea excepturi ab delectus commodi debitis, cumque temporibus officiis
                     recusandae hic natus quo quidem quam? Voluptate velit eum provident dignissimos.
                     </p>
                </div>
            </div>
        </div>
    </div>
  )
}
