import Behance from '../assets/socials/behance.svg'
import Github from '../assets/socials/github.svg'
import Linkedin from '../assets/socials/linkedin.svg'
import Pinterest from '../assets/socials/pinterest.svg'

export default function AboutMe() {
    return (
        <>
        <div className="flex-inline md:flex items-center md:items-stretch flex-auto overflow-y-scroll md:overflow-hidden" style={{ height: 520 }}>
            <div className="w-full md:w-1/2 border-r-0 md:border-r-2 border-bea-black p-8 overflow-auto no-scrollbar">
                <p className="mb-2 text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                    blanditiis reprehenderit aut similique vitae nobis et corrupti
                    nemo optio! Aperiam neque deserunt voluptatum error architecto
                    totam, a accusantium impedit voluptate.
                </p>
                <p className="mb-2 text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                    blanditiis reprehenderit aut similique vitae nobis et corrupti
                    nemo optio! Aperiam neque deserunt voluptatum error architecto
                    totam, a accusantium impedit voluptate.
                </p>
                <p className="mb-2 text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                    blanditiis reprehenderit aut similique vitae nobis et corrupti
                    nemo optio! Aperiam neque deserunt voluptatum error architecto
                    totam, a accusantium impedit voluptate.
                </p>
                <p className="mb-2 text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                    blanditiis reprehenderit aut similique vitae nobis et corrupti
                    nemo optio! Aperiam neque deserunt voluptatum error architecto
                    totam, a accusantium impedit voluptate.
                </p>
                <p className="mb-2 text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                    blanditiis reprehenderit aut similique vitae nobis et corrupti
                    nemo optio! Aperiam neque deserunt voluptatum error architecto
                    totam, a accusantium impedit voluptate.
                </p>
            </div>
            <div className="w-full md:w-1/2">
                {/* <img
                src="https://avatars.githubusercontent.com/u/111395659?v=4"
                alt="profile picture"
                className="square-content bg-gray-400 bg-opacity-20"
                /> */}
                <img
                    src="https://avatars.githubusercontent.com/u/111395659?v=4"
                    alt="Profile picture"
                    className="flex-auto flex items-center justify-center w-full h-full object-cover bg-gray-400 bg-opacity-20"
                />
            </div>
        </div>
        <div className="flex flex-row w-full h-auto justify-around gap-2 md:gap-0 md:justify-end border-t-2 md:border-t-0 border-bea-black">
            <a href="" className="leading-none uppercase text-lg w-1/4 md:w-auto p-1 h-16 flex-none md:flex-1 border-r-2 border-current border-t-0 md:border-t-2 text-center flex justify-center items-center gap-0 md:gap-4 font-bold">
                <img src={Github} className="justify-self-center"/>
                <span className="hidden md:inline"> GITHUB </span>
            </a>
            <a href="" className="leading-none uppercase text-lg w-1/4 md:w-auto p-1 h-16 flex-none md:flex-1 border-r-2 border-current border-t-0 md:border-t-2 text-center flex justify-center items-center gap-0 md:gap-4 font-bold">
                <img src={Behance} className="justify-self-center"/>
                <span className="hidden md:inline"> Behance </span>
            </a>
            <a href="" className="leading-none uppercase text-lg w-1/4 md:w-auto p-1 h-16 flex-none md:flex-1 border-r-2 border-current border-t-0 md:border-t-2 text-center flex justify-center items-center gap-0 md:gap-4 font-bold">
                <img src={Linkedin} className="justify-self-center"/>
                <span className="hidden md:inline"> LINKEDIN </span>
            </a>
            <a href="" className="leading-none uppercase text-lg w-1/4 md:w-auto p-1 h-16 flex-none md:flex-1 border-current border-t-0 md:border-t-2 text-center flex justify-center items-center gap-0 md:gap-4 font-bold">
                <img src={Pinterest} className="justify-self-center"/>
                <span className="hidden md:inline"> PINTEREST </span>
            </a>
        </div>
        </>
    )
}