//Variables
const tweetList = document.getElementById('tweet-list');


//Event Listeners
eventListeners();

function eventListeners()
{
    //Form Submission
    document.querySelector('form').addEventListener('submit', newTweet);

    //Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);
}

//Functions

function newTweet(e) 
{
    e.preventDefault();

    //Read the text are Value
    const tweet = document.getElementById('tweet').value;

    //Create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //Create an <li> element
    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);

    //Add the remove button to each tweet
    li.appendChild(removeBtn);
    
    //Add to the list
    tweetList.appendChild(li);

}

//Removes the Tweets from the DOM
function removeTweet(e)
{
    if (e.target.classList.contains('remove-tweet'))
    {
        e.target.parentElement.remove();
    }
    
}
