function talk(){
var know = {
"What is a scholarship?" : " A scholarship is a financial award given to students to help them pay for their education. Scholarships are usually merit-based, meaning they are awarded based on the student's academic, athletic, or artistic achievements. However, there are also scholarships available for students who demonstrate financial need or belong to specific groups or communities.",
"How can I find scholarships?" : "There are several ways to find scholarships. You can start by checking with your school's guidance counselor or financial aid office, as they often have information about local and national scholarships. Additionally, many websites and online platforms specialize in scholarship searches and provide comprehensive databases with various scholarship opportunities. Some popular scholarship search websites include Fastweb, Cappex, and Scholarships.com.",
"What are the eligibility criteria for scholarships?" : "Eligibility criteria for scholarships vary depending on the specific scholarship. Some scholarships may require a certain GPA, standardized test scores, or participation in extracurricular activities. Others may be based on a student's demographic background, unique talents, or intended field of study. It is important to carefully review the requirements for each scholarship to determine if you meet the eligibility criteria.",
"When should I start applying for scholarships?" : "It is recommended to start researching and applying for scholarships as early as possible. Some scholarships have deadlines several months in advance, while others may have rolling deadlines throughout the year. By starting early, you can give yourself ample time to search for scholarships, gather required materials, and submit applications before the deadlines. ",
"Are scholarships only for high school seniors?" : "No, scholarships are available for students at all levels of education, from high school seniors to graduate and professional students. There are scholarships specifically targeted towards each academic level, so it is important to search for scholarships that are relevant to your current educational status.",
"Do I have to repay scholarships?" : "Generally, scholarships do not need to be repaid. Unlike student loans, scholarships are considered a type of gift aid. However, it is important to read the terms and conditions of each scholarship you receive to understand any specific requirements or obligations associated with it."
};
var user = document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML = user + "<br>";
if (user in know) {
document.getElementById('chatLog').innerHTML = know[user] + "<br>";
}else{
document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
}
}