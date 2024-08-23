import FeatureCards from "../components/CardData.jsx";

export default function HomePage() {
    return (
        <>
            <div className={"home-intro"}>
                <section className={"container"}>
                    <section className={"row justify-content-center align-items-center text-center"}
                             style={{height: "100vh"}}>
                        <div className={"col-lg-10"}>
                            <h1 className={"display-1 mb-1 cursive text-info"}>Inspire & Be Inspired</h1>
                            <h2 className={"mb-3"}>
                                by helping under resourced adults overcome adversity and become the
                                future innovators of the world!
                            </h2>
                            <a href="https://www.paypal.com/donate?token=zHYtAyOj5_O5I_cAH22WBqWUNgKCBv3RTecR3oULlT9Dol1iVzutsuK1PEuoWyzZ6lvi2S5fS_hewhyL"
                               target={"_blank"}
                               className={"button me-2"}>Donate To Help</a>
                            <a href="" className={"button me-2"}>Join Our Team</a>
                        </div>
                    </section>
                </section>
            </div>
            <section className={"feature-wrapper"}>
                <div className={"container"}>
                    <div className={"row text-center align-items-center"}>
                        <FeatureCards/>
                    </div>
                </div>
            </section>
            <section className={"container"}>
                <div className={"row align-items-center mb-5 pb-3"}>
                    <article className={"col-lg-6 mb-3"}>
                        <iframe width="100%" height="326" src="https://www.youtube.com/embed/EjIUN7aJjwE"
                                title="Oak Park &#39;Hidden Gem&#39; helps kids discover their passion" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </article>
                    <article className={"col-lg-6 mb-3"}>
                        <h3 className={"fw-bold mb-2"}>AS FEATURED ON CBS NEWS CHICAGO</h3>
                        <p className={"lead mb-2"}>
                            YourPassion1st was recently featured on CBS News Chicago. This inspiring video segment
                            showcases the transformative work of YourPassion1st, highlighting the stories of individuals
                            whose lives have been forever changed by the organization’s unwavering commitment. Watch the
                            video and witness the incredible power of following your passion with YourPassion1st.
                        </p>
                        <a href="https://www.cbsnews.com/chicago/news/oak-park-hidden-gem/" target={"_blank"} className={"btn btn-primary"}>Read Full Story</a>
                    </article>
                </div>
            </section>
        </>
    );
}