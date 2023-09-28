import supabase from "./supabase";

export const saveProfile = async (userData):Promise<{error:any|null,profile:any|null}> =>{
    const { data:profile, error } = await supabase
  .from('profile')
  .insert(
    userData, { returning: "minimal" }
  )

  return {error,profile}
  }

export const getData = async (email:string):Promise<{error:any|null,profile:any|null}>=>{
  
let { data: profile, error } = await supabase
  .from('profile')
  .select('*')
  .eq('email',email)

  return {error,profile}
}

export const updateData = async (email:string,field:'imgProfile' | 'favorites',data:any):Promise<{error:any|null,profile:any|null}>=>{
  
  let { data: profile, error } = await supabase
    .from('profile')
    .update({[`${field}`]:data})
    .eq('email',email)
    
    return {error,profile}
  }

export async function uploadProfileImg(email:string,file){
    
const { data, error } = await supabase
  .storage
  .from('imgProfile')
  .upload(`${email}.png`, file, {
    cacheControl: '3600',
    upsert: false
  })

  return  await getImgProfile(data?.path,email)
  }

  export async function getImgProfile(path:string,email:string){
    console.log(path);
    
    const { data, error } = await supabase
    .storage
    .from('imgProfile')
    .getPublicUrl(path)

    await updateData(email,'imgProfile',data?.publicUrl)
    const update = await getData(email)
    return update
  }
