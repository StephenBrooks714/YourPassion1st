import data from "../helpers/data.cjs";

export default function CardData(){
    return (
        <>
            {data.map((item) => (
                <div className="col-lg-3 col-md-6 mb-5" key={item.id}>
                    <div className="card">
                        <div className={"card-icon"} style={{marginTop: "-40px"}}>
                            <i className={item.icon}></i>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.content}</p>
                            <a href={item.url} className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}