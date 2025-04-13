
import { MagicCardDemo } from "@/components/contactUs";
import { FlipText } from "@/components/magicui/flip-text";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { CarouselDemo } from "@/components/slideBar";


export default function Contact() {
    return(
     <div className="min-h-screen w-full flex flex-col bg-[#121212] text-white relative">            
                    <RetroGrid className="absolute inset-0 opacity-30" />
                    <FlipText className="text-4xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]">
                        Contact Us
                    </FlipText>
                    <div className=" flex items-center justify-center gap-60 mt-20">
                        <MagicCardDemo/>
                        <CarouselDemo/>
                    </div>
                    
                    
    
            </div>        

    )
}