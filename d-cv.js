function downloadCV() {
      const link = document.createElement('a');
      link.href = './assets/Profile_picture_maker_project-1__1_-removebg-preview.png';  // Replace with the path to your CV file
      link.download = 'My_CV.png';  // File name for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }