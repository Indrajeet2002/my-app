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
        <div className='bottom-0 w-screen h-[20vh] bg-gray-600 text-white text-lg max-w-full flex flex-col'>
            <div className='max-w-full w-screen h-[15vh] flex justify-around items-center'>
                <div className='text-center flex flex-col items-start h-full justify-start w-full'>
                    <h1 className='font-bold mt-5 ml-5 text-4xl'>App Name + Logo</h1>
                    <p className='ml-5 mt-2 text-base font-serif'>Some statement about the app and what it does and stuff.</p>
                </div>
                <FooterParagraph header={header1} paragraph={paragraph1}/>
                <FooterParagraph header={header1} paragraph={paragraph1}/>
            </div>
            <hr className='w-screen max-w-full'></hr>
            <div className='w-screen max-w-full flex'>
                <div className='w-1/2 h-[7vh] flex flex-col items-start ml-5 text-base justify-center'>
                    <h1 className='font-serif'>Copyright Statement</h1>
                    <p className='font-thin'>This is something about copryight and this is the copyright statement here.</p>
                </div>
                <div className='h-[7vh] w-1/2 flex items-center justify-around'>
                    <GitDisplay/>
                </div>
            </div>
        </div>
    );
}

const FooterParagraph = (props) => {
    return (
        <div className='text-center flex flex-col items-center h-full justify-start w-full'>
            <h1 className='w-1/2 mb-2 text-lg h-min whitespace-nowrap top-0 mt-3 font-bold'>{props.header}</h1>
            <p className='w-1/2 text-sm font-serif'>{props.paragraph}</p>
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