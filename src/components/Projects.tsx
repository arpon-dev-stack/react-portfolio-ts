
function Projects() {
    return (
        <div className="flex flex-col items-center gap-3 relative rotate-x-45 translate-z-50 rotate-y-45">
            <div className="w-64 absolute -translate-z-32 rotate-x-90 border">
                <img className="size-64 backface-visible border" src="./fadelivery.webp" alt="" />
            </div>
            <div className="w-64 absolute translate-z-32">
                <img className="size-64" src="./bus_ticket.webp" alt="" />
            </div>
            <div className="w-64 absolute -translate-z-32">
                <img className="size-64"src="./chatting_app.webp" alt="" />
            </div>
            <div className="w-64 absolute translate-z-32">
                <img className="size-64" src="./travel_agency.webp" alt="" />
            </div>
            <div className="w-64 absolute -translate-z-32">
                <img className="size-64" src="./teaching_app.webp" alt="" />
            </div>
            <div className="w-64 absolute translate-z-32">
                <img className="size-64 border inset-0" src="./freelance_agency.webp" alt="" />
            </div>
        </div>
    )
}

export default Projects;