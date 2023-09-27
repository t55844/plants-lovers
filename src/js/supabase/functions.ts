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
