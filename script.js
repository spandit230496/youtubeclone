const videolist = document.querySelector('#videolist')
async function getData() {
  var videoItems=[]
  
  try {
    const response = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyADn_74tmJLWyMzPoPszRHubDzcnT6mE5I");
    const data = await response.json();
    console.log(data)
   videoItems.push(data.items) 
   console.log(videoItems);

   videoItems[0].map((items)=>{
    console.log(items.snippet.title)
   })
   
    if (videoItems.length>0) {
      renderData(videoItems);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  
  console.log(videoItems)
}

function renderData(data) {
  videolist.innerHTML = ""; 

  data[0].forEach(item => {
    const video = document.createElement('div');
     
  video.addEventListener('click', function(event) {
  const clickedItem = event.target.closest('.video');
  if (clickedItem) {
    const itemId = clickedItem.dataset.itemId;
    alert(itemId); // Prints the ID of the clicked item
  }
});

    const thumbnail = document.createElement('img');
    thumbnail.src = item.snippet.thumbnails.medium.url;
    thumbnail.classList.add('thumbnail');

     const content = document.createElement('div');
     content.classList.add('content');

    const channelIcon = document.createElement('img');
    channelIcon.src = item.snippet.channelThumbnail;
    channelIcon.classList.add('channel-icon');

     const info = document.createElement('div');
     info.classList.add('infocard');

    const title = document.createElement('h4');
    title.classList.add('title');
    title.textContent = item.snippet.title;

    const channelName = document.createElement('p');
    channelName.classList.add('channel-name');
    channelName.textContent = item.snippet.channelTitle;

    info.appendChild(title);
    info.appendChild(channelName);

    content.appendChild(channelIcon);
    content.appendChild(info);

    video.appendChild(thumbnail);
    video.appendChild(content);

     videolist.appendChild(video);
  });
}

getData();
