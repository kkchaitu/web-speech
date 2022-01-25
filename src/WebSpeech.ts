
export class WebSpeech {
    speechSync: any;

    constructor() {
        if (window.speechSynthesis) {
            this.speechSync = window.speechSynthesis;
        } else {
            this.speechSync = null;
        }
    }
}