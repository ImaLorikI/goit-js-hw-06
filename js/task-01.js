const allList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${allList.length}`);
allList.forEach((element) => {
    const content = element.querySelector("h2").textContent;
    const amoutcategory = element.querySelectorAll('li').length;
    console.log(`Category: ${content}\n
Elements: ${amoutcategory}`);
})