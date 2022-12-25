import './index.css';
import {GoMarkGithub} from "react-icons/go";

const header1 = "About Us";
const paragraph1 = "Something something something something something";

const people = [{name: "Firas Alshami", link: "https://github.com/falshami2002"}, 
{name: "Joel Anil John", link: "https://github.com/janiljohn"}, 
{name: "Indrajeet Patwardhan", link: "https://github.com/Indrajeet2002"}, 
{name: "Danyal Nemati", link: "https://github.com/danyalnemati8"}, 
{name: "Andy Gale", link: ""}]

const Footer = () => {
    return (
        <div className='bottom-0 w-screen h-[20vh] bg-gray-500 text-white text-lg max-w-full flex flex-col items-center'>
            <div className='max-w-full w-screen h-[15vh] flex justify-around items-center'>
                <FooterParagraph header={header1} paragraph={paragraph1}/>
                <FooterParagraph header={header1} paragraph={paragraph1}/>
                <FooterParagraph header={header1} paragraph={paragraph1}/>
            </div>
            <hr className='w-screen max-w-full'></hr>
            <div className='h-[7vh] w-screen max-w-full flex items-center justify-around'>
                <GitDisplay/>
            </div>
        </div>
    );
}

const FooterParagraph = (props) => {
    return (
        <div className='text-center flex flex-col items-center h-full justify-start w-full just'>
            <h1 className='w-1/2 mb-2 text-lg h-min whitespace-nowrap top-0 mt-3'>{props.header}</h1>
            <p className='w-1/2 text-sm'>{props.paragraph}</p>
        </div>
    );
}

const SingleGit = (props) => {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            {props.name} 
            <a href={props.link} target='_blank'><GoMarkGithub className='hover:text-black'/></a>
        </div>
    );
}

const GitDisplay = () => {
    return (
        people.map((person) => 
            <SingleGit name={person.name} link={person.link}/>
        )
    );
}

export default Footer;