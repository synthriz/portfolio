import Behance from '../assets/socials/behance.svg'
import Github from '../assets/socials/github.svg'
import Linkedin from '../assets/socials/linkedin.svg'
import Pinterest from '../assets/socials/pinterest.svg'

export default function AboutMe() {
    return (
        <>
        <div className="flex-inline lg:flex items-center lg:items-stretch flex-auto overflow-hidden mobile-height">
            <div className="w-full lg:w-1/2 border-r-0 lg:border-r-2 border-bea-black p-6 md:p-8 overflow-auto no-scrollbar">
                <p className="mb-2 text-base md:text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                    blanditiis reprehenderit aut similique vitae nobis et corrupti
                    nemo optio! Aperiam neque deserunt voluptatum error architecto
                    totam, a accusantium impedit voluptate.
                </p>
                <p className="mb-2 text-base md:text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                    blanditiis reprehenderit aut similique vitae nobis et corrupti
                    nemo optio! Aperiam neque deserunt voluptatum error architecto
                    totam, a accusantium impedit voluptate.
                </p>
                <p className="mb-2 text-base md:text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                    blanditiis reprehenderit aut similique vitae nobis et corrupti
                    nemo optio! Aperiam neque deserunt voluptatum error architecto
                    totam, a accusantium impedit voluptate.
                </p>
                <p className="mb-2 text-base md:text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                    blanditiis reprehenderit aut similique vitae nobis et corrupti
                    nemo optio! Aperiam neque deserunt voluptatum error architecto
                    totam, a accusantium impedit voluptate.
                </p>
                <p className="text-base md:text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                    blanditiis reprehenderit aut similique vitae nobis et corrupti
                    nemo optio! Aperiam neque deserunt voluptatum error architecto
                    totam, a accusantium impedit voluptate.
                </p>
            </div>
            <div className="w-full lg:w-1/2 mx-auto">
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
        <div className="flex flex-row w-full h-auto justify-around md:justify-end gap-0 border-t-2 md:border-t-0 border-bea-black">
            <a href="" className="leading-none uppercase text-lg font-bold w-1/4 md:w-auto p-1 h-16 border-r-2 border-current border-t-0 md:border-t-2 text-center flex flex-none md:flex-1 justify-center items-center gap-0 md:gap-4">
                <img src={Github} className="h-12 md:h-full p-1 justify-self-center"/>
                <span className="sr-only md:not-sr-only"> GITHUB </span>
            </a>
            <a href="" className="leading-none uppercase text-lg font-bold w-1/4 md:w-auto p-1 h-16 border-r-2 border-current border-t-0 md:border-t-2 text-center flex flex-none md:flex-1 justify-center items-center gap-0 md:gap-4">
                <img src={Behance} className="h-12 md:h-full p-1 justify-self-center"/>
                <span className="sr-only md:not-sr-only"> Behance </span>
            </a>
            <a href="" className="leading-none uppercase text-lg font-bold w-1/4 md:w-auto p-1 h-16 border-r-2 border-current border-t-0 md:border-t-2 text-center flex flex-none md:flex-1 justify-center items-center gap-0 md:gap-4">
                <img src={Linkedin} className="h-12 md:h-full p-1 justify-self-center"/>
                <span className="sr-only md:not-sr-only"> LINKEDIN </span>
            </a>
            <a href="" className="leading-none uppercase text-lg font-bold w-1/4 md:w-auto p-1 h-16 border-current border-t-0 md:border-t-2 text-center flex flex-none md:flex-1 justify-center items-center gap-0 md:gap-4">
                <img src={Pinterest} className="h-12 md:h-full p-1 justify-self-center"/>
                <span className="sr-only md:not-sr-only"> PINTEREST </span>
            </a>
        </div>
        </>
    )
}