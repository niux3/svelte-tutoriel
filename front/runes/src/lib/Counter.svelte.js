export function Counter(n=1){
    let count = $state(n)
    let double = $derived(count * 2)

    const increment = e => count += n
    const decrement = e => count -= n 

    $effect(()=>{
        document.title = `count : ${count}`
        for(let a of document.getElementsByTagName('a')){
            if(count > 5 && !a.classList.contains('secondary')){
                a.classList.add('secondary')
            }
        }
    })

    return {
        get count(){
            return count
        },
        setCount(v){
            count = v
        },
        get double(){
            return double
        },
        increment,
        decrement,
    }
}
