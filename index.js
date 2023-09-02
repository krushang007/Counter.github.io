let count=document.querySelector(".counter");
console.log(count.innerHTML);
function decrement()
{
    let value=parseInt(count.innerHTML);
    value--;
    count.innerHTML=value;
}
function increment()
{
    let value=parseInt(count.innerHTML);
    value++;
    count.innerHTML=value;
}