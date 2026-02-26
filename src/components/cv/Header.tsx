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
        <div className="inline-flex items-center gap-1" aria-label="Email Address">
          <img src={EmailIMG} className="w-4.5" alt="" aria-hidden="true" />
          <span>beatrizqtavares@gmail.com</span>
        </div>
        <div className="inline-flex items-center gap-1" aria-label="Address">
          <img src={LocalIMG} className="w-4.5" alt="" aria-hidden="true" />
          <span>Barueri, São Paulo, BRA</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center text-sm">
        <a className="inline-flex items-center gap-1" aria-label="GitHub (opens in a new tab / abre em nova aba)" href="https://github.com/synthriz" target="_blank" rel="noopener noreferrer">
          <img src={GithubIMG} className="w-3.5" alt="" aria-hidden="true" />
          <span>github.com/synthriz</span>
        </a>
        <a className="inline-flex items-center gap-1" aria-label="LinkedIn (opens in a new tab / abre em nova aba)" href="https://www.linkedin.com/in/trizbeatavares/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedinIMG} className="w-3.5" alt="" aria-hidden="true" />
          <span>linkedin.com/in/trizbeatavares</span>
        </a>
        <a className="inline-flex items-center gap-1" aria-label="Website (opens in a new tab / abre em nova aba)" href="https://trizdev.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={WebsiteIMG} className="w-3.5" alt="" aria-hidden="true" />
          <span>https://trizdev.vercel.app/</span>
        </a>
      </div>
    </section>
  );
};

export default Header;
