const allList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${allList.length}`);
allList.forEach((element) => {
    const content = element.firstElementChild.textContent;
    const amoutcategory = element.lastElementChild.length;
    console.log(`Category: ${content}\n
Elements: ${amoutcategory}`);
})