let getData = async () =>{
    let resp = await fetch('https://jsonplaceholder.typicode.com/posts'),
        data = await resp.json()
    return  await data
}
export const load = async ()=>{
    return {
        posts: await getData()
    }
}
