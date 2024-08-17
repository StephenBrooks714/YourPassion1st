import data from "../helpers/featureData.cjs"

export default function Features() {
    return (
        <>
            <div className={"row justify-content-center align-items-center"}>
                {data.map((feature) => (
                    <div className={"col-lg-3 col-md-6 mb-3 text-center"} key={feature.id}>
                        <div className={"card p-2"}>
                            <h3 className={"fw-bold"}>{feature.name}</h3>
                            <p className={"lead"}>{feature.description}</p>
                            <a href={" " + feature.link} className={"btn btn-primary"} target={"_blank"}>Check It Out</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}