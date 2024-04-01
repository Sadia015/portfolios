var getul = document.getElementById('ul');

  function foo() {
    var a = document.getElementById('inp').value
    var li = document.createElement('li')
    var liText = document.createTextNode(a)
    li.appendChild(liText);
    getul.appendChild(li);
    document.getElementById('inp').value = ""

    // Delete button
    var deletbtn = document.createElement('button')
    deletbtn.innerHTML = 'Delete'
    deletbtn.classList.add('btn', 'btn-danger', 'delete') // Bootstrap classes for delete button
    deletbtn.addEventListener('click', function() {
      del(this);
    });
    li.appendChild(deletbtn)
    // Edit button
    var editbtn = document.createElement('button')
    editbtn.innerHTML = 'Edit'
    editbtn.classList.add('btn', 'btn-primary', 'edit') // Bootstrap classes for edit button
    editbtn.addEventListener('click', function() {
      edit(this);
    });
    li.appendChild(editbtn)

    console.log(li)
  }

  function del(e) {
    if (e) {
       e.parentNode.remove(); 
    } else {
      var ul = document.getElementById('ul');
      ul.innerHTML = ''; 
    }
  }
  function edit(e) {
    var a = prompt('Enter edit value', e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
  }
