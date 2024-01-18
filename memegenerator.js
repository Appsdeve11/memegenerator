document.addEventListener('DOMContentLoaded', function () {
    const memeForm = document.getElementById('meme-form');
    const memeContainer = document.getElementById('meme-container');
  
    memeForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const imageUrl = document.getElementById('image-url').value;
      const topText = document.getElementById('top-text').value;
      const bottomText = document.getElementById('bottom-text').value;
  
      if (imageUrl && topText && bottomText) {
        createMeme(imageUrl, topText, bottomText);
        memeForm.reset();
      }
    });
  
    function createMeme(imageUrl, topText, bottomText) {
      const memeDiv = document.createElement('div');
      memeDiv.classList.add('meme');
  
      const memeImage = document.createElement('img');
      memeImage.src = imageUrl;
  
      const topTextDiv = document.createElement('div');
      topTextDiv.innerText = topText;
      topTextDiv.classList.add('top-text');
  
      const bottomTextDiv = document.createElement('div');
      bottomTextDiv.innerText = bottomText;
      bottomTextDiv.classList.add('bottom-text');
  
      const removeButton = document.createElement('button');
      removeButton.innerText = 'Remove';
      removeButton.classList.add('remove-button');
      removeButton.addEventListener('click', function () {
        memeContainer.removeChild(memeDiv);
      });
  
      memeDiv.appendChild(memeImage);
      memeDiv.appendChild(topTextDiv);
      memeDiv.appendChild(bottomTextDiv);
      memeDiv.appendChild(removeButton);
  
      memeContainer.appendChild(memeDiv);
    }
  });