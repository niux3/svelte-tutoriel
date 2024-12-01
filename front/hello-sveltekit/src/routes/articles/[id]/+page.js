let getData = async id =>{
    let resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
        data = await resp.json()
    return  await data
}
export const load = async (args)=>{
    return {
        post: await getData(args.params.id)
    }
}
