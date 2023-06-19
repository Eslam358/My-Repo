// main variables
let the_data    =  document.querySelector(".show-data");
let name_project =[];







// Get Repos function

    fetch(`https://api.github.com/users/Eslam358/repos`)
  .then(response =>{
    // console.log(response)
   return response.json()
  })
  .then(data =>{
console.log(data);
    //----------------------------------------netlify-----------
    //----------------------------------------netlify-----------
    
fetch('https://api.netlify.com/api/v1/sites?access_token=wPE2DAxjc_gtwB-pDK2HsIOm63NtxWL9O8WPawEsjH8')
.then(response => response.json())
.then(da =>{
  console.log(da)
  //===========================
  da.forEach(e=>{
//-------------------------------------------
let divone = document.createElement("div");
// divone.classList.add("kkk")
let divone_2 = document.createElement("div");
let maintext =document.createTextNode(`${e.build_settings.repo_path.replace("Eslam358/", "")}`);
let A = e.build_settings.repo_path.replace("Eslam358/", "")
name_project.push(A)
// console.log(name_project);
divone.appendChild(maintext);
divone.className = "mian_dive";
let link_a = document.createElement("a");
let link_a1 = document.createElement("a");
link_a1.className = "show";
let a_text = document.createTextNode("Repo");
let a_text1 = document.createTextNode("Show");
link_a.href = e.build_settings.repo_url;
link_a1.href = `https://${e.default_domain}`;
link_a.setAttribute("target", "_blank")
link_a1.setAttribute("target", "_blank")
link_a.appendChild(a_text);
link_a1.appendChild(a_text1);
divone_2.appendChild(link_a1);
divone_2.appendChild(link_a);



divone.appendChild(divone_2)
the_data.appendChild(divone);



    //---------------------------------------------
  });
  //===========================
  console.log(data);
  console.log(name_project);
    //----------------------------------------githup-----------
    //----------------------------------------githup-----------
    data.forEach(respon => {
  //creat vid
if (!name_project.includes(respon.name)) {
  



let divone = document.createElement("div");
let divone_2 = document.createElement("div");
let maintext =document.createTextNode(`${respon.name}`);
divone.appendChild(maintext);
divone.className = "mian_dive";
//creat span
let span_one = document.createElement("span");
let text_span = document.createTextNode(`${respon.stargazers_count}`);

span_one.appendChild(text_span);
// divone_2.appendChild(span_one);
// creat link
let link_a = document.createElement("a");
let a_text = document.createTextNode("Repo");
link_a.href = respon.html_url;
link_a.setAttribute("target", "_blank")
link_a.appendChild(a_text);
divone_2.appendChild(link_a);



divone.appendChild(divone_2)
the_data.appendChild(divone);


}

});
    
    
    //----------------------------------------githup-----------
    //----------------------------------------githup-----------




  return da;
} 
)
.catch(error => console.error(error));

    //----------------------------------------netlify-----------
    //----------------------------------------netlify-----------

    return data;
  }).catch(error=>{
    the_data.innerHTML = "<span> error.</span>";
  })
    


//--------------------------------------

// fetch('https://api.netlify.com/api/v1/sites?access_token=wPE2DAxjc_gtwB-pDK2HsIOm63NtxWL9O8WPawEsjH8')
// .then(response => response.json())
// .then(da =>{
//   console.log(da)
  



//   return da;
// } 
// )
// .catch(error => console.error(error));






//****************netlify*********************************************************************** */

//   data.forEach(e=>{
//     console.log(e);
// //--------------------------------------------------------------
// let divone = document.createElement("div");
// let divone_2 = document.createElement("div");
// let maintext =document.createTextNode(`${e.build_settings.repo_path.replace("Eslam358/", "")}`);
// let A = e.build_settings.repo_path
// console.log(A);
// divone.appendChild(maintext);
// divone.className = "mian_dive";
// let link_a = document.createElement("a");
// let link_a1 = document.createElement("a");
// let a_text = document.createTextNode("viset");
// let a_text1 = document.createTextNode("viset1");
// link_a.href = e.build_settings.repo_url;
// link_a1.href = `https://${e.default_domain}`;
// link_a.setAttribute("target", "_blank")
// link_a1.setAttribute("target", "_blank")
// link_a.appendChild(a_text);
// link_a1.appendChild(a_text1);
// divone_2.appendChild(link_a);
// divone_2.appendChild(link_a1);



// divone.appendChild(divone_2)
// the_data.appendChild(divone);



//     //---------------------------------------------
//   });
//****************netlify*********************************************************************** */

//****************githup*********************************************************************** */
// data.forEach(respon => {
//   //creat vid
// let divone = document.createElement("div");
// let divone_2 = document.createElement("div");
// let maintext =document.createTextNode(`${respon.name}`);
// divone.appendChild(maintext);
// divone.className = "mian_dive";
// //creat span
// let span_one = document.createElement("span");
// let text_span = document.createTextNode(`${respon.stargazers_count}`);

// span_one.appendChild(text_span);
// divone_2.appendChild(span_one);
// // creat link
// let link_a = document.createElement("a");
// let a_text = document.createTextNode("viset");
// link_a.href = respon.html_url;
// link_a.setAttribute("target", "_blank")
// link_a.appendChild(a_text);
// divone_2.appendChild(link_a);



// divone.appendChild(divone_2)
// the_data.appendChild(divone);




// });

//****************githup*********************************************************************** */

// fetch('https://api.netlify.com/api/v1/sites/ac5da086-be39-42d1-8bc7-4a9e3bc3f96e')
// // fetch('https://api.netlify.com/api/v1/accounts/{account_id}/env')
// .then(response => response.json())
// .then(data =>{
//    console.log(data);
//    return data
//   })
// .catch(error => console.error("error"))

// fetch('https://api.netlify.com/api/v1/sites/wPE2DAxjc_gtwB-pDK2HsIOm63NtxWL9O8WPawEsjH8')
// .then(response => response.json())


// .then(data => console.log(data))
// .catch(error => console.error("error"))