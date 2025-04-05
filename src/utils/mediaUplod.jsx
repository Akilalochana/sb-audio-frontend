import { createClient } from "@supabase/supabase-js"

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZod2lqZm90c25hYnB6b3pub3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MjYwNDYsImV4cCI6MjA1OTQwMjA0Nn0.VyqmQh3Qb6CU8UsvZL4MzoLWyplRqpLYvcwNyWfHKVs"

const supabase_url = "https://fhwijfotsnabpzoznoza.supabase.co"

const supabase = createClient(supabase_url, anon_key)// createClient eka enne supabase libary eken , supabase connection 

export default function mediaUplod(file){

    return new Promise ((resolve, reject) => {
        if(file == null){
            reject("no file selected");
        }

        const timestamp = new Date().getTime();
        const fileName = timestamp+file.name

        supabase.storage.from("images").upload(fileName,file, {
            cacheControl: "3600",
            upsert: false
        }).then(()=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl); 
        }).catch(()=>{
            reject("an error occured")
        })
    })

    
}