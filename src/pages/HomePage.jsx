import Features from "../components/Features.jsx"
export default function HomePage() {
    return (
        <>
            <main className={"container"}>
                <section className={"row justify-content-center align-items-center"} style={{marginTop: "140px"}}>
                    <div className={"col-lg-10 mb-5 pb-2 text-center"}>
                        <p className={"lead mb-1"}>
                            Hi, and welcome to
                        </p>
                        <h1 className={"display-4 fw-bold text-info"}>Your Passion 1st</h1>
                    </div>
                    <Features />
                </section>
            </main>
        </>
    );
}