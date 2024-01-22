const database = document.getElementById('database');
const newFileAddBtn = document.getElementById('newFile');
const mainList = document.getElementById('main2')
const deleteFileBtn = document.getElementById('deleteFile');
const deletePapka = document.getElementById('main');


// console.log(newFileAdd);

console.log(database);

document.addEventListener('click',look);
	function look(e){
		if(e.target.className == 'main'){
			let param = e.target.children[0];
			param.style.display = param.style.display === "none" ? "block" : "none";
		}
	};



function addFile (name) {
    const nameFile = 'New Folder';
    const li = document.createElement('li');
    li.textContent = nameFile
    console.log(li);
    // database.append(li)
    mainList.append(li)
}


function deleteFile (event) {
    console.log(event.relatedTarget);
}

newFileAddBtn.addEventListener('click', () => {
    addFile();
});


const ulFiles = document.getElementById('main2');
function deleteAll(){
    ulFiles.remove();
}
document.getElementById('startDeleteFile').addEventListener('click', deleteAll);

