//Listing Element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

//type assertion
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLInputElement;

// experience element as HTMLTEXTAREAELEMENT
const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;




if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education= educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

    //create resume putput
    const resumeoutput= `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name} </p>
     <p><strong>Email:</strong> ${email} </p>
      <p><strong>Phone Number:</strong> ${phone} </p>

   <h3>Education</h3>
   <p>${experience}</p>

   <h3>skills</h3>
   <p>${skills}</p>
   `;


   const resumeOutputElement = document.getElementById('resumeOutput')
   if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeoutput
   } else{
    console.error('the resume output elements are missing')
   }
}else {
    console.error('one or more output elements is misssing')
}





    
})
