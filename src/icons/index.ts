import { HiOutlineMail } from "react-icons/hi";
import { IoPhonePortraitOutline, IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagram, FaGithubSquare, FaRegLightbulb, FaAward, FaWhatsappSquare } from "react-icons/fa";
import { SiCodeforces, SiReadthedocs } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { MdOutlineMenuBook, MdManageAccounts, MdApps, MdOutlineLibraryBooks, MdOutlineHome, MdWorkOutline, MdOutlineWorkHistory } from "react-icons/md";
import { PiDevToLogo } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuBookPlus } from "react-icons/lu";
import { AiOutlineAppstore, AiOutlineAppstoreAdd } from "react-icons/ai";
import { RiDashboard2Line } from "react-icons/ri";


export const icons = {
    contact: {
        email: HiOutlineMail,
        phone: IoPhonePortraitOutline,
        location: IoLocationOutline,
        whatsApp: FaWhatsappSquare,
    },
    social: {
        facebook: FaFacebook,
        linkedIn: FaLinkedin,
        twitter: FaTwitterSquare,
        instagram: FaInstagram,
        github: FaGithubSquare,
        codeForces: SiCodeforces,
        devTo: PiDevToLogo,
        resume: SiReadthedocs,
        browser: TbWorld,
    },
    resume: {
        education: MdOutlineMenuBook,
        experience: MdManageAccounts,
        projects: MdApps,
        skills: FaRegLightbulb,
        language: TbWorld,
        certificate: FaAward
    },
    utils: {
        arrowDown: IoIosArrowDown,
        arrowUp: IoIosArrowUp,
    },
    dashboard: {
        dashboard: RiDashboard2Line,
        blogs: MdOutlineLibraryBooks,
        projects: AiOutlineAppstore,
        experiences: MdOutlineWorkHistory,
        newBlog: LuBookPlus,
        newProject: AiOutlineAppstoreAdd,
        newExperience: MdWorkOutline,
        home: MdOutlineHome
    }
}