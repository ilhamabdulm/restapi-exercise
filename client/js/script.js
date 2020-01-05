// Trigger Bootstrap JS

$('#myModal').modal();

// Save ID for edit data

let editID = null

// Fetch data from local API
let totalData = null
$.ajax({
    url: 'http://localhost:4000/contacts', // this app use port 4000
    type: 'get',
    dataType: 'json',
    success: function(result){
        $.each(result, (i, data) => {
            $('#result-data').append(
                `<tr>
                    <td> ${i + 1} </td>
                    <td> ${data.name} </td>
                    <td> ${data.phone} </td>
                    <td> ${data.email} </td>
                    <td> ${data.address} </td>
                    <td> <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#addContactModal" id="edit-data" onClick="editContact(${data.id})">Edit</button> | 
                        <button type="button" class="btn btn-danger" id="delete-data" onClick="deleteContact(${data.id})">Delete</button>
                    </td>
                </tr>`
            )
            totalData = i+1
        })
        $('#total-data').html(`Total data = ${totalData}`)
    }
})

// Refresh function

function refresh(){
    location.reload()
}

// Adding new data
$('#save-btn').on('click', () => {
    $.ajax({
        url: 'http://localhost:4000/contacts', // this app use port 4000
        type: 'post',
        dataType: 'json',
        data: {
            name: $('#name').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            address: $('#address').val()
        },
        success: ()=>{
            console.log('Data added')
            refresh()
        }
    })
})

// Delete data
function deleteContact(id){
    console.log(id)
    $.ajax({
        url: 'http://localhost:4000/contacts/'+id, // this app use port 4000
        type: 'delete',
        success: () => {
            console.log('Data deleted')
            refresh()
        }
    })
}

// Edit data
function editContact(id){
    editID = id
    $.ajax({
        url: 'http://localhost:4000/contacts/'+id, // this app use port 4000
        type: 'get',
        dataType: 'json',
        success: (result) => {
            console.log(result)
            $('#modal-title').html('Edit Data')
            $('#name').val(result.name),
            $('#phone').val(result.phone),
            $('#email').val(result.email),
            $('#address').val(result.address)
        }
    })
}

$('#edit-btn').on('click', () => {
    $.ajax({
        url: 'http://localhost:4000/contacts/'+editID, // this app use port 4000
        type: 'put',
        dataType: 'json',
        data: {
            name: $('#name').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            address: $('#address').val()
        },
        success: ()=>{
            console.log('Data edited')
            refresh()
        }
    })
})
