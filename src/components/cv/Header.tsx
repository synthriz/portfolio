import LinkedinIMG from "../../assets/cv/linkedin.png";
import EmailIMG from "../../assets/cv/email.png";
import LocalIMG from "../../assets/cv/address.png";
import GithubIMG from "../../assets/cv/github.png";
import WebsiteIMG from "../../assets/cv/website.png";

const Header: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-1 mt-2 text-sm ">
      <h1 className="text-xl font-bold">BEATRIZ TAVARES</h1>
      <p className="font-normal text-base">
        Front-end Developer | UX/UI Designer
      </p>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <a className="inline-flex items-center gap-1" aria-label="Email Address" >
          <img src={EmailIMG} className="w-4.5" alt="Email" />
          <span>beatrizqtavares@gmail.com</span>
        </a>
        <a className="inline-flex items-center gap-1" aria-label="Address">
          <img src={LocalIMG} className="w-4.5" alt="Address" />
          <span>Barueri, São Paulo, BRA</span>
        </a>
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center text-sm">
        <a className="inline-flex items-center gap-1" aria-label="Github" href="https://github.com/synthriz">
          <img src={GithubIMG} className="w-3.5" alt="Github" />
          <span>github.com/synthriz</span>
        </a>
        <a className="inline-flex items-center gap-1" aria-label="LinkedIn" href="https://www.linkedin.com/in/trizbeatavares/">
          <img src={LinkedinIMG} className="w-3.5" alt="LinkedIn" />
          <span>linkedin.com/in/trizbeatavares</span>
        </a>
        <a className="inline-flex items-center gap-1" aria-label="Website" href="https://trizdev.vercel.app/">
          <img src={WebsiteIMG} className="w-3.5" alt="Website" />
          <span>https://trizdev.vercel.app/</span>
        </a>
      </div>
    </section>
  );
};

export default Header;