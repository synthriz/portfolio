import ASTROSvg from '../assets/skills/brand-astro - iconSvg.co.svg';
import CSSSvg from '../assets/skills/brand-css3 - iconSvg.co.svg';
import FIGMASvg from '../assets/skills/brand-figma - iconSvg.co.svg';
import FLUTTERSvg from '../assets/skills/brand-flutter - iconSvg.co.svg';
import GITSvg from '../assets/skills/brand-git - iconSvg.co.svg';
import HTMLSvg from '../assets/skills/brand-html5-iconSvg.co.svg';
import JSSvg from '../assets/skills/brand-javascript - iconSvg.co.svg';
import NEXTSvg from '../assets/skills/brand-nextjs - iconSvg.co.svg';
import NPMSvg from '../assets/skills/brand-npm - iconSvg.co.svg';
import PNPMSvg from '../assets/skills/brand-pnpm - iconSvg.co.svg';
import REACTSvg from '../assets/skills/brand-react - iconSvg.co.svg';
import RNATIVESvg from '../assets/skills/brand-react-native - iconSvg.co.svg';
import TWINDSvg from '../assets/skills/brand-tailwind - iconSvg.co.svg';
import TYSvg from '../assets/skills/brand-typescript - iconSvg.co.svg';
import VITESvg from '../assets/skills/brand-vite - iconSvg.co.svg';
import YARNSvg from '../assets/skills/brand-yarn - iconSvg.co.svg';


//constante p skills
export const skills = [
  // front (8 itens)
  {
    title: "HTML",
    imagem: HTMLSvg,
    area: ["front"],
  },
  {
    title: "CSS",
    imagem: CSSSvg,
    area: ["front"],
  },
  {
    title: "Javascript",
    imagem: JSSvg,
    area: ["front"],
  },
  {
    title: "typescript",
    imagem: TYSvg,
    area: ["front", "mobile"],
  },
  {
    title: "react js",
    imagem: REACTSvg,
    area: ["front"],
  },
  {
    title: "next js",
    imagem: NEXTSvg,
    area: ["front"],
  },
  {
    title: "astro",
    imagem: ASTROSvg,
    area: ["front"],
  },
  {
    title: "tailwind css",
    imagem: TWINDSvg,
    area: ["front", "mobile"],
  },

  // mobile (4 itens)
  {
    title: "react native",
    imagem: RNATIVESvg,
    area: ["mobile"],
  },
  {
    title: "flutter",
    imagem: FLUTTERSvg,
    area: ["mobile"],
  },

  // tools (4 itens)
  {
    title: "vite",
    imagem: VITESvg,
    area: ["tools"],
  },
  {
    title: "git",
    imagem: GITSvg,
    area: ["tools"],
  },
  {
    title: "figma",
    imagem: FIGMASvg,
    area: ["tools"],
  },
  {
    title: "npm",
    imagem: NPMSvg,
    area: ["tools"],
  },
  {
    title: "pnpm",
    imagem: PNPMSvg,
    area: ["tools"],
  },
  {
    title: "yarn",
    imagem: YARNSvg,
    area: ["tools"],
  },

  // removidos pa manter numero par em cada categoria
  // {
  //   title: "sql",
  //   imagem: SQLSvg,
  //   area: ["back"],
  // },
  // {
  //   title: "vscode",
  //   imagem: VSSvg,
  //   area: ["tools"],
  // },
  // {
  //   title: "python",
  //   imagem: PYSvg,
  //   area: ["back"],
  // },
];
