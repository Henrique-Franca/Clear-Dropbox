class DropBoxController{

    constructor(){

        this.btnSendFileEl = document.querySelector('#btn-send-file');
        this.inputFilesEL = document.querySelector('#files');
        this.snackModalEl = document.querySelector('#react-snackbar-root');

        this.initEvents();

    }

    initEvents(){

        this.btnSendFileEl.addEventListener('click', event=>{

            this.inputFilesEL.click();

        });

        this.inputFilesEL.addEventListener('change', event=>{

            console.log(event.target.files);
            this.snackModalEl.style.display = 'block';

        });

    }


}