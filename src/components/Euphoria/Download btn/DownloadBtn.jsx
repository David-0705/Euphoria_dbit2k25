import React from "react";
import Button from "../../Button"; 
import pdf from '../../../assets/brouchere/Euphoria.pdf'


const DownloadButton = () => {
  const handleDownload = () => {
    // Optionally log or perform actions before download
    console.log("Downloading PDF...");
  };

  return (
    // <Button href='/registeration' onClick={handleDownload} name="Euphoria_25.pdf">
    //  Register Now!!!
    //   </Button>

          <Button href='#/forms ' >
     Register Now!!!
      </Button>
  );
};

export default DownloadButton;
