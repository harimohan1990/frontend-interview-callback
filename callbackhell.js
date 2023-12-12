console.log('Start');
//COMMENT::Three callback function
function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log('Now we have the data');
    callback({ userEmail: email });
  }, 1500);
}

function getUserVidoes(email, callback) {
  setTimeout(() => {
    callback(['HTML', 'CSS', 'JAVASCRIPT']);
  }, 1200);
}

function videosDetails(video, callback) {
  setTimeout(() => {
    callback(`title of the video ${video}`);
  }, 1000);
}

//COMMENT::Callback function execution.
//here we get nested function of 3 callback function which make code not clean.
//this problem is call callback hell.
const user = loginUser('xyz@gmail.com', '1234', function (user) {
  console.log(user);
  getUserVidoes(user.userEmail, videos => {
    console.log(videos);
    videosDetails(videos[0], title => {
      console.log(title);
    });
  });
});
// console.log(user);
//undefined as user come after 1.5 second
console.log('Finished');