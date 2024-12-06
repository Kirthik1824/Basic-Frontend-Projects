var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter=document.getElementById('filter');

// form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);

//Filter event
filter.addEventListener('keyup',filteritems);

//add item

function addItem(e){
    e.preventDefault();

    //get input value

    var newItem=document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    //add class
    li.className='list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    var deleteBtn = document.createElement('button');

    //add classes to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}


//Remove the item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items
function filteritems(e){
    
    //convert to lowercase
    var text=e.target.value.toLowerCase();
    
    //get list
    var items=itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        } 
        else{
            item.style.display='none';
        }
    });

    

}