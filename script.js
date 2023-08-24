//your code here!
const items = document.getElementById("infi-list");

for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.innerHTML = `item:${i}`;
    items.appendChild(li);
}

items.addEventListener('scroll', () => {
    if (items.scrollTop + items.clientHeight >= items.scrollHeight) {
        for (let i = 0; i < 2; i++) {
            let li = document.createElement('li');
            li.innerHTML = `item:${items.children.length + 1}`;
            items.appendChild(li);
        }
    }
});
