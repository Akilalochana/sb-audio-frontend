
import { FlipText } from "@/components/magicui/flip-text";
import { Marquee } from "@/components/magicui/marquee";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { MarqueeDemo } from "@/components/marquee";

export default function Gallery(){
    return(
        <div className="min-h-screen w-full flex flex-col bg-[#121212] text-white relative">
                {/* Background RetroGrid */}
                <RetroGrid className="absolute inset-0 opacity-30" />
                <FlipText className="text-4xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]">
                    our customers
                </FlipText>
                <MarqueeDemo/>  
                <FlipText className="text-4xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]">
                    our Events
                </FlipText>

        </div>        
    )
}