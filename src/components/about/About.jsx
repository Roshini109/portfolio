import './about.css'

export default function About() {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="./portfolio/assets/po1.jpg" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub" align="justify">I'm an undergraduate student at <b> Sabaragamuwa University of Sri Lanka</b>. I'm pursuing a degree in 
            <b> 'Bsc Hons in Computing and Information Systems'</b>. My heart lies in coding, particularly in the realm of frontend development. 
            I'm fascinated by the art of crafting beautiful, user-friendly interfaces that engage and inspire.</p>
            <p className="a-desc" align="justify">
                Outside the world of programming, I have a creative side that finds expression through pencil drawings. It's a hobby I've 
                nurtured over the years, allowing me to bring intricate visions to paper. Additionally, I'm an avid mobile
                photographer, always on the lookout for the perfect shot to capture the essence of a moment.
            </p><br></br>
            <p><b>Welcome to my digital canvas!</b></p>
        </div>
    </div>
  )
}
