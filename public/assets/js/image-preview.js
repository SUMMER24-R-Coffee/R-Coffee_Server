document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("poster");
    const previewImagesContainer = document.getElementById("previewImages");
    const placeholderImage = document.getElementById("placeholderImage");
  
    fileInput.addEventListener("change", function() {
      previewImagesContainer.innerHTML = ""; 
      const files = this.files;
  
      if (files.length === 0) {
        placeholderImage.classList.remove("d-none"); 
      } else {
        placeholderImage.classList.add("d-none"); 
  
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const reader = new FileReader();
  
          reader.onload = function(event) {
            const img = document.createElement("img");
            img.src = event.target.result;
            img.classList.add("preview-image", "col-sm-3");
            previewImagesContainer.appendChild(img);
          }
  
          reader.readAsDataURL(file);
        }
      }
    });
  });