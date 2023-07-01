const videolist = document.getElementById('videolist');

async function getData() {
  try {
    const response = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyDtU782niJ_ob7N-Zj-wIhjEuX5x9unZ-M");
    const data = await response.json();
    const videoItems = data.items;
    console.log(videoItems);
    if (videoItems) {
      renderData(videoItems);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



function renderData(data) {
   // Clear the videolist container before rendering new data

   videolist.innerHTML += `
   <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
       <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
       <div class="content">
           <img src="${data.channelThumbnail}" class="channel-icon" alt="">
           <div class="info">
               <h4 class="title">${data.snippet.title}</h4>
               <p class="channel-name">${data.snippet.channelTitle}</p>
           </div>
       </div>
   </div>
   `;
}
  ;

  getData();