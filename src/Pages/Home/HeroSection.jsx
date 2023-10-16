export default function HeroSection() {
    return (
        <section id="heroSection" classNmae="hero--Section">
            <div classname="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> Hey, I'm Shardul</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title color"> Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1> 
                    <p className="hero--section--description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error quis sit natus earum quod corrupti qui repellat. Nisi sunt nobis et autem blanditiis 
                        <br />cumque fuga ducimus asperiores labore inventore.
                    </p> 
                </div>
                <button className="btn btn-primary"> Contact Me</button>
            </div>
            <div className="hero--section--img">
               <img src="./img/Hero-Image.jpg" alt="Hero Image" />
            </div>
        </section>
    );
}