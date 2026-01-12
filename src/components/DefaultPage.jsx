import Header from "./Header";
import Footer from "./Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";

const DefaultPage =({ children,nav })=>{
    return(
        
        <div className="pt-[4.75rem] lg:pt-[5.25rem]">
            <Header/>
        <main>
            {children}
        </main>
        <Footer nav={nav}/>
        <ButtonGradient/>
        </div>
        
    );
};

export default DefaultPage;