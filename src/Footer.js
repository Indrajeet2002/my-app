import './index.css';
import {GoMarkGithub} from "react-icons/go";

const header1 = "About Us";
const paragraph1 = "Something something something something something";

const name1 = "Firas Alshami";
const link1 = "https://www.google.com";

const Footer = () => {
    return (
        <div className='bottom-0 w-screen h-[30vh] bg-gray-500 text-white text-lg max-w-full flex flex-col items-center'>
            <div className='max-w-full w-screen h-[23vh] flex justify-around'>
                <FooterParagraph header={header1} paragraph={paragraph1}/>
                <FooterParagraph header={header1} paragraph={paragraph1}/>
                <FooterParagraph header={header1} paragraph={paragraph1}/>
            </div>
            <hr className='w-screen max-w-full'></hr>
            <div className='h-[7vh] w-screen max-w-full flex items-center justify-around'>
                <GitDisplay name={name1} link={link1}/>
                <GitDisplay name={name1} link={link1}/>
                <GitDisplay name={name1} link={link1}/>
                <GitDisplay name={name1} link={link1}/>
                <GitDisplay name={name1} link={link1}/>
            </div>
        </div>
    );
}

const FooterParagraph = (props) => {
    return (
        <div className='text-center flex flex-col items-center h-full justify-start w-full'>
            <h1 className='w-1/2 mb-5 text-2xl h-min whitespace-nowrap top-0 mt-10'>{props.header}</h1>
            <p className='w-1/2'>{props.paragraph}</p>
        </div>
    );
}

const GitDisplay = (props) => {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            {props.name} 
            <a href={props.link} target='_blank'><GoMarkGithub className='hover:text-black'/></a>
        </div>
    );
}

export default Footer;