
async function EditForm(id){
  await axios.post('http://localhost:8080/user/edit',{id})
  console.log("error in form")
}