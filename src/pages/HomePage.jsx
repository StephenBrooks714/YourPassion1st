import Features from "../components/Features.jsx"
export default function HomePage() {
    return (
        <>
            <div className={"home-intro"}>
                <div className={"container"}>
                    <section className={"row justify-content-center align-items-center"} style={{paddingTop: "140px"}}>
                        <div className={"col-lg-8 mb-5 pb-2 text-center"}>
                            <p className={"h4 fw-light mb-1"}>
                                Let's help under resourced young adults overcome adversity and become the future innovators of the World!
                            </p>
                            <h1 className={"display-2 fw-bold text-info"}>Inspire & Be Inspired</h1>
                        </div>
                    </section>
                </div>
            </div>
            <main className={"container my-5 py-5"}>
                <section className={"row"}>
                    <Features/>
                </section>
            </main>
        </>
    );
}